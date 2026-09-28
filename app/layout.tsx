import Link from "next/link";
// ... 省略 ...
<header className="border-b">
<div className="max-w-2xl mx-auto flex gap-6 p-4 items-center">
<Link href="/" className="font-bold">Linh's Blog</Link>
<Link href="/blog" className="text-gray-600 hover:text-black">記事一覧</Link>
</div>
</header>