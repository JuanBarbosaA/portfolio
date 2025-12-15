import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import drink1 from "../assets/projects/drink1.jpg";
import interpreters from "../assets/projects/interpreters.png";
import goblin from "../assets/projects/goblin.png";
import game from "../assets/projects/game.png";
import creativist from "../assets/projects/creativist.png";
import gallery from "../assets/projects/gallery.png";
import golf from "../assets/projects/golf.png";
import tonni from "../assets/projects/tonni.png";
import calendly from "../assets/projects/calendly.png";
import giphy from "../assets/projects/giphy.png";
import fitmatch from "../assets/projects/fitmatch.png";
import dibujo from "../assets/projects/dibujo.png";

const projects = [
  {
    id: 1,
    title: "Drink Yahweh",
    description: "Modern e-commerce experience built with WordPress",
    longDescription:
      "A mobile-first WooCommerce store built on WordPress with custom design, branded animations, API shipping integration, and performance optimization. Delivered a fast, secure, and visually engaging shopping experience across mobile and desktop.",
    image: drink1,
    tags: ["WordPress", "WooCommerce", "Elementor", "CSS", "PHP", "API", "MySQL"],
    liveUrl: "https://drinkyahweh.com/",
    githubUrl: "#",
    color: "from-violet-500/20 to-purple-500/20"
  },

  {
    id: 2,
    title: "Design Agency Website",
    description: "Custom WordPress portfolio website",
    longDescription:
      "Customized and implemented the Tonni WordPress theme for a design agency, creating a modern and responsive portfolio site. Built multiple pages with Elementor, configured global styles, optimized images, and refined layouts to match the brand’s visual identity.",
    image: tonni,
    tags: ["WordPress", "Elementor", "Theme Customization", "CSS", "PHP"],
    liveUrl: "https://petero86.sg-host.com/",
    githubUrl: "#",
    color: "from-indigo-500/20 to-violet-500/20"
  },
  {
    id: 3,
    title: "DC Interpreters – Landing Page",
    description: "Responsive WordPress landing page",
    longDescription:
      "Developed a professional one-page WordPress landing site for a Washington D.C. language services company. Built the full layout with Elementor following the Adobe XD design, optimized performance, improved mobile responsiveness, and implemented a clean contact form to increase conversions.",
    image: interpreters,
    tags: ["WordPress", "Elementor", "Landing Page", "CSS", "PHP"],
    liveUrl: "https://dcinterpreters.net/",
    githubUrl: "#",
    color: "from-pink-500/20 to-rose-500/20"
  },

  {
    id: 4,
    title: "Creativist – UI Design",
    description: "Figma UI design for landing page",
    longDescription:
      "Designed the full desktop and mobile UI in Figma for the Creativist app landing page. Created a clean, modern layout to highlight the app concept and direct users to the download links. The final site was later implemented by the developer using HTML and CSS.",
    image: creativist,
    tags: ["Figma", "UI Design", "Responsive Design", "Prototyping"],
    liveUrl: "https://creativist.app/",
    githubUrl: "#",
    color: "from-orange-500/20 to-yellow-500/20"
  },


  {
    id: 5,
    title: "Invictus Golf – Interactive Website",
    description: "Interactive WordPress site with live leaderboard",
    longDescription:
      "Developed a fully interactive WordPress website for Invictus Golf with player check-in forms, game selection, and a real-time leaderboard for 'Closest to the Hole' and 'Longest Drive.' Implemented custom PHP logic, MySQL data handling, and automated reporting via Google Sheets. Built the UI with Elementor and custom CSS for a smooth, responsive experience.",
    image: golf,
    tags: ["WordPress", "PHP", "MySQL", "Elementor", "Apps Script API"],
    liveUrl: "https://invictusisgolf.com/form/",
    githubUrl: "#",
    color: "from-rose-500/20 to-pink-500/20"
  },

  {
    id: 6,
    title: "Calendly UI Clone",
    description: "Responsive React landing page",
    longDescription:
      "A fully responsive and animated clone of Calendly’s homepage built with React, CSS Modules, and Vite. Recreated layouts, SVGs, animations, and visual interactions to match the original design, focusing on frontend architecture, UI accuracy, and clean component structure. This is a static, frontend-only project with no backend.",
    image: calendly,
    tags: ["React", "CSS Modules", "Vite", "Frontend UI", "Animations"],
    liveUrl: "https://juanbarbosa.vercel.app/",
    githubUrl: "https://github.com/JuanBarbosaA/Calendly",
    color: "from-teal-500/20 to-purple-500/20"
  },


  {
    id: 7,
    title: "FitMatch",
    description: "Health & wellness booking platform",
    longDescription:
      "A full health and wellness platform that connects users with trainers and nutritionists for appointments, progress tracking, personalized plans, and in-app messaging. Built with a React frontend and a .NET MVC backend, the system includes user and professional dashboards, plan management, and PayPal payment integration for secure subscription and service purchases.",
    image: fitmatch,
    tags: ["React", ".NET MVC", "MySQL", "PayPal API", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/JuanBarbosaA/FitMatchMVC",
    color: "from-purple-500/20 to-pink-500/20"
  },


  {
    id: 8,
    title: "Giphy Clone",
    description: "GIF search & discovery app",
    longDescription:
      "A fully functional Giphy-style application that allows users to search, filter, and browse trending GIFs using a fast and responsive interface. Built with modern frontend technologies and integrated with an external GIF API to deliver real-time search results, infinite scroll, and category browsing.",
    image: giphy,
    tags: ["JavaScript", "React", "API Integration", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 9,
    title: "Dibujo Fácil",
    description: "Educational platform to learn how to draw step by step",
    longDescription:
      "Dibujo Fácil is an interactive educational platform built with React, Tailwind, Node.js, and MongoDB. It allows users to learn how to draw through step-by-step tutorials organized by categories and skill levels. The platform includes an advanced search system, comments, star ratings, achievements, user profiles, and an admin panel to manage tutorials. It features a clean, modern, and fully responsive UI/UX focused on enhancing the user experience.",
    image: dibujo,
    tags: ["React", "Node.js", "Tailwind", "MongoDB", "Full Stack"],
    liveUrl: "#",
    githubUrl: "https://github.com/JuanBarbosaA/DibujoFacil",
    color: "from-emerald-500/20 to-green-500/20"
  },

  {
    id: 10,
    title: "Goblins – Clash of Clans Landing",
    description: "Responsive gaming landing page",
    longDescription:
      "A fully responsive landing page inspired by Clash of Clans, featuring modern UI design, smooth layouts, and optimized mobile/desktop responsiveness. Built with clean HTML, CSS, and JavaScript to showcase characters, game features, navigation sections, and call-to-action areas. Designed with a strong focus on visual appeal and gaming aesthetics.",
    image: goblin,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://stunning-parfait-335a97.netlify.app/",
    githubUrl: "#",
    color: "from-cyan-500/20 to-blue-500/20"
  },

  {
    id: 11,
    title: "GameDev Landing Page",
    description: "Responsive course landing page",
    longDescription:
      "A modern and fully responsive landing page for a Game Development course, built with pure HTML, CSS, and JavaScript. Includes sections for testimonials, course features, student stats, app download links, and a clean UI designed to maximize conversions. Optimized for both mobile and desktop, providing a smooth and professional user experience.",
    image: game,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://mywebsiteyoutube1.netlify.app/",
    githubUrl: "#",
    color: "from-emerald-500/20 to-green-500/20"
  },





  {
    id: 12,
    title: "Music Streaming",
    description: "Audio platform with playlists",
    longDescription: "Feature-rich music streaming service with personalized recommendations, collaborative playlists, and social sharing. Includes podcast support and high-quality audio streaming.",
    image: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
    tags: ["React", "Spotify API", "Web Audio", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-red-500/20 to-amber-500/20"
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="project-card relative">
        {/* Image area */}
        <div className="aspect-[4/3] relative overflow-hidden group">
          {project.image.startsWith("linear-gradient") ? (
            <div
              className={`absolute inset-0 transition-all duration-500 group-hover:brightness-80`}
              style={{ background: project.image }}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width="400"
              height="300"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
            />
          )}

          {/* Overlay de texto */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.span
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium"
            >
              View Details
            </motion.span>
          </div>
        </div>


        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[90vh] glass-strong rounded-3xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-primary/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass hover:bg-primary/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass hover:bg-primary/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image */}
        <div className="h-60 sm:h-72 md:h-80 w-full flex-shrink-0 relative overflow-hidden">
          {project.image.startsWith("linear-gradient") ? (
            <div
              className="absolute inset-0"
              style={{ background: project.image }}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              width="1200"
              height="600"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          )}
        </div>

        {/* Scrollable content */}
        <div className="p-8 overflow-y-auto flex-1 relative">
          {/* Scroll hint: gradient bottom */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
          <h3 className="text-3xl font-display font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-6">{project.longDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium glass"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            {project.githubUrl == "#" ? null : (<motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Source Code
            </motion.a>)}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(9);

  const currentIndex = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1]);
    }
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-4 block"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            My <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of projects that showcase my skills and passion for creating
            beautiful, functional web experiences
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}

              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="flex justify-center">
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium">Load More Projects</span>
              <div className="p-3 rounded-full glass group-hover:bg-primary/10 transition-colors">
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </div>
            </motion.button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < projects.length - 1}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;




