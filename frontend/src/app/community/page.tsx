"use client";

import { motion } from "framer-motion";
import { Users, Search, MessageSquare, ThumbsUp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const posts = [
  { id: 1, author: "Anonymous", role: "Citizen", content: "What are the common early symptoms of the current flu strain going around?", verifiedResponse: "Fever, chills, muscle aches, cough, congestion, runny nose, headaches, and fatigue.", doctor: "Dr. Sharma" },
  { id: 2, author: "Anonymous", role: "Citizen", content: "Are there any specific dietary recommendations for someone recovering from Dengue?", verifiedResponse: "Focus on hydration (ORS, coconut water), easily digestible foods, and Vitamin C rich fruits like papaya and kiwi.", doctor: "Dietitian Verma" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Users size={24} />
          <span className="font-bold text-xl font-heading">Community Health Forum</span>
        </Link>
        <Button className="rounded-full bg-primary text-white">Ask Anonymous Question</Button>
      </header>

      <main className="max-w-4xl mx-auto p-6 lg:p-12 w-full space-y-8">
        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm flex items-center gap-4">
          <Search className="text-muted-foreground" size={24} />
          <input 
            type="text" 
            placeholder="Search past questions and verified doctor responses..." 
            className="flex-1 h-12 outline-none text-lg bg-transparent"
          />
        </div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-border shadow-sm space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-bold">{post.author} <span className="text-sm font-normal text-muted-foreground">• {post.role}</span></h3>
                  <p className="text-lg mt-2 text-slate-800">{post.content}</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-100 ml-16 relative">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-green-50 border border-green-100 rotate-45 border-r-0 border-t-0" />
                <div className="flex items-center gap-2 mb-2 text-green-700">
                  <ShieldCheck size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">Verified Response by {post.doctor}</span>
                </div>
                <p className="text-slate-800">{post.verifiedResponse}</p>
              </div>

              <div className="flex items-center gap-4 ml-16 pt-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <ThumbsUp size={16} /> Helpful (24)
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <MessageSquare size={16} /> Comment
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
