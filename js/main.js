
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
     {
    id: cryptoRandomId(),
    name: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
    type: 'Central',
    category: 'Employment',
    shortDesc: 'Basic bank accounts with no minimum balance, debit card, and insurance.',
    longDesc: 'Pradhan Mantri Jan-Dhan Yojana (PMJDY) is National Mission for Financial Inclusion to ensure access to financial services, namely, a basic savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner. Under the scheme, a basic savings bank deposit (BSBD) account can be opened in any bank branch or Business Correspondent (Bank Mitra) outlet, by persons not having any other account.',
    eligibility: ['Family income below notified threshold', 'Minimum academic performance as per scheme'],
    benefits: ['One basic savings bank account is opened for unbanked person. There is no requirement to maintain any minimum balance in PMJDY accounts. Interest is earned on the deposit in PMJDY accounts. Rupay Debit card is provided to PMJDY account holder. Accident Insurance Cover of Rs.1 lakh (enhanced to Rs. 2 lakh to new PMJDY accounts opened after 28.8.2018) is available with RuPay card issued to the PMJDY account holders. An overdraft (OD) facility up to Rs. 10,000 to eligible account holders is available. PMJDY accounts are eligible for Direct Benefit Transfer (DBT), Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY), Pradhan Mantri Suraksha Bima Yojana (PMSBY), Atal Pension Yojana (APY), Micro Units Development & Refinance Agency Bank (MUDRA) scheme.'],
    applyLink: 'https://www.pmjdy.gov.in/home',
    imageUrl: 'data:image/jpeg;base64,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',
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
