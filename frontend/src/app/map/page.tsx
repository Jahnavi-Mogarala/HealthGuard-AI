"use client";

import { motion } from "framer-motion";
import { Activity, Map as MapIcon, Filter, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OutbreakMapPage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex h-16 items-center justify-between px-6 bg-white border-b border-border shadow-sm shrink-0 z-10">
        <div className="flex items-center gap-2 text-primary">
          <MapIcon size={24} />
          <span className="font-bold font-heading text-xl">Outbreak Intelligence</span>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter size={18} />
          Filters
        </Button>
      </header>
      
      <main className="flex-1 relative bg-slate-100 overflow-hidden">
        {/* Placeholder for Leaflet Map - In a real implementation this would be a dynamic import of react-leaflet */}
        <div className="absolute inset-0 flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/93/Map_of_India_with_state_names.png')] bg-cover bg-center opacity-30 mix-blend-multiply">
          <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl max-w-sm">
            <Activity className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h2 className="text-xl font-bold font-heading mb-2">Live Map Loading...</h2>
            <p className="text-muted-foreground text-sm">Connecting to government health APIs and plotting outbreak data points.</p>
          </div>
        </div>

        {/* Overlay Alerts */}
        <div className="absolute top-4 right-4 space-y-4 max-w-sm w-full">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-4 rounded-xl shadow-lg border border-red-100"
          >
            <div className="flex items-start gap-3">
              <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-red-600">High Alert: Dengue</h4>
                <p className="text-sm text-muted-foreground mt-1">150+ cases reported within 50km radius in the last 48 hours.</p>
                <Button variant="link" className="text-red-600 p-0 h-auto mt-2 font-bold">View Guidelines</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
