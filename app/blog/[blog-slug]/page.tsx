import BlogDetails from "@/components/blog/BlogDetails";
import { SingleBlog } from "@/types";
import { apiService } from "@/utils/apiServices";

interface props {
  slug: string;
}

export async function generateStaticParams() {
  const blogs: props[] = await apiService("blog");

  return blogs.map(({ slug }) => ({
    params: { slug: slug.toString() },
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ "blog-slug": string }>;
}) {
  const { "blog-slug": blogSlug } = await params;

  const blog: SingleBlog = await apiService(`blog/${blogSlug}`);

  if (!blog) {
    return <div>blog not found.</div>;
  }

  return <BlogDetails {...blog} />;
}
