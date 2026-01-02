export default function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute left-0 top-8 w-[480px] opacity-40 float" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD6E0" />
            <stop offset="100%" stopColor="#FFE7A7" />
          </linearGradient>
        </defs>
        <g transform="translate(300,300)">
          <circle r="220" fill="url(#g1)" />
        </g>
      </svg>

      <svg className="absolute right-0 bottom-24 w-[360px] opacity-30 float" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
        <g transform="translate(200,200)">
          <rect x="-160" y="-120" width="320" height="240" rx="40" fill="url(#g2)" />
        </g>
      </svg>

      <style>{`
        @keyframes floatY { 0% { transform: translateY(0px); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0px); } }
        .float { animation: floatY 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
