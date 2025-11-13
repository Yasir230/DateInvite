import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 800);
    const timer2 = setTimeout(() => setStage(2), 2200);
    const timer3 = setTimeout(() => setStage(3), 3400);
    const timer4 = setTimeout(() => onComplete(), 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10"
    >
      <div className="relative flex flex-col items-center justify-center space-y-8">
        <AnimatePresence mode="wait">
          {stage >= 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.8 
              }}
              className="relative"
            >
              <Heart 
                className="text-primary fill-primary" 
                size={80}
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Heart 
                  className="text-primary fill-primary opacity-30" 
                  size={100}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-2"
            >
              <motion.p 
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Ada sesuatu yang spesial...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="text-center"
            >
              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-2">
                Untuk
              </h1>
              <motion.h2 
                className="font-serif text-6xl md:text-7xl text-primary font-bold"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(239, 68, 109, 0.3)",
                    "0 0 40px rgba(239, 68, 109, 0.5)",
                    "0 0 20px rgba(239, 68, 109, 0.3)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2
                }}
              >
                Liaaa
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0,
                    opacity: 1 
                  }}
                  animate={{ 
                    x: Math.cos((i / 20) * Math.PI * 2) * 200,
                    y: Math.sin((i / 20) * Math.PI * 2) * 200,
                    scale: 1,
                    opacity: 0 
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="absolute"
                >
                  <Sparkles className="text-primary" size={16} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
