"use client";

import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Upload, Activity, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ImageCheckerPage() {
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setUploaded(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Camera size={24} />
          <span className="font-bold text-xl font-heading">Visual Symptom Checker</span>
        </Link>
      </header>

      <main className="flex-1 max-w-4xl mx-auto p-6 lg:p-12 w-full space-y-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-heading">AI Image Analysis</h1>
          <p className="text-lg text-muted-foreground">Upload a photo of your skin condition, rash, or wound for an educational awareness assessment.</p>
        </div>

        {!uploaded && !analyzing && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-2 border-dashed border-primary/50 rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer min-h-[400px]"
            onClick={handleUpload}
          >
            <div className="flex gap-6 mb-8">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Camera size={40} />
              </div>
              <div className="w-20 h-20 bg-secondary/20 text-secondary-foreground rounded-full flex items-center justify-center">
                <ImageIcon size={40} />
              </div>
            </div>
            <h2 className="text-2xl font-bold font-heading mb-2">Tap to take photo or upload</h2>
            <p className="text-muted-foreground mb-6">Supports JPG, PNG (Max 5MB)</p>
            <Button className="rounded-full bg-primary text-white px-8 h-14 text-lg">
              <Upload className="mr-2" /> Upload Image
            </Button>
          </motion.div>
        )}

        {analyzing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl border border-border p-12 flex flex-col items-center justify-center min-h-[400px]"
          >
            <Activity className="w-16 h-16 text-primary animate-spin mb-6" />
            <h2 className="text-2xl font-bold font-heading mb-2">Analyzing Image...</h2>
            <p className="text-muted-foreground">Our AI is securely processing the visual data.</p>
          </motion.div>
        )}

        {uploaded && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-border p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 bg-slate-200 rounded-2xl h-64 flex items-center justify-center text-muted-foreground overflow-hidden">
                <ImageIcon size={64} className="opacity-50" />
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                  <AlertCircle size={24} />
                  <span className="font-bold">Not a medical diagnosis. Please consult a doctor.</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Educational Analysis</h3>
                  <p className="text-lg text-slate-700">The visual characteristics are commonly associated with <span className="font-bold text-primary">Contact Dermatitis</span> or mild allergic reactions.</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                    <ShieldCheck size={18} /> 87% AI Confidence
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <Link href="/chat">
                    <Button className="rounded-full bg-primary text-white">Ask AI For Details</Button>
                  </Link>
                  <Button variant="outline" className="rounded-full" onClick={() => setUploaded(false)}>Upload Another</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}
