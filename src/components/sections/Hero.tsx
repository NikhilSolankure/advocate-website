"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Scale, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-950">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy-950 via-navy-900/80 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950 via-navy-900/60 to-transparent" />

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-white text-xs font-medium uppercase tracking-wider">Top Rated Legal Counsel</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
            Justice is Not Just a Word—<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">It's a Promise.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            Relentless advocacy serving Kolhapur and beyond in Criminal Defense, Corporate Law, and High-Stakes Civil Litigation.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-full transition-all duration-300 flex items-center justify-center group shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#practice-areas">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Explore Our Expertise
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trust Badges Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full z-20 bg-navy-950/80 backdrop-blur-md border-t border-white/10"
      >
        <div className="container mx-auto px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-serif font-bold text-gold-400">500+</span>
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-1">Cases Won</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-serif font-bold text-gold-400">15+</span>
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-1">Years Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-serif font-bold text-gold-400">98%</span>
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-1">Success Rate</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-1 mb-1">
                {[1,2,3,4,5].map(i => <Award key={i} className="w-5 h-5 text-gold-400" fill="currentColor" />)}
              </div>
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Top Rated Firm</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
