"use client";
import { ReactImage } from "@/public";
import { BlogCardProps } from "@/types";
import Image from "next/image";
import BlogAction from "./BlogAction";

export function BlogListItem({
  _id,
  title,
  slug,
  author,
  publishedDate,
  content,
  tags,
  thumbnailUrl,
  category,
  likes,
  comments,
}: BlogCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-300">
      <Image
        src={ReactImage}
        alt={title}
        width={120}
        height={80}
        className="object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <div className="text-sm text-gray-500 mt-1">
          <span>{author}</span> | <span>{publishedDate}</span>
        </div>

        <p className="mt-2 text-gray-700 text-sm line-clamp-2">{content}</p>
      </div>

      <BlogAction id={_id} />
    </div>
  );
}
