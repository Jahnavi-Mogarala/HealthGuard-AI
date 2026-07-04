"use client";

import { motion } from "framer-motion";
import { Syringe, Calendar, CheckCircle, MapPin, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VaccinesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Syringe size={24} />
          <span className="font-bold text-xl font-heading">Vaccination Center</span>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto p-6 lg:p-12 w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Vaccination Schedule</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Track your immunization history and find nearby vaccination centers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold font-heading">Upcoming & Due</h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-3xl border border-primary/20 shadow-lg shadow-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Calendar size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Influenza (Flu Shot)</h3>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Due in 14 Days</span>
                  </div>
                  <p className="text-muted-foreground mb-4">Annual seasonal flu vaccine recommended before winter.</p>
                  <div className="flex gap-4">
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white">Book Appointment</Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <h2 className="text-2xl font-bold font-heading pt-6">Completed</h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-3xl border border-border shadow-sm flex items-center justify-between opacity-75"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">COVID-19 Booster</h3>
                  <p className="text-sm text-muted-foreground">Administered on Oct 12, 2023</p>
                </div>
              </div>
              <Button variant="outline" className="rounded-full">View Certificate</Button>
            </motion.div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading">Nearby Centers</h2>
            
            <div className="bg-white p-6 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold">City General Hospital</h4>
                  <p className="text-sm text-muted-foreground">1.2 km away • Walk-ins welcome</p>
                  <p className="text-xs font-medium text-green-600 mt-1">Vaccines Available: Flu, COVID, Tetanus</p>
                </div>
              </div>
              <hr className="border-border" />
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold">Apollo Pharmacy Clinic</h4>
                  <p className="text-sm text-muted-foreground">2.5 km away • Appointment only</p>
                  <p className="text-xs font-medium text-green-600 mt-1">Vaccines Available: Flu</p>
                </div>
              </div>
              <Button className="w-full mt-4 rounded-full" variant="outline">View Map Directory</Button>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-blue-800">
              <div className="flex items-center gap-2 mb-2 font-bold">
                <AlertCircle size={20} /> Govt. Schemes
              </div>
              <p className="text-sm">You may be eligible for free vaccination under the National Health Mission. Click to verify your eligibility via Aadhar.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
