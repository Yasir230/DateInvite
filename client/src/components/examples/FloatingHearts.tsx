import FloatingHearts from '../FloatingHearts';

export default function FloatingHeartsExample() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <FloatingHearts />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-muted-foreground">Floating hearts in background</p>
      </div>
    </div>
  );
}
