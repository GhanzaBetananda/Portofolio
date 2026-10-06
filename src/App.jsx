import React, { useEffect, useState } from "react";
import diriImg from "./images/diri.png";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Database,
  GraduationCap,
  BarChart3,
  LayoutDashboard,
  BrainCircuit,
} from "lucide-react";
// Import gambar untuk projects
import bibitani1 from "./images/b1.png";
import bibitani2 from "./images/b2.jpg";
import bibitani3 from "./images/b3.png";
import bibitani4 from "./images/b4.png";
import diskominfo1 from "./images/d1.png";
import diskominfo2 from "./images/d2.png";
import diskominfo3 from "./images/d3.png";
import diskominfo4 from "./images/d4.png";
import diskominfo5 from "./images/d5.png";
import basarnas1 from "./images/basarnas1.png";
import basarnas2 from "./images/basarnas2.png";
import basarnas3 from "./images/basarnas3.jpeg";
import basarnas4 from "./images/basarnas4.jpeg";
import bimbel1 from "./images/bimbel1.png";
import bimbel2 from "./images/bimbel2.jpeg";
import bimbel3 from "./images/bimbel3.png";
import bimbel4 from "./images/bimbel4.png";
import seal1 from "./images/seal1.png";
import seal2 from "./images/seal2.png";
import seal3 from "./images/seal3.png";
import seal4 from "./images/seal4.png";
import seal5 from "./images/seal5.png";
import karir1 from "./images/karir1.png";
import karir2 from "./images/karir2.png";
import karir3 from "./images/karir3.png";
import karir4 from "./images/karir4.png";
import karir5 from "./images/karir5.png";
import pc1 from "./images/pc1.jpg";
import pc2 from "./images/pc2.jpg";
import pc3 from "./images/pc3.jpg";
import pc4 from "./images/pc4.png";
import pc5 from "./images/pc5.jpeg";
import sar1 from "./images/sar1.jpeg";
import sar2 from "./images/sar2.jpeg";
import sar3 from "./images/sar3.jpeg";
import sar4 from "./images/sar4.jpeg";

/* ----------------------------- DATA ----------------------------- */

const PROFILE = {
  name: "Ghanza Betananda Dilva",
  shortName: "Ghanza Dilva",
  role: "Data Analyst & Data Scientist",
  location: "Banyuwangi, East Java, Indonesia",
  phone: "+62 859-3008-8301",
  email: "ghanzabeta212@gmail.com",
  linkedin: "linkedin.com/in/ghanzabetananda",
  linkedinUrl: "https://www.linkedin.com/in/ghanzabetananda",
  bio: `Data Analyst and Data Scientist with hands-on experience in data analysis, visualization, machine learning, and data preprocessing. I turn complex datasets into clear, actionable insights using Python, SQL, and Tableau.`,
};

const HIGHLIGHT_STATS = [
  { value: "3.91", unit: "/4.00", label: "Cumulative GPA" },
  { value: "20+", unit: "", label: "Analytics projects" },
  { value: "260+", unit: "", label: "Tables cleansed" },
  { value: "200+", unit: "", label: "Students mentored" },
];

const FOCUS = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Cleaning, EDA, and statistical analysis with Python, SQL, and Excel to answer business questions.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Visualization",
    desc: "Tableau, Power BI, and React dashboards that stakeholders actually use and understand.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    desc: "Feature engineering and modeling with Scikit-learn for prediction and classification.",
  },
];

const EXPERIENCE = [
  {
    org: "Kantor Pencarian dan Pertolongan Banyuwangi",
    role: "Asisten Humas",
    place: "Banyuwangi, Indonesia",
    date: "Sep 2026 — Present",
    bullets: [
      "Documented all office activities through photography and video editing, producing visual content for digital publication.",
      "Created infographics and press releases and managed content distribution across official Instagram and TikTok accounts.",
    ],
    tags: ["CapCut", "PixelLab", "Instagram", "TikTok"],
    images: [sar1, sar2, sar3, sar4],
  },
  {
    org: "Bimbel Intisari",
    role: "Full-Stack Developer",
    place: "Banyuwangi, Indonesia",
    date: "Jul 2026 — Present",
    bullets: [
      "Develop and maintain a full-stack web application, independently handling frontend, backend, REST API integration, and deployment.",
      "Implement features based on tutoring requirements, including user accounts, tryout functionality, and result management.",
    ],
    tags: ["React.js", "Laravel", "PostgreSQL", "REST API", "Vercel"],
  },
  {
    org: "Diskominfo Banyuwangi",
    role: "Front-End Developer Intern",
    place: "Banyuwangi, Indonesia",
    date: "Feb 2025 — Jun 2025",
    bullets: [
      "Developed an analytics dashboard with React.js and Tailwind CSS, integrated with MySQL to monitor crowd density and waste accumulation.",
      "Built 6 integrated dashboard modules and 3 role-based interfaces covering analytics, history, and reporting.",
    ],
    tags: ["React.js", "Tailwind CSS", "MySQL"],
    images: [diskominfo1, diskominfo2, diskominfo3, diskominfo4, diskominfo5],
  },
  {
    org: "Social Economic Accelerator Lab (SEAL)",
    role: "Data Scientist Intern",
    place: "Surabaya, Indonesia",
    date: "Feb 2025 — Jun 2025",
    bullets: [
      "Contributed to the Open Data Jatim platform for Diskominfo Jawa Timur, improving data quality and analytics workflows.",
      "Built Python cleansing scripts to standardize master data across 38 regencies and cities.",
      "Cleansed 260 database tables in Google Colab via DBeaver for downstream analytics.",
    ],
    tags: ["Python", "Google Colab", "DBeaver"],
    images: [seal1, seal2, seal3, seal4, seal5],
  },
  {
    org: "Smart Agriculture Lab, UNEJ",
    role: "Assistant Lecturer",
    place: "Jember, Indonesia",
    date: "Jul 2024 — Dec 2025",
    bullets: [
      "Mentored 6 Software Development classes of 200+ undergraduates across 6 project teams.",
      "Taught SDLC practices, UML modeling, and Software Requirements Specification (SRS).",
    ],
    tags: ["SDLC", "UML", "Mentoring"],
    images: [pc1, pc2, pc3, pc4, pc5],
  },
  {
    org: "MSIB Batch 7 — Karier.mu",
    role: "Data Analyst Independent Study",
    place: "Jakarta, Indonesia",
    date: "Sep 2024 — Dec 2024",
    bullets: [
      "Completed an intensive Data Analyst program, delivering 20+ hands-on projects with Python, SQL, Excel, and Tableau.",
      "Performed end-to-end workflows: data cleaning, EDA, visualization, dashboarding, and insight presentation.",
    ],
    tags: ["Python", "SQL", "Tableau", "Excel"],
    images: [karir1, karir2, karir3, karir4, karir5],
  },
];

const LEADERSHIP = [
  {
    org: "Robo Clash, UNEJ",
    role: "Head of Equipment Division",
    date: "Sep — Nov 2024",
    desc: "Assembled and tested competition robots; managed arena setup, component inventory, and technical logistics.",
  },
  {
    org: "Smart Agriculture Lab, UNEJ",
    role: "Public Relations Staff",
    date: "Jul 2024 — Dec 2025",
    desc: "Managed lab communications, promotional content, and coordinated events and external collaborations.",
  },
  {
    org: "Karier.mu",
    role: "Tribe MSIB Batch 7",
    date: "Sep — Dec 2024",
    desc: "Liaised between Kemendikbudristek and MSIB participants; coordinated 2 virtual town halls and produced the batch farewell video.",
  },
];

const PROJECTS = [
  {
    name: "E-MON SAR Vehicle",
    desc: "Web-based vehicle inspection system digitizing daily inspection workflows for the BASARNAS Banyuwangi fleet — role-based forms, automated maintenance records, and real-time reporting across 5 vehicle categories and 20+ checkpoints.",
    tags: ["Google Apps Script", "Google Sheets"],
    images: [basarnas1, basarnas2, basarnas3, basarnas4],
  },
  {
    name: "Bimbel Intisari",
    desc: "CAT BKN preparation platform for civil service exam candidates — online tryout simulations, authentication, and score management across 5 tryout modules with automated scoring and an admin dashboard.",
    tags: ["React.js", "Laravel", "PostgreSQL"],
    images: [bimbel1, bimbel2, bimbel3, bimbel4],
  },
  {
    name: "Bibitani",
    desc: "Platform supporting horticultural seedling distribution to farmer groups in Jember Regency. Contributed as UI/UX Designer — Figma interfaces plus Use Case, BPMN, Class, and Sequence diagrams.",
    tags: ["Figma", "UI/UX Design", "UML", "BPMN"],
    images: [bibitani1, bibitani2, bibitani3, bibitani4],
  },
];

const SKILLS = [
  { cat: "Languages", items: ["Python", "SQL", "JavaScript", "PHP"] },
  {
    cat: "Analytics & ML",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "EDA",
      "Feature Engineering",
      "Statistics",
    ],
  },
  {
    cat: "Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Excel"],
  },
  { cat: "Databases", items: ["MySQL", "PostgreSQL"] },
  {
    cat: "Web Development",
    items: ["React.js", "Laravel", "Tailwind CSS", "HTML/CSS"],
  },
  {
    cat: "Tools",
    items: ["Git", "GitHub", "Google Colab", "DBeaver", "VS Code", "Trello"],
  },
];

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

/* ----------------------------- UI PARTS ----------------------------- */

function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] ${
        dark ? "text-white/60" : "text-accent"
      }`}
    >
      <span
        className={`h-px w-6 ${dark ? "bg-white/40" : "bg-accent"}`}
        aria-hidden
      />
      {children}
    </p>
  );
}

function SectionHeader({ index, title, desc }) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-xs text-muted">{index}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {desc && (
        <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-right">
          {desc}
        </p>
      )}
    </div>
  );
}

function Chip({ children, tone = "default" }) {
  if (tone === "white") {
    return (
      <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
      {children}
    </span>
  );
}

/* ----------------------------- APP ----------------------------- */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-body text-ink antialiased">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "border-b border-line bg-white/90 backdrop-blur-md"
            : "border-b border-transparent bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => scrollTo("top")}
            className="flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-xs font-semibold text-white">
              GD
            </span>
            <span className="text-left leading-none">
              <span className="block font-display text-[15px] font-semibold tracking-tight">
                {PROFILE.shortName}
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                Data Analyst
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-[13px] font-medium text-slate-600 transition-colors hover:text-ink"
              >
                {n.label}
              </button>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-accent"
            >
              Say hello <ArrowUpRight size={14} />
            </a>
          </nav>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-line bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-surface"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-16 pt-28 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-slate-600">
                Available for opportunities
              </span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {PROFILE.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-slate-400">
                {PROFILE.name.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="mt-3 text-[15px] font-medium text-accent">
              {PROFILE.role}
            </p>

            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-slate-600">
              {PROFILE.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent"
              >
                <Mail size={15} /> Email me
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <button
                onClick={() => scrollTo("experience")}
                className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-ink"
              >
                View experience <ArrowRight size={15} />
              </button>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-line bg-surface/60 px-4 py-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-slate-500 shadow-sm">
                  <MapPin size={15} />
                </span>
                <span className="text-[13px] leading-snug text-slate-600">
                  {PROFILE.location}
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-surface/60 px-4 py-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-slate-500 shadow-sm">
                  <Phone size={15} />
                </span>
                <span className="text-[13px] leading-snug text-slate-600">
                  {PROFILE.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Portrait card */}
          <div className="mx-auto w-full max-w-[380px]">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface p-3 shadow-[0_24px_60px_-24px_rgba(18,20,26,0.25)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={diriImg}
                  alt="Portrait of Ghanza Betananda Dilva"
                  className="aspect-[3/4] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-4">
                <div>
                  <p className="font-display text-[15px] font-semibold">
                    {PROFILE.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {PROFILE.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    GPA
                  </p>
                  <p className="font-display text-xl font-semibold text-accent">
                    3.91
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white sm:grid-cols-4">
          {HIGHLIGHT_STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-6 ${i !== 0 ? "border-l border-line" : ""} ${
                i >= 2 ? "max-sm:border-t max-sm:border-line" : ""
              } ${i === 2 ? "max-sm:border-l-0" : ""}`}
            >
              <p className="font-display text-3xl font-semibold tracking-tight">
                {s.value}
                <span className="text-base font-medium text-muted">
                  {s.unit}
                </span>
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-20 border-y border-line bg-surface/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            index="01 — Profile"
            title="About"
            desc="A focused analyst who cares about clean data and clear decisions."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {FOCUS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <f.icon size={19} />
                </span>
                <h3 className="mt-5 font-display text-[17px] font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
      >
        <SectionHeader
          index="02 — Timeline"
          title="Experience"
          desc="Internships, research, and teaching across data & engineering."
        />
        <div className="space-y-5">
          {EXPERIENCE.map((exp) => (
            <article
              key={exp.org}
              className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(18,20,26,0.2)] sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-ink px-3 py-1 font-mono text-[11px] font-medium text-white">
                  {exp.date}
                </span>
                <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted">
                  {exp.place}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {exp.org}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {exp.role}
                </p>
              </div>

              <ul className="mt-4 max-w-3xl space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-slate-600"
                  >
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300"
                      aria-hidden
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>

              {exp.images && (
                <div className="mt-6 border-t border-line pt-6">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {exp.images.slice(0, 4).map((img, idx) => (
                      <div
                        key={idx}
                        className="group overflow-hidden rounded-xl border border-line bg-surface"
                      >
                        <img
                          src={img}
                          alt={`${exp.org} documentation ${idx + 1}`}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
                    Documentation — {exp.org}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-20 border-y border-line bg-surface/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            index="03 — Builds"
            title="Projects"
            desc="Applied systems shipped end to end."
          />
          <div className="space-y-5">
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className="grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-2"
              >
                <div className="grid grid-cols-2 gap-2 bg-surface p-3">
                  {p.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="group overflow-hidden rounded-lg border border-line bg-white"
                    >
                      <img
                        src={img}
                        alt={`${p.name} screenshot ${idx + 1}`}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Database size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                    {p.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <SectionHeader
          index="04 — Stack"
          title="Skills"
          desc="Tools used across the analytics lifecycle."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.cat}
              className="rounded-2xl border border-line bg-surface/60 p-6"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                {s.cat}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <Chip key={it} tone="white">
                    {it}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="font-mono text-xs text-muted">05 — Beyond work</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              Leadership & Organizations
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {LEADERSHIP.map((l) => (
              <div
                key={l.org + l.role}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {l.date}
                </p>
                <h4 className="mt-3 font-display text-[16px] font-semibold leading-snug">
                  {l.org}
                </h4>
                <p className="mt-1 text-[13px] font-medium text-accent">
                  {l.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-20"
      >
        <SectionHeader index="06 — Education" title="Education" />
        <div className="flex flex-col gap-6 rounded-2xl border border-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-white">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Universitas Jember
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Bachelor of Computer Science · Jember, Indonesia
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                August 2022 — Present
              </p>
            </div>
          </div>
          <div className="border-t border-line pt-5 sm:border-0 sm:pt-0 sm:text-right">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              GPA
            </p>
            <p className="mt-1 font-display text-4xl font-semibold tracking-tight text-ink">
              3.91
              <span className="text-lg font-medium text-muted">/4.00</span>
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface/60 px-6 py-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              Bahasa Indonesia
            </p>
            <p className="mt-1 text-sm font-medium">Native</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface/60 px-6 py-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              English
            </p>
            <p className="mt-1 text-sm font-medium">Proficient</p>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-10"
      >
        <div className="overflow-hidden rounded-[24px] bg-[#101218] p-8 text-white sm:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Eyebrow dark>Let&apos;s work together</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-[2.75rem]">
                Turning raw data into decisions worth making.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
                Open to data analyst, data science, and dashboard roles —
                freelance or full-time.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-white"
                >
                  <Mail size={15} /> {PROFILE.email}
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/50"
                >
                  <Linkedin size={15} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="w-full max-w-xs space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                  <Mail size={14} />
                </span>
                {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/[\s-]/g, "")}`}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                  <Phone size={14} />
                </span>
                {PROFILE.phone}
              </a>
              <span className="flex items-center gap-3 text-white/50">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                  <MapPin size={14} />
                </span>
                {PROFILE.location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span>Built with React + Tailwind</span>
        </div>
      </section>
    </div>
  );
}
