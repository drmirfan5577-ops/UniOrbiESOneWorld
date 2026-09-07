import React from "react";
import { Home, Users, Globe, Zap, Star, Globe2 } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { ActiveTab } from "@/types";

const NAV_ITEMS: { id: ActiveTab; label: string; icon: React.ReactNode; shortLabel: string }[] = [
  { id: "home", label: "Home", shortLabel: "Home", icon: <Home className="w-5 h-5" /> },
  { id: "guests", label: "Guest Room", shortLabel: "Guests", icon: <Users className="w-5 h-5" /> },
  { id: "global", label: "Global", shortLabel: "Global", icon: <Globe className="w-5 h-5" /> },
  { id: "esmart", label: "E-Smart", shortLabel: "E-Smart", icon: <Zap className="w-5 h-5" /> },
  { id: "paradise", label: "Paradise", shortLabel: "Paradise", icon: <Star className="w-5 h-5" /> },
  { id: "esonewworld", label: "ESOneWorld", shortLabel: "World", icon: <Globe2 className="w-5 h-5" /> },
];

export default function BottomNav() {
  const { activeTab, setActiveTab, activeLauncher } = useApp();
  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);

  return (
    <div
      className={`${activeLauncher.navBg} border-t ${isDark ? "border-white/20" : "border-white/70"} flex items-stretch`}
      style={{
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        paddingBottom: "env(safe-area-inset-bottom, 4px)",
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            className={`bottom-nav-item ${activeLauncher.navTextClass} relative`}
            onClick={() => setActiveTab(item.id)}
            aria-label={item.label}
          >
            <div
              className={`transition-all duration-200 ${isActive ? "scale-110" : "scale-90 opacity-60"}`}
              style={isActive ? {
                color: activeLauncher.accentColor,
                filter: `drop-shadow(0 0 6px ${activeLauncher.accentColor})`,
              } : {}}
            >
              {item.icon}
            </div>
            <span
              className={`text-[9px] font-semibold leading-none transition-all duration-200 ${isActive ? "" : "opacity-60"}`}
              style={isActive ? {
                color: activeLauncher.accentColor,
                textShadow: `0 0 8px ${activeLauncher.accentColor}`,
              } : {}}
            >
              {item.shortLabel}
            </span>
            {isActive && (
              <span
                className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                style={{ background: activeLauncher.accentColor, boxShadow: `0 0 6px ${activeLauncher.accentColor}` }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
