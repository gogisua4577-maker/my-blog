import Link from "next/link";
export default function NotFound() {
return (
<main className="max-w-2xl mx-auto p-8 text-center">
<h1 className="text-3xl font-bold mb-2">404</h1>
<p className="text-gray-600 mb-6">お探しのページは見つかりませんでした。</p>
<Link href="/blog" className="text-orange-700">記事一覧へ</Link>
</main>
);
}