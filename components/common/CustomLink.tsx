"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ path, children }) => {
  const pathname = usePathname();
  const isActive = pathname.endsWith(path);

  return (
    <Link
      href={path}
      className={`flex items-center rounded-md ${
        isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
