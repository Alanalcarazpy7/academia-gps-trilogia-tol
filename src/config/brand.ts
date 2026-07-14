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
  trilogiaTolLogo: "/brand/trilogia-tol-logo.png",
} as const;

export const brand = {
  name: "Academia GPS",
  productName: "La Trilogia TOL",
  productDisplayName: "La Trilogía TOL",
  colors: brandColors,
  assets: brandAssets,
} as const;
