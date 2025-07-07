# モールスコード解読器

Angular + TypeScriptで実装されたモールスコードデコーダーアプリケーションです。

## 機能

- モールスコードの入力と解読
- 日本語（ひらがな・カタカナ・数字）と英語の両方に対応
- リアルタイム解読
- 言語切り替え機能
- 無効文字の入力制限
- 1000文字までの入力制限

## 技術スタック

- Angular 18
- TypeScript
- CSS
- GitHub Pages（ホスティング）

## 開発

### 開発サーバーの起動

```bash
npm install
npm start
```

`http://localhost:4200/` でアプリケーションが起動します。

### ビルド

```bash
npm run build
```

### GitHub Pages用ビルド

```bash
npm run build:github-pages
```

## デプロイ

このプロジェクトはGitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。
`main` ブランチにプッシュすると自動でデプロイが実行されます。

## 使い方

1. モールスコード入力欄に、`.`、`-`、` `（スペース）を使ってモールスコードを入力
2. 右上のトグルボタンで日本語/英語を切り替え
3. 解読結果が自動的に表示される

### モールスコード例

- `.- -...` → AB（英語）
- `.- -... -.-. ` → ABC（英語）
- `.-- ---` → ヲ（日本語）

---

## 生成について

このプロジェクトは [Claude Code](https://claude.ai/code) によって生成されました。

このプロジェクトは [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3 で生成されました。