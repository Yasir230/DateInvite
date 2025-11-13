import { useState } from 'react';
import OpeningAnimation from '../OpeningAnimation';
import { Button } from '@/components/ui/button';

export default function OpeningAnimationExample() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <div className="relative w-full h-screen bg-background">
      {showAnimation ? (
        <OpeningAnimation onComplete={() => setShowAnimation(false)} />
      ) : (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <p className="text-foreground text-xl">Animation completed!</p>
          <Button 
            onClick={() => setShowAnimation(true)}
            data-testid="button-replay"
          >
            Replay Animation
          </Button>
        </div>
      )}
    </div>
  );
}
