"use client";
import DashboardCard from "@/components/dashboard-card";
import { cards_dummy, actions } from "@/data/datas";
import QuickAction from "@/components/quick-action";
import DateHeader from "@/components/date-time-header";
import GreetingHeader from "@/components/greeting";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Boxes, Upload, FileText, PlusCircle, Kanban } from "lucide-react";

export default function DashboardPage() {
  const user = "Randi";
  const icons = {
    Boxes: <Boxes size={25} style={{ opacity: 0.4 }} />,
    Upload: <Upload size={25} style={{ opacity: 0.4 }} />,
    FileText: <FileText size={25} style={{ opacity: 0.4 }} />,
    PlusCircle: <PlusCircle size={25} style={{ opacity: 0.4 }} />,
    Kanban: <Kanban size={25} style={{ opacity: 0.4 }} />,
  };

  return (
    <div>
      {/* header */}
      <div className="sticky top-0">
        <div className="flex-1 pb-4 border-b">
          <div className="flex gap-3 items-center  ">
            <SidebarTrigger />
            <div>
              <div className="flex gap-1">
                <GreetingHeader />
                <h1 className=" font-bold">{user}</h1>
              </div>
              <DateHeader />
            </div>
          </div>
        </div>
      </div>
      {/* card content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 py-3 px-3 gap-3">
        {cards_dummy.map((card) => {
          return (
            <div key={card.id}>
              <DashboardCard title={card.title} icon={icons[card.icon]}>
                <p className={`text-4xl items-center font-bold pb-3`}>
                  {card.value}
                </p>
                <span className="font-sm text-gray-600">{card.caption}</span>
              </DashboardCard>
            </div>
          );
        })}
      </div>
      {/* quick icons */}

      <div>
        <h2 className="pl-4">Quick Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 py-0 px-3 gap-3 ">
          {actions.map((action) => {
            return (
              <div key={action.id}>
                <QuickAction
                  key={action.id}
                  icon={icons[action.icon]}
                  title={action.title}
                >
                  <p>{action.caption}</p>
                </QuickAction>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
