"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "When my company faced a bet-the-company litigation, Jonathan and his team didn't just provide legal advice—they provided a masterclass in strategic defense. They are ferocious advocates.",
    author: "M. T.",
    role: "CEO, Tech Enterprise",
    rating: 5
  },
  {
    text: "The level of personalized attention I received during my divorce was unparalleled. They managed to protect my assets while handling the emotional aspects with immense grace.",
    author: "Sarah L.",
    role: "Private Client",
    rating: 5
  },
  {
    text: "Facing federal charges was the most terrifying experience of my life. This firm stepped in, dismantled the prosecution's case piece by piece, and gave me my life back.",
    author: "David R.",
    role: "Former Executive",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500 via-navy-950 to-navy-950"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Client Voices</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Trusted by Those Who Demand the Best
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex text-gold-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5" fill="currentColor" />)}
            </div>
            <span className="text-gray-300 font-medium">Rated 4.9/5 from 200+ clients</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-900/50 backdrop-blur-sm p-8 rounded-2xl border border-navy-800 relative group hover:border-gold-500/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-navy-800 group-hover:text-gold-500/20 transition-colors" />
              
              <div className="flex space-x-1 mb-6 text-gold-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-bold text-white tracking-wide">{testimonial.author}</p>
                <p className="text-sm text-gold-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
