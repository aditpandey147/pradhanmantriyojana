// Generate random ID for schemes
function generateRandomId() {
  return "PM" + Math.floor(1000 + Math.random() * 9000);
}

// Function to create URL-friendly slug
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// Sample data for PM schemes
const schemes = [
  {
    id: "generateRandomId()",
    name: "PM-KISAN",
    description: "Pradhan Mantri Kisan Samman Nidhi",
    fullName: "Pradhan Mantri Kisan Samman Nidhi",
    launched: "2019",
    benefits:
      "₹6,000 per year in three equal installments directly transferred to beneficiary bank accounts",
    eligibility:
      "Small and marginal landholder farmer families owning up to 2 hectares of cultivable land. Institutional landholders and higher-income category farmers are excluded.",
    officialSite: "https://pmkisan.gov.in",
    logo: "fas fa-tractor",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme is one of the largest direct benefit transfer (DBT) programs in the world, designed to provide assured income support to farmers and ensure financial stability in rural India. Launched in February 2019, this scheme reflects the Government of India's commitment to improving the livelihood of small and marginal farmers who form the backbone of the Indian agricultural economy. Under PM-KISAN, eligible farmers receive a direct transfer of ₹6,000 annually, credited in three equal installments of ₹2,000 each to their bank accounts through Direct Benefit Transfer. This ensures transparency, eliminates middlemen, and guarantees timely support.\n\nThe scheme targets small and marginal landholder farmer families with cultivable land of up to two hectares. To qualify, farmers must submit Aadhaar-linked bank accounts, landholding records, and meet the prescribed eligibility criteria. Certain categories are excluded, including institutional landholders, income tax payers, and professionals such as doctors, engineers, and government employees above a certain rank. This selective inclusion ensures that the benefits reach those who genuinely depend on agriculture for survival.\n\nThe financial aid provided through PM-KISAN is not tied to crop cultivation or specific expenditures, giving farmers the freedom to use the funds for seeds, fertilizers, farm equipment, household needs, or loan repayment. For many families, this scheme acts as a safety net during times of distress caused by crop failures, natural calamities, or fluctuating market prices. By reducing dependence on informal credit and moneylenders, the scheme contributes to lowering rural indebtedness.\n\nThe PM-KISAN initiative also complements other government programs like the Pradhan Mantri Fasal Bima Yojana (PMFBY) and Pradhan Mantri Krishi Sinchayee Yojana (PMKSY), creating a holistic support framework for farmers. With the help of technology, the scheme uses a centralized online portal (pmkisan.gov.in) where farmers can register, check their installment status, and resolve grievances. Transparency and accountability are further strengthened through Aadhaar authentication and electronic fund transfer.\n\nAs of now, PM-KISAN continues to be a cornerstone policy in India's agricultural support system. It has disbursed billions of rupees to millions of farmers, empowering rural households and contributing to poverty alleviation. By offering direct financial support, the scheme reduces uncertainty in agricultural income and strengthens the government's vision of doubling farmers' income. Overall, PM-KISAN has emerged as a lifeline for India's small and marginal farmers, helping them sustain livelihoods, invest in productivity, and achieve economic resilience.",
  },
  {
    id: "generateRandomId()",
    name: "PM-JAY",
    description: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    fullName: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    launched: "2018",
    benefits: "Health coverage of ₹5 lakh per family per year",
    eligibility:
      "Deprived rural families and identified occupational categories",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-hospital",
    category: "Health",
    ministry: "Ministry of Health",
    status: "Active",
    longDescription:
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world's largest health insurance scheme, providing comprehensive hospitalization coverage to over 50 crore beneficiaries from poor and vulnerable families. Launched in September 2018, this revolutionary scheme offers cashless and paperless access to quality healthcare services at empaneled hospitals across India. PM-JAY covers secondary and tertiary care hospitalization expenses up to ₹5 lakh per family per year, with no restrictions on family size, age, or gender. The scheme includes 1,574 medical procedures covering all pre-existing conditions, day-care treatments, and diagnostic services.\n\nPM-JAY operates on a trust-based model where beneficiaries can avail treatment at any empaneled hospital without paying anything at the point of service. The scheme uses robust technology systems for verification, claim processing, and fraud detection, ensuring efficient delivery of services. It has significantly reduced out-of-pocket healthcare expenses for millions of families, preventing them from falling into poverty due to medical costs. PM-JAY represents a paradigm shift in healthcare delivery, moving from sectoral and fragmented approach to a comprehensive need-based approach that prioritizes the health needs of the most vulnerable sections of society.",
  },
  {
    id: "generateRandomId()",
    name: "PM-UJJWALA",
    description: "Pradhan Mantri Ujjwala Yojana",
    fullName: "Pradhan Mantri Ujjwala Yojana",
    launched: "2016",
    benefits:
      "Free LPG connections to women from below-poverty-line households",
    eligibility: "Women from below-poverty-line households",
    officialSite: "https://www.pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Social Welfare",
    ministry: "Ministry of Petroleum",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY) is a transformative social welfare scheme launched to provide clean cooking fuel to women from economically disadvantaged households. Before this scheme, millions of households in India relied on traditional cooking methods using firewood, coal, and dung cakes, which caused severe indoor air pollution and health hazards. PMUY aims to safeguard women's health by providing free LPG connections, reducing drudgery, and empowering women with clean energy access.\n\nThe scheme provides financial support of ₹1,600 for each LPG connection to Below Poverty Line (BPL) households, which includes the security deposit for the cylinder, pressure regulator, booklet, and hose. Beneficiaries receive the first refill and stove free of cost, with the option to purchase subsequent refills through affordable EMI options. PMUY has particularly focused on SC/ST households, forest dwellers, tea gardens, islands, and river islands to ensure inclusive coverage.\n\nBeyond health benefits, PMUY has generated significant employment opportunities in the LPG distribution network and reduced the time women spend on cooking and collecting firewood. The scheme has also contributed to environmental conservation by reducing deforestation and carbon emissions. With over 8 crore connections provided, PMUY has emerged as one of the world's largest clean energy access programs, transforming lives and promoting sustainable development across rural India.",
  },
  {
    id: "generateRandomId()",
    name: "PM-AWAS",
    description: "Pradhan Mantri Awas Yojana",
    fullName: "Pradhan Mantri Awas Yojana",
    launched: "2015",
    benefits: "Financial assistance for construction of houses",
    eligibility: "Economically weaker sections and low-income groups",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing",
    ministry: "Ministry of Housing",
    status: "Active",
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY) is a comprehensive mission to provide affordable housing to all urban and rural poor by 2022. The scheme addresses India's massive housing shortage, particularly among Economically Weaker Sections (EWS) and Low-Income Groups (LIG). PMAY has two components: PMAY-U for urban areas and PMAY-G for rural areas, each tailored to address specific housing challenges.\n\nUnder PMAY-U, the scheme provides central assistance to implementing agencies through four verticals: In-Situ Slum Redevelopment, Credit Linked Subsidy Scheme, Affordable Housing in Partnership, and Subsidy for Beneficiary-led Individual House Construction. The Credit Linked Subsidy Scheme offers interest subsidies of up to 6.5% on housing loans, making home ownership affordable for low-income families. PMAY-G provides financial assistance of ₹1.20 lakh to ₹1.30 lakh for construction of pucca houses with basic amenities like toilet, water supply, electricity, and cooking gas connection.\n\nThe scheme promotes sustainable and inclusive development by using eco-friendly technologies, ensuring women ownership (either in sole or joint name), and creating slum-free cities. PMAY has not only provided shelter security but also generated employment in construction and related sectors, contributing to economic growth and social development.",
  },
  {
    id: "generateRandomId()",
    name: "PM-SVANidhi",
    description: "PM Street Vendor's AtmaNirbhar Nidhi",
    fullName: "PM Street Vendor's AtmaNirbhar Nidhi",
    launched: "2020",
    benefits: "Collateral-free working capital loans up to ₹10,000",
    eligibility: "Street vendors engaged in vending activities",
    officialSite: "https://pmsvanidhi.mohua.gov.in",
    logo: "fas fa-store",
    category: "Financial",
    ministry: "Ministry of Housing",
    status: "Active",
    longDescription:
      "Pradhan Mantri Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi) is a special micro-credit scheme launched during the COVID-19 pandemic to provide affordable working capital loans to street vendors, helping them resume their livelihoods that were severely affected by lockdowns. The scheme offers collateral-free loans of ₹10,000, which can be enhanced to ₹20,000 and ₹50,000 on timely repayment, creating a cycle of credit support for business growth.\n\nPM SVANidhi stands out for its simplified application process through digital platforms, minimal documentation, and quick disbursement. The scheme promotes digital transactions by offering monthly cashback incentives for digital payments, fostering financial inclusion and formalization of the informal sector. Street vendors can access loans at subsidized interest rates, with the government providing interest subsidies to encourage timely repayment.\n\nThe scheme has empowered millions of street vendors, including those from marginalized communities, by providing them with formal credit access that was previously unavailable. It has helped vendors rebuild their businesses, purchase inventory, and adopt digital payment methods, making them more resilient to economic shocks. PM SVANidhi represents a significant step towards recognizing and integrating street vendors into the formal economy while preserving their vital role in urban ecosystems.",
  },
  {
    id: "generateRandomId()",
    name: "PM-MUDRA",
    description: "Pradhan Mantri MUDRA Yojana",
    fullName:
      "Pradhan Mantri Micro Units Development & Refinance Agency Ltd.",
    launched: "2015",
    benefits:
      "Loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises",
    eligibility: "Small business owners, entrepreneurs",
    officialSite: "https://www.mudra.org.in",
    logo: "fas fa-business-time",
    category: "Financial",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "Pradhan Mantri MUDRA Yojana (PMMY) is a flagship scheme to fund the unfunded by providing access to institutional finance to micro and small enterprises. Under this scheme, MUDRA loans are offered through Banks, NBFCs, MFIs, and other financial institutions to non-corporate, non-farm small/micro enterprises. The loans are categorized into three products: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5,00,001 to ₹10 lakh).\n\nMUDRA loans support income-generating activities in manufacturing, trading, services, and agriculture-related sectors. The scheme has been particularly beneficial for first-generation entrepreneurs, women entrepreneurs, and entrepreneurs from marginalized communities who lack collateral security. The application process is simple with minimal documentation, and loans are disbursed quickly through the extensive network of partner lending institutions.\n\nThe scheme has played a crucial role in promoting entrepreneurship, generating employment, and supporting the informal sector's transition to the formal economy. By providing affordable credit to small businesses, MUDRA has fostered innovation, economic diversification, and financial inclusion. The scheme has also contributed to women empowerment, with a significant proportion of loans disbursed to women entrepreneurs, enabling them to start and expand their businesses.",
  },
  {
    id: "generateRandomId()",
    name: "PM-KUSUM",
    description: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
    fullName: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
    launched: "2019",
    benefits:
      "Installation of solar pumps and grid-connected solar power plants",
    eligibility: "Farmers with cultivable land",
    officialSite: "https://pmkusum.mnre.gov.in",
    logo: "fas fa-solar-panel",
    category: "Agriculture",
    ministry: "Ministry of New and Renewable Energy",
    status: "Active",
    longDescription:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) is a visionary scheme to promote solar energy among farmers while addressing irrigation and energy security challenges. The scheme has three components: installation of grid-connected solar power plants on barren/fallow land, installation of standalone solar agriculture pumps, and solarization of grid-connected agriculture pumps.\n\nUnder Component A, farmers can set up solar power plants of capacity 500 kW to 2 MW on barren/fallow land and sell the generated power to DISCOMs, creating a stable additional income source. Component B provides 100% standalone solar pumps to farmers for irrigation, reducing dependence on diesel pumps and grid electricity. Component C enables farmers to solarize existing grid-connected agriculture pumps and use the generated solar power for irrigation while selling the surplus power to DISCOMs.\n\nPM-KUSUM addresses multiple challenges simultaneously - it reduces the subsidy burden on DISCOMs, provides reliable irrigation power, increases farmers' income, and promotes renewable energy. The scheme also contributes to environmental sustainability by reducing carbon emissions and diesel consumption. By transforming farmers into 'prosumers' (producers and consumers), PM-KUSUM is revolutionizing the agriculture-energy nexus and promoting sustainable farming practices.",
  },
  {
    id: "generateRandomId()",
    name: "PM-FME",
    description:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
    fullName:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
    launched: "2020",
    benefits:
      "Financial, technical and business support for micro food processing enterprises",
    eligibility: "Micro food processing enterprises",
    officialSite: "https://pmfme.mofpi.gov.in",
    logo: "fas fa-utensils",
    category: "Food Processing",
    ministry: "Ministry of Food Processing Industries",
    status: "Active",
    longDescription:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PMFME) scheme is part of the Aatmanirbhar Bharat Abhiyan, aimed at providing technical, financial, and business support to micro food processing enterprises across India. The scheme focuses on supporting individual enterprises, FPOs, SHGs, and cooperatives through credit-linked capital subsidy, capacity building, and marketing assistance.\n\nPMFME adopts a One District One Product (ODOP) approach to promote specialization and scale in traditional food products unique to each district. The scheme provides 35% capital subsidy for setting up/upgrading food processing units, support for branding and marketing, training in food safety and quality standards, and assistance for obtaining FSSAI licenses. It particularly focuses on women entrepreneurs and SC/ST owners, providing them with enhanced support.\n\nThe scheme addresses key challenges faced by micro enterprises, including access to credit, technology adoption, quality standardization, and market linkage. By formalizing the unorganized food processing sector, PMFME enhances value addition, reduces wastage, increases farmers' income, and creates employment opportunities. The scheme also promotes traditional foods, preserves local culinary heritage, and supports the development of local supply chains, contributing to balanced regional development and food security.",
  },
];


// DOM elements
const schemesContainer = document.getElementById("schemes-container");
const detailsContainer = document.getElementById("details-container");
const schemeDetails = document.getElementById("scheme-details");
const backButton = document.getElementById("back-button");
const cardViewBtn = document.getElementById("card-view-btn");
const listViewBtn = document.getElementById("list-view-btn");
const heroSearch = document.getElementById("hero-search");
const heroSearchBtn = document.getElementById("hero-search-btn");
const mainSearch = document.getElementById("main-search");
const categoryFilter = document.getElementById("category-filter");
const statusFilter = document.getElementById("status-filter");
const resetFiltersBtn = document.getElementById("reset-filters");
const resultsCount = document.getElementById("results-count");
const noResults = document.getElementById("no-results");
const whatsappShare = document.getElementById("whatsapp-share");
const whatsappLink = document.getElementById("whatsapp-link");
let currentView = "card";
let filteredSchemes = [...schemes];
let currentScheme = null;

// Function to render scheme cards
function renderSchemeCards(schemesToRender) {
  schemesContainer.innerHTML = "";
  schemesContainer.classList.remove("grid-cols-1");
  schemesContainer.classList.add(
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3"
  );

  if (schemesToRender.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  schemesToRender.forEach((scheme) => {
    const schemeCard = document.createElement("div");
    schemeCard.className = "bg-white rounded-xl shadow-lg p-6 scheme-card";
    schemeCard.innerHTML = `
                          <div class="flex items-start mb-4">
                              <i class="${scheme.logo} text-3xl text-orange-600 mr-4"></i>
                              <div>
                                  <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">${scheme.id}</span>
                                  <h3 class="font-bold text-xl mt-2">${scheme.name}</h3>
                                  <p class="text-gray-600">${scheme.description}</p>
                              </div>
                          </div>
                          <div class="flex justify-between items-center">
                              <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">${scheme.category}</span>
                              <button class="text-orange-600 hover:text-orange-800 font-medium">
                                  View Details <i class="fas fa-arrow-right ml-1 text-xs"></i>
                              </button>
                          </div>
                      `;
    schemeCard.addEventListener("click", () => showSchemeDetails(scheme));
    schemesContainer.appendChild(schemeCard);
  });

  // Update results count
  resultsCount.textContent = `${schemesToRender.length} scheme${
    schemesToRender.length !== 1 ? "s" : ""
  }`;
}

// Function to render scheme list view
function renderSchemeList(schemesToRender) {
  schemesContainer.innerHTML = "";
  schemesContainer.classList.remove(
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3"
  );
  schemesContainer.classList.add("grid-cols-1");

  if (schemesToRender.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  schemesToRender.forEach((scheme) => {
    const schemeItem = document.createElement("div");
    schemeItem.className = "bg-white rounded-xl shadow-lg p-6 scheme-card mb-4";
    schemeItem.innerHTML = `
                          <div class="flex justify-between items-start">
                              <div class="flex items-start">
                                  <i class="${scheme.logo} text-3xl text-orange-600 mr-4"></i>
                                  <div>
                                      <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">${scheme.id}</span>
                                      <h3 class="font-bold text-xl mt-2">${scheme.name}</h3>
                                      <p class="text-gray-600">${scheme.description}</p>
                                      <div class="mt-3">
                                          <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">${scheme.category}</span>
                                          <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">${scheme.status}</span>
                                      </div>
                                  </div>
                              </div>
                              <button class="text-orange-600 hover:text-orange-800 font-medium">
                                  View Details <i class="fas fa-arrow-right ml-1 text-xs"></i>
                              </button>
                          </div>
                      `;
    schemeItem.addEventListener("click", () => showSchemeDetails(scheme));
    schemesContainer.appendChild(schemeItem);
  });

  // Update results count
  resultsCount.textContent = `${schemesToRender.length} scheme${
    schemesToRender.length !== 1 ? "s" : ""
  }`;
}

// Function to show scheme details
function showSchemeDetails(scheme) {
  currentScheme = scheme;
  schemesContainer.classList.add("hidden");
  detailsContainer.classList.remove("hidden");
  whatsappShare.classList.remove("hidden");

  // Update URL with scheme name as hash
  const schemeSlug = createSlug(scheme.name);
  window.history.pushState(null, null, `#${schemeSlug}`);

  // Update WhatsApp share link
  const shareText = `Check out this PM Scheme: ${scheme.name} - ${scheme.description}. Learn more at: `;
  const encodedText = encodeURIComponent(shareText);
  whatsappLink.href = `https://wa.me/?text=${encodedText}`;

  schemeDetails.innerHTML = `
                      <div class="fade-in">
                          <div class="flex items-center mb-6">
                              <i class="${scheme.logo} text-4xl text-orange-600 mr-4"></i>
                              <div>
                                  <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">${scheme.id}</span>
                                  <h3 class="text-3xl font-bold">${scheme.name}</h3>
                                  <p class="text-gray-600 text-lg">${scheme.fullName}</p>
                              </div>
                          </div>

                          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div class="bg-orange-50 p-4 rounded-lg">
                                  <h4 class="font-bold text-lg mb-2"><i class="fas fa-gift mr-2 text-orange-600"></i>Benefits</h4>
                                  <p>${scheme.benefits}</p>
                              </div>
                              <div class="bg-green-50 p-4 rounded-lg">
                                  <h4 class="font-bold text-lg mb-2"><i class="fas fa-user-check mr-2 text-green-600"></i>Eligibility</h4>
                                  <p>${scheme.eligibility}</p>
                              </div>
                              <div class="bg-orange-50 p-4 rounded-lg">
                                  <h4 class="font-bold text-lg mb-2"><i class="fas fa-calendar-alt mr-2 text-orange-600"></i>Launched</h4>
                                  <p>${scheme.launched}</p>
                              </div>
                              <div class="bg-green-50 p-4 rounded-lg">
                                  <h4 class="font-bold text-lg mb-2"><i class="fas fa-tag mr-2 text-green-600"></i>Category</h4>
                                  <p>${scheme.category}</p>
                              </div>
                          </div>

                          <div class="mb-6">
                              <h4 class="font-bold text-lg mb-2"><i class="fas fa-info-circle mr-2 text-gray-600"></i>Scheme Details</h4>
                              <p class="text-gray-700">${scheme.longDescription}ndians. Administered by the ${scheme.ministry}.</p>
                          </div>

                          <div class="flex items-center flex-wrap gap-4">
                              <a href="${scheme.officialSite}" target="_blank" class="btn-orange px-6 py-3 rounded-lg flex items-center">
                                  <i class="fas fa-external-link-alt mr-2"></i> Official Website
                              </a>
                              <button id="share-btn" class="border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg">
                                  <i class="far fa-share-square mr-2"></i> Share
                              </button>
                              <button id="whatsapp-btn" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center">
                                  <i class="fab fa-whatsapp mr-2"></i> Share via WhatsApp
                              </button>
                          </div>
                      </div>
                  `;

  // Add event listeners for share buttons
  document.getElementById("share-btn").addEventListener("click", shareScheme);
  document
    .getElementById("whatsapp-btn")
    .addEventListener("click", shareOnWhatsApp);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to handle back button
function handleBackButton() {
  detailsContainer.classList.add("hidden");
  schemesContainer.classList.remove("hidden");
  whatsappShare.classList.add("hidden");

  // Remove scheme hash from URL
  window.history.pushState(null, null, window.location.pathname);
}

// Function to check URL hash and show corresponding scheme
function checkUrlHash() {
  const hash = window.location.hash.substring(1); // Remove the # character
  if (hash) {
    // Find scheme by slug
    const scheme = schemes.find((s) => createSlug(s.name) === hash);
    if (scheme) {
      showSchemeDetails(scheme);
    }
  }
}

// Function to share scheme
function shareScheme() {
  if (navigator.share) {
    navigator
      .share({
        title: currentScheme.name,
        text: currentScheme.description,
        url: window.location.href,
      })
      .catch((error) => {
        console.log("Error sharing:", error);
      });
  } else {
    alert(
      "Web Share API not supported in your browser. You can share via WhatsApp instead."
    );
  }
}

// Function to share on WhatsApp
function shareOnWhatsApp() {
  const shareText = `Check out this PM Scheme: ${currentScheme.name} - ${currentScheme.description}. Learn more at: ${window.location.href}`;
  const encodedText = encodeURIComponent(shareText);
  window.open(`https://wa.me/?text=${encodedText}`, "_blank");
}

// Function to filter schemes based on search and filters
function filterSchemes() {
  const searchText =
    mainSearch.value.toLowerCase() || heroSearch.value.toLowerCase();
  const category = categoryFilter.value;
  const status = statusFilter.value;

  filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchText) ||
      scheme.description.toLowerCase().includes(searchText) ||
      scheme.fullName.toLowerCase().includes(searchText) ||
      scheme.category.toLowerCase().includes(searchText);

    const matchesCategory = category === "all" || scheme.category === category;
    const matchesStatus = status === "all" || scheme.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (currentView === "card") {
    renderSchemeCards(filteredSchemes);
  } else {
    renderSchemeList(filteredSchemes);
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderSchemeCards(schemes);

  // Check if URL has a hash and show corresponding scheme
  checkUrlHash();

  // Listen for hash changes
  window.addEventListener("hashchange", checkUrlHash);

  // Back button event listener
  backButton.addEventListener("click", handleBackButton);

  // View toggle event listeners
  cardViewBtn.addEventListener("click", () => {
    currentView = "card";
    renderSchemeCards(filteredSchemes);
    cardViewBtn.classList.add("bg-orange-100", "text-orange-700");
    listViewBtn.classList.remove("bg-orange-100", "text-orange-700");
  });

  listViewBtn.addEventListener("click", () => {
    currentView = "list";
    renderSchemeList(filteredSchemes);
    listViewBtn.classList.add("bg-orange-100", "text-orange-700");
    cardViewBtn.classList.remove("bg-orange-100", "text-orange-700");
  });

  // Search and filter event listeners
  heroSearch.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      filterSchemes();
    }
  });

  heroSearchBtn.addEventListener("click", filterSchemes);

  mainSearch.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      filterSchemes();
    }
  });

  categoryFilter.addEventListener("change", filterSchemes);
  statusFilter.addEventListener("change", filterSchemes);

  resetFiltersBtn.addEventListener("click", () => {
    mainSearch.value = "";
    heroSearch.value = "";
    categoryFilter.value = "all";
    statusFilter.value = "all";
    filterSchemes();
  });

  // Quick filter buttons in hero section
  document.querySelectorAll(".hero-pattern button").forEach((button) => {
    button.addEventListener("click", (e) => {
      mainSearch.value = e.target.textContent;
      filterSchemes();
    });
  });
});

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    // Toggle mobile menu visibility
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.remove("scale-95", "opacity-0");
      }, 10);
    } else {
      mobileMenu.classList.add("scale-95", "opacity-0");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }

    // Toggle hamburger icon
    const icon = mobileMenuButton.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuButton.contains(event.target) &&
      !mobileMenu.classList.contains("hidden")
    ) {
      mobileMenu.classList.add("scale-95", "opacity-0");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);

      // Reset hamburger icon
      const icon = mobileMenuButton.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Prevent menu from closing when clicking inside it
  mobileMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Mobile submenu toggle
  const mobileSubmenuButtons = mobileMenu.querySelectorAll("button");
  mobileSubmenuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const submenu = this.nextElementSibling;
      if (submenu.classList.contains("hidden")) {
        submenu.classList.remove("hidden");
      } else {
        submenu.classList.add("hidden");
      }
    });
  });
});

// Function to toggle FAQ items
function toggleFaq(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  answer.classList.toggle("open");
  icon.classList.toggle("open");
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Add event listener for FAQ search
  const faqSearch = document.getElementById("faq-search");
  const faqSearchBtn = document.getElementById("faq-search-btn");

  faqSearchBtn.addEventListener("click", searchFaqs);
  faqSearch.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchFaqs();
    }
  });

  function searchFaqs() {
    const searchTerm = faqSearch.value.toLowerCase();
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}`);
      // In a real implementation, this would filter the FAQs
    }
  }

  // Category buttons
  const categoryButtons = document.querySelectorAll(".bg-white button");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => {
        btn.classList.remove("bg-orange-100", "text-orange-700");
        btn.classList.add("hover:bg-gray-100", "text-gray-700");
      });
      button.classList.add("bg-orange-100", "text-orange-700");
      button.classList.remove("hover:bg-gray-100", "text-gray-700");

      // Scroll to the corresponding category
      const category = button.textContent.trim();
      alert(`Showing category: ${category}`);
      // In a real implementation, this would filter the FAQs by category
    });
  });
});

// Function to check URL hash and show corresponding scheme
function checkUrlHash() {
  const hash = window.location.hash.substring(1); // Remove the # character
  if (hash) {
    // Find scheme by slug
    const scheme = schemes.find((s) => createSlug(s.name) === hash);
    if (scheme) {
      showSchemeDetails(scheme);
    }
  }
}
