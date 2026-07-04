"use client";

import { motion } from "framer-motion";
import { Pill, Camera, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MedicinesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Pill size={24} />
          <span className="font-bold text-xl font-heading">Medications</span>
        </Link>
        <Button className="rounded-full bg-primary text-white gap-2">
          <Camera size={18} /> OCR Scan Prescription
        </Button>
      </header>

      <main className="max-w-4xl mx-auto p-6 lg:p-12 w-full space-y-8">
        
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold font-heading mb-2">Smart Medicine OCR</h2>
            <p className="text-indigo-100 max-w-md">Upload a picture of your prescription or medicine bottle. Our AI will read it and automatically set up your reminders and provide dosage info.</p>
          </div>
          <div className="w-32 h-32 bg-white/20 rounded-3xl border-2 border-white/40 border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-white/30 transition-colors backdrop-blur-sm">
            <Camera size={32} className="mb-2" />
            <span className="text-xs font-bold text-center">Tap to Scan</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-heading mb-6">Today's Schedule</h2>
          <div className="space-y-4">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center justify-between opacity-60"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg line-through">Vitamin D3 (500mg)</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock size={14} /> 08:00 AM • After Breakfast
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-green-600">Taken</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-primary shadow-lg shadow-primary/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Pill size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Paracetamol (650mg)</h3>
                  <p className="text-sm text-primary flex items-center gap-1 font-medium">
                    <Clock size={14} /> 02:00 PM • Upcoming
                  </p>
                </div>
              </div>
              <Button className="rounded-full bg-primary text-white">Mark Taken</Button>
            </motion.div>

          </div>
        </div>

      </main>
    </div>
  );
}
