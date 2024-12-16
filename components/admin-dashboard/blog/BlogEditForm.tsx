import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SingleBlog } from "@/types";
import { patchData } from "@/utils/apiServices";
import { serverRevalidate } from "@/utils/revalidatePath";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const placeholders: Record<string, string> = {
  title: "Enter Blog Title",
  slug: "Enter your slug",
  author: "Enter author",
  content: "Enter Content",
  tags: "Enter Blog Tag",
  thumbnailUrl: "Enter Blog ThumbnailUrl",
  category: "Enter Blog Category",
};

const blogEditSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  slug: z.string().min(3, "Slug must be at least 3 characters."),
  author: z.string().min(3, "Author name is required."),
  content: z.string().min(10, "Content must be at least 10 characters."),
  tags: z.string().nonempty("Tags are required."),
  thumbnailUrl: z.string().url("Thumbnail must be a valid URL."),
  category: z.string().min(2, "Category is required."),
});

interface BlogEditFormProps {
  isOpen: (value: boolean) => void;
  blog: SingleBlog;
}

export default function BlogEditForm({ isOpen, blog }: BlogEditFormProps) {
  const form = useForm<z.infer<typeof blogEditSchema>>({
    resolver: zodResolver(blogEditSchema),
    defaultValues: {
      title: blog?.title,
      slug: blog?.slug,
      author: blog?.author,
      content: blog?.content,
      tags: blog?.tags?.join(", "),
      thumbnailUrl: blog?.thumbnailUrl,
      category: blog?.category,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof blogEditSchema>> = async (
    values
  ) => {
    const updatedTags = values.tags
      .split(",")
      .map((tag: string) => tag.trim())
      .filter((tag: string) => tag.length > 0);

    const updatedBlogData = {
      ...values,
      tags: updatedTags,
    };

    const updateBlog = await patchData("blog", blog._id, updatedBlogData);
    toast.success("Blog Edited Sucessfully");
    serverRevalidate("/dashboard/blog");
    serverRevalidate("/blog");
    isOpen(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Other fields remain the same */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder={placeholders.title}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder={placeholders.slug} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder={placeholders.author}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder={placeholders.content}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder={placeholders.tags} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thumbnailUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder={placeholders.thumbnailUrl}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder={placeholders.category}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Action Buttons */}
        <div className="flex justify-between gap-10">
          <Button
            onClick={() => isOpen(false)}
            type="button"
            className="w-1/2 bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-1/2 bg-primary text-white hover:bg-primary-dark"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
