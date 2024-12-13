import { MenuItem } from "@/types";

const adminSidebarMenu = [
  {
    id: 1,
    title: "Blog",
    icon: "📝",
    href: "/admin/blog",
  },
  {
    id: 2,
    title: "Portfolio",
    icon: "💼",
    href: "/admin/portfolio",
  },
  {
    id: 3,
    title: "Message",
    icon: "✉️",
    href: "/admin/message",
  },
  {
    id: 4,
    title: "Employment",
    icon: "📋",
    href: "/admin/employment",
  },
];

const menuItems: MenuItem = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Portfolio", href: "/portfolio" },
  { id: 4, title: "Skill", href: "/skill" },
  { id: 5, title: "Blog", href: "/blog" },
  { id: 6, title: "Service", href: "/service" },
  { id: 7, title: "Contact", href: "/contact" },
];

export { adminSidebarMenu, menuItems };
