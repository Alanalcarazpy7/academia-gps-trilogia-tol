type PainKind = "finance" | "marketing" | "team";

export function PainPointIcon({ kind }: { kind: PainKind }) {
  return (
    <span className="gps-pain-art" aria-hidden="true">
      <svg
        className="gps-pain-symbol"
        viewBox="0 0 72 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "finance" ? (
          <>
            <g className="gps-pain-chart">
              <path d="m12 32 13-11 10 5 10-15 10 8 9-11" />
              <path d="M56 8h8v8" />
            </g>
            <ellipse cx="22" cy="44" rx="11" ry="4" />
            <path d="M11 44v15c0 2.2 4.9 4 11 4s11-1.8 11-4V44M11 49c0 2.2 4.9 4 11 4s11-1.8 11-4M11 54c0 2.2 4.9 4 11 4s11-1.8 11-4" />
            <path d="M29 36c0-2.2 4.5-4 10-4s10 1.8 10 4-4.5 4-10 4c-2 0-4-.3-5.5-.7M49 36v20M35 46c1.2.3 2.6.4 4 .4 5.5 0 10-1.8 10-4M35 52c1.2.3 2.6.4 4 .4 5.5 0 10-1.8 10-4M35 58c1.2.3 2.6.4 4 .4 3.1 0 5.8-.6 7.6-1.4" />
            <path d="M45 28c0-2 3.6-3.5 8-3.5 2 0 3.8.3 5.2.8M59 24v26M53 33c2.4 0 4.5-.5 6-1.2M53 39c2.4 0 4.5-.5 6-1.2M53 45c2.4 0 4.5-.5 6-1.2" />
          </>
        ) : kind === "marketing" ? (
          <g fill="currentColor" stroke="none">
            <circle cx="36" cy="25" r="9" />
            <circle cx="18" cy="28" r="6.5" />
            <circle cx="54" cy="28" r="6.5" />
            <path d="M21 59V48c0-9 6-14 15-14s15 5 15 14v11H21ZM7 55v-9c0-7 4-11 11-11 3 0 5 .6 7 2-5 4-7 9-7 16v2H7ZM54 55v-2c0-7-2-12-7-16 2-1.4 4-2 7-2 7 0 11 4 11 11v9H54Z" />
          </g>
        ) : (
          <>
            <path d="m30 8 1-5h10l1 5 6 3 5-2 7 8-3 4 2 7 5 2v10l-5 1-3 7 3 4-7 8-5-2-6 3-1 5H30l-1-5-7-3-4 2-8-8 3-4-2-7-5-1V30l5-2 3-7-3-4 8-8 4 2 7-3Z" />
            <circle cx="35" cy="35" r="18" />
            <circle cx="35" cy="29" r="6" fill="currentColor" stroke="none" />
            <path d="M24 46v-3c0-6 4-9 11-9s11 3 11 9v3" fill="currentColor" stroke="none" />
          </>
        )}
      </svg>
      <span className="gps-pain-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          {kind === "finance" ? (
            <path d="m6 18 12-12M7 6h11v11" />
          ) : kind === "marketing" ? (
            <path d="M12 5v14M5 12h14" />
          ) : (
            <path d="m5 12 4 4L19 6" />
          )}
        </svg>
      </span>
    </span>
  );
}

export function PainPointBackdrop() {
  return (
    <svg
      className="gps-pain-backdrop"
      viewBox="0 0 1440 480"
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
    >
      <path d="M0 145C128 207 168 313 342 361c126 35 221 57 301 119H0Z" fill="#dce8e3" fillOpacity=".66" />
      <path d="M0 307c138 103 250 142 445 173H0Z" fill="#c9dcd5" fillOpacity=".6" />
      <g stroke="#c99d49" strokeWidth=".9" strokeOpacity=".7">
        <path d="M-25 298c177 169 351 140 602 192" />
        <path d="M-25 317c159 147 266 154 377 177" />
      </g>
      {Array.from({ length: 17 }, (_, index) => (
        <path
          key={index}
          d="M1120-130c42 170 150 264 365 305"
          transform={`translate(${index * 10} ${-index * 7})`}
          stroke={index < 8 ? "#d6b36f" : "#b9ceca"}
          strokeWidth=".7"
          strokeOpacity=".6"
        />
      ))}
    </svg>
  );
}
