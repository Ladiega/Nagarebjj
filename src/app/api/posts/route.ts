import { getAllPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error en /api/posts:", error);
    return NextResponse.json(
      { error: "Error al cargar los posts" },
      { status: 500 }
    );
  }
}
