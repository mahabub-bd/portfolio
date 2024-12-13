import ReactImage from "@/public/react.jpg";
import { SingleBlog } from "@/types";
import Image from "next/image";

const BlogDetails = ({
  title,
  author,
  publishedDate,
  content,
  tags,
  category,
  likes,
  comments,
  thumbnailUrl,
}: SingleBlog) => {
  return (
    <section className="container mx-auto p-6 max-w-3xl">
      <div className="mb-6">
        <Image
          src={ReactImage}
          alt={title}
          width={800}
          height={450}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
        <span>
          By <strong>{author}</strong>
        </span>
        <span>{new Date(publishedDate).toLocaleDateString()}</span>
      </div>
      <div className="text-base leading-7 text-justify text-gray-700 mb-6">
        {content}
      </div>
      <div className="flex items-center gap-2 mb-6">
        <strong className="text-gray-600">Category:</strong>
        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="flex items-center flex-wrap gap-2 mb-6">
        <strong className="text-gray-600">Tags:</strong>
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-6 text-gray-500 text-sm">
        <span>👍 {likes} Likes</span>
        <span>💬 {comments} Comments</span>
      </div>
    </section>
  );
};

export default BlogDetails;
