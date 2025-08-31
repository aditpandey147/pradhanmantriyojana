function generateRandomId() {
  return "PM" + Math.floor(1000 + Math.random() * 9000);
}

// Sample data for PM schemes
const schemes = [
  {
    id: generateRandomId(),
    name: "PM-KISAN",
    description: "Pradhan Mantri Kisan Samman Nidhi",
    fullName: "Pradhan Mantri Kisan Samman Nidhi",
    launched: "2019",
    benefits: "₹6,000 per year in three equal installments",
    eligibility: "Small and marginal landholder farmer families",
    officialSite: "https://pmkisan.gov.in",
    logo: "fas fa-tractor",
    category: "Agriculture",
    ministry: "Ministry of Agriculture",
    status: "Active",
  },
  {
    id: generateRandomId(),
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
  },
  {
    id: generateRandomId(),
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
  },
  {
    id: generateRandomId(),
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
  },
  {
    id: generateRandomId(),
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
  },
  {
    id: generateRandomId(),
    name: "PM-MUDRA",
    description: "Pradhan Mantri MUDRA Yojana",
    fullName: "Pradhan Mantri Micro Units Development & Refinance Agency Ltd.",
    launched: "2015",
    benefits:
      "Loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises",
    eligibility: "Small business owners, entrepreneurs",
    officialSite: "https://www.mudra.org.in",
    logo: "fas fa-business-time",
    category: "Financial",
    ministry: "Ministry of Finance",
    status: "Active",
  },
  {
    id: generateRandomId(),
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
  },
  {
    id: generateRandomId(),
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

  // Update WhatsApp share link
  const shareText = `Check out this PM Scheme: ${scheme.name} - ${scheme.description}. Learn more at: `;
  const encodedText = encodeURIComponent(shareText);
  whatsappLink.href = `https://wa.me/?text=${encodedText}`;

  schemeDetails.innerHTML = `
                <div class="fade-in">
                    <div class="flex items-center mb-6">
                        <i class="${
                          scheme.logo
                        } text-4xl text-orange-600 mr-4"></i>
                        <div>
                            <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">${
                              scheme.id
                            }</span>
                            <h3 class="text-3xl font-bold">${scheme.name}</h3>
                            <p class="text-gray-600 text-lg">${
                              scheme.fullName
                            }</p>
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
                        <p class="text-gray-700">Launched in ${
                          scheme.launched
                        }, this scheme aims to provide support to citizens across India. The scheme has shown significant impact in its domain and continues to benefit millions of Indians. Administered by the ${
    scheme.ministry
  }, it is currently ${scheme.status.toLowerCase()}.</p>
                    </div>
                    
                    <div class="flex items-center flex-wrap gap-4">
                        <a href="${
                          scheme.officialSite
                        }" target="_blank" class="btn-orange px-6 py-3 rounded-lg flex items-center">
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

  // Back button event listener
  backButton.addEventListener("click", () => {
    detailsContainer.classList.add("hidden");
    schemesContainer.classList.remove("hidden");
    whatsappShare.classList.add("hidden");
  });

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
