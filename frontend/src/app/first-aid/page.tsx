"use client";

import { motion } from "framer-motion";
import { Activity, ShieldAlert, HeartPulse, ArrowLeft, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const emergencies = [
  { id: "cpr", title: "CPR (Cardiopulmonary Resuscitation)", category: "Critical" },
  { id: "choking", title: "Choking (Heimlich Maneuver)", category: "Critical" },
  { id: "bleeding", title: "Severe Bleeding", category: "Trauma" },
  { id: "burns", title: "Burns & Scalds", category: "Trauma" },
  { id: "snakebite", title: "Snake Bite", category: "Poisoning" },
  { id: "fracture", title: "Bone Fractures", category: "Trauma" },
  { id: "stroke", title: "Stroke (FAST)", category: "Critical" },
];

export default function FirstAidPage() {
  const [search, setSearch] = useState("");

  const filtered = emergencies.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 flex items-center px-6 bg-red-600 text-white shadow-sm sticky top-0 z-10">
        <Link href="/emergency" className="mr-4 hover:bg-red-700 p-2 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div className="flex items-center gap-2">
          <HeartPulse size={24} />
          <span className="font-bold text-xl font-heading">First Aid Guide</span>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-4xl mx-auto w-full space-y-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-border">
          <h1 className="text-2xl font-bold font-heading mb-2">Emergency Instructions</h1>
          <p className="text-muted-foreground mb-6">Quick, life-saving steps to take before professional medical help arrives.</p>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for an emergency condition..." 
              className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-2xl border border-border flex items-center justify-between hover:border-red-300 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                  item.category === "Critical" ? "bg-red-100 text-red-600" :
                  item.category === "Trauma" ? "bg-orange-100 text-orange-600" :
                  "bg-purple-100 text-purple-600"
                }`}>
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-sm font-medium text-muted-foreground">{item.category}</span>
                </div>
              </div>
              <ChevronRight className="text-muted-foreground group-hover:text-red-500 transition-colors" />
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center p-8 text-muted-foreground">
              No matching first aid guides found.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
