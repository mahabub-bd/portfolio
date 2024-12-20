import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactImage from "@/public/react.jpg";
import { BlogCardProps } from "@/types";
import { formatDate } from "@/utils/helper";
import Image from "next/image";

export function BlogCard({
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
}: BlogCardProps) {
  return (
    <Card className=" shadow-lg transition-transform transform  hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          {title}
        </CardTitle>
        <div className="text-sm text-gray-500 mt-1">
          <span>Author: {author}</span> | <span>{formatDate(createdAt)}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>

      <Image
        src={ReactImage}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full rounded-md p-2"
      />

      <CardContent className="mt-4">
        <p className="text-gray-700 text-sm line-clamp-3">{content}</p>
        <div className="text-sm text-gray-500 mt-2">Category: {category}</div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          <span>{likes} Likes</span> | <span>{comments} Comments</span>
        </div>
        <Button variant="outline" className="text-sm">
          <a href={`/blog/${slug}`} className="hover:text-blue-600 transition">
            Read more
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
