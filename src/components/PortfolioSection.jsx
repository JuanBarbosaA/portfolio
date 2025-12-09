import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";



const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with React",
    longDescription: "A full-featured e-commerce platform built with React, featuring real-time inventory, secure payments, and an intuitive admin dashboard. Implemented advanced filtering, search functionality, and personalized recommendations.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Data visualization & analytics",
    longDescription: "An intelligent dashboard for monitoring AI models and visualizing complex data. Features real-time metrics, customizable charts, and automated reporting capabilities.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tags: ["TypeScript", "D3.js", "TensorFlow", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time social networking",
    longDescription: "A modern social platform with real-time messaging, story sharing, and live streaming capabilities. Built with scalability in mind using microservices architecture.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 4,
    title: "Finance Tracker",
    description: "Personal finance management",
    longDescription: "Comprehensive finance tracking application with budgeting tools, expense categorization, and investment portfolio monitoring. Includes bank integration and automated insights.",
    image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    tags: ["React", "Python", "Flask", "Plaid API"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-emerald-500/20 to-green-500/20"
  },
  {
    id: 5,
    title: "Creative Portfolio",
    description: "3D interactive showcase",
    longDescription: "An immersive 3D portfolio experience featuring WebGL animations, particle systems, and interactive storytelling elements. Designed to push the boundaries of web creativity.",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    tags: ["Three.js", "GSAP", "WebGL", "Blender"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    id: 6,
    title: "Learning Platform",
    description: "Interactive education system",
    longDescription: "Online learning platform with video courses, interactive quizzes, progress tracking, and certificates. Features live sessions and community discussion forums.",
    image: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    tags: ["Vue.js", "Django", "WebRTC", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 7,
    title: "Health & Fitness",
    description: "Workout tracking app",
    longDescription: "Comprehensive fitness application with workout planning, nutrition tracking, and progress analytics. Integrates with wearable devices for real-time health monitoring.",
    image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    tags: ["React Native", "Firebase", "HealthKit", "Charts"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    id: 8,
    title: "Real Estate Platform",
    description: "Property listing & search",
    longDescription: "Modern real estate platform with advanced property search, virtual tours, mortgage calculators, and agent matching. Features map-based exploration and neighborhood insights.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["Next.js", "Mapbox", "Prisma", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-indigo-500/20 to-violet-500/20"
  },
  {
    id: 9,
    title: "Task Management",
    description: "Team collaboration tool",
    longDescription: "Powerful project management tool with Kanban boards, Gantt charts, time tracking, and team collaboration features. Includes automation and integrations with popular tools.",
    image: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    tags: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-teal-500/20 to-purple-500/20"
  },
  {
    id: 10,
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
        <div
          className="aspect-[4/3] relative overflow-hidden"
          style={{ background: project.image }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
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
        className="relative w-full max-w-4xl glass-strong rounded-3xl overflow-hidden"
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
        <div
          className="aspect-video w-full"
          style={{ background: project.image }}
        />

        {/* Content */}
        <div className="p-8">
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
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Source Code
            </motion.a>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
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
