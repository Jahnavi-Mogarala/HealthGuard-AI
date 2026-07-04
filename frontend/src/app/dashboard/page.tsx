"use client";

import { motion } from "framer-motion";
import { Activity, ShieldAlert, FileText, Settings, LogOut, Bell, Search, User, MapPin } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-border">
          <div className="flex items-center gap-2 text-primary">
            <Activity size={24} />
            <span className="font-bold text-xl font-heading">HealthGuard</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary font-medium rounded-xl">
            <Activity size={20} /> Dashboard
          </Link>
          <Link href="/chat" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-slate-100 hover:text-foreground font-medium rounded-xl transition-colors">
            <FileText size={20} /> AI Chatbot
          </Link>
          <Link href="/map" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-slate-100 hover:text-foreground font-medium rounded-xl transition-colors">
            <MapPin size={20} /> Outbreaks
          </Link>
          <Link href="/emergency" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 font-bold rounded-xl transition-colors mt-4">
            <ShieldAlert size={20} /> EMERGENCY
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-slate-100 hover:text-foreground font-medium rounded-xl transition-colors">
            <Settings size={20} /> Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-slate-100 hover:text-foreground font-medium rounded-xl transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-10 shrink-0">
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Search diseases, hospitals, guidelines..." 
              className="w-full h-11 pl-10 pr-4 rounded-full border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-muted-foreground hover:bg-slate-200 transition-colors">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">Citizen Profile</p>
              </div>
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Health Score */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-border flex items-center gap-6">
              <div className="w-20 h-20 rounded-full border-4 border-accent flex items-center justify-center text-2xl font-bold text-accent">
                92
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Health Score</h3>
                <p className="text-sm text-muted-foreground">Excellent. Keep up the good work!</p>
              </div>
            </div>

            {/* Quick Chat Shortcut */}
            <Link href="/chat" className="bg-primary p-6 rounded-3xl shadow-md text-white hover:-translate-y-1 transition-transform group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
                <FileText size={64} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">Ask AI</h3>
              <p className="text-primary-foreground/80 relative z-10">Check symptoms, ask about diseases, or get medical summaries instantly.</p>
            </Link>

            {/* Vaccination Reminder */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-border">
              <h3 className="text-lg font-bold font-heading mb-1 text-secondary-foreground">Upcoming Vaccine</h3>
              <p className="text-2xl font-bold mb-1">Flu Shot</p>
              <p className="text-sm text-muted-foreground">Due in 14 days at Apollo Clinic.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Outbreaks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold font-heading">Nearby Outbreaks</h3>
                <Link href="/map" className="text-sm text-primary font-medium hover:underline">View Map</Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                      <Activity size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700">Dengue Fever</h4>
                      <p className="text-xs text-red-600/80">3.2 km away • 12 active cases</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-red-200 text-red-800 text-xs font-bold rounded-full">High Risk</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                      <Activity size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-700">Viral Flu</h4>
                      <p className="text-xs text-orange-600/80">5.5 km away • Trending Up</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-bold rounded-full">Moderate</span>
                </div>
              </div>
            </motion.div>

            {/* Daily Tip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-border flex flex-col justify-center text-center items-center relative overflow-hidden"
            >
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
               <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                 <Activity size={32} />
               </div>
               <h3 className="text-2xl font-bold font-heading mb-4">Today&apos;s Health Tip</h3>
               <p className="text-muted-foreground max-w-md">
                 "With the recent drop in AQI levels in your area, consider wearing an N95 mask when traveling outdoors and keep your home windows closed."
               </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
