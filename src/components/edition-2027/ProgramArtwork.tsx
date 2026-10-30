export function PlanDashboardArtwork() {
  return (
    <svg
      className="gps-plan-dashboard"
      viewBox="0 0 460 330"
      role="img"
      aria-label="Plan CEO Anual: ilustración de una computadora con planilla e indicadores de gestión"
    >
      <defs>
        <linearGradient id="gps-laptop-case" x2="0" y2="1">
          <stop stopColor="#234453" />
          <stop offset="1" stopColor="#0b293b" />
        </linearGradient>
        <linearGradient id="gps-laptop-base" x2="0" y2="1">
          <stop stopColor="#d5dfdd" />
          <stop offset="1" stopColor="#95acae" />
        </linearGradient>
      </defs>
      <ellipse cx="230" cy="296" rx="207" ry="13" fill="#133e4510" />
      <rect x="44" y="24" width="372" height="250" rx="17" fill="url(#gps-laptop-case)" />
      <rect x="55" y="36" width="350" height="222" rx="8" fill="#f8faf7" />
      <circle cx="230" cy="30" r="2" fill="#91a7aa" />
      <path d="M63 36h334a8 8 0 0 1 8 8v30H55V44a8 8 0 0 1 8-8Z" fill="#006b70" />
      <g fill="#faf7f2" fontFamily="Arial, sans-serif">
        <text x="74" y="60" fontSize="14" fontWeight="700">PLAN CEO ANUAL</text>
        <text x="338" y="59" fontSize="9" letterSpacing="1">GESTIÓN</text>
      </g>
      <path d="M55 74h53v184H63a8 8 0 0 1-8-8Z" fill="#e7efea" />
      <g fill="none" stroke="#438784" strokeWidth="2" strokeLinecap="round">
        <rect x="71" y="93" width="20" height="17" rx="3" />
        <path d="M76 104v-4m5 4v-7m5 7v-10M72 131h18m-18 7h12M72 158h18m-18 7h12M72 185h18m-18 7h12" />
      </g>
      <g fontFamily="Arial, sans-serif" fontSize="9" fill="#315264">
        <rect x="121" y="88" width="80" height="44" rx="6" fill="#e3efeb" />
        <text x="132" y="105">INGRESOS</text>
        <path d="m132 121 11-6 12 3 12-10 14 4 8-9" fill="none" stroke="#007d7d" strokeWidth="2" />
        <rect x="211" y="88" width="80" height="44" rx="6" fill="#f3ecdc" />
        <text x="222" y="105">COSTOS</text>
        <path d="M223 122h9m5 0h9m5 0h9m5 0h11" stroke="#c09442" strokeWidth="5" />
        <rect x="301" y="88" width="90" height="44" rx="6" fill="#e8edf1" />
        <text x="312" y="105">MARGEN</text>
        <path d="m313 121 12-3 13 1 15-9 19-2" fill="none" stroke="#315d83" strokeWidth="2" />
        <text x="124" y="155" fontSize="10" fontWeight="700">Seguimiento anual</text>
      </g>
      <g stroke="#dce7df" strokeWidth="1">
        <path d="M123 173h164m-164 24h164m-164 24h164" />
      </g>
      <path d="m127 218 24-14 23 6 25-23 25 5 24-24 32 4" fill="none" stroke="#007a7b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="#d4aa5a">
        <circle cx="151" cy="204" r="3" /><circle cx="199" cy="187" r="3" />
        <circle cx="248" cy="168" r="3" /><circle cx="280" cy="172" r="3" />
      </g>
      <rect x="304" y="147" width="87" height="91" rx="6" fill="#fff" stroke="#e0e8df" />
      <text x="316" y="164" fontFamily="Arial, sans-serif" fontSize="9" fill="#315264">OBJETIVOS</text>
      <g stroke="#007a7b" strokeWidth="2" fill="none">
        <path d="m315 181 3 3 5-6m-8 22 3 3 5-6m-8 22 3 3 5-6" />
      </g>
      <g stroke="#ccd9d2" strokeWidth="3" strokeLinecap="round">
        <path d="M332 182h44m-44 19h36m-36 19h41" />
      </g>
      <path d="M44 272h372l27 17a5 5 0 0 1-4 8H21a5 5 0 0 1-4-8Z" fill="url(#gps-laptop-base)" />
      <path d="M193 272h74l-7 8h-60Z" fill="#819a9f" />
      <path d="M23 291h414" stroke="#e9efec" strokeWidth="2" />
    </svg>
  );
}

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
