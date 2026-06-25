"use client";
import { Card, CardContent } from "./ui/card";

export default function TopProduct({ children }) {
  return (
    <Card className="  hover:shadow-sm hover:border-blue-500 transition-all duration-300">
      <CardContent>{children}</CardContent>
    </Card>
  );
}
