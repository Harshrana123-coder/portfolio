"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#00e5ff] to-[#64ffda] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
