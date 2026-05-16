"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Cases Won" },
  { value: 250, suffix: "M+", label: "Recovered for Clients" },
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 98, suffix: "%", label: "Success Rate" }
];

const caseStudies = [
  {
    type: "Corporate Litigation",
    title: "$45M Breach of Contract Dispute",
    description: "Successfully defended a tech conglomerate against a multi-million dollar intellectual property theft and breach of contract claim, resulting in a full dismissal.",
    outcome: "Full Dismissal & Legal Fees Recovered"
  },
  {
    type: "Criminal Defense",
    title: "Federal White-Collar Fraud Case",
    description: "Represented a CFO facing federal wire fraud charges. Through meticulous financial forensics, we proved lack of intent and secured an acquittal.",
    outcome: "Full Acquittal on All Charges"
  }
];

export default function Results() {
  // Simple counter animation effect could be added here
  
  return (
    <section id="results" className="py-24 bg-white dark:bg-navy-950">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Proven Track Record</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6 md:mb-0">
              Results That Speak Volumes
            </h2>
          </div>
          <Link href="#" className="hidden md:flex items-center text-navy-600 dark:text-gold-400 hover:text-gold-500 font-semibold group transition-colors">
            View All Results
            <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-navy-100 dark:border-navy-800 pb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-serif font-bold text-navy-900 dark:text-white mb-2">
                {stat.value}<span className="text-gold-500">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-navy-50 dark:bg-navy-900 p-8 md:p-12 rounded-2xl relative group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-navy-200 dark:border-navy-700 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-navy-950 text-navy-400 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              
              <span className="text-sm font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-wider mb-4 block">
                {study.type}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                {study.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {study.description}
              </p>
              
              <div className="bg-white dark:bg-navy-950 p-4 rounded-lg border-l-4 border-gold-500">
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Outcome</span>
                <span className="font-semibold text-navy-900 dark:text-white">{study.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All button */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link href="#" className="flex items-center text-navy-600 dark:text-gold-400 hover:text-gold-500 font-semibold group transition-colors">
            View All Results
            <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
