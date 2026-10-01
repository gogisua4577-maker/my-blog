// "use client" を書いていない → サーバーで動く
export default function HomePage() {
console.log("★ これはどこに出る？");
return (
<main className="p-8">
<h1 className="text-2xl font-bold">Suong Phan's Blog</h1>
<p className="mt-4 text-gray-600">Welcome to my blog!</p>
</main>
);
}