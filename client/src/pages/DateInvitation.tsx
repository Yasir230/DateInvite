import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Heart, Coffee, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import confetti from 'canvas-confetti';
import SplashScreen from '@/components/SplashScreen';
import OpeningAnimation from '@/components/OpeningAnimation';
import FloatingHearts from '@/components/FloatingHearts';

export default function DateInvitation() {
  const [showSplash, setShowSplash] = useState(true);
  const [showOpening, setShowOpening] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleEnterFromSplash = () => {
    setShowSplash(false);
    setTimeout(() => {
      setShowOpening(true);
    }, 500);
  };

  useEffect(() => {
    if (!showOpening) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [showOpening]);

  const handleAcceptClick = () => {
    setButtonClicked(true);

    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#EF446D', '#FF6B9D', '#FFC0CB', '#FFB6C1']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#EF446D', '#FF6B9D', '#FFC0CB', '#FFB6C1']
      });
    }, 250);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EF446D', '#FF6B9D', '#FFC0CB', '#FFB6C1']
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background overflow-hidden">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onEnter={handleEnterFromSplash} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOpening && (
          <OpeningAnimation onComplete={() => setShowOpening(false)} />
        )}
      </AnimatePresence>

      {showContent && (
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl w-full space-y-12"
            >
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="flex justify-center mb-4"
                >
                  <div className="relative">
                    <Coffee className="text-primary w-16 h-16" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear"
                      }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="text-primary w-6 h-6 fill-primary" />
                    </motion.div>
                  </div>
                </motion.div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                  Halo, <span className="text-primary font-bold">Liaaa</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Aku punya rencana yang nggak boleh kamu lewatkan... 
                  Gimana kalau kita spend time bareng di tempat yang cozy?
                </p>
              </div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <Card className="p-8 backdrop-blur-sm bg-card/80 border-card-border space-y-4 hover-elevate">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Calendar className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Kapan?
                    </h3>
                    <p className="text-foreground font-serif text-xl font-medium">
                      Minggu
                    </p>
                    <p className="text-primary font-serif text-2xl font-bold">
                      16 November 2025
                    </p>
                  </div>
                </Card>

                <Card className="p-8 backdrop-blur-sm bg-card/80 border-card-border space-y-4 hover-elevate">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Dimana?
                    </h3>
                    <p className="text-primary font-serif text-2xl font-bold">
                      Koala Cafe
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="p-8 backdrop-blur-sm bg-card/80 border-card-border">
                  <p className="text-center text-muted-foreground leading-relaxed">
                    Aku sudah nggak sabar ingin ngobrol santai, ketawa bareng, 
                    dan nikmatin moment spesial ini sama kamu. 
                    <span className="block mt-3 text-foreground font-medium">
                      So... you in? 
                    </span>
                  </p>
                </Card>

                <div className="flex justify-center">
                  <AnimatePresence mode="wait">
                    {!buttonClicked ? (
                      <motion.div
                        key="button"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          onClick={handleAcceptClick}
                          data-testid="button-accept"
                          className="text-lg px-12 py-6 font-semibold shadow-lg relative overflow-visible group"
                        >
                          <motion.span
                            animate={{ 
                              textShadow: [
                                "0 0 10px rgba(255,255,255,0.5)",
                                "0 0 20px rgba(255,255,255,0.8)",
                                "0 0 10px rgba(255,255,255,0.5)"
                              ]
                            }}
                            transition={{ 
                              repeat: Infinity,
                              duration: 2
                            }}
                            className="flex items-center gap-2"
                          >
                            <Heart className="w-5 h-5 fill-current" />
                            Yes, I'd love to!
                            <Heart className="w-5 h-5 fill-current" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="message"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        className="text-center space-y-4"
                      >
                        <div className="flex justify-center">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              repeat: Infinity,
                              duration: 2
                            }}
                          >
                            <Heart className="text-primary fill-primary w-16 h-16" />
                          </motion.div>
                        </div>
                        <p className="text-2xl font-serif text-primary font-bold">
                          Yay! Can't wait to see you! 💕
                        </p>
                        <p className="text-muted-foreground">
                          See you on Sunday, Liaaa!
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center text-sm text-muted-foreground pt-8"
              >
                <p>Made with love, just for you</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
