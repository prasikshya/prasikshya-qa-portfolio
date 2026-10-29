'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import {
  ArrowRight,
  Bot,
  Braces,
  Code2,
  Copy,
  ExternalLink,
  FileText,
  FileSpreadsheet,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Search,
  Moon,
  Sun,
  TestTube2,
  X,
} from 'lucide-react';
import {
  SiApachejmeter,
  SiCucumber,
  SiJira,
  SiPostman,
  SiSelenium,
  SiSwagger,
} from 'react-icons/si';

const emailAddress = 'prasikshya.222baral@gmail.com';

function subscribeToTheme(callback) {
  window.addEventListener('storage', callback);
  window.addEventListener('portfolio-theme-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('portfolio-theme-change', callback);
  };
}

function getThemeSnapshot() {
  return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
}

function getServerThemeSnapshot() {
  return 'dark';
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const expertise = [
  {
    icon: Search,
    title: 'Manual & exploratory testing',
    description:
      'I test real user journeys, edge cases, error states, and release-critical behaviour beyond the happy path.',
    artifacts: ['Test scenarios', 'Defect reports'],
  },
  {
    icon: FileText,
    title: 'Test planning, traceability & reporting',
    description:
      'I turn requirements into test cases and traceability matrices, then document execution through test and closure reports.',
    artifacts: ['Traceability matrices', 'Detailed test reports', 'Test closure reports'],
  },
  {
    icon: Network,
    title: 'Flow, decision & API validation',
    description:
      'I map user flows with clear diagrams, use decision matrices for complex rules, and validate UI, API, and integration behaviour.',
    artifacts: ['Flow diagrams', 'Decision matrices', 'API evidence'],
  },
  {
    icon: Bot,
    title: 'Test automation',
    description:
      'I build maintainable automated checks for stable, high-value workflows.',
    artifacts: ['Regression suite', 'Reusable page objects', 'CI-ready checks'],
  },
];

const projects = [
  {
    type: 'Mobile QA project',
    title: 'DoNIDCR — Mobile app validation',
    description:
      'Manual and API testing for authentication and event-registration journeys on the mobile version of Nepal’s ID and civil registry platform.',
    details: ['Authentication validation', 'Event-registration flow', 'API & manual testing'],
    tags: ['Mobile QA', 'API Testing', 'Manual Testing'],
  },
  {
    type: 'QA engineering project',
    title: 'ATFM — Airline operations validation',
    description:
      'Testing support for airline management modules in an Air Traffic Flow Management project, including manual validation, Swagger API testing, and defect verification.',
    details: ['Airline module test cases', 'Swagger API testing', 'Defect verification'],
    tags: ['Playwright', 'Cucumber', 'Swagger'],
  },
];

const skills = [
  {
    title: 'Automation',
    items: ['Playwright', 'Selenium', 'Cucumber', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Testing',
    items: ['Manual testing', 'API testing', 'Regression testing', 'Performance testing'],
  },
  {
    title: 'Documentation',
    items: ['Test cases', 'Traceability', 'Test reports', 'Defect reporting'],
  },
  {
    title: 'Practice',
    items: ['BDD', 'Gherkin', 'Git & GitHub', 'Jira', 'Python'],
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
  { name: 'Jira', detail: 'Work tracking', icon: SiJira, color: '#1868DB', surface: '#EAF2FF' },
];

const experience = [
  {
    period: 'Mar 2026 — Present',
    role: 'Software QA Engineer',
    company: 'Fusionexis',
    current: true,
  },
  {
    period: 'Jul 2025 — Jan 2026',
    role: 'Junior QA Engineer & QA Tutor',
    company: 'Mindrisers Technologies',
    description:
      'Performed Swagger API validation and manual testing on real-time projects, identified defects, and delivered QA training in test design, bug lifecycle, API testing, GitHub, Python, and Selenium basics.',
  },
  {
    period: 'Jul 2024 — Feb 2025',
    role: 'QA Engineer',
    company: 'Qaito Automation Pvt. Ltd.',
    description:
      'Developed and executed Playwright and TypeScript tests, created manual test cases, tracked progress in GitHub Board, and applied BDD practices to user-focused software delivery.',
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
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

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('portfolio-theme', nextTheme);
    window.dispatchEvent(new Event('portfolio-theme-change'));
  };

  const copyEmail = async () => {
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
        copied = true;
      }
    } catch {
      // Fall back for browsers that do not permit the modern Clipboard API.
    }

    if (!copied) {
      const textArea = document.createElement('textarea');
      textArea.value = emailAddress;
      textArea.setAttribute('readonly', '');
      textArea.style.opacity = '0';
      textArea.style.position = 'fixed';
      document.body.append(textArea);
      textArea.select();
      copied = document.execCommand('copy');
      textArea.remove();
    }

    if (copied) {
      setIsEmailCopied(true);
      window.setTimeout(() => setIsEmailCopied(false), 1800);
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="Prasikshya Baral home" onClick={closeMenu}>
            <span><strong>Prasikshya</strong><small>Software QA Engineer</small></span>
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
          </div>

          <div className="nav-controls">
            <button
              className={`theme-toggle theme-toggle--${theme}`}
              type="button"
              onClick={toggleTheme}
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
              <span className="eyebrow">Software QA Engineer</span>
              <h1>Building confidence into <span>every release.</span></h1>
              <p className="hero-lede">
                Helping teams find risk early and ship web and mobile products with confidence.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  View my work <ArrowRight size={18} aria-hidden="true" />
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
                  <div><span className="board-label">QA process</span><h2>How I review a feature</h2></div>
                  <span className="board-example">Example</span>
                </div>
                <div className="review-summary">
                  <div className="summary-icon" aria-hidden="true"><FileText size={21} /></div>
                  <div><span>Example feature</span><strong>Checkout flow</strong></div>
                </div>
                <div className="checklist" role="list" aria-label="Example feature QA process">
                  <div className="checklist-row" role="listitem">
                    <span className="step-number">01</span><span>Understand the requirement</span><span className="workflow-label">Scope</span>
                  </div>
                  <div className="checklist-row" role="listitem">
                    <span className="step-number">02</span><span>Test key user paths</span><span className="workflow-label">Testing</span>
                  </div>
                  <div className="checklist-row" role="listitem">
                    <span className="step-number">03</span><span>Report findings clearly</span><span className="workflow-label">Results</span>
                  </div>
                </div>
                <p className="board-note">A simple, repeatable process for every feature.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="portrait-wrap">
              <div className="portrait-frame"><img src="/portfolio.png" alt="Prasikshya Baral" /></div>
              <article className="approach-card">
                <span className="approach-icon"><Network size={18} /></span>
                <div><span>QA approach</span><strong>User journey first</strong></div>
              </article>
            </div>
            <div className="about-copy">
              <div className="about-copy-meta">
                <span className="eyebrow">About me</span>
                <span className="experience-badge">2+ Years Experience</span>
              </div>
              <h2>Quality is more than finding bugs.</h2>
              <p>
                Software QA Engineer with 2+ years of experience testing web and mobile applications through manual,
                automation, and API testing. Skilled in creating test scenarios, maintaining requirement traceability
                matrices, preparing UML and flow diagrams, producing test and closure reports, and documenting defects
                clearly to support reliable, user-friendly releases.
              </p>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <SectionHeading
              eyebrow="QA expertise"
              title="How I contribute to product quality"
              description="From requirements and traceability to clear release evidence, I keep quality work visible and actionable."
            />
            <div className="expertise-grid">
              {expertise.map(({ icon: Icon, title, description, artifacts }) => (
                <article className="expertise-card" key={title}>
                  <span className="expertise-icon"><Icon size={24} /></span>
                  <h3>{title}</h3><p>{description}</p>
                  <div className="expertise-artifacts">
                    <span>Typical outputs</span>
                    <ul>
                      {artifacts.map((artifact) => <li key={artifact}>{artifact}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Selected work"
              title="Product QA work"
              description="Selected work across mobile and platform testing, focused on core user journeys and API behaviour."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <ul className="project-details">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section automation-section" id="automation">
          <div className="container automation-shell">
            <div className="automation-intro">
              <span className="eyebrow">Featured case study</span>
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
                <span className="suite-badge"><TestTube2 size={15} /> E2E suite</span>
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
                <div><span className="layer-icon layer-icon--amber"><FileText size={18} /></span><div><strong>Test data</strong><span>Negative scenarios</span></div></div>
                <div><span className="layer-icon layer-icon--green"><Bot size={18} /></span><div><strong>Test tags</strong><span>Smoke, negative, E2E</span></div></div>
              </div>
              <a className="automation-source-link" href="https://github.com/prasikshya/Playwright-Automation-SauceDemo" target="_blank" rel="noreferrer">
                Explore the source <ExternalLink size={16} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container experience-grid">
            <div>
              <span className="eyebrow">Experience</span>
              <h2>Hands-on work across manual and automation testing.</h2>
              <p className="experience-lede">
                A progression from QA intern to Software QA Engineer across product, API, and automation testing.
              </p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.role}</h3><h4>{item.company}</h4>
                  {item.current && <span className="current-role">Current role</span>}
                  {item.description && <p>{item.description}</p>}
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
                  <p>Core tools</p>
                  <h3>A focused QA toolkit.</h3>
                </div>
                <span>8 core tools</span>
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
            <div className="contact-copy">
              <div className="contact-label">
                <span className="eyebrow eyebrow--light">Get in touch</span>
                <span className="contact-availability"><span aria-hidden="true" /> Open to QA conversations</span>
              </div>
              <h2>Good products deserve a careful second look.</h2>
              <p>
                For new features, release testing, or practical automation, feel free to reach out.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button--white" href={`mailto:${emailAddress}`}><Mail size={18} aria-hidden="true" /> Email me</a>
              <button
                className={`button button--copy ${isEmailCopied ? 'is-copied' : ''}`}
                type="button"
                onClick={copyEmail}
                aria-label={isEmailCopied ? 'Email address copied' : 'Copy email address'}
                aria-live="polite"
              >
                <Copy size={17} aria-hidden="true" />
                {isEmailCopied ? 'Copied' : 'Copy email'}
              </button>
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
