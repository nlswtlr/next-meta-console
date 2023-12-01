import type { Metadata } from "next";
import Link from "next/link";

export default async function Home() {
  const posts: { userId: number; id: number; title: string; body: string }[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Next Meta Console</h1>
      <h2 className="text-2xl mb-2">Posts</h2>
      <ul className="list-disc list-inside">
        {posts.map((post) => (
          <li key={post.id}>
            <h3 className="inline-block">
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts of Next Meta Console Test",
};
