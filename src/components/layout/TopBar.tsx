import React, { useState, useEffect } from "react";
import { Star, Search, Mic, Camera } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export default function TopBar() {
  const { activeLauncher, toggleLeftSidebar, toggleRightSidebar, setAdminOpen } = useApp();
  const [time, setTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const textColor = isDark ? "text-white" : "text-gray-800";
  const subTextColor = isDark ? "text-white/70" : "text-gray-500";
  const searchBg = isDark ? "bg-white/15 border-white/30 text-white placeholder-white/50" : "bg-white/80 border-white text-gray-700 placeholder-gray-400";

  const timeStr = time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const dayStr = time.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

  // Hijri approximation
  const islamicDate = "15 Ramadan 1445 AH";

  return (
    <div className={`${activeLauncher.topBarBg} px-2 pt-2 pb-1 relative z-10`}>
      {/* Motives banner */}
      <div className={`text-center text-[9px] font-bold ${textColor} animate-tube-glow mb-1`} style={{textShadow: `0 0 8px ${activeLauncher.accentColor}`}}>
        ✦ Motives · Narratives · Perspectives · Vision and Mission · About Us ✦
      </div>

      {/* Row 1: Logo | Weather | Time */}
      <div className="flex items-start justify-between gap-1">
        {/* Logo */}
        <button
          onClick={toggleLeftSidebar}
          className={`flex items-start gap-1 min-w-[56px] touch-target`}
          aria-label="Left sidebar"
        >
          <Star className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: activeLauncher.accentColor, filter: `drop-shadow(0 0 4px ${activeLauncher.accentColor})`}} />
          <div className={`text-left leading-tight ${textColor}`} style={{fontSize: "9px", fontWeight: 700, lineHeight: 1.2}}>
            <div>SMART</div>
            <div>WORLD</div>
            <div>ORDER</div>
            <div style={{color: activeLauncher.accentColor, textShadow: `0 0 6px ${activeLauncher.accentColor}`}}>ES OneWorld</div>
          </div>
        </button>

        {/* Center: Weather + Currency */}
        <div className="flex-1 text-center">
          <div className={`text-[11px] font-bold ${textColor}`} style={{textShadow:`0 0 6px ${activeLauncher.accentColor}`}}>
            ☀️ Weather: 75°F Sunny
          </div>
          <div className={`text-[9px] ${subTextColor}`}>
            💱 1 USD = 0.92 EUR | Auto-update: 6 hrs
          </div>
        </div>

        {/* Right: Time + Date */}
        <div className="text-right min-w-[80px]">
          <button
            onClick={toggleRightSidebar}
            className="flex items-center justify-end gap-1 mb-0.5"
            aria-label="Right sidebar"
          >
            <div className={`text-[20px] font-black ${textColor}`} style={{textShadow:`0 0 12px ${activeLauncher.accentColor}`, letterSpacing:"-0.5px"}}>
              {timeStr}
            </div>
            <Star className="w-4 h-4" style={{color: activeLauncher.accentColor, filter: `drop-shadow(0 0 4px ${activeLauncher.accentColor})`}} />
          </button>
          <div className={`text-[8px] ${subTextColor} text-right`}>{islamicDate}</div>
          <div className={`text-[8px] ${subTextColor} text-right`}>{dayStr}</div>
        </div>
      </div>

      {/* Bismillah */}
      <div className="text-center my-1">
        <div className="arabic-text text-[18px] font-bold tube-text-gold animate-tube-glow">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div>
        <div className={`text-[9px] ${subTextColor} italic`}>
          Bismillah ir-Rahman ir-Rahim
        </div>
      </div>

      {/* Search Bar */}
      <div className={`flex items-center gap-2 ${searchBg} border rounded-full px-3 py-1.5 mx-1`}>
        <Search className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent text-[12px] outline-none"
        />
        <button aria-label="Voice search"><Mic className="w-3.5 h-3.5 opacity-60" /></button>
        <button aria-label="Visual search"><Camera className="w-3.5 h-3.5 opacity-60" /></button>
      </div>
    </div>
  );
}
