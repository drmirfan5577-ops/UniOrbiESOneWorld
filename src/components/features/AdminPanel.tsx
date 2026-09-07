import React, { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { X, Lock, Shield, Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { LAUNCHERS } from "@/constants/launchers";

const DEFAULT_PASSWORD = "@1122#";

export default function AdminPanel() {
  const { isAdminOpen, setAdminOpen, activeLauncher, setActiveLauncher } = useApp();
  const [step, setStep] = useState<"login" | "panel">("login");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("launchers");

  if (!isAdminOpen) return null;

  function handleLogin() {
    if (password === DEFAULT_PASSWORD) {
      setStep("panel");
      setError("");
    } else {
      setError("Incorrect password. Default: @1122#");
    }
  }

  function handleClose() {
    setAdminOpen(false);
    setStep("login");
    setPassword("");
    setError("");
  }

  const sections = [
    { id: "launchers", label: "Launchers" },
    { id: "features", label: "Features" },
    { id: "integrations", label: "Integrations" },
    { id: "display", label: "Display" },
    { id: "users", label: "Users" },
    { id: "addmore", label: "Add More" },
  ];

  return (
    <div className="admin-modal animate-fade-in">
      <div className="w-full max-w-sm mx-4 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col" style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(40px)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ background: `linear-gradient(135deg, ${activeLauncher.accentColor}, ${activeLauncher.accentColor}BB)` }}>
          <div className="flex items-center gap-2 text-white">
            <Shield className="w-5 h-5" />
            <div>
              <div className="text-sm font-bold">Admin Panel</div>
              <div className="text-[10px] opacity-80">ESOneWorld Control Center</div>
            </div>
          </div>
          <button onClick={handleClose} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === "login" && (
          <div className="p-6 flex-1 flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: `${activeLauncher.accentColor}22` }}>
                <Lock className="w-8 h-8" style={{ color: activeLauncher.accentColor }} />
              </div>
              <div className="text-sm font-bold text-gray-800">Secure Access Required</div>
              <div className="text-[11px] text-gray-500 mt-1">Enter admin password to proceed</div>
            </div>

            <div className="relative mb-3">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 text-sm outline-none focus:border-current pr-10"
                style={{ borderColor: error ? "#DC143C" : password ? activeLauncher.accentColor : undefined }}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                aria-label="Toggle visibility"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && <div className="text-[11px] text-red-500 text-center mb-3">{error}</div>}

            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-2xl text-white font-bold text-sm"
              style={{ background: activeLauncher.accentColor }}
            >
              Access Admin Panel
            </button>
            <div className="text-center text-[10px] text-gray-400 mt-3">
              Strongly password protected
            </div>
          </div>
        )}

        {step === "panel" && (
          <>
            {/* Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100 px-2 py-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] font-semibold mr-1 transition-all ${activeSection === s.id ? "text-white" : "text-gray-500"}`}
                  style={activeSection === s.id ? { background: activeLauncher.accentColor } : {}}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3">
              {activeSection === "launchers" && (
                <div>
                  <div className="text-[11px] font-bold text-gray-500 mb-2">LAUNCHER MANAGEMENT</div>
                  {LAUNCHERS.map((l) => (
                    <div key={l.id} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 mb-2">
                      <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                        {l.bgImage ? <img src={l.bgImage} alt={l.name} className="w-full h-full object-cover" /> : <div className={`w-full h-full ${l.bgClass}`} />}
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-gray-800">{l.name}</div>
                        <div className="text-[9px] text-gray-400">{l.description}</div>
                      </div>
                      <button
                        onClick={() => { setActiveLauncher(l); handleClose(); }}
                        className="px-2 py-1 rounded-lg text-[9px] font-bold text-white"
                        style={{ background: activeLauncher.id === l.id ? activeLauncher.accentColor : "#999" }}
                      >
                        {activeLauncher.id === l.id ? "Active" : "Set"}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === "features" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-gray-500 mb-2">FEATURE CONTROLS</div>
                  {[
                    "Bottom Navigation", "Left Sidebar", "Right Sidebar", "News Ticker",
                    "Islamic Date", "Weather Widget", "Currency Rates", "Search Bar",
                    "App Grid", "Bismillah Display", "Time Display",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-gray-50">
                      <span className="text-[11px] font-medium text-gray-700">{feat}</span>
                      <div
                        className="w-10 h-5 rounded-full relative cursor-pointer"
                        style={{ background: i % 3 !== 0 ? activeLauncher.accentColor : "#DDD" }}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${i % 3 !== 0 ? "right-0.5" : "left-0.5"} shadow-sm`} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === "integrations" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-gray-500 mb-2">SOCIAL MEDIA</div>
                  {["YouTube","WhatsApp","Facebook","Twitter X","TikTok","Instagram","Telegram"].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-gray-50">
                      <span className="text-base">{"📘📷▶️🐦🎵📸✈️".split("").filter((_,j) => j === i)[0] || "🔗"}</span>
                      <span className="text-[11px] font-medium text-gray-700 flex-1">{s}</span>
                      <button className="px-2 py-1 rounded-lg text-[9px] font-bold text-white" style={{ background: activeLauncher.accentColor }}>Connect</button>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === "display" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-gray-500 mb-2">DISPLAY SETTINGS</div>
                  {["Super Bright","Pure Milky White","Holographic","Semi-Transparent","Dark Mode","Light Mode"].map((m, i) => (
                    <button key={i} className="flex items-center justify-between w-full p-3 rounded-2xl bg-gray-50">
                      <span className="text-[11px] font-medium text-gray-700">{m}</span>
                      <div className="w-3 h-3 rounded-full" style={{ background: i === 0 ? activeLauncher.accentColor : "#DDD" }} />
                    </button>
                  ))}
                </div>
              )}

              {activeSection === "users" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-gray-500 mb-2">USER MANAGEMENT</div>
                  <div className="p-4 rounded-2xl bg-gray-50 text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="text-sm font-bold text-gray-800">Total Users: 1,284</div>
                    <div className="text-[10px] text-gray-500">OTP-verified accounts</div>
                  </div>
                  {["Add User", "Remove User", "Manage Permissions", "Export Data"].map((action, i) => (
                    <button key={i} className="flex items-center gap-2 w-full p-3 rounded-2xl bg-gray-50">
                      <Plus className="w-4 h-4" style={{ color: activeLauncher.accentColor }} />
                      <span className="text-[11px] font-medium text-gray-700">{action}</span>
                    </button>
                  ))}
                </div>
              )}

              {activeSection === "addmore" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-gray-500 mb-2">ADD MORE FEATURES</div>
                  {[
                    { label: "Import App/Site", icon: "📥" },
                    { label: "Add Social Channel", icon: "📡" },
                    { label: "Connect AI Model", icon: "🤖" },
                    { label: "Add Hosting Service", icon: "🖥️" },
                    { label: "Install WordPress", icon: "🌐" },
                    { label: "Add Custom Domain", icon: "🔗" },
                    { label: "Create Email Account", icon: "📧" },
                  ].map((item, i) => (
                    <button key={i} className="flex items-center gap-3 w-full p-3 rounded-2xl bg-gray-50">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-[11px] font-medium text-gray-700 flex-1 text-left">{item.label}</span>
                      <Plus className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
