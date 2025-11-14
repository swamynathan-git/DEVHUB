import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "HTML","CSS","Bootstrap"],
      gradient: "bg-gradient-blue",
      textColor: "text-pastel-blue-text",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      gradient: "bg-gradient-green",
      textColor: "text-pastel-green-text",
    },
    {
      category: "Tools & Others",
      skills: ["GitHub","Postman","VS Code"],
      gradient: "bg-gradient-purple",
      textColor: "text-pastel-purple-text",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-hover)" }}
              className={`${category.gradient} rounded-3xl p-6 shadow-soft`}
            >
              <h3 className={`font-bold text-2xl mb-6 ${category.textColor}`}>
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="bg-background/50 rounded-xl px-4 py-3 font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
