"use client";

import { motion } from "framer-motion";
import { Mic, MicOff, Activity, ArrowLeft, Volume2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function VoiceAssistantPage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Simulated voice wave animation state
  const [waveHeights, setWaveHeights] = useState([20, 40, 30, 60, 35, 70, 45, 20]);

  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setWaveHeights(Array.from({ length: 8 }, () => Math.floor(Math.random() * 80) + 10));
      }, 150);
      return () => clearInterval(interval);
    } else {
      setWaveHeights([10, 10, 10, 10, 10, 10, 10, 10]);
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTranscript("Listening for your health query in any language...");
      setTimeout(() => {
        setTranscript("I've got a headache and slight fever since yesterday.");
        setTimeout(() => {
          setIsListening(false);
          setTranscript("Understood. Generating response based on your symptoms...");
        }, 3000);
      }, 2000);
    } else {
      setTranscript("Voice assistant paused.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col text-white">
      <header className="h-20 flex items-center px-6 sticky top-0 z-50">
        <Link href="/dashboard" className="mr-4 hover:bg-slate-800 p-2 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex items-center gap-2">
          <Activity size={24} className="text-primary" />
          <span className="font-bold text-xl font-heading">AI Voice</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full space-y-12">
        
        <div className="text-center space-y-4 max-w-xl">
          <h1 className="text-4xl font-bold font-heading">How can I help you today?</h1>
          <p className="text-xl text-slate-400 h-20 flex items-center justify-center">
            {transcript || "Tap the microphone to speak."}
          </p>
        </div>

        {/* Voice Wave Animation */}
        <div className="flex items-center justify-center gap-2 h-32">
          {waveHeights.map((height, i) => (
            <motion.div
              key={i}
              animate={{ height: `${height}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`w-3 rounded-full ${isListening ? 'bg-primary' : 'bg-slate-700'}`}
              style={{ minHeight: '10%' }}
            />
          ))}
        </div>

        <motion.div
          animate={{ scale: isListening ? 1.1 : 1 }}
          transition={{ repeat: isListening ? Infinity : 0, repeatType: "reverse", duration: 0.8 }}
        >
          <Button 
            onClick={toggleListening}
            className={`w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl transition-colors ${
              isListening ? 'bg-red-500 hover:bg-red-600 shadow-red-500/50' : 'bg-primary hover:bg-primary/90 shadow-primary/50'
            }`}
          >
            {isListening ? <MicOff size={40} className="text-white" /> : <Mic size={40} className="text-white" />}
          </Button>
        </motion.div>

        <div className="flex gap-4 opacity-50">
          <Button variant="ghost" className="gap-2"><Volume2 size={18} /> Audio Output: On</Button>
          <Button variant="ghost" className="gap-2">English (IN)</Button>
        </div>

      </main>
    </div>
  );
}
