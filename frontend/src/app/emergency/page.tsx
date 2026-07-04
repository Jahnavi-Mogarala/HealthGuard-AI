"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Activity, ShieldAlert, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmergencyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-600 text-white selection:bg-white selection:text-red-600">
      <header className="flex h-16 items-center px-6 border-b border-red-500/50">
        <div className="flex items-center gap-2">
          <ShieldAlert size={28} />
          <span className="font-bold text-2xl font-heading tracking-tight">EMERGENCY MODE</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl w-full space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-heading">Need Immediate Help?</h1>
            <p className="text-xl md:text-2xl text-red-100">Tap below to call local emergency services.</p>
          </div>

          <motion.div
            animate={{ 
              boxShadow: ["0px 0px 0px 0px rgba(255,255,255,0.7)", "0px 0px 0px 40px rgba(255,255,255,0)"] 
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block rounded-full"
          >
            <Button className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white text-red-600 hover:bg-red-50 flex flex-col items-center justify-center gap-4 text-3xl font-bold shadow-2xl">
              <Phone size={64} />
              CALL 112
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-12">
            <div className="bg-red-700/50 p-6 rounded-3xl border border-red-500 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} />
                <h3 className="text-xl font-bold">Nearest Hospital</h3>
              </div>
              <p className="text-red-100 mb-4">Finding location...</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-red-600">
                Get Directions
              </Button>
            </div>
            
            <div className="bg-red-700/50 p-6 rounded-3xl border border-red-500 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <HeartPulse size={24} />
                <h3 className="text-xl font-bold">First Aid Guide</h3>
              </div>
              <p className="text-red-100 mb-4">Quick instructions for CPR, bleeding, burns, etc.</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-red-600">
                View First Aid
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
