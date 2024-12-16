import { apiService } from "@/utils/apiServices";
import { BlogAddAction } from "../modal/BlogAddAction";
import { BlogListItem } from "./BlogListItem";

export default async function BlogList() {
  const blogs = await apiService("blog");
  return (
    <section className="md:p-4 p-4 bg-white shadow-xl rounded-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Blog List</h2>
        <div className="ml-auto">
          <BlogAddAction />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog: any) => (
          <BlogListItem key={blog?._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
