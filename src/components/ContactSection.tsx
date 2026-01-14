import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Send } from "lucide-react";

const socials = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:youremail@example.com",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/gensis01",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/yourusername",
    color: "from-blue-400 to-blue-600",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Want to collaborate or need help with something? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center glow-hover">
                <social.icon className="text-muted-foreground group-hover:text-foreground transition-colors" size={28} />
              </div>
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Designed & Built by{" "}
            <span className="gradient-text font-semibold">Mufasa</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
