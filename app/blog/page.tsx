import { BlogCard } from "@/components/blog/BlogCard";
import { apiService } from "@/utils/apiServices";

export default async function BlogPage() {
  const blogs = await apiService("blog");

  return (
    <section className="container mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:py-10 py-5">
        {blogs.map((blog: any) => (
          <BlogCard key={blog?._id} {...blog} />
        ))}
      </div>
    </section>
  );
}
