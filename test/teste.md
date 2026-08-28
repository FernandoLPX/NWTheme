# Nota Paraná - Web Scraper

Sistema automatizado para exportar notas fiscais do Portal Nota Paraná em formato CSV.

> Índice completo: [`Implementação/README.md`](Implementação/README.md)

## 🚀 Funcionalidades

- ✅ Interface web simples para submeter credenciais e período
- ✅ Scraping automatizado com Puppeteer headless
- ✅ Exportação em CSV
- ✅ Modo desenvolvimento com VNC para debug
- ✅ 100% containerizado com Docker

## 📋 Pré-requisitos

- Docker e Docker Compose instalados
- Credenciais válidas do Portal Nota Paraná

## 🔧 Como usar

### 1. Iniciar o sistema

```bash
./start.sh
```

O sistema subirá em **modo desenvolvimento** por padrão, iniciando:
- Servidor web na porta **3000**
- VNC/noVNC na porta **6080** (para debug visual)

### 2. Acessar a interface web

Abra o navegador em:

```
http://localhost:3000
```

### 3. Exportar notas

1. Preencha o formulário com:
  - **CPF**: Seu CPF cadastrado no Nota Paraná
  - **Senha**: Sua senha do portal
  - **Período**: `0` = mês atual; `1` = mês anterior; `2` = dois meses atrás, etc.

2. Clique em **Gerar CSV**

3. O navegador baixará automaticamente o arquivo `notas.csv` com as informações das notas fiscais

## 🔍 Debug visual (VNC)

Para acompanhar o navegador durante o scraping (útil para desenvolvimento):

```
http://localhost:6080/vnc.html
```

Depois execute o scraper manualmente:

```bash
docker exec NotaPR-Scraper node /app/index.js
```

## ⚙️ Modos de operação

### Modo Development (padrão)

```bash
# No arquivo .env
MODE=0    # ou "development"
```

- VNC ativo para visualização
- Servidor web aguardando requisições
- Ao clicar em **Gerar CSV** pela UI, o scraper roda visível (index.js) para acompanhar no VNC

### Modo Production

```bash
# No arquivo .env
MODE=1    # ou "production"
```

- Sem VNC (headless puro)
- Ao clicar em **Gerar CSV**, roda headless (index.headless.js)

> Observação: o período é escolhido somente via formulário; não é necessário (nem usado) no `.env`.

## 🛑 Parar o sistema

```bash
./stop.sh
```

## 📁 Estrutura de arquivos

```
NotaPR/
├── app/
│   ├── server.js           # Servidor Express
│   ├── index.headless.js   # Script principal headless
│   ├── login.js            # Lógica de autenticação
│   ├── periodo.js          # Seleção de período
│   ├── clicarLinks.js      # Extração de dados
│   ├── functions.js        # Funções utilitárias
│   └── web/                # Frontend estático
│       ├── index.html
│       ├── style.css
│       └── script.js
├── output/                 # CSV e dados persistentes
├── Docker-compose.yml
├── Dockerfile
├── entrypoint.sh
├── start.sh
└── stop.sh
```

## 🔐 Segurança

- Credenciais são enviadas via HTTPS no formulário e **não são armazenadas**
- Variáveis de ambiente (.env) excluídas do build via .dockerignore
- Perfil do Chrome isolado no volume /output

## ⚡ Desenvolvimento

Para modificar o código:

1. Edite os arquivos em `./app/`
2. O volume monta automaticamente
3. Reinicie o container:

```bash
./stop.sh && ./start.sh
```

## 📝 Notas técnicas

- **Chromium**: Executa em modo headless com Puppeteer
- **Session persistence**: Usa userDataDir para evitar logins repetidos
- **SPA navigation**: Espera DOM estabilizar via `waitForFunction` e `networkidle2`
- **Modal handling**: Fecha automaticamente modal de contato
- **Lock cleanup**: Remove locks do Chrome antes de cada execução

## 🐛 Solução de problemas

### Container não inicia

```bash
docker logs NotaPR-Scraper
```

### Erro de dependências

Reconstrua a imagem:

```bash
docker compose -f Docker-compose.yml build --no-cache
```

### CSV não foi gerado

Verifique os logs do servidor:

```bash
docker logs -f NotaPR-Scraper
```

---

**Desenvolvido com ❤️ usando Docker + Puppeteer + Express**
