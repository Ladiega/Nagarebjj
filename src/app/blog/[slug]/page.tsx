import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { marked } from "marked";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params; // ✅ Ahora sí se espera el Promise

  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article className="p-6 max-w-3xl mx-auto text-white text-justify">
      <h1 className="text-3xl font-climate mb-2">{post.titulo}</h1>
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
