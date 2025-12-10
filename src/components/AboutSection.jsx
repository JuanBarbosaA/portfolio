import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";
import photo from "../assets/images/photo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
    { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful interfaces" },
    { icon: Zap, title: "Performance", desc: "Optimizing for speed & efficiency" },
    { icon: Sparkles, title: "Innovation", desc: "Exploring new technologies" },
  ];

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
                <span className="text-primary font-semibold">4+ Years</span>
              </motion.div>
              <motion.div
                className="absolute -left-4 bottom-1/4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-accent font-semibold">50+ Projects</span>
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
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              I'm a passionate frontend developer with over 5 years of experience
              building modern web applications. I specialize in React, TypeScript,
              and creating beautiful user interfaces that are both functional and
              aesthetically pleasing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </motion.p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
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
