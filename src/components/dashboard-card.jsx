"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
} from "@/components/ui/card";

export default function DashboardCard({ title, icon, children }) {
  return (
    <Card className="w-full shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardAction className="flex justify-between ">{icon}</CardAction>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
