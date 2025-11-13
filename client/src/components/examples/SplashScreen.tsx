import { useState } from 'react';
import SplashScreen from '../SplashScreen';
import { Button } from '@/components/ui/button';

export default function SplashScreenExample() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative w-full h-screen bg-background">
      {showSplash ? (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      ) : (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <p className="text-foreground text-xl">Splash screen completed!</p>
          <Button 
            onClick={() => setShowSplash(true)}
            data-testid="button-replay"
          >
            Show Again
          </Button>
        </div>
      )}
    </div>
  );
}
