"use client";
import { BlogActionProps } from "@/types";
import { deleteDataById } from "@/utils/apiServices";
import { serverRevalidate } from "@/utils/revalidatePath";
import { DeleteIcon } from "lucide-react";
import { toast } from "sonner";

export default function BlogDeleteAction({ id }: BlogActionProps) {
  const handleDeleteBlog = async (id: string) => {
    try {
      const result = await deleteDataById("blog", id);
      toast.success("Blog deleted successfully!");
      serverRevalidate("/dashboard/blog");
      serverRevalidate("/blog");
    } catch (error: any) {
      console.error(
        `Error deleting blog with ID: ${id}`,
        error.message || error
      );
      toast.error(error?.message || "Failed to delete blog. Please try again.");
    }
  };
  return (
    <button
      title="Delete"
      className="p-2 rounded-md bg-red-100 hover:bg-red-200 text-red-600 transition"
      onClick={() => handleDeleteBlog(id)}
    >
      <DeleteIcon />
    </button>
  );
}
