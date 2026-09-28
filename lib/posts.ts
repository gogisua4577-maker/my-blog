export type Post = {
slug: string;      // URLに使う文字（英数字）
title: string;
date: string;
body: string;
};
export const posts: Post[] = [
{
slug: "hello",
title: "はじめまして",
date: "2026-08-01",
body: "ベトナムから来て、日本でWebエンジニアを目指しています。このブログでは勉強したことを書いていきます。",
},
{
slug: "why-programming",
title: "なぜプログラミングを始めたか",
date: "2026-08-03",
body: "接客のアルバイトをしながら、もっと長く続けられる仕事を探していました。",
},
{
slug: "first-deploy",
title: "はじめてサイトを公開した日",
date: "2026-08-05",
body: "自分の書いたページにURLがついて、スマホから見られたときは本当に嬉しかったです。",
},
];
// slug から1件を探す関数
export function getPost(slug: string): Post | undefined {
return posts.find((post) => post.slug === slug);
}