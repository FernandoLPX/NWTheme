# Meu Tema Pessoal para VS Code

Tema personalizado para uso pessoal no Visual Studio Code.

A ideia deste tema é unificar preferências visuais de diferentes temas existentes,
aplicando cores específicas por linguagem, evitando a necessidade de trocar de tema
ao alternar entre projetos.

## 🎯 Objetivo

- Ter **um único tema**
- Manter boas cores para:
  - Java (inspirado no Eclipse Dark)
  - SQL, HTML, CSS, JavaScript (inspirado no Julia Monokai Vibrant)
- Ajustes finos por linguagem usando scopes e semantic tokens
- Uso **local**, sem publicação no Marketplace

## 📦 Estrutura do projeto

```
.
├─ package.json
├─ themes/
│  └─ meu-tema.json
└─ README.md
```


## 🚀 Instalação (local)

Este tema é distribuído como um arquivo `.vsix`.

1. Baixe o arquivo `.vsix` da seção **Releases** do GitHub
2. No VS Code:
   - `Ctrl + Shift + P`
   - **Extensions: Install from VSIX**
3. Selecione o arquivo baixado
4. Ative o tema em:
   - **Preferences: Color Theme**

## 🛠️ Desenvolvimento

Para testar o tema localmente durante o desenvolvimento:

1. Abra o projeto no VS Code
2. Pressione `F5`
3. Uma nova janela (**Extension Development Host**) será aberta
4. Selecione o tema normalmente nessa janela

## 🔍 Inspeção de tokens

Para ajustar cores por linguagem:

1. Abra um arquivo de código
2. `Ctrl + Shift + P`
3. **Developer: Inspect Editor Tokens and Scopes**
4. Use os scopes exibidos no arquivo do tema

## 📌 Versionamento

- A versão do tema é definida em `package.json`
- Cada versão gera um novo arquivo `.vsix`
- Os artefatos são disponibilizados via **GitHub Releases**

## 📜 Licença

Uso pessoal.  
Sem intenção de publicação no VS Code Marketplace.










# Meu Tema Pessoal (VS Code)

Tema pessoal para VS Code, combinando:
- Julia Monokai Vibrant (SQL, JS, HTML, CSS)
- Eclipse Dark (Java, com semantic highlighting)

## Desenvolvimento

- O tema é desenvolvido localmente
- Testes visuais básicos são feitos via Extension Development Host (F5)
- Testes de Java com semantic tokens são feitos somente no VS Code real, usando Dev Containers

## Versionamento

Este projeto utiliza versionamento semântico:

- PATCH (0.1.1): ajustes finos de cores
- MINOR (0.2.0): novas linguagens ou grandes ajustes visuais
- MAJOR (1.0.0): versão considerada estável

## Build e empacotamento (.vsix)

O empacotamento é feito automaticamente via GitHub Actions.

### Passo a passo para gerar um release:

1. Atualizar a versão no `package.json`
2. Commitar a mudança
3. Criar uma tag no formato `vX.Y.Z`
4. Enviar a tag para o repositório

Exemplo:

```bash
git add package.json
git commit -m "Release 0.1.0"
git tag v0.1.0
git push origin v0.1.0
