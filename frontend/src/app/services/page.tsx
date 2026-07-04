"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Navigation, PhoneCall, Building2, Cross, Droplets, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  { id: 1, name: "City General Hospital", type: "Hospital", distance: "1.2 km", open: true },
  { id: 2, name: "Apollo Pharmacy", type: "Pharmacy", distance: "0.5 km", open: true },
  { id: 3, name: "Red Cross Blood Bank", type: "Blood Bank", distance: "3.4 km", open: true },
  { id: 4, name: "Sunrise Primary Clinic", type: "Clinic", distance: "2.1 km", open: false },
  { id: 5, name: "Rapid Response Ambulance", type: "Ambulance", distance: "Near you", open: true },
];

export default function NearbyServicesPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Building2 size={24} />
          <span className="font-bold text-xl font-heading">Health Services</span>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto p-6 lg:p-12 w-full space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold font-heading mb-2">Nearby Facilities</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin size={16} /> Currently showing services near your location
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search hospitals, clinics..." 
              className="w-full h-12 pl-12 pr-4 rounded-full border border-border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Hospital", "Pharmacy", "Clinic", "Blood Bank", "Ambulance"].map(type => (
            <button 
              key={type} 
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                filter === type ? "bg-primary text-white" : "bg-white border border-border text-slate-700 hover:bg-slate-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {services.filter(s => filter === "All" || s.type === filter).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    service.type === 'Hospital' ? 'bg-blue-100 text-blue-600' :
                    service.type === 'Pharmacy' ? 'bg-green-100 text-green-600' :
                    service.type === 'Blood Bank' ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {service.type === 'Hospital' && <Building2 size={24} />}
                    {service.type === 'Pharmacy' && <Cross size={24} />}
                    {service.type === 'Blood Bank' && <Droplets size={24} />}
                    {service.type === 'Ambulance' && <Truck size={24} />}
                    {service.type === 'Clinic' && <Building2 size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.type} • {service.distance}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <PhoneCall size={18} />
                  </Button>
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2">
                    <Navigation size={18} /> Directions
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-200 rounded-3xl h-[600px] flex items-center justify-center border border-border overflow-hidden relative">
            {/* Placeholder for real Map integration */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/93/Map_of_India_with_state_names.png')] bg-cover bg-center mix-blend-multiply" />
            <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center max-w-[80%] shadow-lg border border-border">
              <MapPin className="mx-auto mb-2 text-primary" size={32} />
              <h3 className="font-bold">Interactive Map</h3>
              <p className="text-sm text-muted-foreground mt-1">Live locations will appear here in production.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
