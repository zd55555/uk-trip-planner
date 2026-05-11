const CITY_NAMES = {
  london: "London",
  dover: "Dover",
  oxford: "Oxford",
  liverpool: "Liverpool",
  alnwick: "Alnwick",
  edinburgh: "Edinburgh"
};

const App = {
  init() {
    this.loadCreatorMode();
  },

  isCreatorMode() {
    return localStorage.getItem('uk-trip-creator') === 'true';
  },

  toggleCreatorMode() {
    const current = this.isCreatorMode();
    localStorage.setItem('uk-trip-creator', !current);
    this.loadCreatorMode();
  },

  loadCreatorMode() {
    if (this.isCreatorMode()) {
      document.body.classList.add('creator-mode');
    } else {
      document.body.classList.remove('creator-mode');
    }
  },

  getStatusClass(id) {
    const statuses = JSON.parse(localStorage.getItem('uk-trip-statuses') || '{}');
    return statuses[id] || '';
  },

  setStatus(id, status) {
    const statuses = JSON.parse(localStorage.getItem('uk-trip-statuses') || '{}');
    statuses[id] = status;
    localStorage.setItem('uk-trip-statuses', JSON.stringify(statuses));
  },

  renderBudgetBar(pathId) {
    const bar = document.getElementById('budget-bar');
    if (!bar) return;
    const pid = pathId || getCurrentPath();
    const path = TRIP.paths.find(p => p.id === pid);
    if (!path) return;
    const spent = path.budget;
    const cap = TRIP.meta.budget;
    const pct = Math.round((spent / cap) * 100);
    const cls = pct > 100 ? 'over' : pct > 90 ? 'warn' : '';
    bar.innerHTML = `
      <span class="budget-label">Path ${pid}</span>
      <span class="budget-amount">$${spent} / $${cap}</span>
      <div class="budget-track">
        <div class="budget-fill ${cls}" style="width: ${Math.min(pct, 100)}%"></div>
      </div>
    `;
  },

  renderActivityCard(activity) {
    const statusClass = this.getStatusClass(activity.id);
    const amt = activity.price.amount;
    const cur = activity.price.currency;
    const priceLabel = amt === 0
      ? 'FREE'
      : `${cur === 'USD' ? '$' : '£'}${amt} ${activity.price.per === 'both' ? 'for both' : 'each'}`;
    const priceClass = amt === 0 ? 'free' : '';
    const cat = CATEGORY_LABELS[activity.category];
    const optionalBadge = activity.optional ? '<span class="optional-badge">Optional</span>' : '';
    const urgentBadge = activity.urgent ? '<span class="urgent-badge">Book now</span>' : '';
    const videoBtn = activity.video
      ? `<button class="video-toggle" onclick="App.toggleVideo(this)"><span class="mi mi-sm">play_circle</span> Watch Preview</button>
         <div class="video-container">
           <iframe src="https://www.youtube.com/embed/${activity.video}" allowfullscreen loading="lazy"></iframe>
         </div>`
      : '';

    return `
      <div class="card ${statusClass}" data-id="${activity.id}">
        <div class="card-media">
          <img src="${activity.image}" alt="${activity.title}" loading="lazy">
          <span class="badge"><span class="mi mi-xs">${cat.icon}</span> ${cat.label}</span>
          <span class="price-tag ${priceClass}">${priceLabel}</span>
          ${urgentBadge}
        </div>
        <div class="card-body">
          <h3>${activity.title} ${optionalBadge}</h3>
          <div class="location"><span class="mi mi-xs">location_on</span> ${activity.location}</div>
          <p class="description">${activity.description}</p>
          <div class="meta-row">
            <span><span class="mi mi-xs">schedule</span> ${activity.duration}</span>
            ${activity.price.note ? `<span>${activity.price.note}</span>` : ''}
          </div>
          ${activity.tips ? `<div class="tip">${activity.tips}</div>` : ''}
          ${videoBtn}
          <div class="actions">
            <button class="btn-approve" onclick="App.handleAction('${activity.id}', 'approved')"><span class="mi mi-sm">check_circle</span> Yes</button>
            <button class="btn-reject" onclick="App.handleAction('${activity.id}', 'rejected')"><span class="mi mi-sm">cancel</span> Nah</button>
            <button class="btn-comment" onclick="App.toggleComment('${activity.id}')"><span class="mi mi-sm">chat_bubble</span></button>
          </div>
          <div class="comment-box" id="comment-${activity.id}">
            <input type="text" placeholder="What do you think?">
            <button onclick="App.submitComment('${activity.id}')">Send</button>
          </div>
        </div>
      </div>
    `;
  },

  toggleVideo(btn) {
    const container = btn.nextElementSibling;
    container.classList.toggle('open');
    const isOpen = container.classList.contains('open');
    btn.innerHTML = isOpen
      ? '<span class="mi mi-sm">stop_circle</span> Hide Preview'
      : '<span class="mi mi-sm">play_circle</span> Watch Preview';
  },

  handleAction(id, status) {
    const card = document.querySelector(`[data-id="${id}"]`);
    card.className = `card ${status}`;
    this.setStatus(id, status);
  },

  toggleComment(id) {
    document.getElementById(`comment-${id}`).classList.toggle('open');
  },

  submitComment(id) {
    const input = document.querySelector(`#comment-${id} input`);
    if (input.value.trim()) {
      console.log(`[COMMENT] ${id}: ${input.value}`);
      input.value = '';
      document.getElementById(`comment-${id}`).classList.remove('open');
    }
  }
};
