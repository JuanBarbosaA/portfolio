import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en");
  }, [])


  const translations = {
    en: {
      footerLinks: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
      copyright: "By Juan Barbosa",
    },
    es: {
      footerLinks: [
        { label: "Inicio", href: "#" },
        { label: "Sobre Mí", href: "#about" },
        { label: "Habilidades", href: "#skills" },
        { label: "Portafolio", href: "#portfolio" },
        { label: "Contacto", href: "#contact" },
      ],
      copyright: "Por Juan Barbosa",
    },
  };


  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}

          <motion.a
            href="#"
            className="text-2xl font-display font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            JB
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {translations[lang].footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {translations[lang].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
