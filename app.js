const App = {
  init() {
    this.loadCreatorMode();
    this.renderBudgetBar();
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

  renderBudgetBar() {
    const bar = document.getElementById('budget-bar');
    if (!bar) return;
    const b = TRIP.budgetBreakdown;
    const pct = Math.round((b.allInUSD / TRIP.meta.budget) * 100);
    const cls = pct > 95 ? 'over' : pct > 80 ? 'warn' : '';
    bar.innerHTML = `
      <span class="budget-label">Budget</span>
      <span class="budget-amount">$${b.allInUSD} / $${TRIP.meta.budget}</span>
      <div class="budget-track">
        <div class="budget-fill ${cls}" style="width: ${Math.min(pct, 100)}%"></div>
      </div>
    `;
  },

  renderActivityCard(activity) {
    const statusClass = this.getStatusClass(activity.id);
    const priceLabel = activity.price.amount === 0
      ? 'FREE'
      : `£${activity.price.amount} ${activity.price.per === 'both' ? 'for both' : 'each'}`;
    const priceClass = activity.price.amount === 0 ? 'free' : '';
    const cat = CATEGORY_LABELS[activity.category];

    return `
      <div class="card ${statusClass}" data-id="${activity.id}">
        <div class="card-media">
          <img src="${activity.image}" alt="${activity.title}" loading="lazy">
          <span class="badge"><span class="mi mi-xs">${cat.icon}</span> ${cat.label}</span>
          <span class="price-tag ${priceClass}">${priceLabel}</span>
        </div>
        <div class="card-body">
          <h3>${activity.title}</h3>
          <div class="location"><span class="mi mi-xs">location_on</span> ${activity.location}</div>
          <p class="description">${activity.description}</p>
          <div class="meta-row">
            <span><span class="mi mi-xs">schedule</span> ${activity.duration}</span>
            ${activity.price.note ? `<span>${activity.price.note}</span>` : ''}
          </div>
          ${activity.tips ? `<div class="tip">${activity.tips}</div>` : ''}
          <button class="video-toggle" onclick="App.toggleVideo(this)"><span class="mi mi-sm">play_circle</span> Watch Preview</button>
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/${activity.video}" allowfullscreen loading="lazy"></iframe>
          </div>
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
    console.log(`[CREATOR] ${status.toUpperCase()}: ${id}`);
  },

  toggleComment(id) {
    document.getElementById(`comment-${id}`).classList.toggle('open');
  },

  submitComment(id) {
    const input = document.querySelector(`#comment-${id} input`);
    if (input.value.trim()) {
      console.log(`[CREATOR] COMMENT on ${id}: ${input.value}`);
      input.value = '';
      document.getElementById(`comment-${id}`).classList.remove('open');
    }
  },

  getCityById(id) {
    return TRIP.cities.find(c => c.id === id);
  },

  getDayTotal(day) {
    const b = day.budget;
    return b.accommodation + b.food + b.transport + b.activities;
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
