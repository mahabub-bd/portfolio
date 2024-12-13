"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Skill", href: "/skill" },
  { title: "Service", href: "/service" },
  { title: "Contact", href: "/contact" },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item: MenuItem) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary">
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
