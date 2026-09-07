import React, { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { Play, BookOpen, Moon } from "lucide-react";

const SURAHS = [
  { id: 1, name: "Al-Fatiha", arabic: "الفاتحة", verses: 7, meaning: "The Opening" },
  { id: 2, name: "Al-Baqarah", arabic: "البقرة", verses: 286, meaning: "The Cow" },
  { id: 3, name: "Al-Imran", arabic: "آل عمران", verses: 200, meaning: "Family of Imran" },
  { id: 4, name: "An-Nisa", arabic: "النساء", verses: 176, meaning: "The Women" },
  { id: 5, name: "Al-Ma'idah", arabic: "المائدة", verses: 120, meaning: "The Table" },
  { id: 36, name: "Ya-Sin", arabic: "يس", verses: 83, meaning: "Ya Sin" },
  { id: 55, name: "Ar-Rahman", arabic: "الرحمن", verses: 78, meaning: "The Merciful" },
  { id: 112, name: "Al-Ikhlas", arabic: "الإخلاص", verses: 4, meaning: "Sincerity" },
];

const HADEES = [
  { text: "The best of you are those who learn the Quran and teach it.", source: "Bukhari" },
  { text: "Seeking knowledge is an obligation upon every Muslim.", source: "Ibn Majah" },
  { text: "Indeed, actions are judged by intentions.", source: "Bukhari & Muslim" },
];

const SERIES = [
  { title: "Life of Prophet Muhammad ﷺ", episodes: 120, progress: 45 },
  { title: "Stories of the Prophets", episodes: 80, progress: 23 },
  { title: "Companions of the Prophet", episodes: 60, progress: 10 },
  { title: "Quran & Modern Science", episodes: 40, progress: 0 },
];

export default function ParadisePage() {
  const { activeLauncher } = useApp();
  const [activeSection, setActiveSection] = useState<"quran" | "hadees" | "series">("quran");

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const bg = isDark ? "bg-white/10 border-white/20" : "bg-white/80 border-white/60";
  const textC = isDark ? "text-white" : "text-gray-800";
  const subC = isDark ? "text-white/60" : "text-gray-500";

  const sections = [
    { id: "quran", label: "Quran", icon: "📖" },
    { id: "hadees", label: "Hadees", icon: "📚" },
    { id: "series", label: "Series", icon: "🎬" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className={`px-3 pt-3 pb-2 text-center border-b ${isDark ? "border-white/20" : "border-gray-200"}`}>
        <div className="arabic-text text-xl font-bold tube-text-gold animate-tube-glow">☪️ جنة — Paradise</div>
        <div className={`text-[10px] ${subC}`}>Islamic Knowledge & Wisdom</div>
      </div>

      {/* Section tabs */}
      <div className={`flex border-b ${isDark ? "border-white/20" : "border-gray-200"}`}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id as typeof activeSection)}
            className={`flex-1 py-2 text-[11px] font-semibold transition-all border-b-2 ${activeSection === s.id ? "border-current" : "border-transparent opacity-50"} ${textC}`}
            style={activeSection === s.id ? { borderColor: activeLauncher.accentColor, color: activeLauncher.accentColor } : {}}
          >
            {s.icon} {s.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide p-3">
        {activeSection === "quran" && (
          <div className="space-y-2">
            <div className={`p-4 rounded-2xl ${bg} border text-center mb-3`}>
              <div className="arabic-text text-2xl font-bold tube-text-gold">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
              <div className={`text-[10px] ${subC} mt-1`}>In the name of Allah, the Most Gracious, the Most Merciful</div>
            </div>
            {SURAHS.map((s) => (
              <div key={s.id} className={`flex items-center gap-3 p-3 rounded-2xl ${bg} border`}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                  style={{ background: activeLauncher.accentColor }}
                >
                  {s.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className={`text-[12px] font-semibold ${textC}`}>{s.name}</span>
                    <span className="arabic-text text-[14px] font-bold" style={{ color: activeLauncher.accentColor }}>{s.arabic}</span>
                  </div>
                  <div className={`text-[10px] ${subC}`}>{s.meaning} · {s.verses} verses</div>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: activeLauncher.accentColor }} aria-label="Play">
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeSection === "hadees" && (
          <div className="space-y-3">
            <div className={`p-4 rounded-2xl text-center ${bg} border mb-2`}>
              <Moon className="w-8 h-8 mx-auto mb-2" style={{ color: activeLauncher.accentColor }} />
              <div className={`text-sm font-bold ${textC}`}>Ahaadees Encyclopedia</div>
              <div className={`text-[10px] ${subC}`}>Authentic Hadith collection</div>
            </div>
            {HADEES.map((h, i) => (
              <div key={i} className={`p-4 rounded-2xl ${bg} border`}>
                <div className={`text-[12px] leading-relaxed ${textC} italic mb-2`}>"{h.text}"</div>
                <div className={`text-[10px] font-bold`} style={{ color: activeLauncher.accentColor }}>— {h.source}</div>
              </div>
            ))}
            <div className={`p-3 rounded-2xl ${bg} border`}>
              <div className={`text-[11px] font-bold ${textC} mb-1`}>📿 Azkar & Prayers</div>
              {["Morning Azkar","Evening Azkar","Salah Times","Qibla Direction"].map((item, i) => (
                <button key={i} className={`flex items-center gap-2 w-full py-2 text-left ${subC} text-[11px] border-b ${isDark ? "border-white/10" : "border-gray-100"} last:border-0`}>
                  <span>🤲</span>{item}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeSection === "series" && (
          <div className="space-y-3">
            {SERIES.map((s, i) => (
              <div key={i} className={`p-4 rounded-2xl ${bg} border`}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className={`text-[12px] font-bold ${textC}`}>{s.title}</div>
                    <div className={`text-[10px] ${subC}`}>{s.episodes} episodes</div>
                  </div>
                  <button className="px-3 py-1.5 rounded-full text-white text-[10px] font-bold flex-shrink-0" style={{ background: activeLauncher.accentColor }}>
                    {s.progress > 0 ? "Continue" : "Start"}
                  </button>
                </div>
                {s.progress > 0 && (
                  <div>
                    <div className={`text-[9px] ${subC} mb-1`}>{s.progress}% complete</div>
                    <div className={`h-1.5 rounded-full ${isDark ? "bg-white/20" : "bg-gray-200"} overflow-hidden`}>
                      <div className="h-full rounded-full" style={{ width: `${s.progress}%`, background: activeLauncher.accentColor }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
