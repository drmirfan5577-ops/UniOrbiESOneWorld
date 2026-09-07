import React from "react";
import { useApp } from "@/contexts/AppContext";
import {
  APP_ICONS_ROW1, APP_ICONS_ROW2, APP_ICONS_ROW3,
  APP_ICONS_ROW4, APP_ICONS_ROW5, APP_ICONS_ROW6,
  LEFT_SIDEBAR_ICONS, RIGHT_SIDEBAR_ICONS
} from "@/constants/launchers";

interface AppIcon {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

function AppIconBtn({ icon, isDark }: { icon: AppIcon; isDark: boolean }) {
  return (
    <div className="app-icon flex-shrink-0" style={{ width: "58px" }}>
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md border ${isDark ? "border-white/20 bg-white/10" : "border-white/80 bg-white/70"}`}
        style={{ backdropFilter: "blur(8px)" }}
      >
        <span className="text-2xl">{icon.emoji}</span>
      </div>
      <span className={`text-center text-[8px] leading-tight font-medium ${isDark ? "text-white/80" : "text-gray-600"}`} style={{ maxWidth: "58px", display: "block" }}>
        {icon.name}
      </span>
    </div>
  );
}

function IconRow({ icons, isDark }: { icons: AppIcon[]; isDark: boolean }) {
  return (
    <div className="flex justify-around px-1 py-0.5">
      {icons.map((icon) => (
        <AppIconBtn key={icon.id} icon={icon} isDark={isDark} />
      ))}
    </div>
  );
}

export default function HomePage() {
  const { activeLauncher } = useApp();
  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const sideIconBg = isDark ? "bg-white/10 border-white/20" : "bg-white/70 border-white/80";
  const sideIconText = isDark ? "text-white/70" : "text-gray-400";

  return (
    <div className="flex h-full">
      {/* Left sidebar icons strip */}
      <div className="flex flex-col justify-around py-1 px-0.5 gap-0.5" style={{ width: "36px" }}>
        {LEFT_SIDEBAR_ICONS.map((emoji, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-xl flex items-center justify-center border ${sideIconBg} text-sm`}
            style={{ backdropFilter: "blur(6px)" }}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Main grid */}
      <div className="flex-1 overflow-y-auto scrollbar-hide py-1">
        <IconRow icons={APP_ICONS_ROW1} isDark={isDark} />
        <IconRow icons={APP_ICONS_ROW2} isDark={isDark} />
        <IconRow icons={APP_ICONS_ROW3} isDark={isDark} />
        <IconRow icons={APP_ICONS_ROW4} isDark={isDark} />
        <IconRow icons={APP_ICONS_ROW5} isDark={isDark} />
        <div className="flex justify-around px-1 py-0.5">
          {APP_ICONS_ROW6.map((icon) => (
            <AppIconBtn key={icon.id} icon={icon} isDark={isDark} />
          ))}
          {/* Spacers */}
          <div style={{ width: "58px" }} />
          <div style={{ width: "58px" }} />
        </div>
      </div>

      {/* Right sidebar icons strip */}
      <div className="flex flex-col justify-around py-1 px-0.5 gap-0.5" style={{ width: "36px" }}>
        {RIGHT_SIDEBAR_ICONS.map((emoji, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-xl flex items-center justify-center border ${sideIconBg} text-sm`}
            style={{ backdropFilter: "blur(6px)" }}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
