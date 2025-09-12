import Breadcrumbs from "@/components/breadcrumbs";

interface ProductPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const { category, id } = params;

  // In a real app, you'd fetch product data based on the ID
  const productName = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <Breadcrumbs />
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">{productName}</h1>
        <p className="text-gray-600 mb-4">Category: {category}</p>
        <p className="text-gray-600 mb-4">Product ID: {id}</p>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <p>This is a detailed view of the {productName.toLowerCase()}.</p>
          <p>
            Navigate using the breadcrumbs above to go back to previous pages.
          </p>
        </div>
      </div>
    </div>
  );
}
