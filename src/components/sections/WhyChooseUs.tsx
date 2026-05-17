"use client";

import { motion } from "framer-motion";
import { UserCheck, HandCoins, Clock, Crosshair } from "lucide-react";

const reasons = [
  {
    icon: <UserCheck className="w-10 h-10 text-gold-500" />,
    title: "Personalized Attention",
    description: "You are not a case number. I cap my caseload to ensure every client receives dedicated attention and a bespoke strategy."
  },
  {
    icon: <Crosshair className="w-10 h-10 text-gold-500" />,
    title: "Courtroom-Tested Strategy",
    description: "While I seek swift resolutions, I prepare every case as if it will go to trial. Opposing counsel knows I don't back down."
  },
  {
    icon: <HandCoins className="w-10 h-10 text-gold-500" />,
    title: "Transparent Fees",
    description: "No hidden costs, no surprise billing. I provide clear fee structures, including flat-fee arrangements for certain matters."
  },
  {
    icon: <Clock className="w-10 h-10 text-gold-500" />,
    title: "Direct Accessibility",
    description: "Legal crises don't happen on a 9-to-5 schedule. My clients have direct access to me when it matters most."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-50 dark:bg-navy-900 border-t border-navy-100 dark:border-navy-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy-900 dark:text-white mb-6">
            Why Choose Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            In the legal arena, experience and reputation matter. Here is what sets my practice apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="mx-auto md:mx-0 w-20 h-20 bg-white dark:bg-navy-950 rounded-full flex items-center justify-center shadow-md mb-6 border border-navy-100 dark:border-navy-800">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
