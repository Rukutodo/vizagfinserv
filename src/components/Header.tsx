'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CONTACT } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { UserIcon, MenuIcon, XIcon } from '@/components/ui/Icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/65 backdrop-blur-xl border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]' 
          : 'bg-white border-neutral-100'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3 lg:gap-5">
          {/* Logo / Brand */}
          <Link 
            href="/" 
            className="flex items-center shrink-0 mr-2 xl:mr-4 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]" 
            onClick={() => setIsOpen(false)}
            aria-label="VizagFinServ Home"
          >
            <Image
              src="/logo.svg"
              alt="VizagFinServ"
              width={160}
              height={44}
              priority
              unoptimized
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex items-center px-2.5 xl:px-3.5 py-2 text-sm xl:text-[15px] font-medium whitespace-nowrap transition-all duration-200 group hover:-translate-y-0.5 ${
                    isActive ? 'text-brand-900 font-semibold' : 'text-neutral-700 hover:text-brand-900'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-brand-800 rounded-full transition-transform duration-300 ease-out origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Only Actions (Login + Start a Conversation) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wealthelite.in/client-login"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 xl:px-5 py-2 text-sm font-semibold text-brand-900 rounded-full whitespace-nowrap transition-all duration-300 group ${
                  isScrolled
                    ? 'bg-white border border-neutral-200 shadow-sm hover:border-brand-400 hover:shadow-md'
                    : 'bg-transparent border border-brand-200 hover:bg-brand-50 hover:border-brand-300'
                }`}
              >
                <UserIcon className="w-4 h-4 text-brand-900 group-hover:scale-110 transition-transform shrink-0" />
                <span className="whitespace-nowrap">Client Login</span>
              </a>

              <Button
                href="/contact"
                size="sm"
                className="!px-4 xl:!px-5 !py-2 !text-sm whitespace-nowrap shadow-sm hover:shadow-md"
              >
                Start a Conversation
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-900 hover:bg-brand-50 rounded-lg transition-colors cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100 shadow-xl shadow-black/5"
          >
            <nav className="container-narrow py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive ? 'text-brand-900 bg-brand-50/80 font-semibold' : 'text-neutral-700 hover:text-brand-800 hover:bg-brand-50/60'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile Auth & CTA */}
              <div className="pt-4 px-4 border-t border-neutral-100 mt-2 flex flex-col gap-3">
                <a
                  href="https://wealthelite.in/client-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-brand-900 bg-brand-50/50 hover:bg-brand-50 rounded-full transition-colors border border-brand-100"
                >
                  <UserIcon className="w-4 h-4" />
                  Client Login
                </a>
                <Button href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                  Start a Conversation
                </Button>
                <p className="mt-2 text-[11px] text-neutral-400 text-center">
                  {CONTACT.arn} | {CONTACT.euin}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
