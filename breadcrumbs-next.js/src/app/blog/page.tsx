import Breadcrumbs from "@/components/breadcrumbs";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    { slug: "getting-started-nextjs", title: "Getting Started with Next.js" },
    { slug: "react-best-practices", title: "React Best Practices" },
    { slug: "typescript-tips", title: "TypeScript Tips and Tricks" },
  ];

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              {post.title}
            </h2>
            <p className="text-gray-600">Click to read more...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
