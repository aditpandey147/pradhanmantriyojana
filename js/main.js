
    // ------------------ Data Layer ------------------
    const STORAGE_KEY = 'gov_schemes_v1';

    const seedSchemes = [
      {
        id: cryptoRandomId(),
        name: 'Pradhan Mantri Jan Arogya Yojana (PM-JAY) — Ayushman Bharat',
        type: 'Central',
        category: 'Healthcare',
        shortDesc: 'Health insurance cover of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.',
        longDesc: 'PM-JAY provides cashless health coverage at empanelled hospitals for poor and vulnerable families. It covers nearly all secondary and many tertiary procedures with pre- and post-hospitalization expenses.',
        eligibility: ['Identified poor & vulnerable families as per SECC/other criteria', 'No cap on family size or age', 'Covers most pre-existing diseases'],
        benefits: ['₹5 lakh per family per year', 'Cashless & paperless treatment', 'Pan-India portability'],
        applyLink: 'https://pmjay.gov.in',
        imageUrl: 'https://images.unsplash.com/photo-1580281658627-766b2e9e8a3f?q=80&w=1400&auto=format&fit=crop',
        active: true,
        lastUpdated: new Date().toISOString()
      },
      {
        id: cryptoRandomId(),
        name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
        type: 'Central',
        category: 'Agriculture',
        shortDesc: 'Income support of ₹6,000 per year to farmer families, payable in three equal installments.',
        longDesc: 'PM-KISAN provides direct income support to small and marginal farmer families to supplement their financial needs for procuring inputs for crop health and appropriate yields.',
        eligibility: ['All landholding farmer families, subject to exclusions', 'Institutional landholders excluded'],
        benefits: ['₹2,000 every four months', 'Direct benefit transfer (DBT) to bank account'],
        applyLink: 'https://pmkisan.gov.in',
        imageUrl: 'https://unsplash.com/photos/woman-harvesting-rice-5NGTf4oD8RA',
        active: true,
        lastUpdated: new Date().toISOString()
      },
      {
        id: cryptoRandomId(),
        name: 'Mukhyamantri Kanya Vivah Yojana (Example – State)',
        type: 'State',
        category: 'Women & Child',
        shortDesc: 'Financial assistance for marriage of eligible daughters from economically weaker sections (state example).',
        longDesc: 'State-run assistance scheme to support families during the marriage of daughters through a grant, subject to state-specific criteria.',
        eligibility: ['Domicile of the respective state', 'Income and age criteria as per guidelines'],
        benefits: ['One-time financial assistance (amount varies by state)'],
        applyLink: '#',
        imageUrl: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1400&auto=format&fit=crop',
        active: true,
        lastUpdated: new Date().toISOString()
      },
      {
        id: cryptoRandomId(),
        name: 'National Means-cum-Merit Scholarship (NMMSS)',
        type: 'Central',
        category: 'Education',
        shortDesc: 'Scholarship to meritorious students of economically weaker sections to reduce drop-outs at Class VIII and encourage secondary education.',
        longDesc: 'NMMSS awards scholarships to bright students from low-income families to continue education at the secondary stage. Selection via state-level examinations and eligibility criteria.',
        eligibility: ['Family income below notified threshold', 'Minimum academic performance as per scheme'],
        benefits: ['Annual scholarship credited to bank account'],
        applyLink: 'https://scholarships.gov.in',
        imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop',
        active: true,
        lastUpdated: new Date().toISOString()
      }
    ];

    function cryptoRandomId() {
      // Compact random id
      const bytes = crypto.getRandomValues(new Uint8Array(10));
      return Array.from(bytes, b => b.toString(16).padStart(2,'0')).join('');
    }

    function loadSchemes() {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seedSchemes));
        return seedSchemes;
      }
      try { return JSON.parse(raw); } catch { return []; }
    }

    function saveSchemes(list) { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
    function getSchemeById(id) { return loadSchemes().find(s => s.id === id); }

    // ------------------ UI Helpers ------------------
    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));

    function renderChips(container, items) {
      container.innerHTML = '';
      for (const txt of items) {
        const li = document.createElement('li');
        li.textContent = txt;
        container.appendChild(li);
      }
    }

    function truncate(text, n=120) {
      if (!text) return '';
      return text.length > n ? text.slice(0, n-1) + '…' : text;
    }

    // ------------------ Home (Cards) ------------------
    function renderHome() {
      showRoute('home');
      const grid = $('#cardsGrid');
      const empty = $('#emptyState');

      const q = $('#searchInput').value.trim().toLowerCase();
      const type = $('#filterType').value;
      const cat = $('#filterCategory').value;

      const list = loadSchemes().filter(s => {
        if (!s.active) return false;
        const matchesQ = !q || `${s.name} ${s.category} ${s.shortDesc}`.toLowerCase().includes(q);
        const matchesType = type === 'ALL' || s.type === type;
        const matchesCat = cat === 'ALL' || s.category === cat;
        return matchesQ && matchesType && matchesCat;
      });

      grid.innerHTML = '';
      if (list.length === 0) { empty.classList.remove('hidden'); return; }
      empty.classList.add('hidden');

      for (const s of list) {
        const card = document.createElement('article');
        card.className = '"max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition';
        card.innerHTML = `
          <!-- Scheme Card -->
                <!-- Image -->
                <div class="h-60 w-full">
                  <img src="${s.imageUrl}" alt="${s.name}" class="h-full w-full object-cover text-xl font-bold text-gray-800">
                </div>
                <!-- Content -->
                <div class="p-5">
                    <span class="inline-block text-xs uppercase tracking-wide">
                        <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">${s.type}</span>
                        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">${s.category}</span></span>
                    
                    <h3 class="mt-3 text-xl font-bold text-gray-900">${s.name}</h3>
                    <p class="mt-2 text-gray-600 text-sm leading-relaxed">
                    ${truncate(s.shortDesc)}
                    </p>
                    
                    <!-- Buttons -->
                    <div class="mt-4 flex gap-3">
                    <a href="${s.applyLink}" class="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-medium transition">Apply Now</a>
                    <a href="#/details/${s.id}" class="flex-1 text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium transition">Details</a>
                    </div>
                </div>
            

        `;
        grid.appendChild(card);
      }
    }

    // ------------------ Details ------------------
    function renderDetails(id) {
      const s = getSchemeById(id);
      if (!s) { location.hash = '#/home'; return; }
      showRoute('details');

      $('#detailsImage').src = s.imageUrl || 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1400&auto=format&fit=crop';
      $('#detailsTitle').textContent = s.name;
      $('#detailsType').textContent = s.type;
      $('#detailsCategory').textContent = s.category;
      $('#detailsUpdated').textContent = 'Updated ' + new Date(s.lastUpdated || Date.now()).toLocaleDateString();
      $('#detailsShort').textContent = s.shortDesc || '';
      $('#detailsLong').textContent = s.longDesc || '';
      $('#detailsApply').href = s.applyLink || '#';

      const elig = $('#detailsEligibility');
      const bene = $('#detailsBenefits');
      elig.innerHTML = '';
      bene.innerHTML = '';
      (s.eligibility || []).forEach(e => elig.appendChild(li(e)));
      (s.benefits || []).forEach(b => bene.appendChild(li(b)));

      const facts = $('#detailsFacts');
      facts.innerHTML = '';
      facts.appendChild(li('Type: ' + s.type));
      facts.appendChild(li('Category: ' + s.category));
      facts.appendChild(li('Active: ' + (s.active ? 'Yes' : 'No')));
      facts.appendChild(li('ID: ' + s.id.slice(0,8)));

      function li(t){ const x=document.createElement('li'); x.textContent=t; return x; }
    }

    // ------------------ Admin ------------------
    function renderAdmin() {
      showRoute('admin');
      const tbody = $('#adminTable');
      const list = loadSchemes();
      tbody.innerHTML = '';
      for (const s of list) {
        const tr = document.createElement('tr');
        tr.className = 'border-b';
        tr.innerHTML = `
          <td class="py-2 pr-2">${s.name}</td>
          <td class="py-2 pr-2">${s.type}</td>
          <td class="py-2 pr-2">${s.category}</td>
          <td class="py-2 pr-2">${new Date(s.lastUpdated || Date.now()).toLocaleDateString()}</td>
          <td class="py-2 pr-2">${s.active ? 'Yes' : 'No'}</td>
          <td class="py-2 flex gap-2">
            <button class="btn-soft" data-action="edit" data-id="${s.id}">Edit</button>
            <button class="btn-soft" data-action="delete" data-id="${s.id}">Delete</button>
            <a class="btn-soft" href="#/details/${s.id}">Preview</a>
          </td>`;
        tbody.appendChild(tr);
      }
    }

    // Fill form for edit
    function fillForm(s) {
      $('#formTitle').textContent = 'Edit Scheme';
      $('#id').value = s.id;
      $('#name').value = s.name;
      $('#type').value = s.type;
      $('#category').value = s.category;
      $('#shortDesc').value = s.shortDesc || '';
      $('#longDesc').value = s.longDesc || '';
      $('#eligibility').value = (s.eligibility || []).join('\n');
      $('#benefits').value = (s.benefits || []).join('\n');
      $('#applyLink').value = s.applyLink || '';
      $('#imageUrl').value = s.imageUrl || '';
      $('#active').checked = !!s.active;
    }

    function resetForm() {
      $('#formTitle').textContent = 'Add Scheme';
      $('#schemeForm').reset();
      $('#id').value = '';
      $('#active').checked = true;
    }

    // ------------------ Router ------------------
    function showRoute(name) {
      $$('.route').forEach(sec => sec.classList.add('hidden-route'));
      $('#route-' + name).classList.remove('hidden-route');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function router() {
      const h = location.hash || '#/home';
      const [_, route, param] = h.split('/');
      if (route === 'details' && param) return renderDetails(param);
      if (route === 'admin') return renderAdmin();
      return renderHome();
    }

    // ------------------ Event Listeners ------------------
    // Filters
    $('#searchInput').addEventListener('input', () => renderHome());
    $('#filterType').addEventListener('change', () => renderHome());
    $('#filterCategory').addEventListener('change', () => renderHome());
    $('#clearFiltersBtn').addEventListener('click', () => {
      $('#searchInput').value = '';
      $('#filterType').value = 'ALL';
      $('#filterCategory').value = 'ALL';
      renderHome();
    });

    // Admin table actions
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const action = btn.dataset.action;
      const id = btn.dataset.id;
      if (!action) return;

      if (action === 'edit') {
        const s = getSchemeById(id);
        if (s) {
          location.hash = '#/admin';
          setTimeout(() => fillForm(s), 0);
        }
      }
      if (action === 'delete') {
        if (!confirm('Delete this scheme?')) return;
        const list = loadSchemes().filter(x => x.id !== id);
        saveSchemes(list);
        renderAdmin();
      }
    });

    // Form submit
    $('#schemeForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const list = loadSchemes();
      const payload = {
        id: $('#id').value || cryptoRandomId(),
        name: $('#name').value.trim(),
        type: $('#type').value,
        category: $('#category').value,
        shortDesc: $('#shortDesc').value.trim(),
        longDesc: $('#longDesc').value.trim(),
        eligibility: $('#eligibility').value.split('\n').map(s=>s.trim()).filter(Boolean),
        benefits: $('#benefits').value.split('\n').map(s=>s.trim()).filter(Boolean),
        applyLink: $('#applyLink').value.trim(),
        imageUrl: $('#imageUrl').value.trim(),
        active: $('#active').checked,
        lastUpdated: new Date().toISOString()
      };

      const existingIdx = list.findIndex(x => x.id === payload.id);
      if (existingIdx >= 0) list[existingIdx] = payload; else list.unshift(payload);

      saveSchemes(list);
      alert('Saved!');
      resetForm();
      renderAdmin();
    });

    $('#resetBtn').addEventListener('click', () => resetForm());

    // Export JSON
    $('#exportBtn').addEventListener('click', () => {
      const data = JSON.stringify(loadSchemes(), null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'schemes.json'; a.click();
      URL.revokeObjectURL(url);
    });

    // Initialize
    window.addEventListener('hashchange', router);
    // Ensure seeds are initialized once
    loadSchemes();
    router();

    const slider = document.getElementById('slider');
    const slides = Array.from(slider.children);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsWrap = document.getElementById('dots');
    const dots = Array.from(dotsWrap.children);

    let index = 0;
    let autoTimer = null;
    const DURATION = 5000; // 5s autoplay

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      const x = slides[index].offsetLeft;
      slider.scrollTo({ left: x, behavior: 'smooth' });
      dots.forEach((d, di) => {
        d.classList.toggle('bg-white', di === index);
        d.classList.toggle('bg-white/50', di !== index);
      });
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    // buttons
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    // dots
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    // sync index on manual scroll (snap)
    slider.addEventListener('scroll', () => {
      const mid = slider.scrollLeft + slider.clientWidth / 2;
      const si = slides.reduce((best, el, i) => {
        const center = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(center - mid);
        return dist < best.dist ? { i, dist } : best;
      }, { i: 0, dist: Infinity }).i;
      if (si !== index) { index = si; dots.forEach((d, di) => {
        d.classList.toggle('bg-white', di === index);
        d.classList.toggle('bg-white/50', di !== index);
      });}
    }, { passive: true });

    // autoplay + pause on hover/touch
    function startAuto() { stopAuto(); autoTimer = setInterval(next, DURATION); }
    function stopAuto() { if (autoTimer) clearInterval(autoTimer); }
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);
    slider.addEventListener('touchstart', stopAuto, { passive: true });
    slider.addEventListener('touchend', startAuto, { passive: true });

    // keyboard
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    // init
    goTo(0);
    startAuto();

    // Toggle mobile nav
    const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  btn.addEventListener("click", () => {
    if (menu.classList.contains("max-h-0")) {
      menu.classList.remove("max-h-0");
      menu.classList.add("max-h-40"); // adjust depending on menu size
    } else {
      menu.classList.remove("max-h-40");
      menu.classList.add("max-h-0");
    }
  });

    function openLogin() {
      document.getElementById("loginModal").classList.remove("hidden");
    }
    function closeLogin() {
      document.getElementById("loginModal").classList.add("hidden");
    }
    function login() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if(user === "admin" && pass === "1234") {
        closeLogin();
        document.getElementById("adminPanel").classList.remove("hidden");

        // ✅ Redirect (scroll) to adminPanel by ID
        document.getElementById("route-admin").scrollIntoView({ 
          behavior: "smooth" 
        });
      } else {
        alert("Invalid credentials! Try admin / 1234");
      }
    }
    function logout() {
      document.getElementById("admin").classList.add("hidden");
}
    

function toggleFAQ(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector(".faq-icon");

      if (content.classList.contains("max-h-40")) {
        content.classList.remove("max-h-40", "py-3");
        icon.textContent = "+";
      } else {
        document.querySelectorAll(".faq-content").forEach(c => c.classList.remove("max-h-40", "py-3"));
        document.querySelectorAll(".faq-icon").forEach(i => i.textContent = "+");
        content.classList.add("max-h-40", "py-3");
        icon.textContent = "−";
      }
    }