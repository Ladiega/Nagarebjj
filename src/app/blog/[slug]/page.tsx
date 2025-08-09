import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { marked } from "marked";

type Props = {
  params: { slug: string };
};

// ✅ Asíncrono
export default async function BlogPost({ params }: Props) {
  const { slug } = await Promise.resolve(params); // 👈 esto evita el warning

  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article className="p-6 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-2">{post.titulo}</h1>
      <p className="text-sm text-gray-400 mb-4">{post.fecha}</p>

      {post.imagen && (
        <Image
          src={post.imagen}
          alt={post.titulo}
          width={1200}
          height={600}
          className="rounded mb-6 w-full object-cover"
        />
      )}

      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </article>
  );
}
