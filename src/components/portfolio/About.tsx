import { motion } from "framer-motion";
import { Code, Heart, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
      gradient: "bg-gradient-blue",
      textColor: "text-pastel-blue-text",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Creating delightful experiences that users love",
      gradient: "bg-gradient-pink",
      textColor: "text-pastel-pink-text",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid prototyping and agile development",
      gradient: "bg-gradient-yellow",
      textColor: "text-pastel-yellow-text",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I am a MERN Stack Developer focused on building clean, responsive, and efficient web applications.
                I enjoy working with modern technologies and applying them to solve real-world problems.
              </p>

              <p>
                I have hands-on experience creating full-stack projects, implementing APIs, handling databases,
                and designing user-friendly interfaces.
              </p>

              <p>
                I continuously improve my skills, learn new tools, and build projects that strengthen my
                development knowledge.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: "var(--shadow-hover)" }}
                className={`${item.gradient} rounded-2xl p-6 shadow-soft`}
              >
                <item.icon className={`w-8 h-8 ${item.textColor} mb-3`} />
                <h4 className={`font-bold text-lg mb-2 ${item.textColor}`}>{item.title}</h4>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
