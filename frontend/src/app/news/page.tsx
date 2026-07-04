"use client";

import { motion } from "framer-motion";
import { Newspaper, Activity, ArrowRight, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const articles = [
  { id: 1, title: "WHO Declares New Health Guidelines for Urban Centers", source: "WHO Daily", time: "2 hours ago", category: "Global" },
  { id: 2, title: "State Government Launches Free Vaccination Drive", source: "Health.gov", time: "5 hours ago", category: "Local" },
  { id: 3, title: "Breakthrough in Dengue Treatment Research", source: "Medical Journal", time: "1 day ago", category: "Research" },
  { id: 4, title: "How Air Quality is Affecting Respiratory Health", source: "AQI Insights", time: "1 day ago", category: "Environment" },
];

export default function HealthNewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Newspaper size={24} />
          <span className="font-bold text-xl font-heading">Health News Digest</span>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto p-6 lg:p-12 w-full space-y-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Daily Digest</h1>
          <p className="text-lg text-muted-foreground">Stay updated with the latest public health announcements and medical research.</p>
        </div>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">{article.category}</span>
                <span className="text-sm text-muted-foreground">• {article.time} • {article.source}</span>
              </div>
              <h2 className="text-2xl font-bold font-heading mb-4">{article.title}</h2>
              <p className="text-muted-foreground mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0 group">
                  Read Full Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-muted-foreground hover:text-primary">
                    <Bookmark size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-muted-foreground hover:text-primary">
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
