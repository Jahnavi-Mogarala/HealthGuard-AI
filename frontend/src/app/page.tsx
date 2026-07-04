"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldAlert, HeartPulse, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <header className="flex h-20 w-full items-center justify-between px-6 md:px-12 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/40 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
            <Activity size={24} />
          </div>
          <span className="font-heading font-bold text-2xl text-primary">HealthGuard AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#awareness" className="hover:text-primary transition-colors">Awareness</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex text-primary border-primary hover:bg-primary hover:text-white rounded-full px-6">
            Log In
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">
            Sign Up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 py-20 lg:py-32 overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Smart India Hackathon 2024
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground">
            Know Early. <span className="text-primary">Stay Safe.</span> Save Lives.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your intelligent Public Health Assistant providing verified disease awareness, outbreak alerts, and emergency guidance in multiple languages.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 group">
              Get Started Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border hover:bg-secondary/10">
              View Outbreak Map
            </Button>
          </div>
        </motion.div>

        {/* Feature Cards Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full"
        >
          <div className="bg-card p-8 rounded-3xl shadow-xl shadow-black/5 border border-border/50 text-left hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3">Symptom Checker</h3>
            <p className="text-muted-foreground">Interactive step-by-step educational analysis of your symptoms.</p>
          </div>
          <div className="bg-card p-8 rounded-3xl shadow-xl shadow-black/5 border border-border/50 text-left hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-secondary/20 text-secondary-foreground rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3">Live Outbreaks</h3>
            <p className="text-muted-foreground">Real-time heatmaps and alerts for diseases in your area.</p>
          </div>
          <div className="bg-card p-8 rounded-3xl shadow-xl shadow-black/5 border border-border/50 text-left hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-accent/20 text-accent-foreground rounded-2xl flex items-center justify-center mb-6">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3">Emergency SOS</h3>
            <p className="text-muted-foreground">One-click immediate assistance and first-aid instructions.</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
