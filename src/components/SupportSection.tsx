import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Coffee, CreditCard, X, Heart } from "lucide-react";

const SupportSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [modalType, setModalType] = useState<"coffee" | "upi" | null>(null);

  return (
    <section id="support" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Support My Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            If you like my work and want to support me, you can buy me a coffee or donate via UPI!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            onClick={() => setModalType("coffee")}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full overflow-hidden glow-hover flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Coffee size={20} />
            <span>Buy Me Coffee</span>
          </motion.button>

          <motion.button
            onClick={() => setModalType("upi")}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-full overflow-hidden glow-hover flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CreditCard size={20} />
            <span>UPI Payment</span>
          </motion.button>
        </motion.div>

        {/* Floating hearts animation */}
        <div className="flex justify-center mt-8 gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              <Heart 
                className="text-primary/30" 
                size={24} 
                fill="currentColor"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalType && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setModalType(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass rounded-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>

            {modalType === "coffee" ? (
              <>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Coffee size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Buy Me Coffee</h3>
                <p className="text-muted-foreground mb-6">
                  Your support means a lot! Scan the QR code or use the payment link.
                </p>
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                  QR Code
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <CreditCard size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">UPI Payment</h3>
                <p className="text-muted-foreground mb-6">
                  Scan the QR code with any UPI app to donate.
                </p>
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                  UPI QR
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default SupportSection;
