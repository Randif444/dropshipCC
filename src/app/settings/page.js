import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SettingsPage() {
  return (
    <div className="flex-1">
      <div className="flex gap-3 items-center">
        <SidebarTrigger />
        <div>
          <h1>Settings</h1>
          <p className="text-gray-500 text-xs">Konfigurasi aplikasi</p>
        </div>
      </div>
    </div>
  );
}
