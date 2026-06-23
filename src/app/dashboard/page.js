import DateHeader from "@/components/date-time-header";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <div className="flex-1">
      <div className="flex gap-3 items-center">
        <SidebarTrigger />
        <div>
          <h1>Welcome Randi....</h1>
          <DateHeader />
        </div>
      </div>
      <div>ini card ringkasan</div>
    </div>
  );
}
