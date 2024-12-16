import { BlogActionProps } from "@/types";
import { BlogEditAction } from "../modal/BlogEditAction";
import BlogDeleteAction from "./BlogDeleteAction";

export default function BlogAction({ id }: BlogActionProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <BlogEditAction id={id} />
        <BlogDeleteAction id={id} />
      </div>
    </div>
  );
}
