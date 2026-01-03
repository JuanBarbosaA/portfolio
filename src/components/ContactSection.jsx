import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Map, MapControls, MapMarker, MarkerContent } from "./ui/map";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lang, setLang] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMap, setShowMap] = useState(false);


  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en")
  })


  const translations = {
    en: {
      header: "Get In Touch",
      title: "Let's Work",
      subtitle: "Together",
      location: "Location",
      description: "Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities.",
      contactInfo: "Contact Information",
      followMe: "Follow Me",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      sendMessage: "Send Message",
      successMessage: "Message sent successfully! I'll get back to you soon.",
      errorMessage: "Something went wrong. Please try again.",
      whatsappMsg: "Hi Juan, I am interested in your web development services. Can we discuss a project?"
    },
    es: {
      header: "Contáctame",
      title: "Trabajemos",
      subtitle: "Juntos",
      location: "Ubicación",
      description: "¿Tienes un proyecto en mente o solo quieres charlar? No dudes en escribirme. Siempre estoy abierto a nuevas oportunidades.",
      contactInfo: "Información de Contacto",
      followMe: "Sígueme",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@correo.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      sendMessage: "Enviar Mensaje",
      successMessage: "¡Mensaje enviado con éxito! Te responderé pronto.",
      errorMessage: "Algo salió mal. Por favor, inténtalo de nuevo.",
      whatsappMsg: "Hola Juan, estoy interesado en tus servicios de desarrollo web. ¿Podemos conversar sobre un proyecto?"
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_jkx15hg",
        "template_dadu41l",
        formData,
        "HP0f7Yw7QZVsRdHnx"
      );
      toast.success(translations[lang].successMessage);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(translations[lang].errorMessage);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getWhatsappLink = () => {
    const message = translations[lang].whatsappMsg;
    return `https://wa.me/573213225792?text=${encodeURIComponent(message)}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: translations[lang].email,
      value: "juanbarbosavella@gmail.com",
      href: "mailto:juanbarbosavella@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+57 3213225792",
      href: getWhatsappLink(),
    },
    {
      icon: MapPin,
      label: translations[lang].location,
      value: "Bogotá, Colombia",
      href: "https://www.google.com/maps/search/?api=1&query=Bogotá+Colombia",
      target: "_blank",
      isLocation: true
    }

  ];

  const UpworkIcon = ({ className }) => (<svg className={className} fill-current width="24" fill="white" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" > <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439-5.439z" /> </svg>);

  const socialLinks = [
    { icon: Github, href: "https://github.com/JuanBarbosaA", label: "GitHub", value: "https://github.com/JuanBarbosaA", title: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/juanbarbosavella/", label: "LinkedIn", value: "https://www.linkedin.com/in/juanbarbosavella/", title: "LinkedIn" },
    { icon: UpworkIcon, href: "https://www.upwork.com/freelancers/juanb35", label: "Upwork", value: "https://www.upwork.com/freelancers/juanb35", title: "Upwork" }
  ];

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-radial opacity-30" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-4 block"
          >
            {translations[lang].header}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            {translations[lang].title} <span className="text-gradient">{translations[lang].subtitle}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {translations[lang].description}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8">
              {translations[lang].contactInfo}
            </h3>

            <div className="space-y-6 mb-10 relative">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                >
                  <motion.a
                    href={item.href}
                    target={item.target || "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer"
                    onClick={(e) => {
                      if (item.isLocation) {
                        e.preventDefault();
                        setShowMap(true);
                      }
                    }}
                  >
                    <div className="p-3 rounded-xl glass group-hover:glow-subtle transition-all">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                </div>
              ))}

              {/* Map Modal */}
              {showMap && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowMap(false)}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full max-w-4xl h-[600px] bg-background rounded-2xl overflow-hidden shadow-2xl border border-border"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowMap(false)}
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-md hover:bg-accent transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                    <Map
                      center={[-74.0750, 4.6480]}
                      zoom={14}
                      styles={{
                        light: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
                        dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                      }}
                    >
                      <MapControls
                        position="bottom-right"
                        showZoom
                        showCompass
                        showLocate
                        showFullscreen
                      />
                      <MapMarker longitude={-74.0750} latitude={4.6480}>
                        <MarkerContent>
                          <div className="relative">
                            <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute inset-0" />
                            <div className="w-4 h-4 bg-primary rounded-full relative border-2 border-background" />
                          </div>
                        </MarkerContent>
                      </MapMarker>
                    </Map>
                  </motion.div>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">{translations[lang].followMe}</h4>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    title={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="p-3 rounded-xl glass hover:glow-subtle hover:border-primary/50 transition-all"
                    aria-label={item.label}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {translations[lang].name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder={translations[lang].namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {translations[lang].email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder={translations[lang].emailPlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                {translations[lang].message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder={translations[lang].messagePlaceholder}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <>
                  {translations[lang].sendMessage}
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
