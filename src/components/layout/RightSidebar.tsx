import React from "react";
import { useApp } from "@/contexts/AppContext";
import { X, Sun, Moon, Zap, Sparkles, Globe, Palette } from "lucide-react";
import { LAUNCHERS } from "@/constants/launchers";

const DISPLAY_MODES = [
  { id: "super-bright", label: "Super Bright", icon: <Zap className="w-4 h-4" /> },
  { id: "milky-white", label: "Pure Milky White", icon: <Sun className="w-4 h-4" /> },
  { id: "holographic", label: "Holographic", icon: <Sparkles className="w-4 h-4" /> },
  { id: "semi-transparent", label: "Semi-Transparent", icon: <Globe className="w-4 h-4" /> },
  { id: "light", label: "Light Mode", icon: <Sun className="w-4 h-4" /> },
  { id: "dark", label: "Dark Mode", icon: <Moon className="w-4 h-4" /> },
];

const LANGUAGES = [
  { id: "en", label: "English", flag: "🇺🇸" },
  { id: "ur", label: "اردو", flag: "🇵🇰" },
  { id: "ar", label: "عربي", flag: "🇸🇦" },
];

export default function RightSidebar() {
  const { rightSidebarOpen, toggleRightSidebar, activeLauncher, setActiveLauncher, displayMode, setDisplayMode, language, setLanguage } = useApp();
  if (!rightSidebarOpen) return null;

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const textColor = isDark ? "text-white" : "text-gray-800";
  const subText = isDark ? "text-white/60" : "text-gray-500";
  const divider = isDark ? "border-white/20" : "border-gray-200";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-gray-50";
  const activeBg = isDark ? "bg-white/20" : "bg-emerald-50";

  return (
    <>
      <div className="fixed inset-0 z-[199] bg-black/30" onClick={toggleRightSidebar} />
      <div className="sidebar-overlay sidebar-right animate-slide-in-right overflow-y-auto">
        <div className="flex items-center justify-between px-4 pt-10 pb-3">
          <button onClick={toggleRightSidebar} className={`p-2 rounded-full ${hoverBg}`} aria-label="Close">
            <X className={`w-4 h-4 ${textColor}`} />
          </button>
          <div className="text-right">
            <div className={`text-sm font-bold ${textColor}`}>Display & Theme</div>
            <div className={`text-[10px] ${subText}`}>Customize your experience</div>
          </div>
        </div>

        <div className={`border-t ${divider} mx-3 mb-3`} />

        {/* Launchers */}
        <div className={`px-4 text-[10px] font-bold ${subText} mb-2 flex items-center gap-1`}>
          <Palette className="w-3 h-3" /> LAUNCHERS
        </div>
        <div className="px-3 space-y-1.5 max-h-[45vh] overflow-y-auto scrollbar-hide">
          {LAUNCHERS.map((l) => (
            <button
              key={l.id}
              onClick={() => { setActiveLauncher(l); toggleRightSidebar(); }}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all ${activeLauncher.id === l.id ? activeBg : hoverBg}`}
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 border border-white/50">
                {l.bgImage
                  ? <img src={l.bgImage} alt={l.name} className="w-full h-full object-cover" />
                  : <div className={`w-full h-full ${l.bgClass}`} />
                }
              </div>
              <div className="text-left flex-1">
                <div className={`text-[11px] font-semibold ${textColor} ${activeLauncher.id === l.id ? "" : ""}`}>{l.name}</div>
                <div className={`text-[9px] ${subText}`}>{l.description}</div>
              </div>
              {activeLauncher.id === l.id && (
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.accentColor }} />
              )}
            </button>
          ))}
        </div>

        <div className={`border-t ${divider} mx-3 my-3`} />

        {/* Display modes */}
        <div className={`px-4 text-[10px] font-bold ${subText} mb-2`}>DISPLAY MODE</div>
        <div className="px-3 grid grid-cols-2 gap-1.5 mb-3">
          {DISPLAY_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setDisplayMode(m.id)}
              className={`flex items-center gap-2 px-2 py-2 rounded-xl text-[10px] font-medium transition-all ${displayMode === m.id ? activeBg : hoverBg} ${textColor}`}
            >
              <span style={displayMode === m.id ? { color: activeLauncher.accentColor } : {}}>{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        {/* Language */}
        <div className={`px-4 text-[10px] font-bold ${subText} mb-2`}>LANGUAGE</div>
        <div className="px-3 flex gap-2 pb-8">
          {LANGUAGES.map((l) => (
            <button
              key={l.id}
              onClick={() => setLanguage(l.id as "en" | "ur" | "ar")}
              className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all text-[10px] ${language === l.id ? activeBg : hoverBg} ${textColor} font-medium`}
            >
              <span className="text-base">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
