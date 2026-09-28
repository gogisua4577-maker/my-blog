import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/posts";
export default async function PostPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;      
// ← await が必要（下の説明を読んでください）
const post = getPost(slug);
if (!post) {
notFound();                        
}
// 記事がなければ404ページへ
return (
<main className="max-w-2xl mx-auto p-8">
<h1 className="text-2xl font-bold">{post.title}</h1>
<p className="text-sm text-gray-500 mb-6">{post.date}</p>
<p className="leading-8">{post.body}</p>
<Link href="/blog" className="inline-block mt-8 text-orange-700">
← 一覧へ戻る
</Link>
</main>
);
}