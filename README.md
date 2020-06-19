### 小程序 demo

### 用户区域设置

代码格式化的一些配置

```
{
  "editor.tabSize": 2,
  "editor.fontSize": 14,
  "files.associations": {
    "*.js": "javascriptreact",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "breadcrumbs.enabled": true,
  "prettier.singleQuote": true,
  "editor.renderWhitespace": "boundary",
  "prettier.semi": false,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "window.zoomLevel": 0,
  // "vetur.format.defaultFormatterOptions": {
  //     "wrap_attributes": "force-aligned"
  // }
  "terminal.integrated.shell.osx": "zsh",
  "explorer.confirmDelete": false,
  // git命令
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "[javascriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true
}

```

---

### 工作区域设置

代码格式化的一些配置

```
{
  "editor.renderWhitespace": "all",
  "editor.cursorBlinking": "smooth",
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "vue": "html",
    "vue-html": "html"
  },
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    //"plugins": ["html"],
    "extensions": [
      ".js",
      ".vue"
    ]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "files.associations": {
    "*.vue": "vue",
    "*.ftl": "html",
    "*.js": "javascriptreact",
    "*.cjson": "jsonc",
    "*.wxml": "html",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "html.format.wrapAttributes": "force-expand-multiline",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.preferences.quoteStyle": "single",
  "search.showLineNumbers": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "typescript.preferences.quoteStyle": "single",
  "typescript.check.npmIsInstalled": false,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

---
