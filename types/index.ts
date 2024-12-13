export interface User {
  id: string;
  name: string;
  token: string;
  email: string;
}
export interface SingleBlog {
  _id: string;
  title: string;
  slug: string;
  author: string;
  publishedDate: string;
  content: string;
  tags: string[];
  thumbnailUrl: string;
  category: string;
  likes: number;
  comments: number;
}
