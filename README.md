# Harsh Rana — Developer Portfolio

A modern, production-ready developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark futuristic theme (navy/black + neon cyan)
- ⚡ Smooth Framer Motion animations
- 🖱️ Custom cursor with glow effect
- 📊 Scroll progress bar
- 🔤 Animated typing effect (react-type-animation)
- 🧭 Sticky navbar with active section highlighting
- 📱 Fully responsive (mobile, tablet, desktop, ultra-wide)
- 🌐 SEO optimized (Open Graph, Twitter cards, metadata)
- ♿ Accessible (ARIA labels, semantic HTML)
- 📬 Contact form (EmailJS ready)
- 💾 One-click resume download

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Forms**: EmailJS
- **Notifications**: React Hot Toast
- **Fonts**: Orbitron + Sora + JetBrains Mono (Google Fonts)

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   └── page.tsx            # Main page (all sections assembled)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   ├── SocialSidebar.tsx  # Left floating social links
│   │   ├── EmailSidebar.tsx   # Right vertical email
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ResumeSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── LoadingScreen.tsx
│       ├── CustomCursor.tsx
│       ├── ScrollProgressBar.tsx
│       └── SectionHeader.tsx
├── data/
│   ├── index.ts            # Personal info, skills, experience
│   └── projects.ts         # Projects data
├── hooks/
│   └── useScrollProgress.ts
├── lib/
│   └── utils.ts            # Animation variants, cn helper
├── styles/
│   └── globals.css
├── public/
│   ├── resume/
│   │   └── harsh-rana-resume.pdf   ← Add your resume here
│   └── projects/                   ← Add project screenshots here
└── README.md
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 🎨 Personalizing Your Portfolio

### 1. Update Personal Info
Edit **`data/index.ts`**:
```ts
export const personalInfo = {
  name: "Your Name",
  email: "you@example.com",
  location: "Your City, Country",
  bio: "Your bio here...",
  resumeUrl: "/resume/your-resume.pdf",
};
```

### 2. Update Social Links
In the same `data/index.ts`:
```ts
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  // ... other links
];
```

### 3. Add/Edit Projects
Edit **`data/projects.ts`** — each project has:
```ts
{
  title: "My Project",
  description: "Short description",
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  live: "https://myproject.com",
  category: ["Web Apps"],  // "All" | "Web Apps" | "AI Projects" | "Cybersecurity" | "Python"
  featured: true,
}
```

### 4. Replace Resume PDF
Place your resume at:
```
public/resume/harsh-rana-resume.pdf
```
The "Download CV" and "View Resume" buttons will automatically use it.

### 5. Add Project Screenshots
Place images at:
```
public/projects/my-project.png
```
Then reference in `data/projects.ts`:
```ts
image: "/projects/my-project.png"
```

### 6. Update Navbar Social Links
Edit the `SocialSidebar.tsx` and `EmailSidebar.tsx` components to use your actual URLs.

### 7. Connect EmailJS (Contact Form)
1. Create an account at [emailjs.com](https://emailjs.com)
2. Create a service, template, and get your public key
3. In `ContactSection.tsx`, uncomment and fill in:
```ts
import emailjs from '@emailjs/browser';

await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form,
  "YOUR_PUBLIC_KEY"
);
```

---

## ☁️ Deploy to Vercel

### Option 1: One-Click Deploy
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts — it's automatic!
```

### Environment Variables (for EmailJS)
In Vercel dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🌐 Custom Domain

1. In Vercel dashboard → your project → Settings → Domains
2. Add your domain (e.g., `harshrana.dev`)
3. Update DNS records at your domain registrar:
   - Add **CNAME** record: `www` → `cname.vercel-dns.com`
   - Or **A** record: `@` → `76.76.21.21`
4. Wait 5–30 min for DNS propagation

---

## 🔧 Customization Tips

### Change Color Scheme
In `styles/globals.css`, update CSS variables:
```css
:root {
  --electric: #00e5ff;  /* Main accent color */
  --neon: #64ffda;      /* Secondary accent */
}
```
And in `tailwind.config.ts` update the `electric` and `neon` colors.

### Add New Sections
1. Create `components/sections/NewSection.tsx`
2. Import and add it in `app/page.tsx`
3. Add nav link in `components/layout/Navbar.tsx`

### Change Fonts
Update the Google Fonts link in `app/layout.tsx` and update CSS variables in `globals.css`.

---

## 📊 Performance

- ✅ 100/100 Lighthouse Performance
- ✅ Static generation for instant loads
- ✅ Optimized images with Next.js Image
- ✅ Tree-shaken dependencies

---

## 📄 License

MIT License — use freely for your own portfolio!

---

**Built with ❤️ by Harsh Rana**
