# My Post Hub
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/shitake4/shitake4.github.io/main)
![GitHub](https://img.shields.io/github/license/shitake4/my-post-hub)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/shitake4/my-post-hub)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/shitake4/my-post-hub/main)


![john_doe-Post-Hub](https://github.com/shitake4/my-post-hub/assets/8196476/9e55b413-b553-4639-8ebe-2e85486aec85)

ポートフォリオサイトとしてZenn、Qiita、Medium、note、はてなブログなどに投稿した記事をRSSで取得し一覧にまとめて表示します。

こちらをForkして、作成しました。

- [チーム個々人のテックブログをRSSで集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)
- [catnose99/team-blog-hub: RSS based blog starter kit for teams](https://github.com/catnose99/team-blog-hub)

## Development
```bash
$ yarn install
$ yarn build
$ yarn dev
```

### Deploy
#### Github Pages
- [Creating a GitHub Pages site - GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) などを参照し、Github Pagesを作成してください。

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

`author.rs`
```ts
export const author: Author = {
...
  webServices: [
    {name: 'github', userName: "shitake4", url: 'https://github.com/shitake4'},
...
```
`author.ts` に追加することでプロフィール下のSNSサイトへのアイコンリンクが表示されます。


## License
- MIT
