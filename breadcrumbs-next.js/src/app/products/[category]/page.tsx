import Breadcrumbs from "@/components/breadcrumbs";
import Link from "next/link";

interface ProductsCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function ProductsCategoryPage(props: ProductsCategoryPageProps) {
  const params = await props.params;
  const { category } = params;

  // Mock products data
  const products = [
    { id: "laptop-123", name: "Gaming Laptop", price: "$1299" },
    { id: "phone-456", name: "Smartphone Pro", price: "$899" },
    { id: "tablet-789", name: "Tablet Plus", price: "$599" },
  ];

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category.replace("-", " ")} Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${category}/${product.id}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-green-600 font-bold">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
