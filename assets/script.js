'use strict';

// Tutto il portfolio funziona in locale: nessun server, nessuna API, nessuna libreria.
(() => {
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const contacts = window.PORTFOLIO_CONTACTS || {};
  const projectMap = new Map(projects.map(project => [project.id, project]));
  const grid = document.getElementById('mission-grid');
  const dialog = document.getElementById('mission-dialog');
  const dialogClose = document.getElementById('dialog-close');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Schede progetto: contenuti modificabili in projects.js, testo inserito in sicurezza.
  function buildCard(project, index) {
    const card = document.createElement('article');
    card.className = 'mission-card reveal';
    card.dataset.category = project.category;
    card.dataset.project = project.id;

    const art = /^[a-z-]+$/.test(project.art) ? project.art : 'workflow';
    card.innerHTML = `
      <div class="mission-art art-${art}" aria-hidden="true">
        <span class="art-cross art-cross-tl">+</span><span class="art-cross art-cross-br">+</span>
        <div class="art-panel">
          <div class="art-topline"><span class="art-index"></span><span class="art-dots">● ● ●</span></div>
          <div class="art-graphic"><div class="art-shape a"></div><div class="art-shape b"></div><div class="art-shape c"></div></div>
          <div class="art-lines"><i></i><i></i><i></i></div>
        </div>
        <span class="art-stamp"></span>
      </div>
      <div class="mission-body">
        <div class="mission-eyebrow"><span class="mission-number"></span><span class="status-dot">● <span>CASE STUDY</span></span></div>
        <h3></h3>
        <p class="mission-subtitle"></p>
        <p class="mission-description"></p>
        <div class="mission-tech"></div>
        <button class="mission-open" type="button">OPEN MISSION FILE <span aria-hidden="true">↗</span></button>
      </div>`;
    const missionNumber = String(index + 1).padStart(2, '0');
    card.querySelector('.art-index').textContent = `SYS / ${missionNumber}`;
    card.querySelector('.art-stamp').textContent = `FILE_${missionNumber} // READY`;
    card.querySelector('.mission-number').textContent = `#${missionNumber} / ${project.category_label}`;
    card.querySelector('h3').textContent = project.title;
    card.querySelector('.mission-subtitle').textContent = project.subtitle;
    card.querySelector('.mission-description').textContent = project.description;
    const tags = card.querySelector('.mission-tech');
    (project.tech || []).slice(0, 3).forEach(technology => {
      const tag = document.createElement('span');
      tag.className = 'tech-chip';
      tag.textContent = technology;
      tags.append(tag);
    });
    const open = card.querySelector('.mission-open');
    open.dataset.open = project.id;
    open.setAttribute('aria-label', `Apri il case study ${project.title}`);
    open.addEventListener('click', () => openMission(project.id));
    return card;
  }

  if (grid) {
    grid.replaceChildren(...projects.map(buildCard));
  }
  const count = document.getElementById('visible-count');
  const countTotal = document.getElementById('total-count');
  const stats = document.getElementById('total-missions');
  if (countTotal) countTotal.textContent = String(projects.length).padStart(2, '0');
  if (stats?.firstChild) stats.firstChild.textContent = String(projects.length).padStart(2, '0');
  if (count) count.textContent = String(projects.length).padStart(2, '0');

  document.querySelectorAll('[data-filter]').forEach(filter => {
    filter.addEventListener('click', () => {
      const chosen = filter.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(item => {
        const active = item === filter;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      let visible = 0;
      grid?.querySelectorAll('.mission-card').forEach(card => {
        const show = chosen === 'all' || card.dataset.category === chosen;
        card.hidden = !show;
        if (show) visible++;
      });
      if (count) count.textContent = String(visible).padStart(2, '0');
    });
  });

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = value || '';
  }
  function openMission(projectId) {
    const project = projectMap.get(projectId);
    if (!project || !dialog || typeof dialog.showModal !== 'function') return;
    setText('dialog-category', `${project.category_label} // MISSION FILE`);
    setText('dialog-title', project.title);
    setText('dialog-subtitle', project.subtitle);
    setText('dialog-description', project.details);
    const list = document.getElementById('dialog-list');
    if (list) list.replaceChildren(...(project.contributions || []).map(value => {
      const li = document.createElement('li');
      li.textContent = value;
      return li;
    }));
    const tags = document.getElementById('dialog-tech');
    if (tags) tags.replaceChildren(...(project.tech || []).map(value => {
      const span = document.createElement('span');
      span.className = 'tech-chip';
      span.textContent = value;
      return span;
    }));
    const repo = document.getElementById('dialog-repo');
    if (repo) {
      repo.replaceChildren();
      if (project.repository && /^https:\/\//i.test(project.repository)) {
        const link = document.createElement('a');
        link.href = project.repository;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'VIEW PUBLIC REPOSITORY ↗';
        repo.append(link);
      } else {
        repo.textContent = project.category === 'mobile'
          ? 'Progetto personale · Nessun repository pubblico collegato.'
          : 'Case study professionale · Codice sorgente non pubblico.';
      }
    }
    dialog.showModal();
    dialogClose?.focus();
  }
  dialogClose?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  // Contatti facoltativi, senza URL inventati.
  const links = document.querySelector('.contact-links-wrap');
  if (links) {
    const menu = document.createElement('div');
    menu.className = 'contact-links';
    function addLink(label, href) {
      const link = document.createElement('a');
      link.className = 'social-link';
      link.href = href;
      if (href.startsWith('https://')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      link.append(document.createTextNode(label + ' '));
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      link.append(arrow);
      menu.append(link);
    }
    const username = String(contacts.github_username || '').trim();
    if (/^[a-zA-Z0-9-]{1,39}$/.test(username)) addLink('GITHUB', `https://github.com/${username}`);
    const email = String(contacts.email || '').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) addLink('EMAIL', `mailto:${email}`);
    const linkedin = String(contacts.linkedin_url || '').trim();
    if (/^https:\/\/(www\.)?linkedin\.com\//i.test(linkedin)) addLink('LINKEDIN', linkedin);
    if (menu.children.length) links.replaceChildren(menu);
  }

  // Mostra le sezioni allo scroll; in assenza di IntersectionObserver rimangono visibili.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('js-animations');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.09, rootMargin: '0px 0px 35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  }

  // Luce del cursore: disabilitata sui dispositivi touch e con riduzione movimento.
  const halo = document.querySelector('.cursor-halo');
  if (halo && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    let scheduled = false, x = -999, y = -999;
    window.addEventListener('pointermove', event => {
      x = event.clientX; y = event.clientY;
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        halo.style.transform = `translate3d(${x - 180}px, ${y - 180}px, 0)`;
        scheduled = false;
      });
    }, { passive: true });
  }

  // Easter egg: ↑ ↑ ↓ ↓ ← → ← → B A
  const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let progress = 0;
  const toast = document.getElementById('secret-toast');
  window.addEventListener('keydown', event => {
    if (dialog?.open || ['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) return;
    if (event.key === sequence[progress]) {
      progress++;
      if (progress === sequence.length) {
        progress = 0;
        if (toast) {
          toast.textContent = '✦ SECRET ACHIEVEMENT UNLOCKED: NEVER STOP BUILDING.';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3500);
        }
      }
    } else progress = event.key === sequence[0] ? 1 : 0;
  });
})();
