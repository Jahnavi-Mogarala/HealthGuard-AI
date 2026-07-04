"use client";

import { motion } from "framer-motion";
import { Search, Activity, BookOpen, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DiseasesPage() {
  const categories = ["Communicable", "Non-Communicable", "Seasonal", "Lifestyle", "Mental Health"];
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Activity size={24} />
          <span className="font-bold text-xl font-heading">HealthGuard</span>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto p-6 lg:p-12 w-full space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Diseases & Conditions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, verified information about symptoms, prevention, and treatments.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search diseases (e.g., Dengue, Diabetes...)" 
              className="w-full h-14 pl-12 pr-4 rounded-full border border-border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
            />
            <Button className="absolute right-2 top-2 h-10 rounded-full bg-primary hover:bg-primary/90 text-white px-6">
              Search
            </Button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, i) => (
            <button key={i} className={`px-5 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${i === 0 ? "bg-primary text-white" : "bg-white border border-border text-slate-700 hover:bg-slate-100"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Dengue Fever", type: "Communicable", severity: "High Alert", desc: "A mosquito-borne viral disease occurring in tropical areas." },
            { name: "Type 2 Diabetes", type: "Lifestyle", severity: "Common", desc: "A chronic condition that affects the way the body processes blood sugar." },
            { name: "Influenza (Flu)", type: "Seasonal", severity: "Moderate", desc: "A viral infection that attacks your respiratory system." },
            { name: "Hypertension", type: "Non-Communicable", severity: "Common", desc: "A condition in which the force of the blood against the artery walls is too high." },
            { name: "Malaria", type: "Communicable", severity: "Alert", desc: "A disease caused by a plasmodium parasite, transmitted by mosquitoes." },
            { name: "Anxiety Disorders", type: "Mental Health", severity: "Common", desc: "A mental health disorder characterized by feelings of worry, anxiety, or fear." }
          ].map((disease, i) => (
            <motion.div
              key={disease.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i }}
              className="bg-white p-6 rounded-3xl border border-border hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">{disease.type}</span>
                {disease.severity.includes("Alert") && (
                  <AlertTriangle size={20} className="text-red-500" />
                )}
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">{disease.name}</h3>
              <p className="text-muted-foreground text-sm flex-1 mb-6">{disease.desc}</p>
              
              <Link href={`/diseases/${disease.name.toLowerCase().replace(/ /g, "-")}`}>
                <Button variant="outline" className="w-full justify-between group">
                  Read More
                  <BookOpen size={16} className="text-primary group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
