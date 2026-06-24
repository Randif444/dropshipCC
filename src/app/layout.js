"use client";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="id">
      <body>
        <SidebarProvider>
          {pathname !== "/" && <AppSidebar />}
          <main className="w-full">
            <TooltipProvider>
              <div className="p-4">{children}</div>
            </TooltipProvider>{" "}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
