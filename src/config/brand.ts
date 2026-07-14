export const brandColors = {
  blue: "#004877",
  teal: "#008080",
  green: "#76A858",
  cream: "#F8F2EA",
  yellow: "#E6C619",
  white: "#FFFFFF",
  ink: "#143246",
} as const;

export const brandAssets = {
  academiaGpsLogo: "/brand/academia-gps-logo.svg",
  academiaGpsIcon: "/brand/academia-gps-icon.svg",
  academiaGpsLogoDark: "/brand/academia-gps-logo-dark.svg",
  trilogiaTolLogo: "/brand/trilogia-tol-logo-transparent.png",
  trilogiaTolLogoPoster: "/brand/trilogia-tol-logo-poster.svg",
  trilogiaTolProgramsOverview: "/brand/trilogia-tol-programs-overview.svg",
  tolFiLogo: "/brand/tol-fi-logo.svg",
  tolMarkLogo: "/brand/tol-mark-logo.svg",
  tolCoachLogo: "/brand/tol-coach-logo.svg",
} as const;

export const trilogiaTolPrograms = [
  {
    id: "tol-fi",
    name: "TOL-FI",
    label: "Finanzas para clinicas rentables",
    logo: brandAssets.tolFiLogo,
    color: brandColors.blue,
  },
  {
    id: "tol-mark",
    name: "TOL-Mark",
    label: "Marketing y experiencia del paciente",
    logo: brandAssets.tolMarkLogo,
    color: brandColors.teal,
  },
  {
    id: "tol-coach",
    name: "TOL-Coach",
    label: "Coaching y liderazgo para clinicas",
    logo: brandAssets.tolCoachLogo,
    color: brandColors.yellow,
  },
] as const;

export const brand = {
  name: "Academia GPS",
  productName: "La Trilogia TOL",
  productDisplayName: "La Trilogía TOL",
  colors: brandColors,
  assets: brandAssets,
  programs: trilogiaTolPrograms,
} as const;
