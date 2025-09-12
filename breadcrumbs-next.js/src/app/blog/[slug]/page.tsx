import Breadcrumbs from "@/components/breadcrumbs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const { slug } = params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <Breadcrumbs />
      <article className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">Published on November 15, 2023</p>

        <div className="prose max-w-none">
          <p>This is the content of the blog post: {title}.</p>
          <p>The breadcrumbs above show the navigation path to this post.</p>
          <p>
            Slug: <code>{slug}</code>
          </p>
        </div>
      </article>
    </div>
  );
}
