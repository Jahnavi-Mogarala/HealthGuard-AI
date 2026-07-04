"use client";

import { motion } from "framer-motion";
import { Activity, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl shadow-black/5 border border-border"
      >
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-primary/30">
            <Activity size={32} />
          </div>
          <h2 className="text-3xl font-bold font-heading text-center">Welcome Back</h2>
          <p className="text-muted-foreground mt-2 text-center">Login to your HealthGuard account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="email" 
                required
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="citizen@india.gov.in"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Password</label>
              <Link href="#" className="text-xs text-primary font-medium hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="password"
                required
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold mt-4 shadow-lg shadow-primary/20">
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Sign up</Link>
        </div>
      </motion.div>
    </div>
  );
}
