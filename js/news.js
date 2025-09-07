// Sample news data
const newsData = [
  {
    id: 1,
    title: "PM Modi Inaugurates New Infrastructure Projects in Varanasi",
    summary:
      "Prime Minister Narendra Modi inaugurated multiple development projects in his constituency Varanasi, including a new medical college and highway projects.",
    content: `<p>Prime Minister Narendra Modi visited Varanasi today to inaugurate several infrastructure projects worth over ₹1,500 crore. The projects include a new state-of-the-art medical college, a six-lane highway, and a new sewage treatment plant.</p>
                         <p>During his address, PM Modi emphasized the government's commitment to holistic development across all regions of India. He stated, "These projects will not only boost Varanasi's infrastructure but also create numerous employment opportunities for the local youth."</p>
                         <p>The Prime Minister also interacted with beneficiaries of various government schemes and took a firsthand review of the development works in the region. The medical college is expected to serve over 5,000 patients daily and will have modern facilities for medical education and research.</p>
                         <p>This visit marks PM Modi's fifth trip to Varanasi this year, highlighting the importance he places on the development of his parliamentary constituency.</p>`,
    image:
      "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Infrastructure",
    date: new Date().toISOString().split("T")[0],
    source: "Press Trust of India",
  },
  {
    id: 2,
    title:
      "India's GDP Growth Exceeds Expectations: PM Modi Hails Economic Resilience",
    summary:
      "Prime Minister Modi praised India's economic performance as latest GDP figures show stronger-than-expected growth despite global challenges.",
    content: `<p>Prime Minister Narendra Modi today hailed India's economic resilience as the latest GDP figures showed growth of 7.8% in the last quarter, exceeding economists' expectations.</p>
                         <p>Speaking at an economic conference, PM Modi credited reforms and policy stability for India's strong performance amid global economic uncertainty. He emphasized that India remains a bright spot in the global economy and is on track to become a $5 trillion economy.</p>
                         <p>"Our focus on digital infrastructure, manufacturing, and exports has yielded excellent results. The world is looking at India as a engine of global growth," the Prime Minister stated.</p>
                         <p>He also highlighted that foreign direct investment has reached record levels, and India's forex reserves are at an all-time high, providing stability to the economy.</p>
                         <p>The Prime Minister concluded by emphasizing the government's commitment to inclusive growth, ensuring that the benefits of development reach all sections of society.</p>`,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Economy",
    date: new Date().toISOString().split("T")[0],
    source: "Economic Times",
  },
  {
    id: 3,
    title: "PM Modi Chairs High-Level Meeting on National Security",
    summary:
      "Prime Minister Narendra Modi chaired a meeting of the National Security Council to review current security challenges and preparedness.",
    content: `<p>Prime Minister Narendra Modi today chaired a meeting of the National Security Council to assess the current security landscape and review preparedness.</p>
                         <p>The meeting was attended by Defense Minister, Home Minister, National Security Advisor, and chiefs of armed forces. Discussions focused on border security, cyber threats, and internal security challenges.</p>
                         <p>PM Modi emphasized the need for continued vigilance and advanced preparedness to address emerging security threats. He directed officials to ensure seamless coordination between different agencies and to leverage technology for enhanced security.</p>
                         <p>"In today's interconnected world, we need to be prepared for non-traditional security challenges as well, including cyber attacks and economic warfare," the Prime Minister noted.</p>
                         <p>The meeting also reviewed the progress of various defense modernization projects and initiatives to strengthen homeland security. PM Modi commended the security forces for their dedication and sacrifice in protecting the nation.</p>`,
    image:
      "https://images.unsplash.com/photo-1589561253898-768105ca53a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Security",
    date: new Date().toISOString().split("T")[0],
    source: "ANI News",
  },
  {
    id: 4,
    title: "PM Modi to Visit Japan Next Week for Annual Summit",
    summary:
      "Prime Minister Narendra Modi will visit Japan next week for the annual bilateral summit, focusing on strategic partnership and economic cooperation.",
    content: `<p>Prime Minister Narendra Modi will travel to Japan next week for the annual India-Japan bilateral summit. The visit aims to strengthen the Special Strategic and Global Partnership between the two countries.</p>
                         <p>Key agenda items include defense cooperation, economic partnerships, and collaboration in technology and infrastructure development. This will be PM Modi's fifth visit to Japan since taking office, reflecting the importance both countries place on their relationship.</p>
                         <p>"Japan is one of our most important partners in the Indo-Pacific region. Our relationship encompasses trade, investment, defense, technology, and people-to-people ties," the Prime Minister said in a pre-departure statement.</p>
                         <p>The visit is expected to result in several agreements, including in the areas of clean energy, digital partnership, and infrastructure development. Japanese companies are increasingly looking at India as an investment destination and manufacturing hub.</p>
                         <p>PM Modi is also scheduled to meet Japanese business leaders and address the Indian community in Japan during his visit.</p>`,
    image:
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "International",
    date: new Date().toISOString().split("T")[0],
    source: "Ministry of External Affairs",
  },
  {
    id: 5,
    title: "PM Modi Launches Digital Education Initiative for Rural Students",
    summary:
      "Prime Minister Modi launched a new digital education platform aimed at providing quality education to students in remote areas.",
    content: `<p>Prime Minister Narendra Modi today launched the 'Digital Shiksha' initiative, a comprehensive platform designed to bring quality education to students in remote and rural areas.</p>
                         <p>The platform will provide access to digital classrooms, educational content in regional languages, and interactive learning tools. PM Modi emphasized that digital infrastructure is key to ensuring equitable access to education and opportunities for all children, regardless of their geographical location.</p>
                         <p>"Education is the foundation for building a developed India. With Digital Shiksha, we are ensuring that no child is left behind due to lack of access to quality education," the Prime Minister stated.</p>
                         <p>The initiative will partner with leading educational institutions and ed-tech companies to provide curated content aligned with the national curriculum. Special focus will be given to STEM education and skill development.</p>
                         <p>The platform will be available through multiple channels, including mobile apps, web portal, and dedicated television channels, to ensure maximum reach even in areas with limited internet connectivity.</p>`,
    image:
      "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Education",
    date: new Date().toISOString().split("T")[0],
    source: "Ministry of Education",
  },
  {
    id: 6,
    title:
      "PM Modi's Monthly Radio Address 'Mann Ki Baat' to Focus on Environmental Conservation",
    summary:
      "The next episode of PM Modi's radio program 'Mann Ki Baat' will focus on environmental conservation and sustainable living practices.",
    content: `<p>Prime Minister Narendra Modi announced that the next episode of his monthly radio program 'Mann Ki Baat' will focus on environmental conservation and sustainable living practices.</p>
                         <p>In a tweet, PM Modi urged citizens to share their ideas and initiatives related to environmental protection that he can highlight in the program. The episode is expected to emphasize the importance of individual and community actions in addressing climate change and environmental degradation.</p>
                         <p>"Our planet is facing unprecedented environmental challenges. Through small actions in our daily lives, we can collectively make a big difference," the Prime Minister said.</p>
                         <p>The episode will feature stories of individuals and communities who have undertaken innovative environmental conservation projects. It will also highlight government initiatives like the Swachh Bharat Mission and efforts to promote renewable energy.</p>
                         <p>Mann Ki Baat, which completes 100 episodes next month, has become a popular platform for the Prime Minister to connect with citizens and discuss issues of national importance.</p>`,
    image:
      "https://images.unsplash.com/photo-1569163139394-de4e4f43e3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Environment",
    date: new Date().toISOString().split("T")[0],
    source: "PMO India",
  },
  {
    id: 7,
    title: "India Launches National Green Hydrogen Mission with ₹19,744 Crore Investment",
    summary: "Cabinet approves National Green Hydrogen Mission to make India global hub for green hydrogen production and export.",
    content: "<p>The Union Cabinet, chaired by Prime Minister Narendra Modi, has approved the National Green Hydrogen Mission with an initial outlay of ₹19,744 crore. The mission aims to make India a global hub for production, usage, and export of green hydrogen and its derivatives.</p><p>The mission will significantly contribute to India's goals of achieving net zero emissions by 2070 and reducing dependence on fossil fuel imports. It is expected to attract investments worth over ₹8 lakh crore and create more than 6 lakh jobs.</p><p>Key components include strategic interventions for green hydrogen transition, pilot projects, research and development, and skill development programs.</p>",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Energy",
    date: new Date().toISOString().split("T")[0],
    source: "Ministry of New and Renewable Energy"
  },
  {
    id: 8,
    title: "PM Modi Inaugurates New Parliament Building",
    summary: "New state-of-the-art Parliament building inaugurated, featuring modern amenities and cultural heritage elements.",
    content: "<p>Prime Minister Narendra Modi inaugurated the new Parliament building, marking a significant milestone in India's democratic journey. The new building features modern technology, expanded seating capacity, and incorporates elements from India's rich cultural heritage.</p><p>The new complex can accommodate 888 members in the Lok Sabha and 300 in the Rajya Sabha, compared to 552 and 250 respectively in the old building. It features constitutional values and cultural traditions through dedicated artwork and installations.</p><p>The building is designed with sustainability features and advanced digital systems, making it future-ready for the next 150 years.</p>",
    image: "https://images.unsplash.com/photo-1582481725276-6a5c8c9e2c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Infrastructure",
    date: new Date().toISOString().split("T")[0],
    source: "Press Information Bureau"
  },
  {
    id: 9,
    title: "Digital India Act Framework Released for Public Consultation",
    summary: "New comprehensive legal framework proposed to govern digital ecosystem and emerging technologies.",
    content: "<p>The Ministry of Electronics and Information Technology has released the draft Digital India Act for public consultation. The new legislation aims to replace the two-decade-old Information Technology Act and create a modern, comprehensive legal framework for India's growing digital ecosystem.</p><p>The Act addresses emerging challenges including user rights protection, ethical AI governance, competition in digital markets, and regulation of new technologies like blockchain and元宇宙. It proposes establishing dedicated regulatory bodies for digital competition and online safety.</p><p>The framework emphasizes principles of open internet, innovation, and accountability while ensuring digital sovereignty and security.</p>",
    image: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Technology",
    date: new Date().toISOString().split("T")[0],
    source: "MeitY"
  },
  {
    id: 10,
    title: "National Education Policy Implementation Reaches 75% Completion",
    summary: "NEP 2020 implementation shows significant progress with 75% of action items completed.",
    content: "<p>The implementation of the National Education Policy 2020 has reached 75% completion, according to the Education Ministry's latest review. Major achievements include the establishment of the National Credit Framework, multiple entry-exit options in higher education, and integration of vocational education from school level.</p><p>The PM SHRI Schools scheme has been launched to upgrade 14,500 schools as model institutions implementing NEP. Over 3,000 institutions have been granted autonomy, and 100+ foreign universities are in process of setting up campuses in India.</p><p>The remaining 25% implementation focuses on teacher training, curriculum reform, and establishing the Higher Education Commission of India.</p>",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Education",
    date: new Date().toISOString().split("T")[0],
    source: "Ministry of Education"
  },
  {
    id: 11,
    title: "Ayushman Bharat Scheme Crosses 25 Crore Beneficiary Milestone",
    summary: "World's largest health protection scheme achieves new milestone in healthcare coverage.",
    content: "<p>Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) has crossed 25 crore beneficiary mark, providing health coverage to the most vulnerable sections of society. The scheme has authorized over 5 crore hospital admissions worth ₹61,500 crore since its launch in 2018.</p><p>Recent expansions include coverage for transgender persons, mental health treatments, and addition of new medical procedures. The scheme now covers 1,949 procedures across 27 specialties at over 26,000 empaneled hospitals.</p><p>Digital initiatives like the Ayushman Bharat Digital Mission have created health IDs for over 50 crore citizens, enabling seamless access to healthcare services.</p>",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Healthcare",
    date: new Date().toISOString().split("T")[0],
    source: "National Health Authority"
  },
  {
    id: 12,
    title: "PM Modi's Monthly Radio Address 'Mann Ki Baat' to Focus on Environmental Conservation",
    summary: "The next episode of PM Modi's radio program 'Mann Ki Baat' will focus on environmental conservation and sustainable living practices.",
    content: "<p>Prime Minister Narendra Modi announced that the next episode of his monthly radio program 'Mann Ki Baat' will focus on environmental conservation and sustainable living practices.</p><p>In a tweet, PM Modi urged citizens to share their ideas and initiatives related to environmental protection that he can highlight in the program. The episode is expected to emphasize the importance of individual and community actions in addressing climate change and environmental degradation.</p><p>Our planet is facing unprecedented environmental challenges. Through small actions in our daily lives, we can collectively make a big difference, the Prime Minister said.</p><p>The episode will feature stories of individuals and communities who have undertaken innovative environmental conservation projects. It will also highlight government initiatives like the Swachh Bharat Mission and efforts to promote renewable energy.</p><p>Mann Ki Baat, which completes 100 episodes next month, has become a popular platform for the Prime Minister to connect with citizens and discuss issues of national importance.</p>",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Environment",
   date: new Date().toISOString().split("T")[0],
    source: "PMO India"
  },
  {
    id: 47,
    title: "GST Council Meeting Concludes; Tax Rates Revised on Multiple Items",
    summary: "The 52nd GST Council meeting announced rate rationalization for several goods and services, aiming to simplify the tax structure and boost compliance.",
    content: "<p>The 52nd meeting of the GST Council, chaired by Union Finance Minister Nirmala Sitharaman, concluded today with major decisions on rate rationalization and compliance measures.</p><p>The Council recommended reducing the GST rate on liquid jaggery from 18% to 5% and on pencil sharpeners from 18% to 12%. It also decided to exempt GST on satellite launch services provided by private organizations to boost the space sector.</p><p>To curb tax evasion, the Council approved biometric-based Aadhaar authentication for new registrants on a pilot basis. Measures to streamline GST return filing and improve the input tax credit mechanism were also discussed.</p><p>Finance Minister Sitharaman stated, 'These changes are aimed at simplifying the tax structure, reducing litigation, and fostering ease of doing business.'</p><p>The Council also formed a Group of Ministers (GoM) to examine the issue of tax rate rationalization for online gaming and casinos, with a report expected in the next meeting.</p>",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "GST",
    date: new Date().toISOString().split("T")[0],
    source: "Ministry of Finance"
}
  
];

// DOM elements
const newsContainer = document.getElementById("news-container");
const noResults = document.getElementById("no-results");
const loadingIndicator = document.getElementById("loading-indicator");
const dateFilter = document.getElementById("date-filter");
const quickFilters = document.querySelectorAll(".category-filter");
const popupOverlay = document.getElementById("news-popup");
const popupClose = document.getElementById("popup-close");
const popupImage = document.getElementById("popup-image");
const popupCategory = document.getElementById("popup-category");
const popupDate = document.getElementById("popup-date");
const popupSource = document.getElementById("popup-source");
const popupTitle = document.getElementById("popup-title");
const popupContent = document.getElementById("popup-content");

// Set today's date as default in the date filter
dateFilter.value = new Date().toISOString().split("T")[0];

// Function to format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Function to render news items
function renderNewsItems(newsItems) {
  newsContainer.innerHTML = "";

  if (newsItems.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  newsItems.forEach((news) => {
    const newsItem = document.createElement("div");
    newsItem.className =
      "bg-white rounded-xl shadow-lg overflow-hidden news-card news-item";
    newsItem.innerHTML = `
                    <div class="h-48 overflow-hidden">
                        <img src="${news.image}" alt="${
      news.title
    }" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">${
                              news.category
                            }</span>
                            <span class="text-gray-500 text-sm ml-3">${formatDate(
                              news.date
                            )}</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-3">${
                          news.title
                        }</h3>
                        <p class="text-gray-600 mb-4">${news.summary}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">Source: ${
                              news.source
                            }</span>
                            <button class="read-more-btn text-orange-600 hover:text-orange-800 font-medium" data-id="${
                              news.id
                            }">
                                Read More <i class="fas fa-arrow-right ml-1 text-xs"></i>
                            </button>
                        </div>
                    </div>
                `;
    newsContainer.appendChild(newsItem);
  });

  // Add event listeners to "Read More" buttons
  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const newsId = parseInt(this.getAttribute("data-id"));
      showNewsDetails(newsId);
    });
  });
}

// Function to show news details in popup
function showNewsDetails(newsId) {
  const newsItem = newsData.find((item) => item.id === newsId);

  if (newsItem) {
    popupImage.src = newsItem.image;
    popupImage.alt = newsItem.title;
    popupCategory.textContent = newsItem.category;
    popupDate.textContent = formatDate(newsItem.date);
    popupSource.textContent = `Source: ${newsItem.source}`;
    popupTitle.textContent = newsItem.title;
    popupContent.innerHTML = newsItem.content;

    // Set up share buttons
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(newsItem.title);

    document.querySelector(
      ".share-button.facebook"
    ).href = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    document.querySelector(
      ".share-button.twitter"
    ).href = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
    document.querySelector(
      ".share-button.whatsapp"
    ).href = `https://wa.me/?text=${shareText}%20${shareUrl}`;
    document.querySelector(
      ".share-button.linkedin"
    ).href = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

    // Show popup
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }
}

// Function to close popup
function closePopup() {
  popupOverlay.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
}

// Function to filter news by date
function filterNewsByDate(date) {
  loadingIndicator.classList.remove("hidden");

  // Simulate loading delay
  setTimeout(() => {
    const filteredNews = newsData.filter((news) => news.date === date);
    renderNewsItems(filteredNews);
    loadingIndicator.classList.add("hidden");
  }, 500);
}

// Function to filter news by days ago
function filterNewsByDays(days) {
  loadingIndicator.classList.remove("hidden");

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() - days);
  const dateString = targetDate.toISOString().split("T")[0];

  // Update date filter value
  dateFilter.value = dateString;

  // Simulate loading delay
  setTimeout(() => {
    const filteredNews = newsData.filter((news) => news.date === dateString);
    renderNewsItems(filteredNews);
    loadingIndicator.classList.add("hidden");

    // Update active state of quick filter buttons
    quickFilters.forEach((button) => {
      if (parseInt(button.getAttribute("data-days")) === days) {
        button.classList.add("active", "bg-orange-100", "text-orange-800");
      } else {
        button.classList.remove("active", "bg-orange-100", "text-orange-800");
        button.classList.add("bg-gray-100", "text-gray-800");
      }
    });
  }, 500);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Load today's news initially
  filterNewsByDate(new Date().toISOString().split("T")[0]);

  // Add event listener for date filter
  dateFilter.addEventListener("change", (e) => {
    filterNewsByDate(e.target.value);

    // Remove active state from quick filters when using custom date
    quickFilters.forEach((button) => {
      button.classList.remove("active", "bg-orange-100", "text-orange-800");
      button.classList.add("bg-gray-100", "text-gray-800");
    });
  });

  // Add event listeners for quick filters
  quickFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const days = parseInt(button.getAttribute("data-days"));
      filterNewsByDays(days);
    });
  });

  // Add event listener for popup close button
  popupClose.addEventListener("click", closePopup);

  // Close popup when clicking outside content
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });

  // Close popup with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popupOveिrlay.classList.contains("active")) {
      closePopup();
    }
  });
});

// Function to share on WhatsApp
function shareOnWhatsApp() {
  const shareText = `Check out this PM Scheme: ${currentScheme.name} - ${currentScheme.description}. Learn more at: ${window.location.href}`;
  const encodedText = encodeURIComponent(shareText);
  window.open(`https://wa.me/?text=${encodedText}`, "_blank");
}

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