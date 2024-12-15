import { MenuItem } from "@/types";

const adminSidebarMenu = [
  {
    id: 1,
    title: "Blog",
    icon: "📝",
    href: "/dashboard/blog",
  },
  {
    id: 2,
    title: "Portfolio",
    icon: "💼",
    href: "/dashboard/portfolio",
  },
  {
    id: 3,
    title: "Message",
    icon: "✉️",
    href: "/dashboard/message",
  },
  {
    id: 4,
    title: "Employment",
    icon: "📋",
    href: "/dashboard/employment",
  },
];

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Skill", href: "/skill" },
  { title: "Blog", href: "/blog" },
  { title: "Service", href: "/service" },
  { title: "Contact", href: "/contact" },
];

export { adminSidebarMenu, menuItems };
