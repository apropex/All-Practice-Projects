import { useState, type FormEvent } from "react";
import PostsCard from "./components/PostsCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

export default function App() {
  // const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const { isLoading, data } = useGetPostsQuery("");

  const [newPost] = useNewPostMutation();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.floor(Math.random() * 1000),
      id: Date.now(),
    };

    newPost(post);

    setTitle("");
    setBody("");
  };

  //
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full max-w-xs space-y-3 p-3 bg-white/10 m-2 rounded-md"
      >
        <input
          type="text"
          placeholder="title"
          className="input focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="body"
          className="textarea focus:outline-none"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-5 p-5 gap-4">
          {data?.map((card: Post) => (
            <PostsCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}
