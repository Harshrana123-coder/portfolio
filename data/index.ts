export const personalInfo = {
  name: "Harsh Rana",
  title: "Full Stack Developer",
  email: "harshrana15april2020@gmail.com",
  location: "Chennai, India",
  bio: "I craft high-performance web applications and intelligent systems at the intersection of modern frontend, scalable backend, and AI. Passionate about clean code, great UX, and solving real-world problems.",
  shortBio:
    "Full Stack Developer & Cybersecurity Enthusiast based in Chennai, India. I build scalable web apps and AI-powered tools that make a difference.",
  resumeUrl: "https://drive.google.com/file/d/1wF1QREVDtY_pPuspkvzw-YDIUt8rV9Z0/view?usp=drive_link",
  avatarUrl: "/avatar.png",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Harshrana123-coder",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harsh-rana-ba919a27b/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/harsh_ars33/?hl=en",
    icon: "instagram",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/hars_ars33",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:harshrana15april2020@gmail.com",
    icon: "email",
  },
];

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Other";
}

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: "html",
    color: "#E34F26",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: "css",
    color: "#1572B6",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    color: "#3178C6",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "react",
    color: "#61DAFB",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    icon: "tailwind",
    color: "#06B6D4",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "nodejs",
    color: "#339933",
    category: "Backend",
  },
  {
    name: "Express",
    icon: "express",
    color: "#ffffff",
    category: "Backend",
  },
  {
    name: "Python",
    icon: "python",
    color: "#3776AB",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    color: "#47A248",
    category: "Database",
  },
  {
    name: "MySQL",
    icon: "mysql",
    color: "#4479A1",
    category: "Database",
  },
  {
    name: "Firebase",
    icon: "firebase",
    color: "#FFCA28",
    category: "Database",
  },
  {
    name: "Docker",
    icon: "docker",
    color: "#2496ED",
    category: "DevOps",
  },
  {
    name: "GitHub",
    icon: "github",
    color: "#ffffff",
    category: "DevOps",
  },
];

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  type: "Internship" | "Freelance" | "Education" | "Personal";
  description: string;
  tech: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Self-Learning ",
    duration: "2023- Present",
    type: "Personal",
    description:
      "Built RESTful APIs and React dashboards for B2B SaaS platform. Integrated third-party payment gateways and automated reporting pipelines.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    current: false,
  },
  {
    id: 2,
    role: "AI/ML Enthusiast",
    company: "Self-Learning",
    duration: "2023 – Present",
    type: "Personal",
    description:
      "Completed courses on Deep Learning, NLP, and LLM fine-tuning. Built personal projects integrating OpenAI, Anthropic, and HuggingFace APIs.",
    tech: ["Python", "TensorFlow", "OpenAI API"],
    current: true,
  },
  {
    id: 3,
    role: "B.Tech Computer Science & Engineering",
    company: "SRM Institute of Science and Technology",
    duration: "2023 – 2027",
    type: "Education",
    description:
      "Pursuing Bachelor's in Computer Science. Focus areas: Web Technologies, Cybersecurity, and Artificial Intelligence.",
    tech: ["C", "Java", "Python", "Data Structures", "OS", "Networks"],
    current: true,
  },
];
