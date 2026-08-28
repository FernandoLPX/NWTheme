import puppeteer from 'puppeteer-core';
import fs from 'fs/promises';
import * as login from './login.js';
import * as periodo from './periodo.js';
import * as clicarLinks from './clicarLinks.js';

const url = 'https://notaparana.pr.gov.br/nfprweb/';
const USUARIO = process.env.USUARIO;
const SENHA = process.env.SENHA;
const PERIODO = parseInt(process.env.PERIODO || '0', 10);
const FULL_SCRAPE = process.env.FULL_SCRAPE === '1';

async function main() {
    await limparLocks();
    console.log('=== Script de Login ===');
    console.log('Usuário:', USUARIO ? '✓ Carregado' : '✗ Não encontrado');
    console.log('Senha:', SENHA ? '✓ Carregada' : '✗ Não encontrada');
    if (FULL_SCRAPE) {
        console.log('Período:', PERIODO);
    }

    if (!USUARIO || !SENHA) {
        throw new Error('Credenciais não configuradas! Verifique o arquivo .env');
    }

    const browser = await puppeteer.launch({
        headless: false,
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium',
        userDataDir: '/output/chrome-profile', // Persiste cookies e sessão
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--start-maximized',
            '--remote-debugging-port=9222', // Permite conexão remota para outros scripts
        ],
        handleSIGINT: false,
        handleSIGTERM: false,
        handleSIGHUP: false,
    });

    const page = await browser.newPage();
    const windowSize = await page.evaluate(() => ({
        width: window.innerWidth,
        height: window.innerHeight
    }));
    await page.setViewport({ width: windowSize.width - 20, height: windowSize.height - 20 });

    console.log('Acessando Nota PR...');
    await page.goto(url, { waitUntil: 'load', timeout: 0 });

    // await page.waitForSelector('input[type="text"], input[name="cpf"], #cpf', { timeout: 10000 });

    console.log('Realizando login...');
    let logado = await login.fazerLogin(page, USUARIO, SENHA);
    if (logado === false) {
        console.log('❌ Falha no login. Verifique suas credenciais.');
        await browser.close();
        process.exit(1);
    }

    console.log('✓ Login realizado com sucesso!');

    if (FULL_SCRAPE) {
        console.log('Iniciando coleta de notas (modo visual)...');
        await periodo.escolhePeriodo(page, PERIODO);
        await clicarLinks.clicarLinks(page);
        console.log('✓ Coleta concluída.');
        await browser.close();
        console.log('✓ Navegador fechado.');
    } else {
        console.log('');
        console.log('Navegador aberto e sessão mantida.');
        console.log('Você pode agora executar o scraper:');
        console.log('  docker exec NotaPR-Scraper node /app/scraper.js');
        console.log('');
        console.log('Desconectando do navegador (deixando-o aberto)...');

        // Desconecta sem fechar o navegador
        await browser.disconnect();
        console.log('✓ Script finalizado. Navegador continua aberto no VNC!');
    }
}

main().catch((err) => {
    console.error('Erro:', err);
    process.exit(1);
});

async function limparLocks() {
    const locks = [
        '/output/chrome-profile/SingletonLock',
        '/output/chrome-profile/SingletonCookie',
        '/output/chrome-profile/SingletonSocket',
    ];
    for (const f of locks) {
        await fs.rm(f, { force: true }).catch(() => { });
    }
}