"use client";

import { motion } from "framer-motion";
import { Settings, User, Bell, Shield, Moon, Eye, Download, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Settings size={24} />
          <span className="font-bold text-xl font-heading">Settings</span>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto p-6 lg:p-12 w-full space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-heading">App Preferences</h2>
          
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden divide-y divide-border">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700"><Moon size={20} /></div>
                <div>
                  <h3 className="font-bold">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">Adjust the interface color theme.</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-transform" />
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700"><Eye size={20} /></div>
                <div>
                  <h3 className="font-bold">Accessibility Mode</h3>
                  <p className="text-sm text-muted-foreground">High contrast and larger text sizes.</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-transform" />
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700"><User size={20} /></div>
                <div>
                  <h3 className="font-bold">Elderly / Child Mode</h3>
                  <p className="text-sm text-muted-foreground">Simplify the interface and emphasize emergency actions.</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer transition-colors">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm transition-transform" />
              </div>
            </div>
            
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700"><Smartphone size={20} /></div>
                <div>
                  <h3 className="font-bold">Offline PWA Sync</h3>
                  <p className="text-sm text-muted-foreground">Cache medical records for offline viewing.</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer transition-colors">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm transition-transform" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-heading">Data & Privacy</h2>
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden divide-y divide-border">
            <div className="p-6 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Download size={20} /></div>
                <div>
                  <h3 className="font-bold text-slate-900">Download My Data</h3>
                  <p className="text-sm text-muted-foreground">Get a PDF of all your health records and AI chat history.</p>
                </div>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between hover:bg-red-50 cursor-pointer text-red-600">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600"><Shield size={20} /></div>
                <div>
                  <h3 className="font-bold">Delete Account & Data</h3>
                  <p className="text-sm text-red-500/80">Permanently erase all your information from HealthGuard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
