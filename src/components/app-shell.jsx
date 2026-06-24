"use client";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { TooltipProvider } from "./ui/tooltip";
import { usePathname } from "next/navigation";

export default function AppShell({ children }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      {pathname !== "/" && <AppSidebar />}
      <main className="w-full">
        <TooltipProvider>
          <div className="p-0">{children}</div>
        </TooltipProvider>{" "}
      </main>
    </SidebarProvider>
  );
}
