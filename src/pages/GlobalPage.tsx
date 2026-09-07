import React, { useState } from "react";
import { Users, Globe, Search, Plus } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const GROUPS = [
  { id: 1, name: "ESOneWorld Family", members: 12847, avatar: "🌍", category: "Community", active: true },
  { id: 2, name: "Islamic Knowledge Hub", members: 8943, avatar: "🕌", category: "Islamic", active: true },
  { id: 3, name: "UniOrbi Network", members: 5621, avatar: "🪐", category: "Tech", active: false },
  { id: 4, name: "Quran Study Circle", members: 3412, avatar: "📖", category: "Islamic", active: true },
  { id: 5, name: "Global News Forum", members: 9871, avatar: "📰", category: "News", active: true },
  { id: 6, name: "Smart World Builders", members: 2134, avatar: "🔧", category: "Tech", active: false },
  { id: 7, name: "Digital Dawah Network", members: 6728, avatar: "☪️", category: "Islamic", active: true },
];

const COMMUNITIES = [
  { id: 1, name: "Dr. Irfan Community", followers: "45.2K", avatar: "👨‍⚕️", verified: true },
  { id: 2, name: "Smart World Order", followers: "128K", avatar: "🌐", verified: true },
  { id: 3, name: "Islamic Renaissance", followers: "89.3K", avatar: "🌙", verified: true },
  { id: 4, name: "UniOrbi Platform", followers: "34.1K", avatar: "🚀", verified: true },
];

export default function GlobalPage() {
  const { activeLauncher } = useApp();
  const [activeTab, setActiveTab] = useState<"groups" | "communities">("groups");
  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const bg = isDark ? "bg-white/10 border-white/20" : "bg-white/80 border-white/60";
  const textC = isDark ? "text-white" : "text-gray-800";
  const subC = isDark ? "text-white/60" : "text-gray-500";

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className={`px-3 pt-3 pb-2 border-b ${isDark ? "border-white/20" : "border-gray-200"}`}>
        <div className="flex items-center justify-between mb-2">
          <div className={`text-base font-bold ${textC}`}>Global Network</div>
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: activeLauncher.accentColor }} aria-label="Create">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className={`flex items-center gap-2 ${bg} border rounded-full px-3 py-1.5`}>
          <Search className="w-3.5 h-3.5 opacity-50" />
          <input placeholder="Search groups & communities..." className="flex-1 bg-transparent text-[11px] outline-none placeholder-current opacity-60" />
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex border-b ${isDark ? "border-white/20" : "border-gray-200"}`}>
        {(["groups","communities"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex-1 py-2 text-[11px] font-semibold capitalize transition-all border-b-2 ${activeTab === t ? "border-current" : "border-transparent opacity-50"} ${textC}`}
            style={activeTab === t ? { borderColor: activeLauncher.accentColor, color: activeLauncher.accentColor } : {}}
          >
            {t === "groups" ? <><Users className="w-3.5 h-3.5 inline mr-1" />Groups</> : <><Globe className="w-3.5 h-3.5 inline mr-1" />Communities</>}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide p-3 space-y-2">
        {activeTab === "groups" && GROUPS.map((g) => (
          <div key={g.id} className={`flex items-center gap-3 p-3 rounded-2xl ${bg} border`}>
            <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xl ${isDark ? "bg-white/20" : "bg-gray-100"}`}>{g.avatar}</div>
            <div className="flex-1 min-w-0">
              <div className={`text-[12px] font-semibold ${textC}`}>{g.name}</div>
              <div className={`text-[10px] ${subC}`}>{g.members.toLocaleString()} members · {g.category}</div>
            </div>
            <button
              className="px-3 py-1.5 rounded-full text-[10px] font-bold"
              style={{ background: activeLauncher.accentColor + "22", color: activeLauncher.accentColor, border: `1px solid ${activeLauncher.accentColor}44` }}
            >
              Join
            </button>
          </div>
        ))}

        {activeTab === "communities" && COMMUNITIES.map((c) => (
          <div key={c.id} className={`flex items-center gap-3 p-4 rounded-2xl ${bg} border`}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${isDark ? "bg-white/20" : "bg-gray-100"}`}>{c.avatar}</div>
            <div className="flex-1 min-w-0">
              <div className={`flex items-center gap-1 text-[12px] font-semibold ${textC}`}>
                {c.name}
                {c.verified && <span style={{ color: activeLauncher.accentColor }}>✓</span>}
              </div>
              <div className={`text-[10px] ${subC}`}>{c.followers} followers</div>
            </div>
            <button
              className="px-3 py-1.5 rounded-full text-white text-[10px] font-bold"
              style={{ background: activeLauncher.accentColor }}
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
