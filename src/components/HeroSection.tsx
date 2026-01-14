import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            &lt;hello world /&gt;
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6">
            <span className="text-foreground">Sudeep </span>
            <span className="gradient-text text-glow">(Mufasa)</span>
          </h1>

          <div className="h-10 md:h-12 flex justify-center items-center mb-8">
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-light whitespace-nowrap border-r-2 border-primary animate-blink-caret pr-1">
                ROM Developer & Tech Enthusiast
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 border border-glass-border text-foreground font-semibold rounded-full hover:bg-secondary/50 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
        >
          <ChevronDown className="text-muted-foreground" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
