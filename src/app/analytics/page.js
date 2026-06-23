import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AnalyticsPage() {
  return (
    <div className="flex-1">
      <div className="flex gap-3 items-center">
        <SidebarTrigger />
        <div>
          <h1>Analytics</h1>
          <p className="text-gray-500 text-xs">Evaluasi performa bisnis</p>
        </div>
      </div>
    </div>
  );
}
