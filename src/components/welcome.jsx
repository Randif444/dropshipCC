"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export default function Welcome() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      router.push("/dashboard");
    }
  }, [progress, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">Selamat Datang 👋</h1>
      <p className="text-gray-600 mb-6 text-center">
        Dropship Command Center sedang menyiapkan dashboard...
      </p>

      <div className="w-full max-w-md">
        <Progress value={progress} className="w-full" />
        <p className="text-xs text-gray-500 mt-2 text-center">
          {progress}% selesai
        </p>
      </div>
    </div>
  );
}
