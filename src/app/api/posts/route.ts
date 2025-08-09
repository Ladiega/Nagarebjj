import { getAllPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = getAllPosts();

    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error("Error en /api/posts:", error);
    return NextResponse.json(
      { error: "Error al cargar los posts" },
      { status: 500 }
    );
  }
}
