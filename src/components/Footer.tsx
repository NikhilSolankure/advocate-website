import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-navy-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-serif font-semibold tracking-tight">Adv. Balraj Salokhe</span>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed">
              Justice is not just a word—it's a promise. We provide relentless advocacy and strategic counsel for those who demand excellence and results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-200 hover:bg-gold-500 hover:text-navy-950 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-200 hover:bg-gold-500 hover:text-navy-950 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-200 hover:bg-gold-500 hover:text-navy-950 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-navy-200 text-sm">
              <li><Link href="#about" className="hover:text-gold-400 transition-colors">About the Firm</Link></li>
              <li><Link href="#practice-areas" className="hover:text-gold-400 transition-colors">Practice Areas</Link></li>
              <li><Link href="#results" className="hover:text-gold-400 transition-colors">Case Results</Link></li>
              <li><Link href="#testimonials" className="hover:text-gold-400 transition-colors">Client Testimonials</Link></li>
              <li><Link href="#faq" className="hover:text-gold-400 transition-colors">Legal FAQ</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Practice Areas</h4>
            <ul className="space-y-3 text-navy-200 text-sm">
              <li><Link href="#" className="hover:text-gold-400 transition-colors">Criminal Defense</Link></li>
              <li><Link href="#" className="hover:text-gold-400 transition-colors">Corporate Law</Link></li>
              <li><Link href="#" className="hover:text-gold-400 transition-colors">Family & Divorce</Link></li>
              <li><Link href="#" className="hover:text-gold-400 transition-colors">Civil Litigation</Link></li>
              <li><Link href="#" className="hover:text-gold-400 transition-colors">Intellectual Property</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-navy-200 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>Nagala Park<br/>Kolhapur, Maharashtra</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>+91 7756040506</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="break-all">Adv.balrajsalokhe@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center text-xs text-navy-400">
          <p>© {new Date().getFullYear()} Adv. Balraj Salokhe. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-navy-500">
          This website is for informational purposes only and does not constitute legal advice.
        </div>
      </div>
    </footer>
  );
}
