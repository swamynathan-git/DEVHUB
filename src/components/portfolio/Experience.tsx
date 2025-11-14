import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Development ",
      company: "Edureka",
      period: "2024 - Present",
      description:"“ Currently pursuing Edureka’s Full Stack Internship Program, gaining hands-on experience in MERN development through real-world projects and guided mentorship. Working on building complete full-stack applications covering frontend, backend, and database integration. Internship certification will be earned upon successful completion of all project requirements and evaluations. ”",
      gradient: "bg-gradient-purple",
      textColor: "text-pastel-purple-text",
    },
    // {
    //   role: "Frontend Developer Intern",
    //   company: "StartupXYZ",
    //   period: "Summer 2021",
    //   description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.",
    //   gradient: "bg-gradient-blue",
    //   textColor: "text-pastel-blue-text",
    // },
    // {
    //   role: "Web Development Intern",
    //   company: "Digital Agency",
    //   period: "Summer 2020",
    //   description: "Built client websites using modern web technologies. Gained experience in WordPress, JavaScript, and responsive design principles.",
    //   gradient: "bg-gradient-green",
    //   textColor: "text-pastel-green-text",
    // },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">InternShip Program</h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 8, boxShadow: "var(--shadow-hover)" }}
              className={`${exp.gradient} rounded-3xl p-6 md:p-8 shadow-soft`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className={`w-5 h-5 ${exp.textColor}`} />
                    <h3 className={`font-bold text-xl ${exp.textColor}`}>{exp.role}</h3>
                  </div>
                  <p className="font-semibold text-lg text-foreground/80">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
