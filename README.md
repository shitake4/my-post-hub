# My Post Hub
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/shitake4/shitake4.github.io/main)
![GitHub](https://img.shields.io/github/license/shitake4/my-post-hub)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/shitake4/my-post-hub)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/shitake4/my-post-hub/main)


![john_doe-Post-Hub](https://github.com/shitake4/my-post-hub/assets/8196476/9e55b413-b553-4639-8ebe-2e85486aec85)

## 概要

My Post Hubは、複数のブログプラットフォームに投稿した記事を一箇所に集約して表示する個人用ポートフォリオサイトです。

### 主な機能
- **複数プラットフォーム対応**: Zenn、Qiita、Medium、note、はてなブログなど、様々なブログサービスの記事を統合
- **RSS自動取得**: 各プラットフォームのRSSフィードを自動的に取得し、最新記事を表示
- **レスポンシブデザイン**: モバイルからデスクトップまで、あらゆるデバイスで快適に閲覧可能
- **SNSリンク統合**: GitHub、Twitterなど、各種SNSへのリンクをプロフィールに表示
- **RSSフィード提供**: サイト自体もRSS/Atom/JSONフィードを提供し、他のサービスから購読可能
- **自動デプロイ**: GitHub Actionsによる自動ビルド・デプロイに対応

### 技術スタック
- **フレームワーク**: Next.js（React）
- **言語**: TypeScript

こちらをForkして、作成しました。

- [チーム個々人のテックブログをRSSで集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)
- [catnose99/team-blog-hub: RSS based blog starter kit for teams](https://github.com/catnose99/team-blog-hub)

## Demo
- [john_doe Post Hub](https://my-post-hub.vercel.app/)

## Development
```bash
$ yarn install
$ yarn build
$ yarn dev
```

### Deploy
#### GitHub Pages
- [テンプレートからリポジトリを作成する - GitHub Docs](https://docs.github.com/ja/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates) を参考に `<user>.github.io` リポジトリを作成してください。

- branchへのpush時または、AM1:00に自動でデプロイされます。

`.github/workflows/.nextjs.yml`
```yaml
on:
  # Runs on pushes targeting the default branch
  push:
  schedule:
    - cron: '* 1 * * *'
```


## Usage

### RSSの取得
以下より、RSSフィードを提供しています。
- https://{domain}/feed.xml
- https://{domain}/feed.json
- https://{domain}/atom.xml


### SNSを表示する
![john_doe-Post-Hub (1)](https://github.com/shitake4/my-post-hub/assets/8196476/d3a36eaa-81f7-445c-ae99-a143056f66e9)

```ts
export const author: Author = {
...
  webServices: [
    {name: 'github', userName: "shitake4", url: 'https://github.com/shitake4'},
...
}
```
`author.ts` に追加することでプロフィール下のSNSサイトへのアイコンリンクが表示されます。


## License
- MIT
