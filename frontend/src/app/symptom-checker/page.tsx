"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  { id: 1, title: "Who is this for?", options: ["Myself", "Child", "Elderly", "Other"] },
  { id: 2, title: "What is the primary symptom?", options: ["Fever", "Cough", "Pain", "Skin Rash", "Fatigue", "Breathing Issue"] },
  { id: 3, title: "How long has it been happening?", options: ["Less than a day", "1-3 days", "A week", "More than a week"] },
];

export default function SymptomCheckerPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 flex items-center px-6 bg-white border-b border-border shadow-sm">
        <Link href="/dashboard" className="flex items-center gap-2 text-primary">
          <Activity size={24} />
          <span className="font-bold text-xl font-heading">HealthGuard</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-3">Symptom Checker</h1>
            <p className="text-muted-foreground">Educational analysis to guide your health decisions.</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm border border-amber-200">
              <AlertCircle size={16} />
              This is not a medical diagnosis. In an emergency, please use the SOS feature.
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-border"
              >
                <div className="text-sm font-bold text-primary mb-2">Step {currentStep + 1} of {steps.length}</div>
                <h2 className="text-2xl font-bold mb-6">{steps[currentStep].title}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {steps[currentStep].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
                        answers[currentStep] === opt 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!answers[currentStep]}
                    className="bg-primary text-white rounded-full px-8"
                  >
                    {currentStep === steps.length - 1 ? "Analyze" : "Next"}
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-border text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Educational Summary</h2>
                <p className="text-muted-foreground mb-8">
                  Based on your inputs ({Object.values(answers).join(", ")}), this typically aligns with common viral infections. Ensure you stay hydrated and rest. 
                  <br/><br/>
                  If symptoms persist for more than 48 hours or worsen, please consult a certified doctor immediately.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/dashboard">
                    <Button variant="outline" className="rounded-full">Back to Dashboard</Button>
                  </Link>
                  <Link href="/chat">
                    <Button className="bg-primary text-white rounded-full">Ask AI For Details</Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
