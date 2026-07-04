"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, Award, Target, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LearningCenterPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Activity size={24} />
          <span className="font-bold text-xl font-heading">HealthGuard</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 text-yellow-600 rounded-full font-bold text-sm border border-yellow-200 shadow-sm">
            <Award size={16} /> 1,250 XP
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 lg:p-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Health Learning Center</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educate yourself on preventive healthcare, diseases, and wellness through our interactive courses and verified articles.
          </p>
        </div>

        {/* Daily Challenge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <Target size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading mb-1 text-slate-900">Daily Challenge: Nutrition 101</h2>
              <p className="text-slate-700">Complete today&apos;s quick quiz to earn a 5-day streak badge!</p>
            </div>
          </div>
          <Button size="lg" className="rounded-full px-8 bg-primary text-white hover:bg-primary/90 shadow-md">
            Start Challenge
          </Button>
        </motion.div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl font-bold font-heading mb-6">Explore Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Articles", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
              { title: "Videos", icon: Video, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
              { title: "Certificates", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100", border: "border-yellow-200" },
              { title: "Quizzes", icon: Target, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-6 rounded-3xl border border-border hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform`}>
                  <cat.icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">Browse {cat.title.toLowerCase()}...</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
