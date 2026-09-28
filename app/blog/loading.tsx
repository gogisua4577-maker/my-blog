export default function Loading() {
return (
<main className="max-w-2xl mx-auto p-8">
<div className="h-8 w-40 bg-gray-200 rounded mb-6 animate-pulse" />
<div className="space-y-4">
<div className="h-20 bg-gray-100 rounded-lg animate-pulse" />
<div className="h-20 bg-gray-100 rounded-lg animate-pulse" />
<div className="h-20 bg-gray-100 rounded-lg animate-pulse" />
</div>
</main>
);
}