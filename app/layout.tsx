import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
 <html lang="ja">
 <body>
<header className="border-b">
<div className="max-w-2xl mx-auto flex gap-6 p-4 items-center">
<Link href="/" className="font-bold">Suong Phan's Blog</Link>
<Link href="/blog" className="text-gray-600 hover:text-black">記事一覧</Link>
</div>
</header>
<main className="max-w-2xl mx-auto p-4">{children}</main>
</body>
</html>
    );
}
