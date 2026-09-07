import React from "react";
import { useApp } from "@/contexts/AppContext";
import { X, Settings, Shield, Download, Share2, BookOpen, Compass, Layers } from "lucide-react";

const SIDEBAR_LINKS = [
  { icon: <BookOpen className="w-4 h-4" />, label: "Quran Paak", color: "#4A90D9" },
  { icon: <Compass className="w-4 h-4" />, label: "Prayer Times", color: "#00C896" },
  { icon: <Layers className="w-4 h-4" />, label: "UniOrbi Apps", color: "#6C63FF" },
  { icon: <Share2 className="w-4 h-4" />, label: "Social Hub", color: "#E91E63" },
  { icon: <Download className="w-4 h-4" />, label: "Downloads", color: "#FF6D00" },
  { icon: <Settings className="w-4 h-4" />, label: "Settings", color: "#546E7A" },
  { icon: <Shield className="w-4 h-4" />, label: "Privacy", color: "#37474F" },
];

const APP_INTEGRATIONS = [
  { emoji: "📘", label: "Facebook" },
  { emoji: "🐦", label: "Twitter X" },
  { emoji: "📸", label: "Instagram" },
  { emoji: "▶️", label: "YouTube" },
  { emoji: "💬", label: "WhatsApp" },
  { emoji: "📱", label: "TikTok" },
  { emoji: "✈️", label: "Telegram" },
  { emoji: "🌐", label: "uniorbi.com" },
  { emoji: "💻", label: "drirfan.online" },
];

export default function LeftSidebar() {
  const { leftSidebarOpen, toggleLeftSidebar, activeLauncher } = useApp();
  if (!leftSidebarOpen) return null;

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const textColor = isDark ? "text-white" : "text-gray-800";
  const subText = isDark ? "text-white/60" : "text-gray-500";
  const divider = isDark ? "border-white/20" : "border-gray-200";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-gray-50";

  return (
    <>
      <div className="fixed inset-0 z-[199] bg-black/30" onClick={toggleLeftSidebar} />
      <div className="sidebar-overlay sidebar-left animate-slide-in-left">
        <div className="flex items-center justify-between px-4 pt-10 pb-3">
          <div>
            <div className={`text-sm font-bold ${textColor}`}>ESOneWorld</div>
            <div className={`text-[10px] ${subText}`}>Global Family Platform</div>
          </div>
          <button onClick={toggleLeftSidebar} className={`p-2 rounded-full ${hoverBg}`} aria-label="Close">
            <X className={`w-4 h-4 ${textColor}`} />
          </button>
        </div>

        <div className={`border-t ${divider} mx-3 mb-2`} />

        <div className="px-3 space-y-0.5 overflow-y-auto max-h-[40vh]">
          {SIDEBAR_LINKS.map((item, i) => (
            <button key={i} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl ${hoverBg} transition-colors`}>
              <span style={{ color: item.color }}>{item.icon}</span>
              <span className={`text-sm font-medium ${textColor}`}>{item.label}</span>
            </button>
          ))}
        </div>

        <div className={`border-t ${divider} mx-3 my-2`} />
        <div className={`px-4 text-[10px] font-bold ${subText} mb-1`}>INTEGRATIONS</div>
        <div className="px-3 grid grid-cols-3 gap-2 pb-6">
          {APP_INTEGRATIONS.map((app, i) => (
            <button key={i} className={`flex flex-col items-center gap-1 p-2 rounded-xl ${hoverBg} transition-colors`}>
              <span className="text-xl">{app.emoji}</span>
              <span className={`text-[9px] ${subText} text-center leading-tight`}>{app.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
