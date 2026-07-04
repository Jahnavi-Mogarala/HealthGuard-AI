"use client";

import { motion } from "framer-motion";
import { User, QrCode, Heart, Settings, Shield, Plus, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <User size={24} />
          <span className="font-bold text-xl font-heading">My Profile</span>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary rounded-full">
            <Settings size={20} />
          </Button>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto p-6 lg:p-12 w-full space-y-8">
        
        {/* Universal Health Card (QR) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start opacity-80">
                <Shield size={20} />
                <span className="font-bold tracking-widest text-sm uppercase">HealthGuard Smart ID</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold font-heading">John Doe</h1>
                <p className="text-primary-foreground/80 mt-1">ABHA ID: 91-XXXX-XXXX-XXXX</p>
              </div>
              <div className="flex gap-6 pt-2 justify-center md:justify-start">
                <div>
                  <p className="text-xs opacity-70 uppercase tracking-wider">Blood Group</p>
                  <p className="font-bold text-xl">O+</p>
                </div>
                <div>
                  <p className="text-xs opacity-70 uppercase tracking-wider">DOB</p>
                  <p className="font-bold text-xl">14 May 1990</p>
                </div>
                <div>
                  <p className="text-xs opacity-70 uppercase tracking-wider">Emergency</p>
                  <p className="font-bold text-xl">Mother</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-2xl shrink-0 shadow-lg">
              <QrCode size={120} className="text-slate-900" />
              <p className="text-slate-900 text-center text-xs font-bold mt-2">Scan for Medical Info</p>
            </div>
          </div>
        </motion.div>

        {/* Family Profiles */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-heading">Family Profiles</h2>
            <Button variant="outline" className="gap-2 rounded-full border-primary text-primary hover:bg-primary/10">
              <Plus size={16} /> Add Member
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-border flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold">JD</div>
                <div>
                  <h3 className="font-bold text-lg">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">Spouse • 32 Years</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground"><FileText size={18} /></Button>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">CD</div>
                <div>
                  <h3 className="font-bold text-lg">Charlie Doe</h3>
                  <p className="text-sm text-muted-foreground">Child • 5 Years</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground"><FileText size={18} /></Button>
            </div>
          </div>
        </div>

        {/* Medical History */}
        <div>
          <h2 className="text-2xl font-bold font-heading mb-6">Medical History</h2>
          <div className="bg-white rounded-3xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="text-red-500" size={20} />
                <span className="font-bold">Conditions & Allergies</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium">Penicillin Allergy</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium">Mild Asthma</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium">Lactose Intolerant</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
