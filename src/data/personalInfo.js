// ============================================================
// CENTRAL PERSONAL INFORMATION CONFIGURATION
// ------------------------------------------------------------
// This is the SINGLE SOURCE OF TRUTH for every personal detail
// shown across the site (Navbar, Hero, GitHub section, Contact,
// Footer, SEO tags, resume link, etc).
//
// Edit the values below and they will automatically update
// everywhere on the site — you never need to touch another
// component file to change your email, GitHub, LinkedIn, or
// resume link.
// ============================================================

const personalInfo = {
  name: "R. Shankaran",
  shortName: "Shankaran",
  initials: "RS",

  role: "Computer Science Engineering Student | Python Developer | Aspiring Software Engineer",

  // Replace with your real Gmail / preferred email address
  email: "your-email@gmail.com",

  github: {
    username: "yourusername",
    url: "https://github.com/yourusername",
  },

  linkedin: {
    username: "yourusername",
    url: "https://www.linkedin.com/in/yourusername",
  },

  // Drop your resume file into /public and point this to it,
  // e.g. "/resume.pdf"
  resume: "/resume.pdf",

  location: "Tamil Nadu, India",

  education: {
    degree: "B.E. Computer Science and Engineering",
    college: "Mailam Engineering College",
    university: "Anna University",
    year: "3rd Year",
    startYear: "2023", // edit if your actual admission year differs
    status: "Present",
  },
};

export default personalInfo;
