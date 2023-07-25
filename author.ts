import {Author} from "@src/types";

export const author: Author = {
  authorId: "john_doe",
  name: "John Doe",
  websiteUrl: "https://shitake4.tech",
  role: "SRE",
  bio: "Site Reliability Engineer.",
  avatarSrc: "/avatars/doe.jpg",
  webServices: [
    {name: 'twitter', userName: "shitake4", url: 'https://twitter.com/shitake4'},
    {name: 'github', userName: "shitake4", url: 'https://github.com/shitake4'},
    {name: 'zenn', userName: "shitake4", url: 'https://zenn.dev/shitake4'},
    {
      name: 'note',
      userName: "shitake4_",
      url: 'https://note.com/shitake4_',
      rss: {url: 'https://note.com/shitake4_/rss'}
    },
    {
      name: 'speakerdeck',
      userName: "shitake4",
      url: 'https://speakerdeck.com/shitake4',
      rss: {url: 'https://speakerdeck.com/shitake4.atom'}
    },
    {
      name: 'qiita',
      userName: "shitake4",
      url: 'https://qiita.com/shitake4',
      rss: {url: 'https://qiita.com/shitake4/feed'}
    },
    {
      name: 'hatenablog',
      userName: "shitake4",
      url: 'https://blog.shitake4.tech',
      rss: {url: 'https://blog.shitake4.tech/feed?size=100'}
    },
    {name: 'wantedly', userName: "", url: 'https://www.wantedly.com/'},
    {name: 'linkedin', userName: "", url: 'https://www.linkedin.com/'},
    {name: 'instagram', userName: "", url: 'https://www.instagram.com/'},
    {name: 'facebook', userName: "", url: 'https://www.facebook.com/'},
    {name: 'youtube', userName: "", url: 'https://www.youtube.com/'},
    {name: 'pixiv', userName: "", url: 'https://www.pixiv.net/'},
  ],
};
