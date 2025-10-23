const WavyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wavy SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-64 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#wave-gradient)"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(263, 70%, 50%)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(189, 94%, 43%)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-pulse delay-500" />
    </div>
  );
};

export default WavyBackground;
