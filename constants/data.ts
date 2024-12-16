import { AdminSidebarMenuItem, MenuItem } from "@/types";

const adminSidebarMenu: AdminSidebarMenuItem[] = [
  { id: 1, title: "Home", href: "/dashboard", icon: "🏠" },
  { id: 2, title: "About", href: "/dashboard/about", icon: "ℹ️" },
  { id: 3, title: "Portfolio", href: "/dashboard/portfolio", icon: "💼" },
  { id: 4, title: "Skill", href: "/dashboard/skill", icon: "💼" },
  { id: 5, title: "Blog", href: "/dashboard/blog", icon: "📝" },
  { id: 6, title: "Service", href: "/dashboard/service", icon: "💡" },
  { id: 7, title: "Contact", href: "/dashboard/contact", icon: "📞" },
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
