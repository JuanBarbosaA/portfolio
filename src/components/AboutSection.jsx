import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";
import photo from "../assets/images/photo.webp";
import { useState, useEffect } from "react";


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("es")) setLang("es");
    else setLang("en");
  }, []);

  const translations = {
    en: {
      aboutMe: "About Me",
      title: "Crafting Digital",
      subtitle: "Experiences",
      years: "4+ Years",
      projects: "50+ Projects",
      description1: "I'm a passionate frontend developer with over 4 years of experience building modern web applications. I specialize in React, TypeScript, and creating beautiful user interfaces that are both functional and aesthetically pleasing.",
      description2: "When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community.",
      highlights: [
        { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
        { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful interfaces" },
        { icon: Zap, title: "Performance", desc: "Optimizing for speed & efficiency" },
        { icon: Sparkles, title: "Innovation", desc: "Exploring new technologies" },
      ],

    },
    es: {
      aboutMe: "Sobre Mí",
      title: "Creando Experiencias",
      subtitle: "Digitales",
      years: "4+ Años",
      projects: "50+ Proyectos",
      description1: "Soy un desarrollador frontend apasionado con más de 4 años de experiencia construyendo aplicaciones web modernas. Me especializo en React, TypeScript y en crear interfaces hermosas que sean funcionales y atractivas.",
      description2: "Cuando no estoy programando, me encontrarás explorando nuevas tendencias de diseño, contribuyendo a proyectos de código abierto o compartiendo conocimiento con la comunidad de desarrolladores.",
      highlights: [
        { icon: Code2, title: "Código Limpio", desc: "Escribiendo código mantenible y escalable" },
        { icon: Palette, title: "Diseño UI/UX", desc: "Creando interfaces hermosas" },
        { icon: Zap, title: "Rendimiento", desc: "Optimizando para velocidad y eficiencia" },
        { icon: Sparkles, title: "Innovación", desc: "Explorando nuevas tecnologías" },
      ],


    },
  };


  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial opacity-50" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative frame */}
              <motion.div
                className="absolute -inset-4 border border-primary/20 rounded-3xl"
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -inset-8 border border-accent/10 rounded-3xl"
                animate={{ rotate: [0, -1, 0, 1, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

                {/* Placeholder for photo - using gradient + icon */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-card">
                  <div className="text-center">
                    <img src={photo} alt="Juan Barbosa" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-4 top-1/4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-primary font-semibold">{translations[lang].years}</span>
              </motion.div>
              <motion.div
                className="absolute -left-4 bottom-1/4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-accent font-semibold">{translations[lang].projects}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-4 block"
            >
              {translations[lang].aboutMe}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              {translations[lang].title}
              <span className="text-gradient"> {translations[lang].subtitle}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              {translations[lang].description1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              {translations[lang].description2}
            </motion.p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {translations[lang].highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl glass hover:glow-subtle transition-all duration-300 group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
