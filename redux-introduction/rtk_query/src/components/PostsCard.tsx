export default function PostsCard({ card }: { card: Post }) {
  return (
    <div className="border border-gray-700 rounded p-3">
      <h4>{card?.title}</h4>
      <p>{card?.userId}</p>

      <p>{card?.body}</p>
    </div>
  );
}
