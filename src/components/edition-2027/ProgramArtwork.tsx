export function SatisfactionSeal() {
  const edge = Array.from({ length: 240 }, (_, index) => {
    const angle = (index / 240) * Math.PI * 2;
    const radius = 148 + 5 * Math.cos(angle * 20);
    return `${160 + Math.sin(angle) * radius},${160 + Math.cos(angle) * radius}`;
  }).join(" ");

  return (
    <svg
      className="gps-satisfaction-seal"
      viewBox="0 0 320 320"
      role="img"
      aria-label="Garantía de satisfacción del 100%"
    >
      <defs>
        <linearGradient id="gps-seal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff0be" />
          <stop offset=".24" stopColor="#d6a248" />
          <stop offset=".5" stopColor="#f7dc92" />
          <stop offset=".78" stopColor="#ad762a" />
          <stop offset="1" stopColor="#f1d18a" />
        </linearGradient>
        <radialGradient id="gps-seal-navy" cx=".35" cy=".2" r=".9">
          <stop stopColor="#254c69" />
          <stop offset="1" stopColor="#08263e" />
        </radialGradient>
      </defs>
      <polygon points={edge} fill="url(#gps-seal-gold)" stroke="#bd8e3e" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="160" cy="160" r="135" fill="url(#gps-seal-navy)" stroke="#f0d087" strokeWidth="2" />
      <circle cx="160" cy="160" r="126" fill="none" stroke="#d7af5d" strokeWidth="1" />
      <path d="m142 59-5-15 13 8 10-15 10 15 13-8-5 15Z" fill="url(#gps-seal-gold)" />
      <path d="M144 64h32M79 61h37m88 0h37M101 249h27m64 0h27" stroke="#e0bb70" strokeWidth="1.5" />
      <text x="160" y="100" textAnchor="middle" fill="#fffdf5" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="2">GARANTÍA</text>
      <text x="160" y="188" textAnchor="middle" fill="url(#gps-seal-gold)" fontFamily="Georgia, serif" fontSize="79" letterSpacing="-4">100%</text>
      <text x="160" y="220" textAnchor="middle" fill="#fffdf5" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700">DE SATISFACCIÓN</text>
      <g fill="#e4bd71">
        <path d="m160 236 3 9 10 0-8 6 3 9-8-6-8 6 3-9-8-6h10Z" />
        <path d="m137 239 2 6h7l-6 4 2 6-5-4-5 4 2-6-6-4h7Z" />
        <path d="m183 239 2 6h7l-6 4 2 6-5-4-5 4 2-6-6-4h7Z" />
      </g>
    </svg>
  );
}
