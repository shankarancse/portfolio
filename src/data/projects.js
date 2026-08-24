// ============================================================
// PROJECTS DATA
// Add, remove, or edit projects here — the Projects section
// renders directly from this array.
// ============================================================

const projects = [
  {
    id: "citypulse",
    title: "CityPulse",
    tagline: "Smart civic issue reporting platform",
    description:
      "A smart civic issue reporting platform that allows citizens to report problems such as waste, streetlights, water issues, and other public infrastructure problems.",
    features: [
      "GPS-based reporting",
      "Photo-based issue reporting",
      "Civic points and rewards",
      "Emergency alerts",
      "Offline reporting",
      "Issue tracking",
      "Admin dashboard",
      "Interactive map",
      "AI-assisted issue analysis",
    ],
    technologies: ["Python", "AI", "Web", "Maps", "Database"],
    githubUrl: "", // add your repo link when ready
    liveUrl: "", // add a live demo link if deployed
    accent: "green",
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    tagline: "Generate & export QR codes from text or URLs",
    description:
      "A Python application that generates QR codes from text or URLs and saves them as image files.",
    features: ["Text input", "URL input", "QR generation", "PNG export"],
    technologies: ["Python", "qrcode"],
    githubUrl: "",
    liveUrl: "",
    accent: "purple",
  },
  {
    id: "python-logic-programs",
    title: "Python Number & Logic Programs",
    tagline: "Fundamentals, recursion, OOP & problem solving",
    description:
      "A collection of Python programs created while practicing programming fundamentals, number-based problems, recursion, functions, OOP, and problem solving.",
    features: [
      "Strong Number",
      "Automorphic Number",
      "Perfect Number",
      "Abundant Number",
      "Harshad Number",
      "Perfect Square",
      "Friendly Pair",
      "Reverse Number",
      "Recursion problems",
    ],
    technologies: ["Python"],
    githubUrl: "",
    liveUrl: "",
    accent: "green",
  },
];

export default projects;
