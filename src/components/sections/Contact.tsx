"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-navy-950 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
            Confidential Consultation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Time is often the most critical factor in legal matters. Contact us today to schedule a confidential review of your case.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-3/5 bg-navy-50 dark:bg-navy-900 p-8 md:p-12 rounded-2xl shadow-sm border border-navy-100 dark:border-navy-800"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Message Received</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We have received your inquiry and will contact you shortly to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy-900 dark:text-gray-200">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy-900 dark:text-gray-200">Phone Number *</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all dark:text-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy-900 dark:text-gray-200">Email Address *</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy-900 dark:text-gray-200">Case Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all dark:text-white appearance-none">
                      <option value="">Select a practice area...</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="family">Family & Divorce</option>
                      <option value="civil">Civil Litigation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy-900 dark:text-gray-200">Brief Description</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all dark:text-white resize-none"
                    placeholder="Please provide a brief overview of your situation..."
                  ></textarea>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="text-sm font-medium text-navy-900 dark:text-gray-200">Preferred Contact Method</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="contact" value="call" className="text-gold-500 focus:ring-gold-500" defaultChecked />
                      <span className="text-gray-600 dark:text-gray-300">Call</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="contact" value="email" className="text-gold-500 focus:ring-gold-500" />
                      <span className="text-gray-600 dark:text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="contact" value="whatsapp" className="text-gold-500 focus:ring-gold-500" />
                      <span className="text-gray-600 dark:text-gray-300">WhatsApp</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Consultation</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Office Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/5 space-y-8"
          >
            <div className="bg-navy-50 dark:bg-navy-900 p-8 rounded-2xl border border-navy-100 dark:border-navy-800">
              <h3 className="text-2xl font-serif font-bold text-navy-900 dark:text-white mb-6">Headquarters</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-navy-950 flex items-center justify-center text-gold-500 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Nagala Park<br/>Kolhapur, Maharashtra</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-navy-950 flex items-center justify-center text-gold-500 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">Phone</h4>
                    <a href="tel:+917756040506" className="text-gray-600 dark:text-gray-400 mt-1 hover:text-gold-500 transition-colors block">+91 7756040506</a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-navy-950 flex items-center justify-center text-gold-500 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">Email</h4>
                    <a href="mailto:Adv.balrajsalokhe@gmail.com" className="text-gray-600 dark:text-gray-400 mt-1 hover:text-gold-500 transition-colors block">Adv.balrajsalokhe@gmail.com</a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-navy-950 flex items-center justify-center text-gold-500 shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">Office Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Mon - Fri: 8:00 AM - 6:00 PM<br/>Weekend: By appointment</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Static Map Placeholder */}
            <div className="w-full h-64 bg-navy-100 dark:bg-navy-800 rounded-2xl overflow-hidden relative border border-navy-200 dark:border-navy-700">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded-lg shadow-lg font-semibold text-navy-900 dark:text-white text-sm border border-navy-100 dark:border-navy-700 flex items-center">
                  <MapPin className="w-4 h-4 text-gold-500 mr-2" />
                  Adv. Balraj Salokhe
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
