import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Target } from "lucide-react";

const TypeWriter = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="inline">
      {displayText}
      <span className={`typing-cursor ${isComplete ? 'animate-pulse' : ''}`} />
    </span>
  );
};



const FloatingOrb = ({ className, size, delay }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    style={{ width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);




const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("es")) setLang("es");
    else setLang("en");
  }, []);
  const translations = {
    en: {
      role: "Frontend Developer & UI/UX Enthusiast",
      intro: "Hi, I'm ",
      description:
        "I craft beautiful, interactive digital experiences with modern technologies. Passionate about creating pixel-perfect interfaces that delight users.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
    },
    es: {
      role: "Desarrollador Frontend & Entusiasta UI/UX",
      intro: "Hola, soy ",
      description:
        "Creo experiencias digitales hermosas e interactivas usando tecnologías modernas. Apasionado por interfaces precisas que encantan a los usuarios.",
      viewWork: "Ver mi Trabajo",
      getInTouch: "Contáctame",
    },
  };


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background orbs */}
      <FloatingOrb className="bg-primary/20 top-20 left-10" size="400px" delay={0} />
      <FloatingOrb className="bg-accent/15 bottom-20 right-10" size="350px" delay={2} />
      <FloatingOrb className="bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="600px" delay={1} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 3D Floating shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/30 rounded-2xl"
        style={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm"
        style={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-16 h-16 border border-accent/20 rotate-45"
        style={{
          x: mousePosition.x * 1,
          y: mousePosition.y * 1,
        }}
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-full glass">
            {translations[lang].role}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight"
        >
          <span className="text-foreground">{translations[lang].intro}</span>
          <span className="text-gradient">
            <TypeWriter text="Juan Barbosa" delay={120} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {translations[lang].description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#portfolio"
            className="group relative px-8 py-4 rounded-full font-medium text-primary-foreground overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent transition-transform group-hover:scale-110" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              {translations[lang].viewWork}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations[lang].getInTouch}
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/JuanBarbosaA", target: "_blank", rel: "noopener noreferrer", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/juanbarbosavella/", label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
            { icon: Mail, href: "mailto:juanbarbosavella@gmail.com", label: "Email", target: "_blank", rel: "noopener noreferrer" },
          ].map(({ icon: Icon, href, label, target, rel }) => (
            <motion.a
              key={label}
              href={href}
              target={target}
              rel={rel}
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              whileHover={{ y: -3 }}
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
