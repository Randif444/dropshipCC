import QueryProvider from "@/components/QueryProvider";
import "./globals.css";
import AppShell from "@/components/app-shell";

export const metadata = {
  title: "DropshipCC - dropship command center",
  description: "dropship command center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body suppressHydrationWarning>
        <QueryProvider>
          <AppShell>{children}</AppShell>
        </QueryProvider>
      </body>
    </html>
  );
}
