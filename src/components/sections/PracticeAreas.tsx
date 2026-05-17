"use client";

import { motion } from "framer-motion";
import { Gavel, Briefcase, Users, Home, Building2, ShieldAlert, Scale, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const practices = [
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Criminal Defense",
    description: "Aggressive defense for criminal charges, felonies, and complex legal matters. I protect your freedom and rights."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Family & Divorce",
    description: "Compassionate representation in divorce, child custody, and sensitive family disputes."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-navy-50 dark:bg-navy-900">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
            Dedicated Practice Areas
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I offer specialized legal services across a range of disciplines. My deep legal knowledge allows me to deliver exceptional results in even the most complex cases.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {practices.map((practice, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-white dark:bg-navy-950 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-500/30 dark:border-navy-800 dark:hover:border-gold-500/30 relative overflow-hidden"
            >
              {/* Decorative hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-navy-50 dark:bg-navy-900 flex items-center justify-center text-navy-800 dark:text-gold-400 mb-6 group-hover:scale-110 group-hover:text-gold-500 transition-all duration-500">
                  {practice.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-navy-900 dark:text-white mb-4">
                  {practice.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3">
                  {practice.description}
                </p>
                
                <Link href="#" className="inline-flex items-center text-sm font-semibold text-navy-600 dark:text-gold-400 group-hover:text-gold-500 transition-colors">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
