
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const programNames = {'career-advantage-program': 'Career Advantage Program', 'strategic-business-thinking-program': 'Strategic Business Thinking Program', 'ai-advantage-for-professionals': 'AI Advantage for Professionals', 'workplace-leadership-influence-program': 'Workplace Leadership & Influence Program', 'personal-productivity-execution-mastery': 'Personal Productivity & Execution Mastery', 'executive-thinking-leadership-readiness': 'Executive Thinking & Leadership Readiness', 'software-quality-assurance-training': 'Software Quality Assurance Training', 'istqb-ctfl-exam-prep': 'ISTQB CTFL Exam Prep'};
const params = new URLSearchParams(window.location.search);
const selectedProgram = params.get('program');
if (selectedProgram) {
  document.querySelectorAll('select[name="program"]').forEach((select) => {
    if ([...select.options].some(option => option.value === selectedProgram)) {
      select.value = selectedProgram;
    }
  });
}
const selectedSupport = params.get('support') || params.get('service');
if (selectedSupport) {
  document.querySelectorAll('select[name="support_needed"]').forEach((select) => {
    if ([...select.options].some(option => option.value === selectedSupport)) {
      select.value = selectedSupport;
    }
  });
}

// Load the AJAX Form Handler asynchronously
const formScript = document.createElement("script");
formScript.src = "js/main.js";
document.body.appendChild(formScript);

// Responsive navigation polish: close mobile menu after selecting a link
// and after clicking outside the navigation shell.
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 980px)').matches && mainNav && navToggle) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('click', (event) => {
  const navShell = document.querySelector('.nav-shell');
  if (!navShell || !mainNav || !navToggle) return;
  if (window.matchMedia('(max-width: 980px)').matches && mainNav.classList.contains('open') && !navShell.contains(event.target)) {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('resize', () => {
  if (!mainNav || !navToggle) return;
  if (!window.matchMedia('(max-width: 980px)').matches) {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
