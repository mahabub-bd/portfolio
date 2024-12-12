import { apiService } from "@/utils/apiServices";

export default async function BlogPage() {
  const blogs = await apiService("blog");

  return <div>Single Blog Page</div>;
}
