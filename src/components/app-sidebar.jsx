"use client";
import {
  Search,
  LayoutDashboard,
  Settings,
  Bookmark,
  Kanban,
  BarChart,
} from "lucide-react";
import {
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
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b">
        <div className="flex gap-3">
          <Image
            src="/dropshipcc_minimal.svg"
            alt="Logo Dropship Command Center"
            className="rounded-md object-cover"
            width={40}
            height={40}
          />{" "}
          <div className="flex-1 items-center gap-2 font-bold text-md">
            <span>DropshipCC</span>
            <p className="text-xs font-light">Dropship Command Center</p>
          </div>
        </div>
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
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <ClientAvatarWithBadge />
          <div>
            <p className="font-medium text-black">M Randi Fathurrohman</p>
            <p className="text-xs">faturahmanrandi14@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
