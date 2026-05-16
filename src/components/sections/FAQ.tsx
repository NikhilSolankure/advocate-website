"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much does a consultation cost?",
    answer: "We offer a complimentary initial consultation for most practice areas. During this session, we will evaluate your case, discuss potential strategies, and provide a clear overview of expected legal fees."
  },
  {
    question: "What documents do I need for my first meeting?",
    answer: "Please bring any documents relevant to your case, such as contracts, correspondence, court notices, or police reports. A detailed timeline of events written by you is also highly beneficial."
  },
  {
    question: "How long does a typical case take to resolve?",
    answer: "The duration of a case varies significantly depending on its complexity, the court's schedule, and whether it goes to trial or settles. We always aim for the most efficient resolution without compromising your interests."
  },
  {
    question: "Will my case go to trial?",
    answer: "While many cases are settled out of court through negotiation or mediation, we prepare every case as if it will go to trial. If a fair settlement cannot be reached, we are fully prepared to aggressively litigate your case in court."
  },
  {
    question: "How do you charge for your services?",
    answer: "We offer transparent billing structures. Depending on the case type, this may be an hourly rate, a flat fee, or occasionally a contingency fee. All costs are discussed and agreed upon upfront."
  },
  {
    question: "Will I communicate directly with my attorney?",
    answer: "Yes. Unlike volume-based firms where you might only speak to paralegals, our clients have direct access to the lead attorney handling their case. We pride ourselves on responsive and clear communication."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-navy-50 dark:bg-navy-900 border-t border-navy-100 dark:border-navy-800">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
          <h2 className="text-4xl font-serif font-bold text-navy-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={cn(
                "border rounded-xl overflow-hidden transition-all duration-300",
                openIndex === idx 
                  ? "bg-white dark:bg-navy-950 border-gold-500/50 shadow-md" 
                  : "bg-white dark:bg-navy-950 border-navy-200 dark:border-navy-800 hover:border-navy-300 dark:hover:border-navy-700"
              )}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-navy-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                  openIndex === idx ? "bg-gold-500 text-navy-950" : "bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300"
                )}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-navy-50 dark:border-navy-900/50 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
