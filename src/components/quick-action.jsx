"use client";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

export default function QuickAction({ icon, title, children }) {
  return (
    <Card className="flex flex-row items-center justify-center hover:shadow-sm hover:border-blue-500 transition-all duration-300">
      <div className="mb-2 items-center">{icon}</div>
      <div>
        <CardTitle className="text-sm font-medium p-0">{title}</CardTitle>
        <CardContent className="p-0 text-xs text-gray-500 mt-1">
          {children}
        </CardContent>
      </div>
    </Card>
  );
}
