"use client";

import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    date: "May 12, 2026",
    category: "Corporate Law",
    title: "Navigating M&A Compliance in the New Regulatory Landscape",
    excerpt: "Recent changes in antitrust guidelines require a proactive approach for mid-market mergers.",
    readTime: "5 min read"
  },
  {
    date: "April 28, 2026",
    category: "Criminal Defense",
    title: "White-Collar Defense: Protecting Digital Assets and Privacy",
    excerpt: "How modern warrants for digital data are being challenged in federal courts.",
    readTime: "8 min read"
  },
  {
    date: "April 15, 2026",
    category: "Family Law",
    title: "Protecting Intergenerational Wealth During Divorce",
    excerpt: "Strategies for safeguarding trusts and family businesses during contentious separations.",
    readTime: "6 min read"
  }
];

export default function Media() {
  return (
    <section className="py-24 bg-white dark:bg-navy-950">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* As Seen In */}
        <div className="mb-24 text-center border-b border-navy-100 dark:border-navy-800 pb-20">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">
            Featured In & Recognized By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            <div className="text-2xl font-serif font-bold text-navy-900 dark:text-white">Forbes</div>
            <div className="text-2xl font-serif font-bold text-navy-900 dark:text-white">The Wall Street Journal</div>
            <div className="text-2xl font-serif font-bold text-navy-900 dark:text-white">Bloomberg</div>
            <div className="text-2xl font-serif font-bold text-navy-900 dark:text-white">Reuters</div>
          </div>
        </div>

        {/* Legal Insights */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Legal Insights</span>
            <h2 className="text-4xl font-serif font-bold text-navy-900 dark:text-white">
              Latest Publications
            </h2>
          </div>
          <Link href="#" className="hidden md:flex items-center text-navy-600 dark:text-gold-400 hover:text-gold-500 font-semibold transition-colors mt-4 md:mt-0">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full h-48 bg-navy-100 dark:bg-navy-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                <Newspaper className="w-12 h-12 text-navy-300 dark:text-navy-700 absolute" />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              
              <div className="text-sm font-semibold text-navy-900 dark:text-white group-hover:text-gold-500 flex items-center transition-colors">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
