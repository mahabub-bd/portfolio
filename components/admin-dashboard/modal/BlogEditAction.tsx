"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import { useState } from "react";
import BlogEditForm from "../blog/BlogEditForm";

interface BlogEditActionProps {
  id: string;
}

export const BlogEditAction: React.FC<BlogEditActionProps> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="p-2 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-600 transition"
          aria-label={`Edit Blog ${id}`}
        >
          <EditIcon />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Blog</DialogTitle>
          <DialogDescription>
            Update the blog information below and click save when done.
          </DialogDescription>
        </DialogHeader>
        <BlogEditForm isOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
