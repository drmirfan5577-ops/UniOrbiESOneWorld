import React from "react";
import { useApp } from "@/contexts/AppContext";

const NEWS = [
  "Global markets rise amid tech advancements  •  ",
  "Islamic Finance Summit 2026 opens in Dubai  •  ",
  "UniOrbi launches Global Family Platform  •  ",
  "New Quran translation released in 50 languages  •  ",
  "ESOneWorld welcomes 1 million users worldwide  •  ",
  "Digital transformation accelerates across MENA region  •  ",
  "Smart World Order initiative gains international support  •  ",
];

const STATUS = "System Status: All auto-updated features operational";

export default function NewsTicker() {
  const { activeLauncher } = useApp();

  return (
    <div className="flex-shrink-0">
      {/* News line */}
      <div
        className="overflow-hidden py-1"
        style={{
          background: `linear-gradient(90deg, ${activeLauncher.accentColor}22, ${activeLauncher.accentColor}44, ${activeLauncher.accentColor}22)`,
          borderTop: `1px solid ${activeLauncher.accentColor}44`,
        }}
      >
        <div className="news-ticker text-[10px] font-bold" style={{ color: activeLauncher.accentColor, textShadow: `0 0 8px ${activeLauncher.accentColor}` }}>
          📰 {NEWS.join("")}{NEWS.join("")}
        </div>
      </div>
      {/* Status line */}
      <div
        className="text-center py-0.5 text-[9px] font-bold"
        style={{
          background: "linear-gradient(90deg, #FF69B444, #FF69B488, #FF69B444)",
          color: "#CC1177",
          textShadow: "0 0 6px #FF69B4",
        }}
      >
        ⚡ {STATUS}
      </div>
    </div>
  );
}
