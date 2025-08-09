import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content");

export type BlogPost = {
  slug: string;
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    if (!data.titulo || !data.fecha || !data.resumen) {
      throw new Error(`El archivo ${filename} no tiene los campos requeridos.`);
    }

    return {
      slug: filename.replace(/\.md$/, ""),
      titulo: data.titulo,
      fecha: data.fecha,
      resumen: data.resumen,
      imagen: data.imagen ?? "",
      content,
    };
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    titulo: data.titulo,
    fecha: data.fecha,
    resumen: data.resumen,
    imagen: data.imagen ?? "",
    content,
  };
}
