import React, { createContext, useContext, useState, ReactNode } from "react";
import { ActiveTab, Launcher } from "@/types";
import { LAUNCHERS } from "@/constants/launchers";

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  activeLauncher: Launcher;
  setActiveLauncher: (launcher: Launcher) => void;
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  isAdminOpen: boolean;
  setAdminOpen: (open: boolean) => void;
  language: "en" | "ur" | "ar";
  setLanguage: (lang: "en" | "ur" | "ar") => void;
  displayMode: string;
  setDisplayMode: (mode: string) => void;
  isAuthenticated: boolean;
  setAuthenticated: (v: boolean) => void;
  currentUser: { name: string; phone: string } | null;
  setCurrentUser: (u: { name: string; phone: string } | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [activeLauncher, setActiveLauncher] = useState<Launcher>(LAUNCHERS[0]);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [isAdminOpen, setAdminOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ur" | "ar">("en");
  const [displayMode, setDisplayMode] = useState("super-bright");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; phone: string } | null>(null);

  function toggleLeftSidebar() {
    setLeftSidebarOpen((p) => !p);
    setRightSidebarOpen(false);
  }
  function toggleRightSidebar() {
    setRightSidebarOpen((p) => !p);
    setLeftSidebarOpen(false);
  }

  return (
    <AppContext.Provider value={{
      activeTab, setActiveTab,
      activeLauncher, setActiveLauncher,
      leftSidebarOpen, rightSidebarOpen,
      toggleLeftSidebar, toggleRightSidebar,
      isAdminOpen, setAdminOpen,
      language, setLanguage,
      displayMode, setDisplayMode,
      isAuthenticated, setAuthenticated,
      currentUser, setCurrentUser,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
