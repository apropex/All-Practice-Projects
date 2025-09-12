import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <Breadcrumbs /> */}
      <h1 className="text-3xl font-bold mb-6">Welcome to Breadcrumbs Demo</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <div className="space-x-4">
            <Link href="/products" className="text-blue-600 hover:underline">
              All Products
            </Link>
            <Link
              href="/products/electronics"
              className="text-blue-600 hover:underline"
            >
              Electronics
            </Link>
            <Link
              href="/products/electronics/laptop-123"
              className="text-blue-600 hover:underline"
            >
              Laptop Product
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Blog</h2>
          <div className="space-x-4">
            <Link href="/blog" className="text-blue-600 hover:underline">
              All Posts
            </Link>
            <Link
              href="/blog/getting-started-nextjs"
              className="text-blue-600 hover:underline"
            >
              Blog Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
