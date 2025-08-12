//

import Container from "@/components/layouts/Container";
import PostDetails from "@/components/layouts/PostDetails";
import { Post as PrismaPost, User } from "@/generated/prisma";
import { getPostById } from "@/lib/action";
import { notFound } from "next/navigation";

interface Post extends PrismaPost {
  author: User;
}

type iBlogPostProps = Post;

export default async function PostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;

  const post = await getPostById(id);
  if (!post) return notFound();

  return (
    <Container>
      <PostDetails post={post.data as iBlogPostProps} />
    </Container>
  );
}
