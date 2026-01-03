import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import drink1 from "../assets/projects/drink1.webp";
import interpreters from "../assets/projects/interpreters.webp";
import goblin from "../assets/projects/goblin.webp";
import game from "../assets/projects/game.webp";
import creativist from "../assets/projects/creativist.webp";
import gallery from "../assets/projects/gallery.webp";
import golf from "../assets/projects/golf.webp";
import tonni from "../assets/projects/tonni.webp";
import calendly from "../assets/projects/calendly.webp";
import giphy from "../assets/projects/giphy.webp";
import fitmatch from "../assets/projects/fitmatch.webp";
import dibujo from "../assets/projects/dibujo.webp";
import be_known from "../assets/projects/be_known.webp";
import portfolio from "../assets/projects/portfolio.webp";
import executive_haven from "../assets/projects/executive_haven.webp";
import migration from "../assets/projects/migration.webp";

const projects = [
  {
    id: 1,
    title: "Drink Yahweh – Custom WooCommerce Store",
    description: "Mobile-first WooCommerce store with API-based shipping automation",
    longDescription:
      "Built a mobile-first WooCommerce e-commerce store for Drink Yahweh, selling beverages and apparel online. The project involved converting Adobe XD designs into a fully functional WordPress store with custom branding, front-end animations, and responsive layouts. Integrated shipping and inventory automation via external APIs, implemented secure payment gateways, and optimized performance for fast load times.",
    image: drink1,
    tags: [
      "WordPress",
      "WooCommerce",
      "E-commerce",
      "API Integration",
      "Stripe",
      "PayPal",
      "Responsive Design",
      "SEO"
    ],
    liveUrl: "https://drinkyahweh.com/",
    githubUrl: "#",
    color: "from-violet-500/20 to-purple-500/20"
  },

  {
    id: 2,
    title: "Be Known - Wordpress Migration",
    description: "Squarespace & Webflow to WordPress migration with SEO preservation",
    longDescription:
      "Migrated and rebuilt a therapy practice website from Squarespace and Webflow to WordPress on Closte (Google Cloud). The project included full domain and DNS transfer, custom Elementor layouts matching the original design, blog migration with SEO-friendly URL redirects, and marketing automation integrations. Delivered a fast, secure, and mobile-responsive site while maintaining existing Google search rankings.",
    image: be_known,
    tags: [
      "WordPress",
      "Elementor",
      "WordPress Migration",
      "DNS",
      "Google Cloud",
      "SEO",
      "Zapier",
      "Mailchimp",
      "Fluent Forms"
    ],
    liveUrl: "https://beknowntherapy.com",
    githubUrl: "#",
    color: "from-violet-500/20 to-purple-500/20"
  },

  {
    id: 2,
    title: "React Portfolio - Performance & SEO Optimization",
    description: "Core Web Vitals and Lighthouse performance optimization",
    longDescription:
      "Optimized a React-based portfolio website to significantly improve performance and SEO, focusing on Core Web Vitals and real-world loading metrics. The project addressed unoptimized images, layout shifts, and render-blocking resources, resulting in a faster, more stable, and SEO-friendly website.",
    image: portfolio,
    tags: [
      "React",
      "Web Performance",
      "Core Web Vitals",
      "Lighthouse",
      "SEO",
      "Page Speed Optimization",
      "WebP",
      "Lazy Loading"
    ],
    liveUrl: "https://juanbarbosaa.github.io/portfolio/",
    githubUrl: "https://github.com/JuanBarbosaA/portfolio",
    color: "from-violet-500/20 to-purple-500/20"
  },

  {
    id: 2,
    title: "Executive Haven – WordPress Migration & DNS Setup",
    description: "Zero-downtime WordPress migration with DNS and SSL configuration",
    longDescription:
      "Executed a full WordPress migration for Executive Haven from SiteGround to Google Cloud with zero downtime. The project included complete DNS reconfiguration, SSL and HTTPS enforcement, SMTP setup for reliable email delivery, and server-level optimizations to improve WordPress performance and stability.",
    image: executive_haven,
    tags: [
      "WordPress",
      "WordPress Migration",
      "DNS",
      "SSL",
      "Google Cloud",
      "Hosting Setup",
      "SMTP",
      "Performance Optimization"
    ],
    liveUrl: "https://executivehaven.net",
    githubUrl: "#",
    color: "from-violet-500/20 to-purple-500/20"
  },

  {
    id: 2,
    title: "Creative Agency – WordPress Theme Customization",
    description: "Custom Elementor layouts and theme customization for a creative agency",
    longDescription:
      "Customized and implemented a premium WordPress theme for a creative and web development agency. The project included full theme configuration, brand-aligned color palette and typography, multi-page layouts built with Elementor, and custom portfolio and pricing sections. Delivered a modern, responsive website optimized for performance and cross-browser compatibility.",
    image: tonni,
    tags: [
      "WordPress",
      "Elementor",
      "WordPress Theme Customization",
      "UI Design",
      "Responsive Design",
      "Front-End Development",
      "Performance Optimization"
    ],
    liveUrl: "https://petero86.sg-host.com/",
    githubUrl: "#",
    color: "from-indigo-500/20 to-violet-500/20"
  },
  {
    id: 3,
    title: "DC Interpreters – WordPress Landing Page",
    description: "High-converting single-page WordPress landing built with Elementor",
    longDescription:
      "Developed a professional one-page WordPress landing website for a Washington D.C.–based language services company. Converted an Adobe XD design into a clean, modern, and mobile-optimized layout using Elementor. The landing page was structured to highlight services, build trust, and drive inquiries, with fast load times and an SEO-friendly setup.",
    image: interpreters,
    tags: [
      "WordPress",
      "Elementor",
      "Landing Page",
      "UI/UX Design",
      "Responsive Design",
      "SEO",
      "Performance Optimization"
    ],
    liveUrl: "https://dcinterpreters.net/",
    githubUrl: "#",
    color: "from-pink-500/20 to-rose-500/20"
  },

  {
    id: 4,
    title: "Creativist – UI Design for App Landing Page",
    description: "Responsive UI design in Figma for a mobile app landing page",
    longDescription:
      "Designed the complete desktop and mobile user interface in Figma for the Creativist app landing page. The goal was to clearly communicate the app concept, highlight key features, and guide users toward app download actions. The design focused on clean layout, strong visual hierarchy, and responsive behavior across devices. Final deliverables included high-fidelity screens and a design system ready for handoff to development, which was later implemented using HTML and CSS.",
    image: creativist,
    tags: [
      "Figma",
      "UI Design",
      "UX Design",
      "Responsive Design",
      "Prototyping",
      "Design Handoff",
      "Landing Page Design"
    ],
    liveUrl: "https://creativist.app/",
    githubUrl: "#",
    color: "from-orange-500/20 to-yellow-500/20"
  },



  {
    id: 6,
    title: "Calendly Homepage – Pixel-Perfect React Clone",
    description: "Pixel-perfect SaaS homepage clone built with React and advanced CSS animations",
    longDescription:
      "Developed a pixel-perfect frontend clone of Calendly’s homepage to showcase advanced React, CSS, and UI engineering skills. The project was built using a clean, reusable React component architecture and CSS Modules for scoped styling. All animations and interactions were created using vanilla CSS, including custom SVG animations, accordion components, and responsive dropdown navigation. The site follows a mobile-first approach and was built with Vite for fast development and optimized build performance, demonstrating the ability to replicate high-quality SaaS interfaces with precision.",
    image: calendly,
    tags: [
      "React",
      "Frontend Development",
      "CSS Modules",
      "UI Engineering",
      "Responsive Design",
      "SaaS UI",
      "Vite",
      "CSS Animations"
    ],
    liveUrl: "https://juanbarbosa.vercel.app/",
    githubUrl: "https://github.com/JuanBarbosaA/Calendly",
    color: "from-teal-500/20 to-purple-500/20"
  },


  {
    id: 5,
    title: "Invictus Golf – Custom WordPress Leaderboard System",
    description: "Real-time gamified leaderboard system with custom WordPress plugin and API integration",
    longDescription:
      "Developed a fully custom WordPress website featuring a real-time, gamified leaderboard system for golf events. The project included user registration and session-based check-in, live score tracking for multiple game modes, and a custom-built WordPress plugin to handle leaderboard logic. Scores were stored and processed using a PHP/MySQL database, with Google Sheets API integration for automated reporting and external data access. The site was built from Adobe XD designs and delivered with responsive Elementor layouts and live score updates without page refresh.",

    image: golf,
    tags: [
      "WordPress",
      "Custom WordPress Plugin",
      "PHP",
      "MySQL",
      "API Integration",
      "Google Sheets API",
      "Elementor",
      "Real-Time Data"
    ],
    liveUrl: "https://invictusisgolf.com/form/",
    githubUrl: "#",
    color: "from-rose-500/20 to-pink-500/20"
  },


  {
    id: 7,
    title: "FitMatch – Fitness Platform with Personalized Training & Nutrition Plans",
    description: "Fitness web platform connecting users with trainers through personalized workout and nutrition plans",
    longDescription:
      "Designed and developed FitMatch, a fitness-focused web platform that connects users with certified trainers and nutritionists to deliver personalized health guidance. The platform includes secure user authentication, goal-based trainer matching, custom workout plan creation, and nutrition planning with calorie tracking. A clean, mobile-first UI was designed to provide an intuitive user experience, featuring interactive dashboards for progress tracking, trainer profile pages, and health assessment forms. The project demonstrates strong frontend development skills combined with UI/UX design principles for data-driven, user-centered applications.",

    image: fitmatch,
    tags: [
      "Frontend Development",
      "JavaScript",
      "HTML5",
      "CSS3",
      "UI/UX Design",
      "Web Application",
      "Responsive Design",
      "Health & Fitness Platform"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/JuanBarbosaA/FitMatchMVC",
    color: "from-purple-500/20 to-pink-500/20"
  },


  {
    id: 8,
    title: "Giphy Clone – React App with Real-Time API Integration",
    description: "React-based GIF search application using the Giphy API with optimized performance and responsive UI",
    longDescription:
      "Developed a fully functional Giphy clone using React.js, focused on real-time API consumption and performance optimization. The application integrates the Giphy REST API to deliver instant GIF search results with debounced input handling to reduce unnecessary requests. Implemented trending GIF discovery with infinite scroll pagination, responsive grid layouts, and lazy-loaded media for optimized rendering. The project demonstrates clean component architecture, separation of concerns, and best practices in modern frontend development.",

    image: giphy,
    tags: [
      "React",
      "JavaScript",
      "API Integration",
      "Frontend Development",
      "Responsive Design",
      "Performance Optimization",
      "REST API",
      "UI Development"
    ],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 9,
    title: "Full-Stack Educational Platform – React, Node.js & MongoDB",
    description: "Interactive educational platform with gamification, authentication, and scalable REST API",
    longDescription:
      "Designed and developed a full-stack educational web platform focused on teaching drawing through interactive, level-based tutorials. Built with React and Tailwind CSS on the frontend, and Node.js with MongoDB on the backend, the platform features secure JWT authentication, gamified user engagement, and a scalable RESTful API architecture. The project includes tutorial galleries with search and filtering, user comments and ratings, achievement badges, and an admin dashboard for content management. Entire UI/UX was designed from scratch with a mobile-first, responsive approach optimized for all devices.",

    image: dibujo,
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Full-Stack Development",
      "REST API",
      "JWT Authentication",
      "UI/UX Design",
      "Gamification",
      "Tailwind CSS"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/JuanBarbosaA/DibujoFacil",
    color: "from-emerald-500/20 to-green-500/20"
  },


  {
    id: 13,
    title: "WordPress Migration to Google Cloud – Zero Downtime & DNS Configuration",
    description: "Production-grade WordPress migration with zero downtime, DNS, SSL, and SMTP setup",
    longDescription:
      "Executed a complex production WordPress migration for a therapy practice from legacy shared hosting to Closte (Google Cloud Platform) using a zero-downtime strategy. The migration was performed via a staging environment to ensure uninterrupted service. Full DNS reconfiguration was completed in GoDaddy, including A, CNAME, and MX records. Implemented SSL certificates with enforced HTTPS, integrated SendGrid SMTP via API authentication for reliable contact form delivery, and conducted extensive email deliverability testing with a 99.9% success rate. Post-migration optimizations resulted in a 3x improvement in page load speed, with secure credential handling managed through LastPass.",
    image: migration,
    tags: [
      "WordPress Migration",
      "Google Cloud Platform",
      "DNS Configuration",
      "SSL",
      "SMTP",
      "SendGrid",
      "DevOps",
      "Website Performance Optimization"
    ],
    liveUrl: "https://ahealingground.org",
    githubUrl: "#",
    color: "from-emerald-500/20 to-cyan-500/20"
  },


  {
    id: 11,
    title: "GameDev Course Landing Page – HTML, CSS & JavaScript",
    description: "High-conversion responsive landing page for an online game development course",
    longDescription:
      "Designed and developed a modern, high-conversion landing page for a Game Development course using pure HTML, CSS, and JavaScript. The landing page was structured to guide users through the course value proposition with clear sections for testimonials, course features, student statistics, and call-to-action download links. Focused on clean UI, smooth interactions, and performance optimization, the site delivers a professional and engaging experience across both mobile and desktop devices. Built without frameworks to ensure lightweight performance and full control over the frontend architecture.",
    image: game,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Landing Page",
      "UI Design",
      "Performance Optimization",
      "Conversion-Focused Design"
    ],
    liveUrl: "https://mywebsiteyoutube1.netlify.app/",
    githubUrl: "#",
    color: "from-emerald-500/20 to-green-500/20"
  },


  {
    id: 10,
    title: "Goblins – Clash of Clans Inspired Gaming Landing Page",
    description: "Responsive gaming landing page with modern UI and conversion-focused layout",
    longDescription:
      "Designed and developed a fully responsive gaming landing page inspired by the Clash of Clans universe. The project showcases a strong focus on gaming aesthetics, character presentation, and visual hierarchy to highlight game features and drive user engagement. Built using clean, semantic HTML, modern CSS, and vanilla JavaScript, the landing page includes interactive navigation, feature sections, character highlights, and call-to-action areas optimized for both desktop and mobile devices. Special attention was given to layout flow, responsiveness, and performance to deliver a smooth and immersive user experience without relying on external frameworks.",

    image: goblin,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Landing Page",
      "Gaming UI",
      "UI Design",
      "Frontend Development",
      "Performance Optimization"
    ],
    liveUrl: "https://stunning-parfait-335a97.netlify.app/",
    githubUrl: "#",
    color: "from-cyan-500/20 to-blue-500/20"
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
          <div className="flex gap-4 relative z-10">
            {project.liveUrl !== "#" && (
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
            )}
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




