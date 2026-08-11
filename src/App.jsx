import React, { useEffect, useState } from 'react';
import {
  Mail, Phone, MapPin, Linkedin, ArrowUpRight, Menu, X,
  Database, Terminal, GraduationCap, ChevronRight
} from 'lucide-react';

/* ----------------------------- DATA ----------------------------- */

const PROFILE = {
  name: 'Ghanza Betananda Dilva',
  role: 'Data Analyst & Data Scientist',
  location: 'Jember, East Java, Indonesia',
  phone: '+62 859-3008-8301',
  email: 'ghanzabeta212@gmail.com',
  linkedin: 'linkedin.com/in/ghanzabetananda',
  linkedinUrl: 'http://www.linkedin.com/in/ghanzabetananda',
  bio: `Data Analyst and Data Scientist with hands-on experience in data analysis, data visualization, machine learning, and data preprocessing. Proficient in transforming complex datasets into actionable insights using Python, SQL, Tableau, and statistical analysis.`,
};

const STATS = [
  { key: 'gpa', label: 'GPA', value: '3.91', unit: '/4.00' },
  { key: 'tables', label: 'db_tables_cleansed', value: '260', unit: '+' },
  { key: 'regions', label: 'regencies_standardized', value: '38', unit: '' },
  { key: 'projects', label: 'analytics_projects', value: '20', unit: '+' },
  { key: 'students', label: 'students_mentored', value: '200', unit: '+' },
  { key: 'modules', label: 'dashboard_modules_built', value: '6', unit: '' },
];

const EXPERIENCE = [
  {
    org: 'Diskominfo Banyuwangi',
    role: 'Front-End Developer Intern',
    place: 'Banyuwangi, ID',
    date: 'Feb 2025 — Jun 2025',
    bullets: [
      'Developed an analytics dashboard using React.js, HTML, and Tailwind CSS, integrated with a MySQL database to monitor crowd density and waste accumulation detection results.',
      'Built 6 integrated dashboard modules and 3 role-based user interfaces covering account management, analytics monitoring, historical tracking, and reporting.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'MySQL'],
  },
  {
    org: 'Social Economic Accelerator Lab (SEAL)',
    role: 'Data Scientist Intern',
    place: 'Surabaya, ID',
    date: 'Feb 2025 — Jun 2025',
    bullets: [
      'Contributed to the Open Data Jatim platform for Diskominfo Jawa Timur, improving data quality and analytics workflows for the provincial open data portal.',
      'Built data cleansing scripts in Python to standardize master data across 38 regencies and cities.',
      'Cleansed 260 database tables in Google Colab, connected via DBeaver, to standardize data for downstream analytics.',
    ],
    tags: ['Python', 'Google Colab', 'DBeaver'],
  },
  {
    org: 'Smart Agriculture Lab, UNEJ',
    role: 'Assistant Lecturer',
    place: 'Jember, ID',
    date: 'Jul 2024 — Dec 2025',
    bullets: [
      'Mentored 6 Software Development (PPL) classes of 200+ undergraduate students across 6 project teams.',
      'Delivered instruction in SDLC practices, UML modeling (Use Case, Activity, Sequence, Class, ER Diagrams), and Software Requirements Specification (SRS).',
    ],
    tags: ['SDLC', 'UML', 'Mentoring'],
  },
  {
    org: 'MSIB Batch 7 — Karier.mu',
    role: 'Data Analyst Independent Study',
    place: 'Jakarta, ID',
    date: 'Sep 2024 — Dec 2024',
    bullets: [
      'Completed an intensive Data Analyst program, delivering 20+ hands-on analytics projects using Python, SQL, Excel, and Tableau.',
      'Performed end-to-end workflows: data cleaning, EDA, visualization, dashboarding, and business insight presentation.',
    ],
    tags: ['Python', 'SQL', 'Tableau', 'Excel'],
  },
];

const LEADERSHIP = [
  {
    org: 'Robo Clash, UNEJ',
    role: 'Head of Equipment Division',
    date: 'Sep — Nov 2024',
    desc: 'Assembled and tested competition robots; managed arena setup, component inventory, and technical logistics.',
  },
  {
    org: 'Smart Agriculture Lab, UNEJ',
    role: 'Public Relations Staff',
    date: 'Jul 2024 — Dec 2025',
    desc: 'Managed lab communications, promotional content, and coordinated events and external collaborations.',
  },
  {
    org: 'Karier.mu',
    role: 'Tribe MSIB Batch 7',
    date: 'Sep — Dec 2024',
    desc: 'Liaised between Kemendikbudristek and MSIB participants; coordinated 2 virtual town halls and produced the batch farewell video.',
  },
];

const PROJECTS = [
  {
    name: 'E-MON SAR Vehicle',
    desc: 'Web-based vehicle inspection system digitizing daily inspection workflows for the BASARNAS Banyuwangi operational fleet — role-based forms, automated maintenance records, and real-time reporting across 5 vehicle categories and 20+ checkpoints.',
    tags: ['Google Apps Script', 'Google Sheets'],
  },
  {
    name: 'Bimbel Intisari',
    desc: 'CAT BKN preparation platform for civil service exam candidates — online tryout simulations, authentication, and score management across 5 tryout modules with automated scoring and an admin dashboard.',
    tags: ['React.js', 'Laravel', 'PostgreSQL'],
  },
];

const SKILLS = [
  { cat: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'PHP'] },
  { cat: 'Analytics & ML', items: ['Pandas', 'NumPy', 'Scikit-learn', 'EDA', 'Feature Engineering', 'Statistical Analysis'] },
  { cat: 'Visualization', items: ['Tableau', 'Power BI', 'Matplotlib', 'Excel'] },
  { cat: 'Databases', items: ['MySQL', 'PostgreSQL'] },
  { cat: 'Web Development', items: ['React.js', 'Laravel', 'Tailwind CSS', 'HTML/CSS'] },
  { cat: 'Tools', items: ['Git', 'GitHub', 'Google Colab', 'DBeaver', 'VS Code', 'Trello'] },
];

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

/* ----------------------------- UI PARTS ----------------------------- */

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
      <span className="w-4 h-px bg-accent" />
      {children}
    </div>
  );
}

function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-12 border-b border-line pb-6">
      <div>
        <span className="font-mono text-xs text-muted">{index}</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-1">{title}</h2>
      </div>
      {subtitle && (
        <p className="hidden sm:block font-mono text-xs text-muted max-w-[220px] text-right leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line text-muted bg-surface">
      {children}
    </span>
  );
}

/* Signature hero element: a "query console" reflecting the subject's own world (SQL / dashboards) */
function QueryConsole() {
  const [visibleRows, setVisibleRows] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleRows((v) => (v < STATS.length ? v + 1 : v));
    }, 140);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl bg-console text-white overflow-hidden shadow-[0_20px_60px_-20px_rgba(15,17,21,0.5)] border border-black/10">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-white/40">profile_stats.sql</span>
      </div>
      <div className="p-5 font-mono text-[12.5px] leading-relaxed">
        <p className="text-white/40">-- query current profile signals</p>
        <p>
          <span className="text-[#5CA0FF]">SELECT</span> gpa, tables_cleansed, projects
        </p>
        <p>
          <span className="text-[#5CA0FF]">FROM</span> ghanza_dilva.profile
        </p>
        <p>
          <span className="text-[#5CA0FF]">WHERE</span> role = <span className="text-[#8BD17C]">'data_analyst'</span>;
        </p>
        <div className="mt-4 border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_auto] bg-white/5 px-3 py-2 text-white/40 text-[11px] uppercase tracking-wide">
            <span>field</span>
            <span>value</span>
          </div>
          {STATS.slice(0, visibleRows).map((s) => (
            <div
              key={s.key}
              className="grid grid-cols-[1fr_auto] px-3 py-2 border-t border-white/10 items-center"
            >
              <span className="text-white/60">{s.label}</span>
              <span className="text-white">
                <span className="text-[#8BD17C] font-semibold">{s.value}</span>
                <span className="text-white/40">{s.unit}</span>
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-white/30">{'// '}{visibleRows} rows returned</p>
      </div>
    </div>
  );
}

/* ----------------------------- APP ----------------------------- */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-ink font-body selection:bg-accent selection:text-white">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled ? 'bg-white/90 backdrop-blur border-b border-line' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('top')}
            className="font-display font-semibold tracking-tight text-lg flex items-center gap-2"
          >
            <span className="w-7 h-7 rounded-md bg-ink text-white grid place-items-center font-mono text-xs">
              GD
            </span>
            <span className="hidden sm:inline">ghanza.dilva</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-mono text-[12px] uppercase tracking-wide text-muted hover:text-ink transition-colors"
              >
                {n.label}
              </button>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-mono text-[12px] uppercase tracking-wide bg-ink text-white px-4 py-2 rounded-full hover:bg-accent transition-colors"
            >
              Say hello
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-b border-line px-6 py-4 flex flex-col gap-4">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-mono text-sm uppercase tracking-wide text-left text-muted hover:text-ink"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="pt-36 pb-20 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <Eyebrow>Data Analyst &amp; Data Scientist</Eyebrow>
            <h1 className="font-display text-[13vw] sm:text-6xl lg:text-[3.6rem] leading-[1.03] font-semibold tracking-tight text-ink">
              Ghanza Betananda
              <br />
              Dilva
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              {PROFILE.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 bg-ink text-white font-mono text-[12px] uppercase tracking-wide px-5 py-3 rounded-full hover:bg-accent transition-colors"
              >
                <Mail size={14} /> Email me
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line font-mono text-[12px] uppercase tracking-wide px-5 py-3 rounded-full text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted">
              <span className="flex items-center gap-1.5"><MapPin size={13} /> {PROFILE.location}</span>
              <span className="flex items-center gap-1.5"><Phone size={13} /> {PROFILE.phone}</span>
            </div>
          </div>

          <QueryConsole />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <SectionHeading
          index="01 — TIMELINE"
          title="Professional Experience"
          subtitle="Internships, research, and teaching roles across data & engineering"
        />
        <div className="space-y-0">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.org}
              className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-10 py-8 border-b border-line group"
            >
              <div className="font-mono text-xs text-muted pt-1">{exp.date}</div>
              <div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="font-display text-xl font-semibold text-ink">{exp.org}</h3>
                  <span className="text-muted text-sm">— {exp.role}</span>
                </div>
                <p className="font-mono text-[11px] text-muted mt-1">{exp.place}</p>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-ink/80 leading-relaxed">
                      <ChevronRight size={14} className="mt-1 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((t) => <Chip key={t}>{t}</Chip>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <SectionHeading index="02 — BUILDS" title="Projects" subtitle="Applied systems shipped end to end" />
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="p-7 rounded-xl border border-line bg-surface hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Database size={18} className="text-accent" />
                <ArrowUpRight size={16} className="text-muted" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <SectionHeading index="03 — STACK" title="Skills" subtitle="Tools used across the analytics lifecycle" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {SKILLS.map((s) => (
            <div key={s.cat}>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-3">{s.cat}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => <Chip key={it}>{it}</Chip>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <SectionHeading index="04 — BEYOND WORK" title="Leadership & Organizations" />
        <div className="grid sm:grid-cols-3 gap-6">
          {LEADERSHIP.map((l) => (
            <div key={l.org + l.role} className="p-6 rounded-xl border border-line">
              <p className="font-mono text-[11px] text-muted">{l.date}</p>
              <h3 className="font-display font-semibold text-ink mt-2">{l.org}</h3>
              <p className="text-sm text-accent mt-0.5">{l.role}</p>
              <p className="text-sm text-ink/70 mt-3 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <SectionHeading index="05 — EDUCATION" title="Education" />
        <div className="rounded-xl border border-line p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-surface">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-ink text-white grid place-items-center shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">Universitas Jember</h3>
              <p className="text-sm text-muted mt-1">Bachelor of Computer Science · Jember, ID</p>
              <p className="font-mono text-xs text-muted mt-1">August 2022 — Present</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">GPA</p>
            <p className="font-display text-4xl font-semibold text-accent">3.91<span className="text-lg text-muted">/4.00</span></p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-line">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-1">Bahasa Indonesia</p>
            <p className="text-sm text-ink/80">Native</p>
          </div>
          <div className="p-5 rounded-xl border border-line">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-1">English</p>
            <p className="text-sm text-ink/80">Proficient</p>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-ink text-white p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div>
            <Eyebrow>Let's work together</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight max-w-xl">
              Turning raw data into decisions worth making.
            </h2>
          </div>
          <div className="flex flex-col gap-3 font-mono text-sm">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={15} /> {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={15} /> {PROFILE.phone}
            </a>
            <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Linkedin size={15} /> {PROFILE.linkedin}
            </a>
            <span className="flex items-center gap-2 text-white/50">
              <MapPin size={15} /> {PROFILE.location}
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted">
          <span className="flex items-center gap-1.5"><Terminal size={13} /> built with React + Tailwind</span>
          <span>© {new Date().getFullYear()} Ghanza Betananda Dilva</span>
        </div>
      </section>
    </div>
  );
}
