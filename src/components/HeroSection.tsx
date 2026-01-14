import { motion } from "framer-motion";
import { ChevronDown, Github, Send, Mail } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/gensis01",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/MufasaXz",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:sudeepyadav7272@gmail.com",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-muted-foreground font-medium text-lg md:text-xl mb-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I am
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4">
            <span className="gradient-text text-glow italic">MUFASA</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground font-semibold italic mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ROM Developer & Tech Enthusiast
          </motion.p>

          {/* Tech Button */}
          <motion.a
            href="#skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-12 py-4 border border-primary/30 text-foreground font-semibold rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 mb-16"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tech
          </motion.a>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-card rounded-2xl flex items-center justify-center border border-border hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <social.icon 
                  className="text-muted-foreground group-hover:text-primary transition-colors" 
                  size={28} 
                />
                <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
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
