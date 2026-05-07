export type ProjectCategory =
  | "All"
  | "Web Apps"
  | "AI Projects"
  | "Cybersecurity"
  | "Python";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  category: ProjectCategory[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LLM Resume Scanner",
    description:
      "AI-powered resume analysis tool that scores resumes against job descriptions using GPT-4.",
    longDescription:
      "An intelligent resume screening system that leverages large language models to parse resumes, extract key skills, and match candidates to job descriptions with a compatibility score.",
    image: "/projects/resume-scanner.png",
    tech: ["Python", "FastAPI", "OpenAI API", "React", "TailwindCSS", "Redis"],
    features: [
      "ATS score analysis",
      "Skill gap detection",
      "Keyword optimization tips",
      "Batch resume processing",
      "PDF/DOCX parsing",
    ],
    github: "https://github.com/Harshrana123-coder/ResumeScanner",
    live: "#",
    category: ["AI Projects", "LLM Projects"],
    featured: true,
  },
  {
    id: 2,
    title: "Bento clone",
    description:
      "An advanced recreation of the Bento platform, highlighting contemporary web development practices supported by a well-structured frontend and backend system..",
    longDescription:
      "A comprehensive human resource management system built with React and Node.js. Features real-time attendance tracking, payroll generation, leave management, and detailed analytics.",
    image: "/projects/hrms.png",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Chart.js"],
    features: [
      "Role-based access control",
      "Payroll automation",
      "Leave management",
      "Performance reviews",
      "Real-time notifications",
    ],
    github: "https://github.com/Harshrana123-coder/bento-clone",
    live: "#",
    category: ["Web Apps"],
    featured: true,
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Pixel-perfect Netflix UI clone with TMDB API integration, auth, and video streaming.",
    longDescription:
      "A full-featured streaming platform clone with real movie data from TMDB API. Includes authentication, watchlist, genre browsing, trailer playback, and responsive design.",
    image: "/projects/netflix.png",
    tech: ["Next.js", "TypeScript", "Firebase", "Twilio", "SendGrid"],
    features: [
      "Real-time push notifications",
      "SMS & email broadcasting",
      "Role-based recipient targeting",
      "Emergency alert system",
      "Analytics dashboard",
    ],
    github: "https://github.com/Harshrana123-coder/Netflix",
    live: "#",
    category: ["Web Apps"],
    featured: false,
  },
  {
    id: 4,
    title: "RAKSHAK",
    description:
      "A tool designed to detect and report common web security flaws like SQL injection, XSS, and more. ",
    longDescription:
      "RAKSHAK is a web vulnerability scanner that identifies security weaknesses in web applications. It performs automated scans for issues like SQL injection, cross-site scripting (XSS), and insecure configurations, providing detailed reports and remediation guidance.",
    image: "/projects/ rakshak.png",
    tech: ["React", "JavaScript", "Node.js", "CSS",],
    features: [
      "Automated vulnerability scanning",
      "Security report generation",
      "Vulnerability remediation guidance",
      "Configurable scan settings",
      "Responsive design",
    ],
    github: "https://github.com/Harshrana123-coder/rakshak",
    live: "#",
    category: ["Web Apps"],
    featured: false,
  },
  {
    id: 5,
    title: "Carbon Coal",
    description:
      "The platform enables users to estimate greenhouse gas emissions by inputting key operational data such as diesel consumption, electricity usage, explosives deployment, and methane release..",
    longDescription:
      "Carbon Coal is an environmental impact assessment tool that calculates the carbon footprint of coal mining operations. By analyzing data on diesel consumption, electricity usage, explosives deployment, and methane release, it provides insights into the environmental impact and suggests mitigation strategies.",
    image: "/projects/carbon-coal.png",
    tech: ["Next.js", "OpenAI API", "Anthropic API", "MongoDB", "Socket.io"],
    features: [
      "Real-time carbon footprint estimation",
      "Operational data analysis",
      "AI-driven mitigation suggestions",
      "Interactive data visualization",
    ],
    github: "https://github.com/Harshrana123-coder/carbon-coal",
    live: "#",
    category: ["Web Apps"],
    featured: true,
  },
  {
    id: 6,
    title: "Cybersecurity Dashboard",
    description:
      "Network threat monitoring dashboard with real-time vulnerability scanning and incident reporting.",
    longDescription:
      "A security operations center dashboard for monitoring network threats, scanning for vulnerabilities, and generating incident reports. Built with Python backend and React frontend.",
    image: "/projects/cybersec.png",
    tech: [
      "Python",
      "React",
      "FastAPI",
      "Nmap",
      "Elasticsearch",
      "PostgreSQL",
    ],
    features: [
      "Real-time threat detection",
      "Network vulnerability scanning",
      "Incident timeline",
      "CVE database integration",
      "PDF report generation",
    ],
    github: "https://github.com/harshrana",
    live: "#",
    category: ["Cybersecurity", "Python"],
    featured: true,
  },
];
