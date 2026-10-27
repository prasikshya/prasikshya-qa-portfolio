import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Braces,
  Bug,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Download,
  ExternalLink,
  FileCheck2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  FileSpreadsheet,
  Moon,
  Sun,
  TestTube2,
  X,
} from 'lucide-react';
import {
  SiApachejmeter,
  SiCucumber,
  SiGithubactions,
  SiGit,
  SiGooglechrome,
  SiJavascript,
  SiJira,
  SiPostman,
  SiSelenium,
  SiSwagger,
  SiTypescript,
} from 'react-icons/si';

const baseUrl = import.meta.env.BASE_URL;

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'QA Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Automation', href: '#automation' },
  { label: 'Contact', href: '#contact' },
];

const expertise = [
  {
    icon: SearchCheck,
    title: 'Manual & exploratory testing',
    description:
      'I validate real user journeys, edge cases, error states, and release-critical behaviour beyond the happy path.',
    label: 'User journey focused',
  },
  {
    icon: ClipboardCheck,
    title: 'Test planning & documentation',
    description:
      'Clear test scenarios, well-structured cases, and actionable defect reports keep quality visible across the team.',
    label: 'Clear, usable evidence',
  },
  {
    icon: Network,
    title: 'UI & API validation',
    description:
      'I check interfaces, workflows, requests, responses, validations, and integration behaviour with a product mindset.',
    label: 'End-to-end confidence',
  },
  {
    icon: Bot,
    title: 'Test automation',
    description:
      'I build maintainable automated checks for repeatable, high-value workflows using modern testing practices.',
    label: 'Repeatable protection',
  },
];

const projects = [
  {
    type: 'Automation project',
    title: 'SauceDemo — Playwright Test Automation',
    description:
      'An end-to-end Playwright and JavaScript test suite for critical e-commerce journeys on the SauceDemo application.',
    details: ['17 functional test cases', 'Page Object Model', 'GitHub Actions CI'],
    tags: ['Playwright', 'JavaScript', 'JSON locators'],
    href: 'https://github.com/prasikshya/Playwright-Automation-SauceDemo',
    featured: true,
  },
  {
    type: 'QA engineering project',
    title: 'ATFM — Airline operations validation',
    description:
      'Quality assurance work supporting an Air Traffic Flow Management project designed to streamline airline operations in Nepal.',
    details: ['Manual test design', 'Automation support', 'API validation'],
    tags: ['Playwright', 'Cucumber', 'Swagger'],
  },
  {
    type: 'Remote QA project',
    title: 'Prepr Labs — Quality delivery support',
    description:
      'A remote QA engagement involving automation support, test-case documentation, progress tracking, and reporting.',
    details: ['Test documentation', 'Automation workflows', 'Team collaboration'],
    tags: ['Playwright', 'Gherkin', 'GitHub'],
  },
];

const skills = [
  {
    title: 'Automation',
    items: ['Playwright', 'JavaScript', 'TypeScript', 'Cucumber', 'Gherkin'],
  },
  {
    title: 'Testing',
    items: ['Manual testing', 'Regression testing', 'Exploratory testing', 'API testing'],
  },
  {
    title: 'Tools',
    items: ['GitHub Actions', 'Postman', 'Swagger', 'Git', 'Chrome DevTools'],
  },
  {
    title: 'Practice',
    items: ['Page Object Model', 'Test design', 'Defect analysis', 'SDLC', 'BDD'],
  },
];

const toolkit = [
  { name: 'Playwright', detail: 'Browser automation', icon: TestTube2, color: '#2EAD33', surface: '#EDF8EB' },
  { name: 'Selenium', detail: 'Web testing', icon: SiSelenium, color: '#43B02A', surface: '#EFF8EB' },
  { name: 'Cucumber', detail: 'BDD workflows', icon: SiCucumber, color: '#23A55A', surface: '#EAF8EF' },
  { name: 'Postman', detail: 'API validation', icon: SiPostman, color: '#FF6C37', surface: '#FFF0EA' },
  { name: 'Swagger', detail: 'API documentation', icon: SiSwagger, color: '#68B82E', surface: '#F1FAE9' },
  { name: 'JMeter', detail: 'Performance testing', icon: SiApachejmeter, color: '#D22128', surface: '#FFF0F0' },
  { name: 'Excel', detail: 'Test data & reporting', icon: FileSpreadsheet, color: '#217346', surface: '#EAF6EE' },
  { name: 'Jira', detail: 'Issue tracking', icon: SiJira, color: '#0052CC', surface: '#EAF2FF' },
  { name: 'GitHub Actions', detail: 'CI workflows', icon: SiGithubactions, color: '#2088FF', surface: '#EAF4FF' },
  { name: 'Git', detail: 'Version control', icon: SiGit, color: '#F05032', surface: '#FFF0EC' },
  { name: 'JavaScript', detail: 'Test scripting', icon: SiJavascript, color: '#C89C00', surface: '#FFF9DC' },
  { name: 'TypeScript', detail: 'Typed automation', icon: SiTypescript, color: '#3178C6', surface: '#EAF4FF' },
  { name: 'Chrome DevTools', detail: 'Browser inspection', icon: SiGooglechrome, color: '#4285F4', surface: '#EDF4FF' },
];

const experience = [
  {
    period: 'Jul 2024 — Feb 2025',
    role: 'QA Engineer',
    company: 'Qaito Automation Pvt. Ltd.',
    description:
      'Developed and executed automated tests, created manual test cases, tracked defects, and applied BDD practices to user-focused software delivery.',
  },
  {
    period: 'Jan 2024 — Jun 2024',
    role: 'QA Intern',
    company: 'Kaaikaas Technologies',
    description:
      'Performed manual and automation testing, documented detailed cases, collaborated on defects, and built reusable testing scripts.',
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

function StatusChip({ variant = 'success', children }) {
  return (
    <span className={`status-chip status-chip--${variant}`}>
      <span className="status-dot" />
      {children}
    </span>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') ?? 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#07111d' : '#102a43',
    );
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-38% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="Prasikshya Baral home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true"><Check strokeWidth={3} /></span>
            <span><strong>Prasikshya</strong><small>QA Engineer</small></span>
          </a>

          <div className={`nav-area ${isMenuOpen ? 'nav-area--open' : ''}`}>
            <nav aria-label="Primary navigation">
              <ul className="nav-links">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      className={activeSection === item.href.slice(1) ? 'is-active' : ''}
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a className="button button--small button--quiet" href={`${baseUrl}QACV.pdf`} download>
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="nav-controls">
            <button
              className={`theme-toggle theme-toggle--${theme}`}
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={theme === 'dark'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Sun size={15} aria-hidden="true" />
              <Moon size={15} aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
            <button
              className="menu-toggle"
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow eyebrow--with-icon">
                <ShieldCheck size={16} aria-hidden="true" />
                Software QA Analyst & Automation Engineer
              </span>
              <h1>Building confidence into <span>every release.</span></h1>
              <p className="hero-lede">
                I help teams deliver reliable, user-friendly software through thoughtful testing, clear documentation,
                and maintainable automation.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  View my work <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button button--secondary" href={`${baseUrl}QACV.pdf`} download>
                  <Download size={18} aria-hidden="true" />
                  Download CV
                </a>
              </div>
              <div className="hero-trust" aria-label="Core quality assurance strengths">
                <span>Manual testing</span><span>Automation</span><span>API validation</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustrative quality assurance workspace">
              <div className="visual-glow" aria-hidden="true" />
              <article className="quality-board">
                <div className="board-top">
                  <div><span className="board-label">QA workflow</span><h2>Release quality review</h2></div>
                  <StatusChip>In progress</StatusChip>
                </div>
                <div className="review-summary">
                  <div className="summary-icon" aria-hidden="true"><FileCheck2 size={21} /></div>
                  <div><span>Review scope</span><strong>Checkout experience</strong></div>
                  <span className="review-date">Focused validation</span>
                </div>
                <div className="checklist" role="list" aria-label="Illustrative QA review checklist">
                  <div className="checklist-row" role="listitem">
                    <span className="check-icon check-icon--success"><Check size={15} /></span><span>Authentication</span><StatusChip>Validated</StatusChip>
                  </div>
                  <div className="checklist-row" role="listitem">
                    <span className="check-icon check-icon--success"><Check size={15} /></span><span>Product discovery</span><StatusChip>Validated</StatusChip>
                  </div>
                  <div className="checklist-row" role="listitem">
                    <span className="check-icon check-icon--warning"><Sparkles size={14} /></span><span>Checkout validation</span><StatusChip variant="warning">In review</StatusChip>
                  </div>
                  <div className="checklist-row" role="listitem">
                    <span className="check-icon check-icon--neutral"><Bug size={14} /></span><span>Error states</span><StatusChip variant="neutral">Tracked</StatusChip>
                  </div>
                </div>
                <div className="board-footer">
                  <div className="reviewer-stack" aria-hidden="true"><span>Q</span><span>A</span><span>✓</span></div>
                  <span>Illustrative QA workflow</span><ChevronRight size={18} aria-hidden="true" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Portfolio summary">
          <div className="container proof-grid">
            <div><BadgeCheck size={22} aria-hidden="true" /><span>Quality-first thinking</span></div>
            <div><Braces size={22} aria-hidden="true" /><span>Practical automation</span></div>
            <div><ClipboardCheck size={22} aria-hidden="true" /><span>Clear test documentation</span></div>
            <div><ShieldCheck size={22} aria-hidden="true" /><span>User-centred validation</span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="portrait-wrap">
              <div className="portrait-frame"><img src={`${baseUrl}images/prasikshya-baral.jpeg`} alt="Prasikshya Baral" /></div>
              <article className="approach-card">
                <span className="approach-icon"><CheckCircle2 size={18} /></span>
                <div><span>QA approach</span><strong>User journey first</strong></div>
              </article>
            </div>
            <div className="about-copy">
              <span className="eyebrow">About me</span>
              <h2>Quality is more than finding bugs.</h2>
              <p>
                I am a QA Engineer with hands-on experience in manual, automation, and API testing. I enjoy breaking
                complex flows into meaningful checks that protect the experience users depend on.
              </p>
              <p>
                My goal is to help teams discover risk early, communicate findings clearly, and make each release feel
                more dependable than the last.
              </p>
              <ul className="approach-list">
                <li><CheckCircle2 size={19} aria-hidden="true" /> Test the journey, not just the feature</li>
                <li><CheckCircle2 size={19} aria-hidden="true" /> Document findings so teams can act on them</li>
                <li><CheckCircle2 size={19} aria-hidden="true" /> Automate the checks worth protecting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <SectionHeading
              eyebrow="QA expertise"
              title="How I contribute to product quality"
              description="A practical balance of thoughtful manual testing and repeatable automation."
            />
            <div className="expertise-grid">
              {expertise.map(({ icon: Icon, title, description, label }) => (
                <article className="expertise-card" key={title}>
                  <span className="expertise-icon"><Icon size={24} /></span>
                  <h3>{title}</h3><p>{description}</p>
                  <span className="expertise-label">{label} <ArrowUpRight size={16} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Selected work"
              title="QA projects with purpose"
              description="Examples of how I apply test design, automation, and quality thinking to meaningful product flows."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`} key={project.title}>
                  <div className="project-card-top">
                    <span>{project.type}</span>{project.featured && <StatusChip>Published project</StatusChip>}
                  </div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <ul className="project-details">
                    {project.details.map((detail) => <li key={detail}><Check size={16} aria-hidden="true" /> {detail}</li>)}
                  </ul>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.href ? (
                    <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                      View project <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-link text-link--muted">Project experience <CheckCircle2 size={17} aria-hidden="true" /></span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section automation-section" id="automation">
          <div className="container automation-shell">
            <div className="automation-intro">
              <span className="eyebrow">Automation project</span>
              <h2>Reliable checks for the journeys that matter most.</h2>
              <p>
                SauceDemo is a functional end-to-end automation suite built to validate core e-commerce workflows with
                Playwright and JavaScript.
              </p>
              <div className="automation-stats" aria-label="SauceDemo automation suite highlights">
                <div><strong>17</strong><span>Functional test cases</span></div>
                <div><strong>CI</strong><span>GitHub Actions workflow</span></div>
                <div><strong>POM</strong><span>Reusable page objects</span></div>
              </div>
              <a className="button button--primary" href="https://github.com/prasikshya/Playwright-Automation-SauceDemo" target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" /> View repository
              </a>
            </div>

            <article className="automation-board" aria-label="SauceDemo test coverage overview">
              <div className="automation-board-head">
                <div><span className="board-label">SauceDemo automation suite</span><h3>Test coverage journey</h3></div>
                <span className="suite-badge"><CheckCircle2 size={15} /> E2E01</span>
              </div>
              <div className="journey-flow" aria-label="Login, product selection, cart, checkout, confirmation, logout">
                {['Login', 'Product selection', 'Cart', 'Checkout', 'Confirmation', 'Logout'].map((step, index) => (
                  <div className="journey-step" key={step}>
                    <span className="journey-index">0{index + 1}</span><strong>{step}</strong>
                    {index < 5 && <span className="journey-line" aria-hidden="true" />}
                  </div>
                ))}
              </div>
              <div className="automation-layers">
                <div><span className="layer-icon layer-icon--blue"><Code2 size={18} /></span><div><strong>Page objects</strong><span>Reusable actions</span></div></div>
                <div><span className="layer-icon layer-icon--purple"><Braces size={18} /></span><div><strong>JSON locators</strong><span>Centralised selectors</span></div></div>
                <div><span className="layer-icon layer-icon--amber"><FileCheck2 size={18} /></span><div><strong>Test data</strong><span>Negative scenarios</span></div></div>
                <div><span className="layer-icon layer-icon--green"><BadgeCheck size={18} /></span><div><strong>Test tags</strong><span>Smoke, negative, E2E</span></div></div>
              </div>
              <a className="automation-source-link" href="https://github.com/prasikshya/Playwright-Automation-SauceDemo" target="_blank" rel="noreferrer">
                Explore the source <ExternalLink size={16} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <SectionHeading
              eyebrow="My approach"
              title="A clear path to a confident release"
              description="A lightweight process that keeps testing connected to real user needs."
            />
            <ol className="process-grid">
              <li><span>01</span><h3>Understand</h3><p>Learn the feature, its intent, and the journey a user needs to complete.</p></li>
              <li><span>02</span><h3>Identify risk</h3><p>Map validations, edge cases, dependencies, and the places a flow can break.</p></li>
              <li><span>03</span><h3>Validate</h3><p>Test the experience manually and automate stable checks that need to stay protected.</p></li>
              <li><span>04</span><h3>Improve</h3><p>Share clear evidence, support resolution, and make future releases safer.</p></li>
            </ol>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container experience-grid">
            <div>
              <span className="eyebrow">Experience</span>
              <h2>Hands-on work across manual and automation testing.</h2>
              <p className="experience-lede">
                I have worked in QA roles that combine detail-oriented validation, automation support, and close
                collaboration with product and development teams.
              </p>
              <a className="button button--secondary" href={`${baseUrl}QACV.pdf`} download>
                <Download size={18} aria-hidden="true" /> View full CV
              </a>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="Tools & skills"
              title="The quality toolkit I work with"
              description="A practical set of testing methods and tools that support reliable software delivery."
            />
            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>

            <div className="toolkit" aria-label="QA and automation tools">
              <div className="toolkit-heading">
                <div>
                  <p>Hands-on tools</p>
                  <h3>Tools I use to investigate, validate, and automate.</h3>
                </div>
                <span>Hover to explore</span>
              </div>
              <div className="tool-grid">
                {toolkit.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <article
                      className="tool-card"
                      key={tool.name}
                      style={{ '--tool-color': tool.color, '--tool-surface': tool.surface }}
                    >
                      <span className="tool-card-icon" aria-hidden="true"><Icon size={25} /></span>
                      <span className="tool-card-copy"><strong>{tool.name}</strong><small>{tool.detail}</small></span>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div>
              <span className="eyebrow eyebrow--light">Get in touch</span>
              <h2>Let’s make the next release more reliable.</h2>
              <p>Open to conversations about QA, test automation, and quality-focused product teams.</p>
            </div>
            <div className="contact-actions">
              <a className="button button--white" href="mailto:prasikshya.222baral@gmail.com"><Mail size={18} aria-hidden="true" /> Email me</a>
              <div className="social-links" aria-label="Social profiles">
                <a href="https://www.linkedin.com/in/prasikshya/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} aria-hidden="true" /></a>
                <a href="https://github.com/prasikshya" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand brand--footer" href="#home">
            <span className="brand-mark" aria-hidden="true"><Check strokeWidth={3} /></span>
            <span><strong>Prasikshya Baral</strong><small>Software QA Engineer</small></span>
          </a>
          <p>Designed around clarity, care, and quality.</p>
          <span>© {new Date().getFullYear()} Prasikshya Baral</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
