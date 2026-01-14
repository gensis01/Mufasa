import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, FileText, ChevronDown } from "lucide-react";

const projects = [
  {
    id: "infinity-x",
    name: "Project Infinity X",
    description: "Feature-rich custom ROM which focuses on performance and customization.",
    color: "from-cyan-400 to-blue-500",
    textColor: "text-cyan-400",
    builds: "https://github.com/Project-Infinity-X/releases",
    changelog: "https://github.com/Project-Infinity-X/changelog",
  },
  {
    id: "mist-os",
    name: "Mist OS",
    description: "This ROM mainly focuses on better stability and battery life with clean UI.",
    color: "from-violet-400 to-purple-500",
    textColor: "text-violet-400",
    builds: "https://github.com/MistOS/releases",
    changelog: "https://github.com/MistOS/changelog",
  },
  {
    id: "black-iron",
    name: "Project Black Iron",
    description: "Simple ROM best for daily drive for gaming and other works, focuses on each corner.",
    color: "from-emerald-400 to-green-500",
    textColor: "text-emerald-400",
    builds: "https://github.com/Project-Black-Iron/releases",
    changelog: "https://github.com/Project-Black-Iron/changelog",
  },
  {
    id: "evolution-x",
    name: "Evolution X",
    description: "Best ROM for gamers and it is feature rich.",
    color: "from-red-400 to-rose-500",
    textColor: "text-red-400",
    builds: "https://t.me/PAD6Repo/416",
    changelog: "https://t.me/changelog_glitch",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden glow-hover group"
    >
      {/* Gradient accent line */}
      <div className={`h-1 bg-gradient-to-r ${project.color}`} />
      
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-xl font-bold ${project.textColor}`}>{project.name}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="text-muted-foreground" size={20} />
          </motion.div>
        </div>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 flex flex-wrap gap-3 border-t border-glass-border">
          <motion.a
            href={project.builds}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.color} text-white font-medium rounded-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
            Builds
          </motion.a>
          <motion.a
            href={project.changelog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground font-medium rounded-lg border border-glass-border"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FileText size={16} />
            Changelog
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
