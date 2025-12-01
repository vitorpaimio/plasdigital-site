import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'O Problema', href: '#problem' },
    { name: 'Metodologia', href: '#methodology' },
    { name: 'Soluções', href: '#services' },
    { name: 'Cases', href: '#cases' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm' : 'bg-transparent py-4 md:py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-blue-500 p-2 rounded-xl text-white group-hover:scale-105 transition-transform">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled || isOpen ? 'text-neutral-900' : 'text-white mix-blend-difference'}`}>
            Plas Digital
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? 'text-neutral-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Button variant={scrolled ? 'primary' : 'secondary'} size="sm" href="#contact">
            Agendar Diagnóstico
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 rounded-lg z-50 transition-colors ${
            scrolled || isOpen ? 'text-neutral-900 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-white pt-24 px-6 flex flex-col shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  href={link.href}
                  className="text-xl font-semibold text-neutral-800 py-4 border-b border-neutral-100 active:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button className="w-full justify-center text-lg py-4" href="#contact" onClick={() => setIsOpen(false)}>
                  Agendar Diagnóstico
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;