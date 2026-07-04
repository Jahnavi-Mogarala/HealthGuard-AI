"use client";

import { motion } from "framer-motion";
import { Activity, Users, FileText, Map, Server, ShieldCheck, AlertCircle, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-primary">
            <ShieldCheck size={24} />
            <span className="font-bold text-xl font-heading text-white">HG Admin</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-primary text-white font-medium rounded-xl">
            <Activity size={20} /> Analytics
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white font-medium rounded-xl transition-colors">
            <Users size={20} /> Users & Roles
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white font-medium rounded-xl transition-colors">
            <FileText size={20} /> Content Moderation
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white font-medium rounded-xl transition-colors">
            <Map size={20} /> Outbreak Logs
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white font-medium rounded-xl transition-colors">
            <Server size={20} /> System Health
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white font-medium rounded-xl transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-border flex items-center px-6 lg:px-10 shrink-0">
          <h1 className="text-2xl font-bold font-heading">System Analytics Overview</h1>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Stat Cards */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <p className="text-sm font-medium text-muted-foreground mb-1">Daily Active Users (DAU)</p>
              <h3 className="text-3xl font-bold text-slate-900">12,450</h3>
              <p className="text-sm text-green-600 font-medium mt-2">↑ 14% from yesterday</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <p className="text-sm font-medium text-muted-foreground mb-1">Total AI Chat Queries</p>
              <h3 className="text-3xl font-bold text-slate-900">89,201</h3>
              <p className="text-sm text-green-600 font-medium mt-2">↑ 5% from yesterday</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <p className="text-sm font-medium text-muted-foreground mb-1">Active Outbreak Alerts</p>
              <h3 className="text-3xl font-bold text-slate-900">34</h3>
              <p className="text-sm text-red-600 font-medium mt-2">5 Critical Regions</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <p className="text-sm font-medium text-muted-foreground mb-1">API Health Status</p>
              <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                99.9% <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              </h3>
              <p className="text-sm text-muted-foreground font-medium mt-2">All systems operational</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-border h-96 flex flex-col items-center justify-center text-center"
            >
              <AlertCircle className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-bold">Chart Placeholder</h3>
              <p className="text-muted-foreground text-sm">Integrate Recharts here for visual DAU/MAU trends.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-border h-96 flex flex-col items-center justify-center text-center"
            >
              <AlertCircle className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-bold">Heatmap Placeholder</h3>
              <p className="text-muted-foreground text-sm">Integrate geographic distribution of queries.</p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
