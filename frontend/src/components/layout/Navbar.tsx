"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Companies", href: "/companies" },
  { name: "Leadership", href: "/leadership" },
  { name: "Journey", href: "/journey" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gold/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center border border-gold/40 shadow-md group-hover:border-gold transition-colors duration-300">
                <span className="text-gold font-serif font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-navy font-serif font-bold text-lg tracking-wider leading-none group-hover:text-gold transition-colors duration-300">
                  SUASION
                </span>
                <span className="text-[10px] text-charcoal/70 tracking-widest leading-none mt-1">
                  GROUP
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-2 ${
                    isActive
                      ? "text-navy font-semibold"
                      : "text-charcoal/80 hover:text-navy"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-navy text-white hover:bg-gold hover:text-navy rounded border border-navy hover:border-gold transition-all duration-300 shadow-sm hover:shadow"
            >
              Book Consultation
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-navy text-white rounded border border-navy hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Consult
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:bg-navy/5 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Smooth slide down) */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 border-b border-gold/10" : "max-h-0 opacity-0"
        } bg-white`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-navy/5 text-navy font-semibold border-l-4 border-gold"
                    : "text-charcoal/80 hover:bg-gray-50 hover:text-navy"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 px-3">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold uppercase tracking-wider bg-navy text-white hover:bg-gold hover:text-navy rounded border border-navy hover:border-gold transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
