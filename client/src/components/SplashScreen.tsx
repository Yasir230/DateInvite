import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/20 backdrop-blur-xl"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      <div className="relative max-w-lg px-6 text-center space-y-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2
          }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <Heart 
                className="text-primary fill-primary w-20 h-20 md:w-24 md:h-24" 
              />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: 360
              }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                ease: "linear"
              }}
              className="absolute -top-3 -right-3"
            >
              <Sparkles className="text-primary w-8 h-8 fill-primary" />
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2
              }}
              className="absolute inset-0 flex items-center justify-center -z-10"
            >
              <Heart 
                className="text-primary fill-primary opacity-20 w-32 h-32 md:w-40 md:h-40" 
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Psst... 👀
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            Ada yang mau kasih tau sesuatu nih...
          </p>
          <p className="text-base text-muted-foreground/80">
            (Tapi jangan bilang siapa-siapa ya!)
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={onEnter}
              data-testid="button-enter"
              className="text-lg px-10 py-6 font-semibold shadow-xl"
            >
              <motion.span
                className="flex items-center gap-3"
                animate={{ 
                  gap: ["12px", "16px", "12px"]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5
                }}
              >
                Lihat Dong!
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              rotate: 360,
            }}
            transition={{ 
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Heart 
              className="text-primary/10 fill-primary/10" 
              size={20 + i * 8}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
