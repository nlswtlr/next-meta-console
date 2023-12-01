import Link from "next/link";
import type { Metadata } from "next";

type PostProps = {
  params: {
    id: string;
  };
};

type Post = { userId: number; id: number; title: string; body: string };

const Post = async ({ params: { id } }: PostProps) => {
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());

  return (
    <>
      <Link className="flex items-center mb-6" href="/">
        ⬅️ go back
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const id = params.id;
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      images: [`https://placehold.co/1200x630?text=${encodeURI(post.title)}`],
    },
  };
}

export default Post;
