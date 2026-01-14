import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const coreStack = [
  { name: "Python", icon: "🐍", color: "border-yellow-500/30" },
  { name: "Bash", icon: "💻", color: "border-green-500/30" },
  { name: "Git", icon: "📦", color: "border-orange-500/30" },
  { name: "Linux", icon: "🐧", color: "border-yellow-500/30" },
];

const androidDev = [
  { name: "AOSP", icon: "🤖", color: "border-green-500/30" },
  { name: "ROM Dev", icon: "📱", color: "border-blue-500/30" },
  { name: "Kernel", icon: "⚙️", color: "border-purple-500/30" },
  { name: "Recovery", icon: "🔧", color: "border-red-500/30" },
];

const webDev = [
  { name: "HTML", icon: "🌐", color: "border-orange-500/30" },
  { name: "CSS", icon: "🎨", color: "border-blue-500/30" },
  { name: "JavaScript", icon: "⚡", color: "border-yellow-500/30" },
  { name: "React", icon: "⚛️", color: "border-cyan-500/30" },
];

const SkillCategory = ({ 
  title, 
  skills, 
  isInView, 
  delay 
}: { 
  title: string; 
  skills: typeof coreStack; 
  isInView: boolean; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay }}
    className="mb-12"
  >
    <h3 className="text-xl text-muted-foreground mb-6 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + index * 0.1 }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
          }}
          className={`w-20 h-20 bg-card rounded-2xl flex flex-col items-center justify-center border ${skill.color} cursor-pointer hover:border-primary/50 transition-all duration-300`}
        >
          <span className="text-2xl mb-1">{skill.icon}</span>
          <span className="text-xs text-muted-foreground">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-2">
            <span className="text-foreground italic">TECH</span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-black gradient-text text-glow italic">
            SET
          </h2>
        </motion.div>

        <SkillCategory 
          title="Core Stack I Work With" 
          skills={coreStack} 
          isInView={isInView} 
          delay={0.2} 
        />
        
        <SkillCategory 
          title="Android Development" 
          skills={androidDev} 
          isInView={isInView} 
          delay={0.4} 
        />
        
        <SkillCategory 
          title="Web Development" 
          skills={webDev} 
          isInView={isInView} 
          delay={0.6} 
        />
      </div>
    </section>
  );
};

export default SkillsSection;
