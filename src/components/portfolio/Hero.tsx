import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const rotatingTexts = ["Developer", "Designer", "Creator", "Problem Solver"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/swamynathan-git", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/swamy-nathan81146/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:swamynathan167@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-purple rounded-full mb-6"
            >
              <span className="text-pastel-purple-text font-medium">👋 Welcome to my .DEVHUB</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-7xl font-bold mb-2"
            >
              Swamy Nathan
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Full Stack Developer - M E R N
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-foreground/70 mb-8 max-w-2xl"
            >
              Building intelligent, scalable, and beautiful web applications with a full-stack mindset.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "var(--shadow-hover)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold shadow-medium"
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-semibold"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center shadow-soft hover:shadow-medium transition-shadow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-pastel-blue-text" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="flex-1 max-w-md"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative"
            >
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-pastel-purple/30 rounded-[3rem] shadow-hover flex items-center justify-center overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="text-9xl">👨</div>
              </div>
              {/* Floating decorations */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-pink rounded-2xl shadow-medium flex items-center justify-center"
              >
                <span className="text-3xl">💡</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-green rounded-2xl shadow-medium flex items-center justify-center"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
