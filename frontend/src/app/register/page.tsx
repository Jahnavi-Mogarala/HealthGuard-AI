"use client";

import { motion } from "framer-motion";
import { Activity, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
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
          <h2 className="text-3xl font-bold font-heading text-center">Create Account</h2>
          <p className="text-muted-foreground mt-2 text-center">Join HealthGuard AI today</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                required
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Dr. John Doe"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="email" 
                required
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="doctor@hospital.org"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
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
            Create Account
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Sign in</Link>
        </div>
      </motion.div>
    </div>
  );
}
