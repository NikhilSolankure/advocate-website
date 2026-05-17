"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Results", href: "#results" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 dark:bg-navy-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-navy-800 shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Scale className={cn("w-8 h-8 transition-colors", isScrolled ? "text-gold-500" : "text-white group-hover:text-gold-400")} />
          <span className={cn("text-xl md:text-2xl font-serif font-semibold tracking-tight transition-colors", isScrolled ? "text-navy-900 dark:text-white" : "text-white")}>
            Adv. Balraj Salokhe
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold-500",
                isScrolled ? "text-navy-700 dark:text-gray-300" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center group",
              isScrolled 
                ? "bg-navy-900 text-white hover:bg-gold-500 dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-navy-950" 
                : "bg-white text-navy-900 hover:bg-gold-500 hover:text-white border border-transparent"
            )}
          >
            <Phone className="w-4 h-4 mr-2" />
            Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
             <X className={cn("w-6 h-6", isScrolled ? "text-navy-900 dark:text-white" : "text-white")} />
          ) : (
             <Menu className={cn("w-6 h-6", isScrolled ? "text-navy-900 dark:text-white" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-navy-900 shadow-xl border-t border-gray-100 dark:border-navy-800 md:hidden flex flex-col"
          >
            <div className="flex flex-col py-6 px-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-navy-800 dark:text-gray-200 border-b border-gray-100 dark:border-navy-800 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-lg bg-gold-500 text-navy-950 font-semibold flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
