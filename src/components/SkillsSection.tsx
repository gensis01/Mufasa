import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", color: "from-blue-400 to-blue-600", bg: "bg-blue-500/20" },
  { name: "Bash Script", color: "from-emerald-400 to-green-600", bg: "bg-emerald-500/20" },
  { name: "Git", color: "from-orange-400 to-red-600", bg: "bg-orange-500/20" },
  { name: "HTML/CSS", color: "from-orange-400 to-amber-500", bg: "bg-orange-500/20" },
  { name: "Android (AOSP)", color: "from-green-400 to-emerald-600", bg: "bg-green-500/20" },
  { name: "Linux", color: "from-yellow-400 to-orange-500", bg: "bg-yellow-500/20" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative px-6 py-3 rounded-full ${skill.bg} border border-glass-border cursor-pointer overflow-hidden group`}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              
              <span className="relative text-lg font-semibold text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="glass rounded-xl p-4 font-mono text-sm">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
                <span className="text-cyan-400">const</span>{" "}
                <span className="text-foreground">developer</span> = {"{"}
                {"\n"}  <span className="text-emerald-400">name</span>:{" "}
                <span className="text-amber-400">"Mufasa"</span>,
                {"\n"}  <span className="text-emerald-400">passion</span>:{" "}
                <span className="text-amber-400">"ROM Development"</span>,
                {"\n"}  <span className="text-emerald-400">status</span>:{" "}
                <span className="text-amber-400">"Always Learning"</span>
                {"\n"}{"}"};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
