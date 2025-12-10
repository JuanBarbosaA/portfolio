import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layout,
  Server,
  Terminal,
  Palette,
  Code,
  HeartHandshake,
  Database,
  Globe,
  Cpu,
  Layers
} from "lucide-react";


const TechCategory = ({ title, icon: Icon, skills, delay, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.2 + (index * 0.05) }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 text-sm font-medium rounded-lg bg-muted/50 text-muted-foreground border border-transparent hover:border-primary/20 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SASS",
        "JSX",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Chakra UI",
        "Headless UI",
        "Framer Motion",
        "React Query",
        "Zustand / Context API",
        "Accessibility (A11y)",
        "Responsive Design",
        "Component Architecture",
        "Vite",
        "Prettier",
        "WordPress",
        "WooCommerce",
        "Elementor",
        "Shopify",
        "Wix"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Prisma",
        "Mongoose",
        "JWT Authentication",
        "OAuth",
        "WebSockets",
        "tRPC",
        "ORM",
        "ODM"
      ]
    },
    {
      title: "Full-Stack",
      icon: Code,
      skills: [
        "Next.js Full-Stack Development",
        "API Routes",
        "Server Actions",
        "Database Modeling",
        "Authentication (NextAuth, JWT)",
        "Monorepos (Turborepo)",
        "Microservices Basics",
        "State Management",
        "Performance Optimization",
        "Testing (Vitest / Jest)"
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Terminal,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Vercel",
        "Netlify",
        "CI/CD",
        "Linux",
        "Postman",
        "Cloudflare",
        "Nginx",
        "PM2",
        "Command Line Tools"
      ]
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Layouts",
        "Color Palettes",
        "Typography",
        "Component Libraries",
        "Adobe XD"
      ]
    },
    {
      title: "Soft Skills",
      icon: HeartHandshake,
      skills: [
        "Communication",
        "Team Collaboration",
        "Problem Solving",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
        "Attention to Detail",
        "Client Communication",
        "Leadership",
        "Project Ownership",
        "Fast Learning"
      ]
    }
  ];


  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-4 block"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Tech <span className="text-gradient">Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A curated set of technologies I use to build scalable, high-performance applications.
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <TechCategory
              key={category.title}
              {...category}
              delay={0.3 + (index * 0.1)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
