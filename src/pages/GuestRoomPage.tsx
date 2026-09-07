import React, { useState } from "react";
import { MessageCircle, Phone, Video, Radio, Image, Send, Mic, Smile } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const CONTACTS = [
  { id: 1, name: "Dr. Irfan", status: "online", avatar: "👨‍⚕️", lastMsg: "السلام عليكم", time: "now", unread: 3 },
  { id: 2, name: "Admin Team", status: "online", avatar: "👥", lastMsg: "New update available", time: "2m", unread: 1 },
  { id: 3, name: "Islamic Hub", status: "online", avatar: "🕌", lastMsg: "Jumu'ah Mubarak!", time: "1h", unread: 0 },
  { id: 4, name: "UniOrbi Support", status: "away", avatar: "🌐", lastMsg: "Your request has been...", time: "3h", unread: 0 },
  { id: 5, name: "News Channel", status: "online", avatar: "📰", lastMsg: "Breaking: Market update", time: "5h", unread: 5 },
  { id: 6, name: "Family Group", status: "online", avatar: "👨‍👩‍👧‍👦", lastMsg: "Eid preparations!", time: "1d", unread: 12 },
];

const MESSAGES = [
  { id: 1, from: "them", text: "السلام عليكم ورحمة الله وبركاته", time: "11:58 AM" },
  { id: 2, from: "me", text: "وعليكم السلام ورحمة الله", time: "11:59 AM" },
  { id: 3, from: "them", text: "How are you? Hope all is well!", time: "12:00 PM" },
  { id: 4, from: "me", text: "Alhamdulillah, all is great. How about you?", time: "12:01 PM" },
];

export default function GuestRoomPage() {
  const { activeLauncher } = useApp();
  const [activeView, setActiveView] = useState<"chats" | "calls" | "live" | "media">("chats");
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);
  const bg = isDark ? "bg-white/10 border-white/20" : "bg-white/80 border-white/60";
  const textC = isDark ? "text-white" : "text-gray-800";
  const subC = isDark ? "text-white/60" : "text-gray-500";

  const tabs = [
    { id: "chats", label: "Chats", icon: <MessageCircle className="w-4 h-4" /> },
    { id: "calls", label: "Calls", icon: <Phone className="w-4 h-4" /> },
    { id: "live", label: "Live", icon: <Radio className="w-4 h-4" /> },
    { id: "media", label: "Media", icon: <Image className="w-4 h-4" /> },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className={`flex border-b ${isDark ? "border-white/20" : "border-gray-200"} px-2 pt-1`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveView(tab.id as typeof activeView); setSelectedChat(null); }}
            className={`flex items-center gap-1 px-3 py-2 text-[11px] font-semibold transition-all border-b-2 ${
              activeView === tab.id
                ? `border-current`
                : "border-transparent opacity-50"
            } ${textC}`}
            style={activeView === tab.id ? { borderColor: activeLauncher.accentColor, color: activeLauncher.accentColor } : {}}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeView === "chats" && !selectedChat && (
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {CONTACTS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChat(c.id)}
              className={`flex items-center gap-3 w-full px-3 py-2.5 border-b ${isDark ? "border-white/10 hover:bg-white/10" : "border-gray-100 hover:bg-white/50"} transition-colors`}
            >
              <div className="relative">
                <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center text-xl`}>{c.avatar}</div>
                {c.status === "online" && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className={`text-[12px] font-semibold ${textC}`}>{c.name}</div>
                <div className={`text-[10px] ${subC} truncate`}>{c.lastMsg}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-[9px] ${subC}`}>{c.time}</span>
                {c.unread > 0 && (
                  <span className="w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center" style={{ background: activeLauncher.accentColor }}>
                    {c.unread > 9 ? "9+" : c.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {activeView === "chats" && selectedChat && (
        <div className="flex-1 flex flex-col">
          <div className={`flex items-center gap-2 px-3 py-2 border-b ${isDark ? "border-white/20" : "border-gray-200"}`}>
            <button onClick={() => setSelectedChat(null)} className={`text-[11px] ${subC}`}>← Back</button>
            <div className={`flex-1 text-[12px] font-bold ${textC}`}>{CONTACTS.find(c => c.id === selectedChat)?.name}</div>
            <Phone className="w-4 h-4" style={{ color: activeLauncher.accentColor }} />
            <Video className="w-4 h-4 ml-1" style={{ color: activeLauncher.accentColor }} />
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-hide p-3 space-y-2">
            {MESSAGES.map((m) => (
              <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-[11px] ${m.from === "me" ? "rounded-br-sm text-white" : `${bg} ${textC} rounded-bl-sm`}`}
                  style={m.from === "me" ? { background: activeLauncher.accentColor } : {}}
                >
                  <div>{m.text}</div>
                  <div className={`text-[8px] mt-0.5 ${m.from === "me" ? "text-white/70 text-right" : subC}`}>{m.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 border-t ${isDark ? "border-white/20" : "border-gray-200"}`}>
            <button aria-label="Emoji"><Smile className={`w-5 h-5 ${subC}`} /></button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className={`flex-1 ${bg} rounded-full px-3 py-1.5 text-[11px] outline-none ${textC} border`}
            />
            {message ? (
              <button
                onClick={() => setMessage("")}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                style={{ background: activeLauncher.accentColor }}
                aria-label="Send"
              ><Send className="w-4 h-4" /></button>
            ) : (
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: activeLauncher.accentColor }} aria-label="Mic">
                <Mic className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {activeView === "calls" && (
        <div className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-hide">
          <div className={`text-[11px] font-bold ${subC} mb-2`}>RECENT CALLS</div>
          {CONTACTS.slice(0, 5).map((c) => (
            <div key={c.id} className={`flex items-center gap-3 p-3 rounded-2xl ${bg} border`}>
              <span className="text-xl">{c.avatar}</span>
              <div className="flex-1">
                <div className={`text-[12px] font-semibold ${textC}`}>{c.name}</div>
                <div className={`text-[10px] text-green-500`}>↗ Outgoing · {c.time}</div>
              </div>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: activeLauncher.accentColor }} aria-label="Call">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {activeView === "live" && (
        <div className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-hide">
          <div className={`text-[11px] font-bold ${subC} mb-2`}>LIVE STREAMS</div>
          {["📡 Al Jazeera Live", "🕌 Makkah Live", "📰 News 24/7", "🎙️ UniOrbi Live"].map((ch, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl ${bg} border`}>
              <span className="text-xl">{ch.split(" ")[0]}</span>
              <div className="flex-1">
                <div className={`text-[12px] font-semibold ${textC}`}>{ch.substring(ch.indexOf(" ")+1)}</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className={`text-[10px] text-red-500 font-bold`}>LIVE</span>
                </div>
              </div>
              <button className="px-3 py-1 rounded-full text-white text-[10px] font-bold" style={{ background: activeLauncher.accentColor }}>Watch</button>
            </div>
          ))}
        </div>
      )}

      {activeView === "media" && (
        <div className="flex-1 p-3 overflow-y-auto scrollbar-hide">
          <div className={`text-[11px] font-bold ${subC} mb-2`}>SHARED MEDIA</div>
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded-xl ${bg} border flex items-center justify-center text-2xl`}>
                {["🖼️","🎵","🎬","📄","🖼️","🎵","📸","🎬","📄","🖼️","🎵","🎬"][i]}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
