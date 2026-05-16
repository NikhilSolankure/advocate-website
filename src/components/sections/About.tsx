"use client";

import { motion } from "framer-motion";
import { Download, Award, Shield, BookOpen } from "lucide-react";
import Image from "next/image";

export default function About() {
  const credentials = [
    { icon: <Award className="w-4 h-4 text-gold-500" />, text: "Supreme Court Bar Association" },
    { icon: <Shield className="w-4 h-4 text-gold-500" />, text: "State Bar Council, 2008" },
    { icon: <BookOpen className="w-4 h-4 text-gold-500" />, text: "LLB" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-navy-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-50 dark:bg-navy-900/20 transform -skew-x-12 translate-x-20 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply z-10"></div>
              {/* Placeholder Image using Unsplash */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                alt="Lead Attorney Portrait" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative Gold Border */}
            <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 border-b-4 border-l-4 border-gold-500 rounded-bl-lg -z-10 hidden md:block"></div>
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-2">
              <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Lead Advocate & Founder</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
              Balraj Salokhe
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                For over 15 years, I have believed that the law is a shield for the vulnerable and a sword against injustice. My practice isn't just about winning cases; it's about restoring peace of mind to those facing the most daunting moments of their lives.
              </p>
              <p>
                From complex corporate litigation to high-stakes criminal defense, my approach is rooted in meticulous preparation, aggressive advocacy, and an unwavering commitment to the truth. We don't just take cases—we take up causes.
              </p>
            </div>

            {/* Credentials Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-navy-50 dark:bg-navy-900 px-4 py-2 rounded-full border border-navy-100 dark:border-navy-800">
                  {cred.icon}
                  <span className="text-sm font-medium text-navy-800 dark:text-gray-200">{cred.text}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center justify-center space-x-2 px-8 py-3 border-2 border-navy-900 dark:border-gold-500 text-navy-900 dark:text-gold-500 font-semibold rounded-full hover:bg-navy-900 hover:text-white dark:hover:bg-gold-500 dark:hover:text-navy-950 transition-all duration-300">
              <Download className="w-5 h-5" />
              <span>Download Full Profile</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
