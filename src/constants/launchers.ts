import { Launcher } from "@/types";
import launcherSmart from "@/assets/launcher-smart.jpg";
import launcherCrimson from "@/assets/launcher-crimson.jpg";
import launcherEmerald from "@/assets/launcher-emerald.jpg";
import launcherRedEnergy from "@/assets/launcher-redenergy.jpg";
import launcherHolographic from "@/assets/launcher-holographic.jpg";
import launcherGolden from "@/assets/launcher-golden.jpg";
import launcherSapphire from "@/assets/launcher-sapphire.jpg";
import launcherDiamond from "@/assets/launcher-diamond.jpg";
import launcherAurora from "@/assets/launcher-aurora.jpg";
import launcherRose from "@/assets/launcher-rose.jpg";

export const LAUNCHERS: Launcher[] = [
  {
    id: "smart",
    name: "Smart World Order",
    description: "Crystal white luminous dashboard",
    bgClass: "launcher-smart",
    bgImage: launcherSmart,
    accentColor: "#00C896",
    glowClass: "glow-emerald",
    textClass: "tube-text-emerald",
    iconBg: "bg-white/80",
    navBg: "bg-white/90",
    navTextClass: "text-emerald-700",
    topBarBg: "bg-white/85",
    wallpaperUrl: launcherSmart,
  },
  {
    id: "crimson",
    name: "Crimson Ice",
    description: "Frozen ruby crystal theme",
    bgClass: "launcher-crimson",
    bgImage: launcherCrimson,
    accentColor: "#DC143C",
    glowClass: "glow-crimson",
    textClass: "text-red-200",
    iconBg: "bg-red-950/60",
    navBg: "bg-red-950/80",
    navTextClass: "text-red-200",
    topBarBg: "bg-red-950/70",
    wallpaperUrl: launcherCrimson,
  },
  {
    id: "emerald",
    name: "Emerald Galaxy",
    description: "Deep space emerald nebula",
    bgClass: "launcher-emerald",
    bgImage: launcherEmerald,
    accentColor: "#00FF88",
    glowClass: "glow-emerald",
    textClass: "text-emerald-300",
    iconBg: "bg-emerald-950/60",
    navBg: "bg-emerald-950/80",
    navTextClass: "text-emerald-300",
    topBarBg: "bg-emerald-950/70",
    wallpaperUrl: launcherEmerald,
  },
  {
    id: "uniedge",
    name: "UniEdge Glass",
    description: "Clean polished glass panel",
    bgClass: "launcher-uniedge",
    bgImage: undefined,
    accentColor: "#6C63FF",
    glowClass: "glow-sapphire",
    textClass: "tube-text-sapphire",
    iconBg: "bg-white/90",
    navBg: "bg-white/90",
    navTextClass: "text-indigo-700",
    topBarBg: "bg-white/90",
    wallpaperUrl: launcherHolographic,
  },
  {
    id: "redenergy",
    name: "Red Energy",
    description: "Abstract crimson energy waves",
    bgClass: "launcher-redenergy",
    bgImage: launcherRedEnergy,
    accentColor: "#FF4400",
    glowClass: "glow-crimson",
    textClass: "text-orange-200",
    iconBg: "bg-red-900/60",
    navBg: "bg-red-900/80",
    navTextClass: "text-orange-200",
    topBarBg: "bg-red-900/70",
    wallpaperUrl: launcherRedEnergy,
  },
  {
    id: "holographic",
    name: "Holographic Pearl",
    description: "Iridescent milky white surface",
    bgClass: "launcher-holographic",
    bgImage: launcherHolographic,
    accentColor: "#CC44AA",
    glowClass: "glow-sapphire",
    textClass: "tube-text-rose",
    iconBg: "bg-white/85",
    navBg: "bg-white/90",
    navTextClass: "text-pink-600",
    topBarBg: "bg-white/90",
    wallpaperUrl: launcherHolographic,
  },
  {
    id: "golden",
    name: "Golden Sunrise",
    description: "Warm amber luxury display",
    bgClass: "launcher-golden",
    bgImage: launcherGolden,
    accentColor: "#C8960A",
    glowClass: "glow-gold",
    textClass: "tube-text-gold",
    iconBg: "bg-amber-50/90",
    navBg: "bg-amber-50/90",
    navTextClass: "text-amber-800",
    topBarBg: "bg-amber-50/90",
    wallpaperUrl: launcherGolden,
  },
  {
    id: "sapphire",
    name: "Sapphire Blue",
    description: "Ocean crystal blue interface",
    bgClass: "launcher-sapphire",
    bgImage: launcherSapphire,
    accentColor: "#0066FF",
    glowClass: "glow-sapphire",
    textClass: "tube-text-sapphire",
    iconBg: "bg-blue-50/90",
    navBg: "bg-blue-50/90",
    navTextClass: "text-blue-700",
    topBarBg: "bg-blue-50/90",
    wallpaperUrl: launcherSapphire,
  },
  {
    id: "diamond",
    name: "Diamond Crystal",
    description: "Ultra bright prismatic display",
    bgClass: "launcher-diamond",
    bgImage: launcherDiamond,
    accentColor: "#7744FF",
    glowClass: "glow-sapphire",
    textClass: "text-purple-700",
    iconBg: "bg-white/95",
    navBg: "bg-white/95",
    navTextClass: "text-purple-700",
    topBarBg: "bg-white/95",
    wallpaperUrl: launcherDiamond,
  },
  {
    id: "aurora",
    name: "Aurora Borealis",
    description: "Magical northern lights theme",
    bgClass: "launcher-aurora",
    bgImage: launcherAurora,
    accentColor: "#00FFAA",
    glowClass: "glow-emerald",
    textClass: "text-teal-300",
    iconBg: "bg-teal-950/60",
    navBg: "bg-teal-950/80",
    navTextClass: "text-teal-300",
    topBarBg: "bg-teal-950/70",
    wallpaperUrl: launcherAurora,
  },
  {
    id: "rose",
    name: "Rose Pearl",
    description: "Silky pink luxury digital display",
    bgClass: "launcher-rose",
    bgImage: launcherRose,
    accentColor: "#FF69B4",
    glowClass: "glow-crimson",
    textClass: "tube-text-rose",
    iconBg: "bg-pink-50/90",
    navBg: "bg-pink-50/90",
    navTextClass: "text-pink-600",
    topBarBg: "bg-pink-50/90",
    wallpaperUrl: launcherRose,
  },
];

export const APP_ICONS_ROW1 = [
  { id: "quran", name: "Quran Paak", emoji: "📖", color: "#4A90D9" },
  { id: "hadees", name: "Ahaadees Encyclopedia", emoji: "📚", color: "#8B7355" },
  { id: "prayers", name: "Prayers Azkaars", emoji: "🤲", color: "#6B4FBB" },
  { id: "smart", name: "Smart Interpretation", emoji: "💡", color: "#E040FB" },
  { id: "qscience", name: "Quran & Science", emoji: "⚛️", color: "#1565C0" },
];

export const APP_ICONS_ROW2 = [
  { id: "facebook", name: "Facebook", emoji: "📘", color: "#1877F2" },
  { id: "instagram", name: "Instagram", emoji: "📸", color: "#E1306C" },
  { id: "youtube", name: "YouTube", emoji: "▶️", color: "#FF0000" },
  { id: "appstore", name: "App Store", emoji: "🅰️", color: "#E91E63" },
  { id: "ajhub", name: "A.J Hub", emoji: "✕", color: "#000000" },
];

export const APP_ICONS_ROW3 = [
  { id: "islamichub", name: "Islamic Hub", emoji: "🕌", color: "#2196F3" },
  { id: "socialhub", name: "Social Hub", emoji: "🌐", color: "#1E88E5" },
  { id: "newshub", name: "News Hub", emoji: "📰", color: "#43A047" },
  { id: "aihub", name: "A.I Hub", emoji: "🧠", color: "#9C27B0" },
  { id: "smartseries", name: "SMART Series", emoji: "🔮", color: "#7B1FA2" },
];

export const APP_ICONS_ROW4 = [
  { id: "bbc1", name: "BBC", emoji: "📡", color: "#BB1919" },
  { id: "bbc2", name: "BBC World", emoji: "📡", color: "#BB1919" },
  { id: "globe", name: "Global Web", emoji: "🌍", color: "#1565C0" },
  { id: "orbi", name: "UniOrbi", emoji: "🪐", color: "#00838F" },
  { id: "aljazeera", name: "Al Jazeera", emoji: "📺", color: "#1A237E" },
];

export const APP_ICONS_ROW5 = [
  { id: "gmail", name: "Gmail", emoji: "📧", color: "#EA4335" },
  { id: "quran2", name: "Quran Paak", emoji: "📖", color: "#4A90D9" },
  { id: "hadees2", name: "Ahaadees Encyclopedia", emoji: "📚", color: "#8B7355" },
  { id: "prayers2", name: "Prayers Azkaars", emoji: "🤲", color: "#6B4FBB" },
];

export const APP_ICONS_ROW6 = [
  { id: "office", name: "OfficeSuite", emoji: "📋", color: "#4CAF50" },
  { id: "media", name: "Media Player", emoji: "🎬", color: "#5E35B1" },
  { id: "gallery", name: "Gallery", emoji: "🖼️", color: "#FB8C00" },
];

export const LEFT_SIDEBAR_ICONS = [
  "🔵","🅰️","📧","🔷","💎","📊","🔷","🌐","🔒","📱","⭐","📩"
];

export const RIGHT_SIDEBAR_ICONS = [
  "🔺","📨","💠","🟡","🔶","♟️","🟠","🌟","💙","🟣","🟤","💫"
];
