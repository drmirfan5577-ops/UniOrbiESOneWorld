import React, { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { Image, Lock, Settings, Info, Mail, Shield, Eye, Globe } from "lucide-react";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=200&h=200&fit=crop&order_by=latest",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&order_by=latest",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop&order_by=latest",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&h=200&fit=crop&order_by=latest",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=200&h=200&fit=crop&order_by=latest",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=200&fit=crop&order_by=latest",
];

const CONTACT_EMAILS = [
  { label: "Admin", email: "Admin@drirfan.online", icon: "🛡️" },
  { label: "Contact", email: "Contact@drirfan.online", icon: "📞" },
  { label: "Info", email: "Info@drirfan.online", icon: "ℹ️" },
  { label: "Dr. Irfan", email: "drirfan5577@drirfan.online", icon: "👨‍⚕️" },
  { label: "Support", email: "Support@drirfan.online", icon: "🆘" },
];

export default function ESOneWorldPage() {
  const { activeLauncher, setAdminOpen } = useApp();
  const [activeSection, setActiveSection] = useState<"gallery" | "settings" | "about">("gallery");

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const bg = isDark ? "bg-white/10 border-white/20" : "bg-white/80 border-white/60";
  const textC = isDark ? "text-white" : "text-gray-800";
  const subC = isDark ? "text-white/60" : "text-gray-500";

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className={`px-3 pt-3 pb-2 border-b ${isDark ? "border-white/20" : "border-gray-200"}`}>
        <div className={`text-base font-black ${textC} flex items-center gap-2`}>
          <span className="text-xl">🌍</span>
          <div>
            <div>ESOneWorld</div>
            <div className={`text-[9px] font-normal ${subC} italic`}>"A Global Family Platform"</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex border-b ${isDark ? "border-white/20" : "border-gray-200"} text-[11px] font-semibold`}>
        {(["gallery","settings","about"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveSection(t)}
            className={`flex-1 py-2 capitalize transition-all border-b-2 ${activeSection === t ? "border-current" : "border-transparent opacity-50"} ${textC}`}
            style={activeSection === t ? { borderColor: activeLauncher.accentColor, color: activeLauncher.accentColor } : {}}
          >
            {t === "gallery" ? <><Image className="w-3.5 h-3.5 inline mr-1" />Gallery</> : t === "settings" ? <><Settings className="w-3.5 h-3.5 inline mr-1" />Settings</> : <><Info className="w-3.5 h-3.5 inline mr-1" />About</>}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide p-3">
        {activeSection === "gallery" && (
          <div>
            <div className={`text-[11px] font-bold ${subC} mb-2`}>MEDIA GALLERY</div>
            <div className="grid grid-cols-3 gap-1.5">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden">
                  <img src={url} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <div className={`mt-4 p-3 rounded-2xl ${bg} border`}>
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4" style={{ color: activeLauncher.accentColor }} />
                <span className={`text-[12px] font-bold ${textC}`}>Secure Locker</span>
              </div>
              <div className={`text-[10px] ${subC}`}>Private encrypted media storage</div>
            </div>
          </div>
        )}

        {activeSection === "settings" && (
          <div className="space-y-2">
            {[
              { icon: <Globe className="w-4 h-4" />, label: "Language & Region", sub: "English, Urdu, Arabic" },
              { icon: <Eye className="w-4 h-4" />, label: "Display Mode", sub: "Super Bright · Active" },
              { icon: <Shield className="w-4 h-4" />, label: "Privacy Policy", sub: "View full policy" },
              { icon: <Lock className="w-4 h-4" />, label: "Disclaimer", sub: "Terms & Conditions" },
              { icon: <Info className="w-4 h-4" />, label: "Copyrights", sub: "© 2026 ESOneWorld" },
              { icon: <Shield className="w-4 h-4" />, label: "Warnings", sub: "Usage guidelines" },
            ].map((item, i) => (
              <button key={i} className={`flex items-center gap-3 w-full p-3 rounded-2xl ${bg} border text-left`}>
                <span style={{ color: activeLauncher.accentColor }}>{item.icon}</span>
                <div className="flex-1">
                  <div className={`text-[12px] font-semibold ${textC}`}>{item.label}</div>
                  <div className={`text-[10px] ${subC}`}>{item.sub}</div>
                </div>
              </button>
            ))}

            {/* Admin Panel button */}
            <button
              onClick={() => setAdminOpen(true)}
              className="flex items-center gap-3 w-full p-4 rounded-2xl text-white mt-2 active:scale-95 transition-transform"
              style={{ background: `linear-gradient(135deg, ${activeLauncher.accentColor}, ${activeLauncher.accentColor}BB)` }}
            >
              <Shield className="w-5 h-5" />
              <div className="flex-1 text-left">
                <div className="text-[13px] font-bold">Admin Panel</div>
                <div className="text-[10px] opacity-80">Full command & control</div>
              </div>
              <Lock className="w-4 h-4 opacity-80" />
            </button>
          </div>
        )}

        {activeSection === "about" && (
          <div className="space-y-3">
            <div className={`p-4 rounded-2xl text-center ${bg} border`}
              style={{ background: `linear-gradient(135deg, ${activeLauncher.accentColor}11, ${activeLauncher.accentColor}22)` }}
            >
              <div className="text-3xl mb-2">🌍</div>
              <div className={`text-sm font-black ${textC}`}>ESOneWorld</div>
              <div className={`text-[11px] ${subC} italic mt-1`}>
                "Neither a Global Village, nor a Global Community —<br />it's a <strong>Global Family Platform</strong>"
              </div>
            </div>

            <div className={`p-4 rounded-2xl ${bg} border`}>
              <div className={`text-[12px] font-bold ${textC} mb-2`}>🎯 Our Vision & Mission</div>
              <div className={`text-[11px] ${subC} leading-relaxed`}>
                To unite humanity under the umbrella of a Global Family — connecting hearts, minds, and souls through faith, knowledge, technology, and compassion. Building bridges across cultures and nations.
              </div>
            </div>

            <div className={`p-4 rounded-2xl ${bg} border`}>
              <div className={`text-[12px] font-bold ${textC} mb-3`}>📬 Contact & Connect</div>
              {CONTACT_EMAILS.map((c, i) => (
                <div key={i} className={`flex items-center gap-2 py-1.5 border-b ${isDark ? "border-white/10" : "border-gray-100"} last:border-0`}>
                  <span className="text-base">{c.icon}</span>
                  <div>
                    <div className={`text-[10px] font-bold ${textC}`}>{c.label}</div>
                    <div className={`text-[10px]`} style={{ color: activeLauncher.accentColor }}>{c.email}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-3 rounded-2xl ${bg} border text-center`}>
              <div className={`text-[10px] ${subC}`}>© 2026 ESOneWorld · Smart World Order</div>
              <div className={`text-[10px] ${subC}`}>drirfan.online · uniorbi.com</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
