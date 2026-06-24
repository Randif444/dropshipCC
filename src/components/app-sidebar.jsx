"use client";
import { PanelLeft } from "lucide-react";

import {
  Search,
  LayoutDashboard,
  Settings,
  Bookmark,
  Kanban,
  BarChart,
} from "lucide-react";
import {
  useSidebar,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ClientAvatarWithBadge = dynamic(
  () => import("./avatar-badge").then((mod) => mod.AvatarWithBadge),
  { ssr: false },
);
const items = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    category: "main",
  },
  { href: "/products", label: "Product Intel", icon: Search, category: "main" },
  {
    href: "/swipe-files",
    label: "Swipe Files",
    icon: Bookmark,
    category: "resources",
  },
  {
    href: "/content-pipeline",
    label: "Content Pipeline",
    icon: Kanban,
    category: "main",
  },
  { href: "/analytics", label: "Analytics", icon: BarChart, category: "main" },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    category: "settings",
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b p-4">
        {!isCollapsed ? (
          <div className="flex items-center gap-3">
            <Image
              src="/dropshipcc_minimal.svg"
              alt="Logo Dropship Command Center"
              width={40}
              height={40}
              className="rounded-md object-cover shrink-0"
            />

            <div className="flex-1">
              <span className="font-bold">DropshipCC</span>
            </div>

            <SidebarTrigger className="shrink-0" />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="group relative flex h-10 w-10 items-center justify-center">
              {/* Logo */}
              <Image
                src="/dropshipcc_minimal.svg"
                alt="Logo Dropship Command Center"
                width={48}
                height={48}
                className="
                  absolute

                  rounded-md
                  object-cover

                  transition-opacity
                  duration-150

                  group-hover:opacity-0
                "
              />

              {/* Toggle */}
              <SidebarTrigger
                className="
                  absolute

                  opacity-0

                  transition-opacity
                  duration-150

                  group-hover:opacity-100

                  hover:bg-transparent
                "
              />
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {["main", "resources", "settings"].map((category) => (
          <SidebarGroup key={category}>
            <SidebarGroupLabel>
              {category === "main"
                ? "Menu Utama"
                : category === "resources"
                  ? "Resources"
                  : "Pengaturan"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items
                  .filter((i) => i.category === category)
                  .map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          asChild
                          className={`flex items-center gap-2 px-3 py-2 rounded-sm
                            hover:bg-gray-200 
                            ${isActive ? "bg-gray-300 font-semibold" : ""}`}
                        >
                          <Link href={item.href}>
                            <item.icon />
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        {!isCollapsed ? (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ClientAvatarWithBadge />
            <div>
              <p className="font-medium text-black">M Randi Fathurrohman</p>
              <p className="text-xs">faturahmanrandi14@gmail.com</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <ClientAvatarWithBadge />
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
