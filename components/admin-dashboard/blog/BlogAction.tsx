import { SingleBlog } from "@/types";
import { BlogEditAction } from "../modal/BlogEditAction";
import BlogDeleteAction from "./BlogDeleteAction";
interface BlogActionType {
  id: string;
  blog: SingleBlog;
}
export default function BlogAction({ id, blog }: BlogActionType) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <BlogEditAction id={id} blog={blog} />
        <BlogDeleteAction id={id} />
      </div>
    </div>
  );
}
