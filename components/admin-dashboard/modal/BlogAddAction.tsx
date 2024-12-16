"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import BlogAddForm from "../blog/BlogAddForm";

export const BlogAddAction: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-2 py-2 px-4 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-600 transition"
          aria-label="Add New Blog"
        >
          <span>Add New Blog</span>
          <BadgePlus />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add New Blog</DialogTitle>
          <DialogDescription>
            Fill in the details for your new blog and click save to add it.
          </DialogDescription>
        </DialogHeader>
        <BlogAddForm isOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
