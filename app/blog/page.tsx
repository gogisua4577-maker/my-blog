import Link from "next/link";
import { posts } from "../../lib/posts";
export default function BlogPage() {
return (
<main className="max-w-2xl mx-auto p-8">
<h1 className="text-2xl font-bold mb-6">ブログの記事一覧</h1>
<ul className="space-y-4">
{posts.map((post) => (
<li key={post.slug} className="border rounded-lg p-4 hover:bg-gray-50">
<Link href={`/blog/${post.slug}`}>
<h2 className="font-bold text-lg">{post.title}</h2>
<p className="text-sm text-gray-500">{post.date}</p>
</Link>
</li>
))}
</ul>
</main>
);
}