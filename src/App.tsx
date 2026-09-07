import React from "react";
import { AppProvider, useApp } from "@/contexts/AppContext";
import BottomNav from "@/components/layout/BottomNav";
import TopBar from "@/components/layout/TopBar";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import NewsTicker from "@/components/layout/NewsTicker";
import AdminPanel from "@/components/features/AdminPanel";
import OTPLogin from "@/components/features/OTPLogin";
import HomePage from "@/pages/HomePage";
import GuestRoomPage from "@/pages/GuestRoomPage";
import GlobalPage from "@/pages/GlobalPage";
import ParadisePage from "@/pages/ParadisePage";
import ESmartPage from "@/pages/ESmartPage";
import ESOneWorldPage from "@/pages/ESOneWorldPage";

function MainApp() {
  const { activeTab, activeLauncher, isAuthenticated, isAdminOpen } = useApp();

  if (!isAuthenticated) return <OTPLogin />;

  const isDark = ["crimson","emerald","redenergy","aurora"].includes(activeLauncher.id);

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{
        backgroundImage: activeLauncher.bgImage ? `url(${activeLauncher.bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background overlay for dark launchers */}
      {!activeLauncher.bgImage && (
        <div className={`absolute inset-0 ${activeLauncher.bgClass}`} style={{ zIndex: 0 }} />
      )}

      {/* Glassmorphism overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 0,
          background: isDark
            ? "rgba(0,0,0,0.2)"
            : "rgba(255,255,255,0.15)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative flex flex-col h-full" style={{ zIndex: 1 }}>
        {/* Top bar */}
        <TopBar />

        {/* Main page content */}
        <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
          {activeTab === "home" && <HomePage />}
          {activeTab === "guests" && <GuestRoomPage />}
          {activeTab === "global" && <GlobalPage />}
          {activeTab === "paradise" && <ParadisePage />}
          {activeTab === "esmart" && <ESmartPage />}
          {activeTab === "esonewworld" && <ESOneWorldPage />}
        </div>

        {/* News ticker */}
        <NewsTicker />

        {/* Bottom nav */}
        <BottomNav />
      </div>

      {/* Sidebars */}
      <LeftSidebar />
      <RightSidebar />

      {/* Admin Panel */}
      {isAdminOpen && <AdminPanel />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
