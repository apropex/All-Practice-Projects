import Breadcrumbs from "@/components/breadcrumbs";
import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    { id: "electronics", name: "Electronics" },
    { id: "clothing", name: "Clothing" },
    { id: "books", name: "Books" },
  ];

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products/${category.id}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p className="text-gray-600">
              Browse {category.name.toLowerCase()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
