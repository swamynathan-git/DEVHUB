import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Thiruvalluvar University",
      period: "2021 - 2024",
      description: "Graduated with honors. The BCA program focused on software development, programming languages ( python , Java ), web technologies (HTML, CSS, JavaScript), database management, data structures, algorithms, and project-based learning to build practical applications.",
      gradient: "bg-gradient-purple",
      textColor: "text-pastel-purple-text",
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Veda Nikethan Matric Higher Secondary School",
      period: "2020 - 2021",
      description: "Specialized in Mathematics and Computer Science. Achieved excellent academic performance with strong fundamentals in problem-solving and logical thinking.",
      gradient: "bg-gradient-blue",
      textColor: "text-pastel-blue-text",
    }
  ];

  const certifications = [
    // {
    //   title: "AWS Certified Developer",
    //   issuer: "Amazon Web Services",
    //   gradient: "bg-gradient-yellow",
    // },
    {
      title: "Full Stack Development",
      issuer: "Edureka",
      gradient: "bg-gradient-green",
    },
    // {
    //   title: "Full Stack Web Development",
    //   issuer: "Coursera",
    //   gradient: "bg-gradient-pink",
    // },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">Academic background & certifications</p>
        </motion.div>

        {/* Formal Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Formal Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8, boxShadow: "var(--shadow-hover)" }}
                className={`${edu.gradient} rounded-3xl p-6 md:p-8 shadow-soft`}
              >
                <h4 className={`font-bold text-xl mb-2 ${edu.textColor}`}>{edu.degree}</h4>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <p className="font-semibold text-lg text-foreground/80">{edu.institution}</p>
                  <span className="text-foreground/70 font-medium">{edu.period}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: "var(--shadow-hover)" }}
                className={`${cert.gradient} rounded-2xl p-6 shadow-soft text-center`}
              >
                <Award className="w-10 h-10 mx-auto mb-3 text-foreground/70" />
                <h4 className="font-bold mb-2">{cert.title}</h4>
                <p className="text-sm text-foreground/70">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
