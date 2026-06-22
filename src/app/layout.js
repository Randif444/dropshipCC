"use client";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="id">
      <body>
        <TooltipProvider>
          <SidebarProvider>
            {pathname !== "/" && <AppSidebar />}
            <main className="w-full">
              <SidebarTrigger className="m-2" />
              <div className="p-4">{children}</div>
            </main>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
