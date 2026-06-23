import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ContentPage() {
  return (
    <div className="flex-1">
      <div className="flex gap-3 items-center">
        <SidebarTrigger />
        <div>
          <h1>Content Pipeline</h1>
          <p className="text-gray-500 text-xs">Dari ide sampai tayang</p>
        </div>
      </div>
    </div>
  );
}
