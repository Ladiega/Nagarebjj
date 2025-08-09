"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
type Post = {
  slug: string;
  titulo: string;
  fecha: string;
  imagen: string;
  resumen: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Respuesta de /api/posts:", data);
        if (!Array.isArray(data)) {
          console.error("La respuesta no es un array:", data);
          return;
        }
        setPosts(data);
      })
      .catch((err) => console.error("Error cargando posts:", err));
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center uppercase mb-12">
          Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="border p-4 rounded-md hover:shadow-md transition">
                <Image
                  src={post.imagen}
                  alt={post.titulo}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48 rounded"
                />
                <h3 className="text-xl font-bold mt-2">{post.titulo}</h3>
                <p className="text-sm text-gray-500">{post.fecha}</p>
                <p className="mt-2 text-gray-700">{post.resumen}</p>
                <span className="text-red-700 mt-2 inline-block">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
