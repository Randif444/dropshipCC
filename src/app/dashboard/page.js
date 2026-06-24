"use client";
import DashboardCard from "@/components/dashboard-card";
import { cards_dummy, actions, pipelines } from "@/data/datas";
import QuickAction from "@/components/quick-action";
import NewActivity from "@/components/new-activity";
import DateHeader from "@/components/date-time-header";
import GreetingHeader from "@/components/greeting";
import {
  Boxes,
  Upload,
  FileText,
  PlusCircle,
  Kanban,
  CheckSquare2,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const user = "Randi";
  const icons = {
    Boxes: <Boxes size={25} style={{ opacity: 0.4 }} />,
    Upload: <Upload size={25} style={{ opacity: 0.4 }} />,
    FileText: <FileText size={25} style={{ opacity: 0.4 }} />,
    PlusCircle: <PlusCircle size={25} style={{ opacity: 0.4 }} />,
    Kanban: <Kanban size={25} style={{ opacity: 0.4 }} />,
  };

  const icons2 = {
    Boxes: <Boxes />,
    CheckSquare2: <CheckSquare2 />,
    FileText: <FileText />,
  };

  return (
    <div>
      {/* header */}
      <div className="fixed pt-4 w-full top-0 bg-sidebar overflow-hidden z-50">
        <div className="flex-1 pb-4 border-b">
          <div className="flex gap-3 items-center px-4 ">
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
      {/* main content */}
      <div className="p-4">
        {/* card content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 mt-15 py-3 px-3 gap-3">
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
                  <Link href={action.href}>
                    <QuickAction icon={icons[action.icon]} title={action.title}>
                      <p>{action.caption}</p>
                    </QuickAction>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* new activity + pipeline snapshot + top monthly product */}
        <div className="grid flex-1 md:grid-cols-2 gap-3 px-3">
          {/* new activity */}
          <div>
            <div className="flex justify-between items-center pt-4">
              <h2 className="px-1 mb-3">New Activity</h2>
              <p className="p-0 text-xs text-gray-500">5 items terakhir</p>
            </div>
            <NewActivity>
              {pipelines.map((pipeline) => {
                return (
                  <div
                    key={pipeline.id}
                    className="flex justify-start items-center gap-2 px-3 py-3 border-b  w-full"
                  >
                    <div className="bg-gray-300 rounded-full px-1 py-1">
                      {icons2[pipeline.icon]}
                    </div>
                    <div>
                      <h3>{pipeline.title}</h3>
                      <p className="p-0 text-xs text-gray-500">
                        {pipeline.time}
                      </p>
                    </div>
                    <div className="border-b" />
                  </div>
                );
              })}
            </NewActivity>
          </div>
          <div>
            {/* pipeline snapshot */}
            <div className="border border-yellow"></div>

            {/* top monthly product */}
            <div className="border border-green"></div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
