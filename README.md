# NWTheme — Desenvolvimento Local Rápido

Como iterar no tema sem empacotar VSIX a cada mudança.

## Pré-requisito crítico: corrigir o caminho do launch.json

O manifesto da extensão está em `src/package.json`, mas o `.vscode/launch.json` original aponta
`--extensionDevelopmentPath=${workspaceFolder}` (raiz do repo). Com isso o **F5 não encontra a extensão**.

Corrigir para apontar para `src`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Executar Extensão",
      "type": "extensionHost",
      "request": "launch",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}/src"
      ]
    }
  ]
}
```

## Ciclo rápido (sem VSIX, sem build)

1. Pressione **F5** → abre o *Extension Development Host* (janela de teste).
2. Na janela de teste, abra **Preferences: Color Theme** e selecione **Meu Tema Pessoal**
   (já vem ativo via `.vscode/settings.json`).
3. No VS Code principal, edite `src/themes/meu-tema.json`.
4. Na janela de teste, rode **Developer: Reload Window** (`Ctrl+R` / `Cmd+R`).
5. Avalie a mudança visual e repita.

> Tema puro em JSON: não há compilação. A recarga da janela é o que aplica as alterações.
> Não existe hot-reload automático para temas contribuídos — o reload manual é o caminho oficial.

## Micro checklist de validação visual (< 1 min)

Após cada reload, confira rapidamente:

- [ ] **UI geral**: barra de título, activity bar, sidebar, status bar e tabs com contraste legível.
- [ ] **Editor**: `editor.background`, `editor.foreground` e `editor.lineHighlightBackground` coerentes.
- [ ] **Sintaxe**: abrir `test/teste.java`, `test/teste.ts`, `test/teste.js` e verificar tokens
      (keyword, string, comment, number, function) com cores distintas.
- [ ] **Contraste**: texto vs fundo respeita WCAG AA (ratio ≥ 4.5:1 texto, ≥ 3:1 UI).
- [ ] **Seleção/cursor**: `editor.selectionBackground` e `editorCursor.foreground` visíveis.
- [ ] **Terminal/Debug**: abrir terminal integrado e painel de debug para checar cores.

## Quando empacotar VSIX

Só no fechamento/validação de release:

- `cd src && vsce package` (ou via workflow de release com tag `vX.Y.Z`).
- Instalar o `.vsix` para validar a instalação real em um VS Code limpo.

## Arquivos de referência

- `src/package.json` — manifesto e contribuição do tema.
- `src/themes/meu-tema.json` — propriedades de cor/token a iterar.
- `.vscode/launch.json` — host de extensão (precisa apontar para `src`).
- `.vscode/settings.json` — tema ativo para testes.
- `test/` — arquivos de exemplo (java, ts, js, css, scss, html, json, sh, md) para validar sintaxe.

## Convenções do repo (resumo)

- PRs: sempre **squash merge**.
- Versionamento SemVer manual em `src/package.json`; tag `vMAJOR.MINOR.PATCH` gera o VSIX via workflow.
- Estrutura: extensão em `src/`; release roda `vsce package` com `working-directory: src`.
- Ignorados: `.env`, `dist/`, `*.vsix`, `node_modules/`.

# Para trabalhar com isso mais facilmente

- Abra essa pasta (a raiz do projeto) no devcontainer.
- Após entrar no container aperte F5 para abrir uma nova janela em modo desenvolvedor/debug.
- Abra a pasta "test" nessa janela de desenvolvedor.
- Agora mecha em src/themes/meu-tema.json e as alterações serão imediatas na janela na nova janela de debug.