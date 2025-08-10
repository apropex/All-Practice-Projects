import React, { useState } from "react";
import { useCreatePostMutation, useGetPostsQuery } from "./services/api";

export default function App() {
  const [newPost, setNewPost] = useState({ id: 9999, title: "", body: "" });

  const { data, isLoading } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating, error: creatingError }] =
    useCreatePostMutation();

  const handleCreatePost = async () => {
    if (newPost.title.trim() === "" || newPost.body.trim() === "")
      return alert("empty input(s)");

    await createPost(newPost);
    setNewPost({ id: 9999, title: "", body: "" });
  };

  //
  return (
    <div>
      <div className="flex flex-col w-full max-w-sm gap-y-3 m-5 p-5 border border-gray-700 rounded-2xl">
        <input
          className="input w-full focus:outline-none"
          type="text"
          placeholder="Title..."
          value={newPost.title}
          onChange={(e) => setNewPost((p) => ({ ...p, title: e.target.value }))}
        />
        <input
          className="input w-full focus:outline-none"
          type="text"
          placeholder="Body..."
          value={newPost.body}
          onChange={(e) => setNewPost((p) => ({ ...p, body: e.target.value }))}
        />
        <button
          onClick={handleCreatePost}
          disabled={isCreating}
          className="btn"
        >
          Create Post
        </button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.map((post) => (
            <h2 key={post.id}>{post.title}</h2>
          ))}
        </div>
      )}
    </div>
  );
}
