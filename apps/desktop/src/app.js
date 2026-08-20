const root = document.querySelector('#root');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const state = {
  screen: 'splash',
  reducedMotion: reducedMotionQuery.matches,
};

reducedMotionQuery.addEventListener('change', (event) => {
  state.reducedMotion = event.matches;
  document.documentElement.dataset.reducedMotion = String(event.matches);
});

document.documentElement.dataset.reducedMotion = String(state.reducedMotion);

function logo(compact = false) {
  return `
    <div class="logo-lockup" aria-label="PrintAI">
      <div class="logo-mark" aria-hidden="true">▱</div>
      ${compact ? '' : '<span>PrintAI</span>'}
    </div>
  `;
}

function workflowPill() {
  return `
    <ol class="workflow-pill" aria-label="PrintAI workflow">
      ${['Image', 'Understand', 'Generate', 'Preview', 'Prepare', 'Print'].map((step) => `<li>${step}</li>`).join('')}
    </ol>
  `;
}

function transitionTo(screen) {
  state.screen = screen;
  render();
}

function render() {
  if (!root) {
    throw new Error('PrintAI root element is missing.');
  }

  root.innerHTML = `
    <main class="app-shell">
      <div class="aurora aurora-one"></div>
      <div class="aurora aurora-two"></div>
      <section class="screen" data-screen="${state.screen}">
        ${screenMarkup()}
      </section>
    </main>
  `;

  attachHandlers();
}

function screenMarkup() {
  if (state.screen === 'splash') {
    return `
      <div class="center-stage splash-card">
        <div class="splash-logo-motion">${logo()}</div>
        <p class="muted">Preparing your workspace...</p>
        <div class="progress-line" aria-label="Loading PrintAI"><span></span></div>
      </div>
    `;
  }

  if (state.screen === 'auth') {
    return `
      <div class="auth-layout">
        <section class="hero-panel glass-card">
          ${logo()}
          <h1>From image to printed object.</h1>
          <p>PrintAI turns a simple picture into a guided 3D printing workflow without exposing slicer jargon or engineering settings.</p>
          ${workflowPill()}
        </section>
        <section class="auth-panel glass-card" aria-labelledby="auth-title">
          <p class="eyebrow">Welcome</p>
          <h2 id="auth-title">Start with a free PrintAI account</h2>
          <p class="muted">Production authentication will be enforced by the backend. This foundation uses a clearly marked free development session.</p>
          <button class="primary-button" data-action="continue-free">Continue as Free User <span aria-hidden="true">→</span></button>
          <button class="secondary-button" disabled title="Coming soon">Sign in with email — Coming Soon</button>
        </section>
      </div>
    `;
  }

  if (state.screen === 'home') {
    return `
      <div class="workspace">
        <header class="topbar">
          ${logo(true)}
          <nav aria-label="Desktop menu">
            <span>File</span><span>Edit</span><span>View</span><span>Window</span><span>Settings</span>
          </nav>
        </header>
        <section class="home-hero glass-card">
          <p class="eyebrow">PrintAI Workspace</p>
          <h1>What do you want to make?</h1>
          <div class="action-row">
            <button class="primary-button" data-action="create-project">＋ Create Project</button>
            <button class="secondary-button" disabled title="Project file opening arrives with the .printai phase">▣ Open Project — Coming Soon</button>
          </div>
        </section>
        <section class="recent-grid" aria-label="Recent projects">
          <article class="empty-card glass-card">
            <span class="card-icon" aria-hidden="true">✦</span>
            <h3>Your future prints will appear here</h3>
            <p class="muted">Recent project cards will show thumbnails, print status, printer, and model readiness.</p>
          </article>
        </section>
      </div>
    `;
  }

  return `
    <div class="workspace">
      <header class="topbar">${logo(true)}<span class="muted">Create Project</span></header>
      <section class="project-shell">
        <div class="upload-card glass-card">
          <span class="upload-glyph" aria-hidden="true">＋</span>
          <h1>Drag & Drop an image here</h1>
          <p class="muted">Choose one clear image to begin. Clipboard paste and multi-view uploads are planned for later phases.</p>
          <button class="primary-button" disabled title="Image file picker arrives in Phase 2">Choose Image — Coming Soon</button>
        </div>
        <aside class="decision-stack" aria-label="Upcoming project decisions">
          ${decisionCard('Printer', 'Start with a beginner-friendly printer profile.')}
          ${decisionCard('Dimensions', 'Keep proportions locked and warn against build-volume limits.')}
          ${decisionCard('AI generation', 'Provider abstraction is planned before real model generation.')}
        </aside>
      </section>
    </div>
  `;
}

function decisionCard(title, text) {
  return `<article class="decision-card glass-card"><span class="card-icon" aria-hidden="true">◇</span><div><h3>${title}</h3><p>${text}</p></div></article>`;
}

function attachHandlers() {
  document.querySelector('[data-action="continue-free"]')?.addEventListener('click', () => transitionTo('home'));
  document.querySelector('[data-action="create-project"]')?.addEventListener('click', () => transitionTo('create-project'));
}

render();
window.setTimeout(() => transitionTo('auth'), state.reducedMotion ? 100 : 900);
