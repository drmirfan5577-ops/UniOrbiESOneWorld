import React, { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { ExternalLink, ChevronRight } from "lucide-react";

const UNIORBI_APPS = [
  { id: "unifeel", name: "UniFeel", emoji: "💙", desc: "Emotional AI companion", url: "https://uniorbi.com/unifeel" },
  { id: "uniedge", name: "UniEdge", emoji: "⚡", desc: "Smart productivity suite", url: "https://uniorbi.com/uniedge" },
  { id: "uniweb", name: "UniWeb", emoji: "🌐", desc: "Advanced web browser", url: "https://uniorbi.com/uniweb" },
  { id: "unihome", name: "UniHome", emoji: "🏠", desc: "Smart home control", url: "https://uniorbi.com/unihome" },
  { id: "unihost", name: "UniHost", emoji: "🖥️", desc: "Hosting management", url: "https://uniorbi.com/unihost" },
  { id: "unimail", name: "Uni Mail", emoji: "📧", desc: "@uniorbi.com email", url: "https://mail.uniorbi.com" },
  { id: "uninews", name: "UniNews", emoji: "📰", desc: "Global news aggregator", url: "https://uniorbi.com/uninews" },
  { id: "uniflow", name: "UniFlow", emoji: "🔄", desc: "Workflow automation", url: "https://uniorbi.com/uniflow" },
];

const INTEGRATIONS = [
  { label: "Netlify", emoji: "🔷", status: "Active" },
  { label: "GitHub", emoji: "🐙", status: "Active" },
  { label: "Vercel", emoji: "▲", status: "Ready" },
  { label: "Firebase", emoji: "🔥", status: "Available" },
  { label: "Supabase", emoji: "⚡", status: "Available" },
  { label: "Cloudflare", emoji: "🌊", status: "Available" },
  { label: "Zoho", emoji: "🟡", status: "Connected" },
  { label: "Resend", emoji: "📨", status: "Active" },
];

const AI_MODELS = [
  { label: "Claude AI", emoji: "🤖", company: "Anthropic" },
  { label: "ChatGPT", emoji: "🧠", company: "OpenAI" },
  { label: "Gemini", emoji: "♊", company: "Google" },
  { label: "Perplexity", emoji: "🔍", company: "Perplexity AI" },
  { label: "Grok", emoji: "𝕏", company: "xAI" },
];

export default function ESmartPage() {
  const { activeLauncher } = useApp();
  const [activeSection, setActiveSection] = useState<"apps" | "integrations" | "ai">("apps");

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const bg = isDark ? "bg-white/10 border-white/20" : "bg-white/80 border-white/60";
  const textC = isDark ? "text-white" : "text-gray-800";
  const subC = isDark ? "text-white/60" : "text-gray-500";

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className={`px-3 pt-3 pb-2 border-b ${isDark ? "border-white/20" : "border-gray-200"}`}>
        <div className={`text-base font-black ${textC} flex items-center gap-2`}>
          <span className="text-xl">🪐</span>
          <div>
            <div>UniOrbi</div>
            <div className={`text-[9px] font-normal ${subC}`}>@uniorbi.com · The Main Platform</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex border-b ${isDark ? "border-white/20" : "border-gray-200"} text-[11px] font-semibold`}>
        {(["apps","integrations","ai"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveSection(t)}
            className={`flex-1 py-2 capitalize transition-all border-b-2 ${activeSection === t ? "border-current" : "border-transparent opacity-50"} ${textC}`}
            style={activeSection === t ? { borderColor: activeLauncher.accentColor, color: activeLauncher.accentColor } : {}}
          >
            {t === "apps" ? "📱 Apps" : t === "integrations" ? "🔗 Integrations" : "🤖 AI Models"}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide p-3">
        {activeSection === "apps" && (
          <div className="space-y-2">
            <div className={`p-4 rounded-2xl text-center mb-3`} style={{ background: `linear-gradient(135deg, ${activeLauncher.accentColor}22, ${activeLauncher.accentColor}44)`, border: `1px solid ${activeLauncher.accentColor}44` }}>
              <div className={`text-sm font-black ${textC}`}>UniOrbi Platform</div>
              <div className={`text-[10px] ${subC}`}>Your personal apps linked through domains & email</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {UNIORBI_APPS.map((app) => (
                <button key={app.id} className={`flex items-center gap-2 p-3 rounded-2xl ${bg} border text-left active:scale-95 transition-transform`}>
                  <span className="text-xl flex-shrink-0">{app.emoji}</span>
                  <div className="min-w-0">
                    <div className={`text-[11px] font-bold ${textC}`}>{app.name}</div>
                    <div className={`text-[9px] ${subC} leading-tight`}>{app.desc}</div>
                  </div>
                  <ExternalLink className="w-3 h-3 flex-shrink-0 opacity-40" />
                </button>
              ))}
            </div>
          </div>
        )}

        {activeSection === "integrations" && (
          <div className="space-y-2">
            <div className={`text-[11px] font-bold ${subC} mb-2`}>HOSTING & DEPLOYMENT</div>
            {INTEGRATIONS.map((item, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl ${bg} border`}>
                <span className="text-xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className={`text-[12px] font-semibold ${textC}`}>{item.label}</div>
                </div>
                <span
                  className="px-2 py-0.5 rounded-full text-[9px] font-bold"
                  style={item.status === "Active" || item.status === "Connected"
                    ? { background: `${activeLauncher.accentColor}22`, color: activeLauncher.accentColor }
                    : { background: "#88888822", color: "#888" }
                  }
                >
                  {item.status}
                </span>
                <ChevronRight className={`w-4 h-4 ${subC}`} />
              </div>
            ))}
          </div>
        )}

        {activeSection === "ai" && (
          <div className="space-y-2">
            <div className={`text-[11px] font-bold ${subC} mb-2`}>AI MODELS & PLATFORMS</div>
            {AI_MODELS.map((m, i) => (
              <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl ${bg} border`}>
                <span className="text-2xl">{m.emoji}</span>
                <div className="flex-1">
                  <div className={`text-[12px] font-bold ${textC}`}>{m.label}</div>
                  <div className={`text-[10px] ${subC}`}>{m.company}</div>
                </div>
                <button className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white" style={{ background: activeLauncher.accentColor }}>
                  Connect
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
