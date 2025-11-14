import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Amazon ( E-Commerce)",
      description: "Created an Amazon-like shopping site using MERN with search, cart, and login features. Added an admin panel and backend APIs to manage products and orders easily.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "bg-gradient-purple",
      textColor: "text-pastel-purple-text",
      link: "#",
      github: "#",
    },
    {
      title: "Zomato APP ( progress )",
      description: "Created a Zomato-style platform using MERN with restaurant search, ordering, and geo-based suggestions. Integrated table booking, live order updates, and user reviews to enhance interaction.",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      gradient: "bg-gradient-blue",
      textColor: "text-pastel-blue-text",
      link: "#",
      github: "#",
    },
    // {
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media metrics and insights",
    //   tags: ["React", "D3.js", "Express", "PostgreSQL"],
    //   gradient: "bg-gradient-green",
    //   textColor: "text-pastel-green-text",
    //   link: "#",
    //   github: "#",
    // },
    // {
    //   title: "Weather App",
    //   description: "Beautiful weather application with forecasts and location search",
    //   tags: ["React Native", "API Integration"],
    //   gradient: "bg-gradient-pink",
    //   textColor: "text-pastel-pink-text",
    //   link: "#",
    //   github: "#",
    // },
    // {
    //   title: "Portfolio Builder",
    //   description: "Drag-and-drop portfolio builder for creatives and developers",
    //   tags: ["Next.js", "TypeScript", "Prisma"],
    //   gradient: "bg-gradient-yellow",
    //   textColor: "text-pastel-yellow-text",
    //   link: "#",
    //   github: "#",
    // },
    // {
    //   title: "Blog CMS",
    //   description: "Headless CMS for blogs with markdown support and SEO tools",
    //   tags: ["GraphQL", "React", "Node.js"],
    //   gradient: "bg-gradient-coral",
    //   textColor: "text-pastel-coral-text",
    //   link: "#",
    //   github: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ y: -8, boxShadow: "var(--shadow-hover)" }}
              className={`${project.gradient} rounded-3xl p-6 shadow-soft cursor-pointer`}
            >
              <h3 className={`font-bold text-xl mb-3 ${project.textColor}`}>{project.title}</h3>
              <p className="text-foreground/70 mb-4 min-h-[48px]">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background/50 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-xl text-sm font-medium hover:bg-background transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-xl text-sm font-medium hover:bg-background transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
