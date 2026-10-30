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
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
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
    title: 'ATFM — Airline operations quality assurance',
    description:
      'Supported quality assurance for airline-operations workflows within an Air Traffic Flow Management platform. Produced use-case diagrams and test cases, automated key regression scenarios, validated API behaviour, and reported defects with clear reproduction evidence.',
    details: ['Use-case diagrams & test cases', 'Automated regression coverage', 'API validation & defect reporting'],
    tags: ['Use-case diagrams', 'Test case design', 'Automation', 'Defect reporting'],
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

const skillTagTones = {
  Playwright: { background: '#E7F8EC', border: '#C8ECD1', color: '#257A43' },
  Selenium: { background: '#F0F8E9', border: '#D9EBCA', color: '#4C842F' },
  Cucumber: { background: '#E8F8F0', border: '#C9EBD9', color: '#227852' },
  JavaScript: { background: '#FFF4D8', border: '#F4E1AA', color: '#9A6100' },
  TypeScript: { background: '#E8F1FF', border: '#C8DDF9', color: '#2567B8' },
  'Manual testing': { background: '#EAF4FF', border: '#CFE1F7', color: '#2D6EAD' },
  'API testing': { background: '#F0ECFF', border: '#DBD0FA', color: '#6C50B0' },
  'Regression testing': { background: '#ECF8ED', border: '#D0ECD2', color: '#397E4A' },
  'Performance testing': { background: '#FFF0E8', border: '#F8D6C4', color: '#B75F28' },
  'Test cases': { background: '#EEF4F8', border: '#D7E1EA', color: '#536F8B' },
  Traceability: { background: '#EEF1FF', border: '#D8DDF8', color: '#586FB0' },
  'Test reports': { background: '#F4EFFE', border: '#E2D7F7', color: '#7759AA' },
  'Defect reporting': { background: '#FFF0F2', border: '#F5D2D9', color: '#B6556D' },
  BDD: { background: '#EAF8F5', border: '#CBEAE2', color: '#247A6E' },
  Gherkin: { background: '#ECF8EF', border: '#D0ECD8', color: '#43875A' },
  'Git & GitHub': { background: '#F0F4F8', border: '#D9E1E8', color: '#53677A' },
  Jira: { background: '#EAF1FF', border: '#CDDCF9', color: '#316CD1' },
  Python: { background: '#F3F5DF', border: '#E0E6BE', color: '#6A771C' },
};

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
  const [isHeroProfileFlipped, setIsHeroProfileFlipped] = useState(false);

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

  const toggleHeroProfile = () => setIsHeroProfileFlipped((current) => !current);

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
        
            <span><strong>Prasikshya Baral</strong><small>Software QA Engineer</small></span>
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
              <span className="eyebrow">Hello, I’m Prasikshya Baral</span>
              <h1>Software QA Engineer for <span>reliable releases.</span></h1>
              <p className="hero-lede">
                I test web and mobile products through manual, API, and automation testing—helping teams find risk early and make each release more dependable.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  View my work <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="hero-contact-link" href="#contact">Get in touch <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
              <div className="hero-trust" aria-label="Core quality assurance strengths">
                <span><Search size={15} aria-hidden="true" /> Manual testing</span>
                <span><Network size={15} aria-hidden="true" /> API validation</span>
                <span><Bot size={15} aria-hidden="true" /> Automation checks</span>
              </div>
            </div>

            <div className="hero-visual">
              <button
                className={`hero-flip-card ${isHeroProfileFlipped ? 'is-flipped' : ''}`}
                type="button"
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') setIsHeroProfileFlipped(true);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse') setIsHeroProfileFlipped(false);
                }}
                onFocus={() => setIsHeroProfileFlipped(true)}
                onBlur={() => setIsHeroProfileFlipped(false)}
                onTouchStart={toggleHeroProfile}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleHeroProfile();
                  }
                }}
                aria-pressed={isHeroProfileFlipped}
                aria-label={isHeroProfileFlipped ? 'Show Prasikshya Baral photo' : 'Show About Prasikshya Baral'}
              >
                <span className="hero-flip-card-inner">
                  <span className="hero-card-face hero-card-face--front" aria-hidden={isHeroProfileFlipped}>
                    <img src="/portfolio.png" alt="" />
                    <span className="hero-photo-overlay">
                      <span className="hero-card-eyebrow">Prasikshya Baral</span>
                      <strong>Software QA Engineer</strong>
                      <span className="flip-hint">Touch or hover for About me <ArrowRight size={15} aria-hidden="true" /></span>
                    </span>
                  </span>
                  <span className="hero-card-face hero-card-face--back" aria-hidden={!isHeroProfileFlipped}>
                    <span className="hero-avatar"><img src="/portfolio.png" alt="" /></span>
                    <span className="hero-card-eyebrow">About me</span>
                    <strong>Quality is more than finding bugs.</strong>
                    <span className="hero-card-copy">2+ years testing web and mobile products through manual, API, and automation testing—with clear cases, evidence, and defect reporting.</span>
                    <span className="hero-card-tags"><span>Manual</span><span>API</span><span>Automation</span></span>
              
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="Tools & skills"
              title="A practical QA toolkit, used with purpose."
              description="I use the right level of testing and documentation for the risk—not tools for the sake of tools."
            />

            <div className="skills-showcase">
              <div className="skills-matrix" aria-label="QA skills by practice area">
                {skills.map((group, index) => (
                  <article className={`skill-row ${group.title === 'Testing' ? 'skill-row--featured' : ''}`} key={group.title}>
                    <span className="skill-row-index">0{index + 1}</span>
                    <div>
                      <h3>{group.title}</h3>
                      <div className="skill-tags">
                        {group.items.map((item) => {
                          const tone = skillTagTones[item];
                          return (
                            <span
                              key={item}
                              style={tone ? {
                                '--tag-background': tone.background,
                                '--tag-border': tone.border,
                                '--tag-color': tone.color,
                              } : undefined}
                            >
                              {item}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="toolkit" aria-label="QA and automation tools">
              <div className="toolkit-heading">
                <div>
                  <p>Core tools</p>
                  <h3>Tools I use across testing and delivery.</h3>
                </div>
                <span className="toolkit-count">8 core tools</span>
              </div>
              <ul className="tool-list">
                {toolkit.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <li className="tool-item" key={tool.name} style={{ '--tool-color': tool.color, '--tool-surface': tool.surface }}>
                      <span className="tool-item-icon" aria-hidden="true">
                        <Icon size={23} />
                      </span>
                      <span className="tool-item-copy"><strong>{tool.name}</strong><small>{tool.detail}</small></span>
                      <span className="tool-item-link" aria-hidden="true"><ExternalLink size={14} /></span>
                    </li>
                  );
                })}
              </ul>
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
        <div className="container footer-main">
          <div className="footer-intro">
            <a className="brand brand--footer" href="#home">
           
              <span><strong>Prasikshya Baral</strong><small>Software QA Engineer</small></span>
            </a>
            <p>Thoughtful QA for dependable digital products.</p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <a href="#skills"><Braces size={14} aria-hidden="true" /> Skills</a>
            <a href="#projects"><FileText size={14} aria-hidden="true" /> Projects</a>
            <a href="#experience"><Network size={14} aria-hidden="true" /> Experience</a>
          </div>
          <div className="footer-connect">
            <span>Connect</span>
            <a className="footer-email" href={`mailto:${emailAddress}`}><Mail size={14} aria-hidden="true" /> {emailAddress}</a>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/prasikshya/" target="_blank" rel="noreferrer"><Linkedin size={14} aria-hidden="true" /> LinkedIn</a>
              <a href="https://github.com/prasikshya" target="_blank" rel="noreferrer"><Github size={14} aria-hidden="true" /> GitHub</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Prasikshya Baral</p>
          <span className="footer-signoff"> Built with clarity and care.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
