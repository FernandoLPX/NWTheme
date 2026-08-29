---
name: versionamento-github
description: 'Padroniza commits, branches, versões SemVer, tags, Pull Requests e releases deste tema para VS Code. Use ao criar commit ou branch, alterar a versão do tema, preparar ou validar uma tag/release, ou montar um PR.'
argument-hint: 'Mudança realizada (feat/fix/docs/chore), versão atual ou contexto do release'
---

# Versionamento do NWTheme

## Objetivo

Esta skill orienta o versionamento do **NWTheme / Meu Tema Pessoal**, uma extensão de tema para Visual Studio Code distribuída como arquivo `.vsix` por GitHub Releases.

O resultado deve:

- classificar a mudança e sugerir uma mensagem de commit em Conventional Commits;
- decidir o bump SemVer apropriado;
- manter a versão do manifesto `package.json` igual à tag de release;
- validar o empacotamento com `@vscode/vsce` antes de publicar;
- distinguir commit, tag e GitHub Release;
- preservar credenciais fora do repositório.

Não use esta skill para explicações genéricas de Git, conflitos de merge ou alterações do tema que não envolvam o fluxo de versionamento.

## Contexto do projeto

- Repositório: `FernandoLPX/NWTheme` (confirmar com `git remote -v` se necessário)
- Branch principal: `main`
- Produto: tema escuro para VS Code, com cores por linguagem
- Distribuição: arquivo `.vsix` em GitHub Releases; não há publicação prevista no VS Code Marketplace
- Runtime de empacotamento: Node.js 20 e `@vscode/vsce`
- Automação: `.github/workflows/release.yml` executa ao receber uma tag `v*` e anexa o `.vsix` à Release
- Manifesto e tema em desenvolvimento: `src/package.json` e `src/themes/meu-tema.json`
- Empacotamento local: `./build.sh`, que usa Docker Compose e grava o resultado em `dist/`
- Arquivos locais e artefatos descartáveis: definidos em `.gitignore`

Não há Maven, `pom.xml` ou jgitver neste projeto. A versão não é calculada pelo histórico Git: ela é declarada no `package.json` e deve ser atualizada manualmente para cada release.

> A estrutura atual está sendo migrada da raiz para `src/`. Antes de liberar uma versão, confirmar que o workflow execute `vsce package` no diretório que contém o `package.json`; executar na raiz só é válido se o manifesto estiver na raiz.

## Autenticação e segurança

Antes de operações remotas, verificar:

```bash
git remote -v
git config --get remote.origin.url
```

Usar a autenticação já configurada (HTTPS ou SSH). Nunca imprimir, versionar ou passar tokens em comandos, arquivos ou mensagens de commit.

Quando a autenticação por token for necessária e o arquivo local `.github-token` existir, tratá-lo como um segredo de uma única linha:

- confirmar apenas que o arquivo existe e está legível; nunca imprimir seu conteúdo, registrá-lo em logs ou incluí-lo em argumentos visíveis do comando;
- NÃO instalar nem usar o GitHub CLI (`gh`) localmente. Para operações de API (PR, Release etc.), usar a GitHub REST API via `curl`, disponibilizando o token somente no ambiente do processo e nunca na URL:

  ```bash
  GH_TOKEN="$(<.github-token)" curl -sS -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $GH_TOKEN" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -d '{"base":"main","head":"<branch>","title":"<titulo>","body":"<corpo>"}' \
    https://api.github.com/repos/FernandoLPX/NWTheme/pulls
  unset GH_TOKEN
  ```

  Exemplo de criação de PR com squash implícito no merge pela plataforma:

  ```bash
  GH_TOKEN="$(<.github-token)" curl -sS -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $GH_TOKEN" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -d '{"base":"main","head":"chore/preparar-versao-0-2-0-20260829000000","title":"chore(release): preparar versão 0.2.0","body":"Atualiza versão para 0.2.0, recupera README da raiz e ajusta fluxo de PR com squash."}' \
    https://api.github.com/repos/FernandoLPX/NWTheme/pulls
  unset GH_TOKEN
  ```

- para uma sequência de comandos, preferir uma variável de ambiente temporária no mesmo shell e removê-la ao terminar (`unset GH_TOKEN`);
- não executar `git remote set-url` com o token embutido na URL. Para operações Git em remoto HTTPS, usar a autenticação SSH já configurada ou a API via `curl` com header `Authorization: Bearer`;
- se o arquivo estiver com permissões mais amplas que `600`, corrigir para leitura e escrita apenas pelo proprietário antes de usá-lo;
- se `.github-token` estiver ausente, vazio ou inválido, interromper a operação remota e solicitar autenticação ao usuário. Não criar, substituir ou solicitar o token em chat.

## Arquivos ignorados

O `.gitignore` exclui pacotes `.vsix`, o diretório `dist/`, dependências `node_modules/`, logs de gerenciadores Node.js, arquivos `.env` e metadados de sistema operacional. Esses itens não devem entrar em commits de código ou release.

O arquivo local `.github-token` também deve permanecer ignorado e nunca ser adicionado ao índice.

Manter versionados os arquivos-fonte do tema, o `package.json`, os workflows, scripts de build e configurações compartilhadas de `.vscode/`. Se um arquivo já estiver rastreado, adicioná-lo ao `.gitignore` não deixa de rastreá-lo: avaliar e remover do índice somente com confirmação do usuário.

## Versões (SemVer)

Formato de release e tag:

```text
package.json: MAJOR.MINOR.PATCH
tag:          vMAJOR.MINOR.PATCH
```

A tag só é válida para release quando seu número, sem o prefixo `v`, for exatamente igual a `version` no `package.json` que ela referencia.

| Bump | Quando usar neste tema |
| --- | --- |
| `PATCH` | Ajustes de cores, scopes ou semantic tokens; correções visuais; documentação, build ou metadados sem nova capacidade relevante. |
| `MINOR` | Suporte relevante a uma nova linguagem, conjunto de tokens, variante de tema ou mudança visual ampla e intencional. |
| `MAJOR` | Quebra de compatibilidade ou mudança que torne inadequado tratar o tema como continuidade da linha estável anterior. |

Enquanto o projeto estiver em `0.x`, preferir `MINOR` para marcos visuais relevantes e `PATCH` para refinamentos. `docs`, `test`, `chore`, `refactor` e `style` não exigem tag por si só.

Nunca reutilizar, mover ou apagar uma tag de release já publicada. Não criar uma tag automaticamente: sugerir a versão e pedir confirmação explícita antes de criá-la ou enviá-la.

## Commits

Usar Conventional Commits:

```text
<tipo>(<escopo>)?: <descrição>
```

Tipos aceitos:

- `feat`: suporte ou capacidade visual nova;
- `fix`: correção de tema, manifesto ou automação;
- `docs`: documentação;
- `chore`: manutenção, dependências, CI/CD ou empacotamento;
- `refactor`: reorganização sem mudança visual intencional;
- `test`: materiais de teste ou validação;
- `style`: formatação sem mudança de comportamento.

Escopos usuais: `theme`, `java`, `semantic-tokens`, `manifest`, `release`, `ci`, `docker` e `docs`.

Exemplos:

```text
feat(java): adicionar cores para tokens semânticos
fix(theme): corrigir contraste de comentários SQL
chore(release): alinhar workflow ao diretório src
docs: documentar instalação a partir de VSIX
refactor: mover extensão para o diretório src
```

Escrever em português, com verbo no imperativo, descrição curta e uma mudança lógica por commit. O título de PR deve seguir o mesmo padrão.

## Branches e Pull Requests

Criar branches a partir de `main`, salvo instrução diferente, no formato:

```text
<tipo>/<descricao>-<timestamp>
```

- `tipo`: um dos tipos de commit;
- `descricao`: português em `kebab-case`;
- `timestamp`: `YYYYMMDDHHMMSS`.

Exemplo: `fix/contraste-comentarios-sql-20260828103000`.

Antes do PR, verificar o diff, o estado do repositório e o empacotamento. Política explícita do projeto: usar PR com squash; não seguir política genérica de merge sem squash, rebase ou merge commit. O PR deve ser concluído com squash na plataforma e o resultado final deve respeitar a convenção do repositório.

Após o merge squash do PR, remover a branch de trabalho para manter o repositório limpo:

```bash
git branch -D <tipo>/<descricao>-<timestamp>
git push origin --delete <tipo>/<descricao>-<timestamp>
```

Como o squash não cria commit de merge, o Git localmente não enxerga a branch como "já mergeada"; por isso usa-se `-D` (force delete) na branch local. A remoção remota exige confirmação explícita do usuário, conforme as regras de operações remotas desta skill.

## Release

Uma tag marca um commit; uma GitHub Release publica e distribui essa tag. Neste projeto, um push de tag `v*` aciona o workflow que gera o `.vsix` e cria/atualiza a Release correspondente.

### Checklist de preparação

1. Verificar o ponto de partida:

   ```bash
   git status --short
   git branch --show-current
   git tag --sort=-version:refname
   git log --oneline --decorate -n 20
   ```

2. Definir o próximo número SemVer a partir do último tag e das mudanças desde ele.
3. Atualizar `version` no `src/package.json` (ou no local efetivo do manifesto) para o número escolhido, sem o `v`.
4. Confirmar que `contributes.themes[0].path` aponta para o arquivo de tema existente.
5. Empacotar e inspecionar o resultado:

   ```bash
   ./build.sh
   ls -lh dist/
   ```

   Se `vsce` estiver instalado fora do Docker, a alternativa é executar `vsce package` dentro do diretório do manifesto. Não versionar o `.vsix` nem outros artefatos de `dist/` como parte do código-fonte; o `.gitignore` já os exclui.

6. Confirmar que a Action de release usa o mesmo diretório do manifesto e que o artefato será encontrado pelo passo de publicação.
7. Fazer commit da mudança de versão e dos ajustes associados, por exemplo:

   ```text
   chore(release): preparar versão 0.2.1
   ```

8. Após confirmação explícita do usuário, criar e publicar uma tag anotada:

   ```bash
   git tag -a v0.2.1 -m "Release 0.2.1"
   git push origin v0.2.1
   ```

9. Acompanhar o workflow no GitHub e verificar que a Release contém o `.vsix` com a versão esperada.

## Como responder a pedidos de versionamento

Sempre informar de forma objetiva:

1. o tipo de commit e a mensagem sugerida;
2. a branch sugerida, quando aplicável;
3. a versão atual, a última tag e o bump recomendado;
4. se há motivo para tag/release ou se a mudança pode seguir sem release;
5. qualquer divergência entre `package.json`, tag, estrutura de diretórios e workflow que bloqueie uma release.

Operações que alteram remoto — push, criação de tag e publicação de Release — exigem solicitação ou confirmação explícita do usuário.
