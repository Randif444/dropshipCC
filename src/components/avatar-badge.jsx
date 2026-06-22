import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import dynamic from "next/dynamic";

export function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage src="/MyPhoto.jpg" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  );
}
