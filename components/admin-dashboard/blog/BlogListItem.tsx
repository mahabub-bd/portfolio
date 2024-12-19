import { ReactImage } from "@/public";
import { SingleBlog } from "@/types";
import { formatDate } from "@/utils/helper";

import Cookies from "js-cookie";
import Image from "next/image";
import BlogAction from "./BlogAction";
const token = Cookies.get("accessToken");

interface BlogListItemProps {
  blog: SingleBlog;
}

export function BlogListItem({ blog }: BlogListItemProps) {
  const {
    _id,
    title,
    slug,
    author,
    createdAt,
    content,
    tags,
    thumbnailUrl,
    category,
    likes,
    comments,
  } = blog;

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-4 border-b border-gray-300">
      <Image
        src={ReactImage}
        alt={title}
        width={120}
        height={80}
        className="object-cover rounded-lg w-full md:w-auto"
      />

      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mt-2 md:mt-0">
          {title}
        </h3>

        <div className="text-sm text-gray-500 mt-1">
          <span>Author: {author}</span> | <span>{formatDate(createdAt)}</span>
        </div>

        <p className="mt-2 text-gray-700 text-sm line-clamp-2">{content}</p>
      </div>

      <div className="self-end md:self-start">
        <BlogAction id={_id} blog={blog} />
      </div>
    </div>
  );
}
