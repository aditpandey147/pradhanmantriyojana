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
    id: generateRandomId(),
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
      "PM-KISAN provides assured income support of ₹6,000 per year to eligible farmers via Direct Benefit Transfer. The scheme targets small and marginal landholders, excludes higher-income categories, and works through Aadhaar-linked accounts for transparency. Funds can be used flexibly for seeds, inputs, or household needs, reducing dependence on informal credit and bolstering rural resilience.",
  },
  {
    id: generateRandomId(),
    name: "PM-JAY",
    description: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    fullName: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    launched: "2018",
    benefits:
      "Health coverage up to ₹5 lakh per family per year for secondary and tertiary care",
    eligibility:
      "Identified poor and vulnerable families as per SECC and other criteria",
    officialSite: "https://pmjay.gov.in",
    logo: "fas fa-hospital",
    category: "Health",
    ministry: "Ministry of Health & Family Welfare",
    status: "Active",
    longDescription:
      "PM-JAY is the world’s largest publicly funded health insurance program, offering cashless hospitalization for over 10 crore families at empanelled hospitals. It covers pre- and post-hospitalization, day care, and pre-existing diseases with a paperless, Aadhaar-enabled process to reduce out-of-pocket expenditure.",
  },
  {
    id: generateRandomId(),
    name: "PM-UJJWALA",
    description: "Pradhan Mantri Ujjwala Yojana",
    fullName: "Pradhan Mantri Ujjwala Yojana",
    launched: "2016",
    benefits: "Free LPG connection, with support for first refill and stove",
    eligibility:
      "Women from BPL/SECC-identified households and other notified categories",
    officialSite: "https://www.pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Social Welfare",
    ministry: "Ministry of Petroleum & Natural Gas",
    status: "Active",
    longDescription:
      "PMUY provides deposit-free LPG connections to women in poor households to reduce indoor air pollution and drudgery. It improves health outcomes, promotes clean energy use, and empowers women; distribution has expanded to difficult geographies with streamlined e-KYC and portable connections.",
  },
  {
    id: generateRandomId(),
    name: "PM-AWAS",
    description: "Pradhan Mantri Awas Yojana",
    fullName: "Pradhan Mantri Awas Yojana (Urban & Gramin)",
    launched: "2015",
    benefits:
      "Financial assistance/subsidy for pucca houses; interest subsidy via CLSS",
    eligibility: "EWS/LIG/MIG in urban areas; rural houseless/poor households",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing",
    ministry:
      "Ministry of Housing & Urban Affairs; Ministry of Rural Development",
    status: "Active",
    longDescription:
      "PMAY-U and PMAY-G aim for Housing for All through in-situ slum redevelopment, CLSS interest subsidy, beneficiary-led construction, and partnerships. PMAY-G provides grants for pucca houses with basic amenities; PMAY-U emphasizes women ownership and green technologies.",
  },
  {
    id: generateRandomId(),
    name: "PM-SVANidhi",
    description: "PM Street Vendor's AtmaNirbhar Nidhi",
    fullName: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",
    launched: "2020",
    benefits:
      "Collateral-free working capital loans ₹10,000→₹20,000→₹50,000 with interest subsidy & digital cashback",
    eligibility: "Street/phal/pheri vendors in urban areas (as notified)",
    officialSite: "https://pmsvanidhi.mohua.gov.in",
    logo: "fas fa-store",
    category: "Financial Inclusion",
    ministry: "Ministry of Housing & Urban Affairs",
    status: "Active",
    longDescription:
      "Launched amid COVID-19, PM SVANidhi provides graded, collateral-free loans to street vendors with incentives for digital transactions and timely repayment. It formalizes credit access, supports inventory restocking, and integrates vendors with ULBs and payments ecosystems.",
  },
  {
    id: generateRandomId(),
    name: "PM-MUDRA",
    description: "Pradhan Mantri MUDRA Yojana",
    fullName:
      "Pradhan Mantri Micro Units Development & Refinance Agency Yojana",
    launched: "2015",
    benefits:
      "Shishu/Kishore/Tarun loans up to ₹10 lakh for micro & small units",
    eligibility: "Non-corporate, non-farm micro/small enterprises",
    officialSite: "https://www.mudra.org.in",
    logo: "fas fa-briefcase",
    category: "MSME Credit",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "PMMY enables banks/NBFCs/MFIs to extend collateral-free loans to micro-enterprises under Shishu, Kishore, and Tarun categories. It fuels entrepreneurship, employment, and formalization, with special outreach to women and first-generation entrepreneurs.",
  },
  {
    id: generateRandomId(),
    name: "PM-KUSUM",
    description: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
    fullName: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
    launched: "2019",
    benefits:
      "Subsidy for solar pumps; solarization of grid-connected pumps; small solar plants on barren land",
    eligibility: "Individual/group farmers, cooperatives, panchayats, FPOs",
    officialSite: "https://pmkusum.mnre.gov.in",
    logo: "fas fa-solar-panel",
    category: "Renewable Energy",
    ministry: "Ministry of New & Renewable Energy",
    status: "Active",
    longDescription:
      "PM-KUSUM reduces diesel dependence and DISCOM burden by enabling farmers to install standalone solar pumps, solarize existing pumps, and set up decentralized solar plants to sell surplus power—creating income opportunities and climate resilience.",
  },
  {
    id: generateRandomId(),
    name: "PM-FME",
    description: "Formalisation of Micro Food Processing Enterprises",
    fullName:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
    launched: "2020",
    benefits:
      "35% credit-linked capital subsidy; ODOP branding & capacity building",
    eligibility: "Individual units, SHGs, FPOs, cooperatives",
    officialSite: "https://pmfme.mofpi.gov.in",
    logo: "fas fa-utensils",
    category: "Food Processing",
    ministry: "Ministry of Food Processing Industries",
    status: "Active",
    longDescription:
      "PMFME supports micro units with capital subsidy, training, standards, and market linkage using an ODOP approach. It reduces wastage, improves value addition, and boosts incomes—especially for women and SC/ST entrepreneurs.",
  },
  {
    id: generateRandomId(),
    name: "PMFBY",
    description: "Pradhan Mantri Fasal Bima Yojana",
    fullName: "Pradhan Mantri Fasal Bima Yojana",
    launched: "2016",
    benefits:
      "Crop insurance: 2% Kharif, 1.5% Rabi, 5% commercial/horticulture crops (farmer share)",
    eligibility: "All farmers of notified crops/areas",
    officialSite: "https://pmfby.gov.in",
    logo: "fas fa-seedling",
    category: "Agriculture Risk",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "PMFBY provides comprehensive risk cover from sowing to post-harvest for notified crops, leveraging remote sensing/drones for assessment and faster claims, stabilizing farm incomes against climate and pest shocks.",
  },
  {
    id: generateRandomId(),
    name: "PMJDY",
    description: "Pradhan Mantri Jan Dhan Yojana",
    fullName: "Pradhan Mantri Jan Dhan Yojana",
    launched: "2014",
    benefits:
      "Zero-balance accounts, RuPay card, overdraft, micro-insurance, DBT platform",
    eligibility: "All unbanked Indian citizens",
    officialSite: "https://pmjdy.gov.in",
    logo: "fas fa-university",
    category: "Financial Inclusion",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "PMJDY enables universal banking access with basic savings accounts and RuPay, integrates beneficiaries for DBT, and catalyzes digital and social security coverage via linked schemes.",
  },
  {
    id: generateRandomId(),
    name: "PMKVY",
    description: "Pradhan Mantri Kaushal Vikas Yojana",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana",
    launched: "2015",
    benefits:
      "Free short-term skill training, RPL, certification & placement support",
    eligibility: "Youth (focus on unemployed, women, disadvantaged)",
    officialSite: "https://www.pmkvyofficial.org",
    logo: "fas fa-chalkboard-teacher",
    category: "Skill Development",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    status: "Active",
    longDescription:
      "PMKVY equips youth with industry-aligned skills through NSQF curricula, quality-assured training partners, and incentives for outcomes, improving employability and entrepreneurship.",
  },
  {
    id: generateRandomId(),
    name: "PMEGP",
    description: "Pradhan Mantri Employment Generation Programme",
    fullName: "Pradhan Mantri Employment Generation Programme",
    launched: "2008",
    benefits: "Credit-linked subsidy 15–35% for micro-enterprises",
    eligibility:
      "Individuals 18+, SHGs, institutions; project cost limits apply",
    officialSite: "https://www.kviconline.gov.in",
    logo: "fas fa-people-carry",
    category: "Employment/MSME",
    ministry: "Ministry of MSME",
    status: "Active",
    longDescription:
      "PMEGP promotes self-employment by supporting new micro-units in manufacturing and services with margin subsidy. It prioritizes rural/aspirational districts, weaker sections, and traditional industries.",
  },
  {
    id: generateRandomId(),
    name: "PMMSY",
    description: "Pradhan Mantri Matsya Sampada Yojana",
    fullName: "Pradhan Mantri Matsya Sampada Yojana",
    launched: "2020",
    benefits:
      "Support for hatcheries, aquaculture, cold chain, marketing, insurance",
    eligibility: "Fishers, fish farmers, SHGs/FPOs, entrepreneurs",
    officialSite: "https://pmmsy.dof.gov.in",
    logo: "fas fa-fish",
    category: "Fisheries",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    status: "Active",
    longDescription:
      "PMMSY aims to boost fish production, exports, and livelihoods through end-to-end value chain support, sustainable practices, and infrastructure modernization.",
  },
  {
    id: generateRandomId(),
    name: "PMUY 2.0",
    description: "Pradhan Mantri Ujjwala Yojana Phase 2",
    fullName: "Pradhan Mantri Ujjwala Yojana 2.0",
    launched: "2021",
    benefits:
      "New LPG connections with first refill & stove; simplified KYC; migrant-centric",
    eligibility: "Poor households not covered earlier; migrants",
    officialSite: "https://www.pmuy.gov.in",
    logo: "fas fa-burn",
    category: "Social Welfare",
    ministry: "Ministry of Petroleum & Natural Gas",
    status: "Active",
    longDescription:
      "PMUY 2.0 extends clean cooking access to additional poor households and migrants with streamlined documentation and initial refill/stove support to accelerate adoption.",
  },
  {
    id: generateRandomId(),
    name: "PMGDISHA",
    description: "Pradhan Mantri Gramin Digital Saksharta Abhiyan",
    fullName: "Pradhan Mantri Gramin Digital Saksharta Abhiyan",
    launched: "2017",
    benefits: "Basic digital literacy for one person per rural household",
    eligibility: "Eligible rural households as per guidelines",
    officialSite: "https://www.pmgdisha.in",
    logo: "fas fa-laptop",
    category: "Digital Literacy",
    ministry: "Ministry of Electronics & IT",
    status: "Active",
    longDescription:
      "PMGDISHA bridges the digital divide by training rural citizens in device use, internet, UPI, and online services—fueling e-governance uptake and financial inclusion.",
  },
  {
    id: generateRandomId(),
    name: "PMJJBY",
    description: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    fullName: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    launched: "2015",
    benefits: "Life insurance cover ₹2 lakh; auto-debit premium",
    eligibility: "18–50 years with savings bank account",
    officialSite: "https://jansuraksha.gov.in",
    logo: "fas fa-user-shield",
    category: "Insurance",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "PMJJBY offers affordable annual life cover for low-income households via bank-led enrollment and auto-debit, enhancing financial security for families.",
  },
  {
    id: generateRandomId(),
    name: "PMSBY",
    description: "Pradhan Mantri Suraksha Bima Yojana",
    fullName: "Pradhan Mantri Suraksha Bima Yojana",
    launched: "2015",
    benefits:
      "Accident insurance: ₹2 lakh (death/total disability), ₹1 lakh (partial)",
    eligibility: "18–70 years with bank account; annual auto-debit",
    officialSite: "https://jansuraksha.gov.in",
    logo: "fas fa-first-aid",
    category: "Insurance",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "PMSBY provides very low-premium accident cover through banks, protecting vulnerable workers and commuters against accidental risks.",
  },
  {
    id: generateRandomId(),
    name: "PM-KMY",
    description: "Pradhan Mantri Kisan Maandhan Yojana",
    fullName: "Pradhan Mantri Kisan Maandhan Yojana",
    launched: "2019",
    benefits: "₹3,000/month pension after 60; govt co-contribution",
    eligibility: "Small/marginal farmers aged 18–40 years",
    officialSite: "https://maandhan.in",
    logo: "fas fa-hand-holding-usd",
    category: "Pension",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "A voluntary, contributory pension for small/marginal farmers with matched government contribution; family pension at 50% to spouse on demise.",
  },
  {
    id: generateRandomId(),
    name: "PM-SYM",
    description: "Pradhan Mantri Shram Yogi Maandhan",
    fullName: "Pradhan Mantri Shram Yogi Maandhan Yojana",
    launched: "2019",
    benefits: "₹3,000/month pension after 60; family pension 50%",
    eligibility: "Unorganized workers, income ≤ ₹15,000/month, age 18–40",
    officialSite: "https://maandhan.in",
    logo: "fas fa-users",
    category: "Pension",
    ministry: "Ministry of Labour & Employment",
    status: "Active",
    longDescription:
      "PM-SYM provides old-age income security to unorganized workers via small monthly contributions matched by government; simple CSC-based enrollment.",
  },
  {
    id: generateRandomId(),
    name: "APY",
    description: "Atal Pension Yojana",
    fullName: "Atal Pension Yojana",
    launched: "2015",
    benefits: "Defined pension ₹1,000–₹5,000/month post-60; spouse benefit",
    eligibility:
      "Citizens aged 18–40 with bank account; focus on unorganized workers",
    officialSite: "https://npstrust.org.in/atal-pension-yojana",
    logo: "fas fa-piggy-bank",
    category: "Pension",
    ministry: "Ministry of Finance (PFRDA)",
    status: "Active",
    longDescription:
      "APY is a guaranteed pension scheme encouraging long-term savings among unorganized workers; contributions are auto-debited and portable across banks.",
  },
  {
    id: generateRandomId(),
    name: "Stand Up India",
    description: "Stand-Up India Scheme",
    fullName: "Stand-Up India Scheme",
    launched: "2016",
    benefits: "Bank loans ₹10 lakh–₹1 crore for SC/ST and women entrepreneurs",
    eligibility: "SC/ST and women entrepreneurs for greenfield enterprises",
    officialSite: "https://www.standupmitra.in",
    logo: "fas fa-level-up-alt",
    category: "MSME Credit",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "Stand-Up India facilitates bank loans for SC/ST and women to start greenfield enterprises in manufacturing, services, or trading with handholding support.",
  },
  {
    id: generateRandomId(),
    name: "PM Street Lighting LED",
    description: "Street Lighting National Programme (SLNP) & UJALA (LED)",
    fullName: "UJALA & SLNP (Energy Efficiency)",
    launched: "2015",
    benefits:
      "Affordable LED bulbs; municipal LED streetlights; energy savings",
    eligibility: "Households, ULBs via EESL",
    officialSite: "https://eeslindia.org",
    logo: "fas fa-lightbulb",
    category: "Energy Efficiency",
    ministry: "Ministry of Power",
    status: "Active",
    longDescription:
      "Through EESL, UJALA and SLNP distribute LEDs to households and retrofit municipal streetlights, cutting bills and emissions via an innovative pay-as-you-save model.",
  },
  {
    id: generateRandomId(),
    name: "BBBP",
    description: "Beti Bachao Beti Padhao",
    fullName: "Beti Bachao Beti Padhao",
    launched: "2015",
    benefits:
      "Multi-sectoral interventions to improve CSR and girls’ education",
    eligibility: "All districts (phased) with focus on low CSR blocks",
    officialSite: "https://wcd.nic.in",
    logo: "fas fa-girl",
    category: "Women & Child",
    ministry: "Ministry of Women & Child Development",
    status: "Active",
    longDescription:
      "BBBP addresses declining Child Sex Ratio and promotes girls’ survival, protection, and education via awareness, enforcement, and service convergence.",
  },
  {
    id: generateRandomId(),
    name: "SSY",
    description: "Sukanya Samriddhi Yojana",
    fullName: "Sukanya Samriddhi Yojana",
    launched: "2015",
    benefits: "Tax-benefitted small savings scheme for girl child",
    eligibility: "Girl child ≤10 years; account by parent/guardian",
    officialSite: "https://www.indiapost.gov.in",
    logo: "fas fa-baby",
    category: "Savings",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "SSY is a long-term small savings scheme with attractive interest and EEE tax benefits to support education/marriage of a girl child with partial withdrawal options.",
  },
  {
    id: generateRandomId(),
    name: "SBM",
    description: "Swachh Bharat Mission (Urban/Gramin)",
    fullName: "Swachh Bharat Mission",
    launched: "2014",
    benefits: "ODF, toilets, solid & liquid waste management",
    eligibility: "Urban Local Bodies, Gram Panchayats, households",
    officialSite: "https://swachhbharatmission.gov.in",
    logo: "fas fa-toilet",
    category: "Sanitation",
    ministry: "MoHUA & Ministry of Jal Shakti",
    status: "Active",
    longDescription:
      "SBM drives sanitation behavior change, toilet construction, and waste management infrastructure towards clean cities and ODF+ rural areas with community participation.",
  },
  {
    id: generateRandomId(),
    name: "JJM",
    description: "Jal Jeevan Mission (Har Ghar Jal)",
    fullName: "Jal Jeevan Mission",
    launched: "2019",
    benefits: "Functional Household Tap Connection (FHTC) with potable water",
    eligibility: "Rural households; urban under AMRUT 2.0",
    officialSite: "https://jaljeevanmission.gov.in",
    logo: "fas fa-faucet",
    category: "Water Supply",
    ministry: "Ministry of Jal Shakti",
    status: "Active",
    longDescription:
      "JJM aims to provide tap water to every rural household with water quality monitoring, source sustainability, and community-led operations and maintenance.",
  },
  {
    id: generateRandomId(),
    name: "PMGKAY",
    description: "Pradhan Mantri Garib Kalyan Anna Yojana",
    fullName: "Pradhan Mantri Garib Kalyan Anna Yojana",
    launched: "2020",
    benefits: "Free additional foodgrains to NFSA beneficiaries during crises",
    eligibility: "NFSA (Priority/Antyodaya) households",
    officialSite: "https://dfpd.gov.in",
    logo: "fas fa-bread-slice",
    category: "Food Security",
    ministry: "Department of Food & Public Distribution",
    status: "Active",
    longDescription:
      "PMGKAY provides free foodgrains to NFSA beneficiaries to cushion vulnerable households during disruptions like the pandemic, complementing regular NFSA entitlements.",
  },
  {
    id: generateRandomId(),
    name: "PMKSY",
    description: "Pradhan Mantri Krishi Sinchayee Yojana",
    fullName: "Pradhan Mantri Krishi Sinchayee Yojana",
    launched: "2015",
    benefits:
      "‘Har Khet Ko Pani’ irrigation, watershed, micro-irrigation (PMKSY-Per Drop More Crop)",
    eligibility: "Farmers; state projects",
    officialSite: "https://pmksy.gov.in",
    logo: "fas fa-tint",
    category: "Irrigation",
    ministry: "Ministry of Jal Shakti; DAC&FW; DoLR",
    status: "Active",
    longDescription:
      "PMKSY improves on-farm water use efficiency via micro-irrigation, accelerates irrigation completion, and restores watersheds for drought-proofing and productivity.",
  },
  {
    id: generateRandomId(),
    name: "PM-Vishwakarma",
    description: "PM Vishwakarma",
    fullName: "PM Vishwakarma Kaushal Samman",
    launched: "2023",
    benefits:
      "Recognition ID, toolkit e-vouchers, credit support, skill training, market linkage",
    eligibility: "Traditional artisans & craftspeople in 18 trades",
    officialSite: "https://pmvishwakarma.gov.in",
    logo: "fas fa-hammer",
    category: "Artisans/Skilling",
    ministry: "Ministry of MSME",
    status: "Active",
    longDescription:
      "PM Vishwakarma supports traditional artisans with formal recognition, skilling, modern toolkits, concessional credit, and branding/market access to enhance livelihoods.",
  },
  {
    id: generateRandomId(),
    name: "PM-DAKSH",
    description: "Pradhan Mantri DAKSH",
    fullName: "Pradhan Mantri Dakshta Aur Kushalta Sampann Hitgrahi",
    launched: "2021",
    benefits:
      "Free upskilling/reskilling, entrepreneurship support with stipend",
    eligibility: "SCs, OBCs, EBCs, DNTs per scheme norms",
    officialSite: "https://pmdaksh.dosje.gov.in",
    logo: "fas fa-user-graduate",
    category: "Skill Development",
    ministry: "Ministry of Social Justice & Empowerment",
    status: "Active",
    longDescription:
      "PM-DAKSH provides short-term training, entrepreneurship inputs, and placements for targeted groups to improve employability and income generation.",
  },
  {
    id: generateRandomId(),
    name: "PM SHRI",
    description: "PM Schools for Rising India",
    fullName: "PM SHRI Schools",
    launched: "2022",
    benefits: "Upgradation of schools as NEP-aligned exemplar institutions",
    eligibility: "Selected govt schools meeting criteria",
    officialSite: "https://pmshrischools.education.gov.in",
    logo: "fas fa-school",
    category: "Education",
    ministry: "Ministry of Education",
    status: "Active",
    longDescription:
      "PM SHRI develops model schools with modern infrastructure, pedagogy, and holistic learning per NEP 2020, fostering best practices and community engagement.",
  },
  {
    id: generateRandomId(),
    name: "ABRY",
    description: "Atmanirbhar Bharat Rojgar Yojana",
    fullName: "Atmanirbhar Bharat Rojgar Yojana",
    launched: "2020",
    benefits: "EPF subsidy for new employment in eligible establishments",
    eligibility: "New joinees & establishments meeting EPF criteria",
    officialSite: "https://epfindia.gov.in",
    logo: "fas fa-id-badge",
    category: "Employment",
    ministry: "Ministry of Labour & Employment",
    status: "Concluded",
    longDescription:
      "ABRY incentivized job creation by subsidizing EPF contributions for new hires during post-pandemic recovery, reducing hiring costs for employers.",
  },
  {
    id: generateRandomId(),
    name: "NPS Traders",
    description: "National Pension Scheme for Traders/Shopkeepers",
    fullName: "Pradhan Mantri Laghu Vyapari Maandhan (NPS-Traders)",
    launched: "2019",
    benefits: "₹3,000/month pension post-60 with co-contribution",
    eligibility:
      "Small traders/ shopkeepers with turnover ≤ ₹1.5 crore, age 18–40",
    officialSite: "https://maandhan.in",
    logo: "fas fa-store-alt",
    category: "Pension",
    ministry: "Ministry of Labour & Employment",
    status: "Active",
    longDescription:
      "A voluntary, contributory pension for small traders/ shopkeepers to ensure old-age income security with government co-contribution and spouse benefits.",
  },
  {
    id: generateRandomId(),
    name: "PM eVIDYA",
    description: "One Nation, One Digital Platform",
    fullName: "PM eVIDYA",
    launched: "2020",
    benefits:
      "Diksha platform, Swayam/Swayam Prabha, radio/podcast for learning",
    eligibility: "School & higher education learners/teachers",
    officialSite: "https://diksha.gov.in",
    logo: "fas fa-tablet-alt",
    category: "Digital Education",
    ministry: "Ministry of Education",
    status: "Active",
    longDescription:
      "PM eVIDYA integrates digital/TV/radio platforms for continuous learning, teacher training, and accessible content in multiple languages, bridging learning gaps.",
  },
  {
    id: generateRandomId(),
    name: "PM-POSHAN",
    description: "PM POSHAN (Mid-Day Meal)",
    fullName: "Pradhan Mantri Poshan Shakti Nirman",
    launched: "2021",
    benefits:
      "Nutritious meals to school children; nutritional gardens; Tithi Bhojan",
    eligibility: "Students of govt/ govt-aided primary & upper primary schools",
    officialSite: "https://education.gov.in",
    logo: "fas fa-utensil-spoon",
    category: "Nutrition",
    ministry: "Ministry of Education",
    status: "Active",
    longDescription:
      "PM POSHAN enhances child nutrition, school attendance, and learning outcomes through hot cooked meals, kitchen gardens, and community participation.",
  },
  {
    id: generateRandomId(),
    name: "PM Gati Shakti",
    description: "National Master Plan for Multi-modal Connectivity",
    fullName: "PM Gati Shakti",
    launched: "2021",
    benefits:
      "Integrated planning/monitoring of infrastructure projects via GIS platform",
    eligibility: "Central/state agencies; industry benefits indirectly",
    officialSite: "https://gati.gov.in",
    logo: "fas fa-project-diagram",
    category: "Infrastructure",
    ministry: "Ministry of Commerce & Industry",
    status: "Active",
    longDescription:
      "Gati Shakti breaks departmental silos by unifying infra planning across logistics, rail, road, port, and energy for faster execution and reduced costs.",
  },
  {
    id: generateRandomId(),
    name: "AB-HWC",
    description: "Ayushman Bharat – Health & Wellness Centres",
    fullName: "Ayushman Bharat – Health & Wellness Centres",
    launched: "2018",
    benefits: "Comprehensive primary healthcare with expanded services",
    eligibility: "All citizens in catchment areas",
    officialSite: "https://nhm.gov.in",
    logo: "fas fa-clinic-medical",
    category: "Health",
    ministry: "Ministry of Health & Family Welfare",
    status: "Active",
    longDescription:
      "AB-HWC upgrades Sub-Health Centres/PHCs to deliver preventive, promotive, and curative primary care including NCDs, maternal-child health, and diagnostics.",
  },
  {
    id: generateRandomId(),
    name: "PM POSHAN",
    description: "PM POSHAN (Mid-Day Meal Scheme 2.0)",
    fullName: "Pradhan Mantri POSHAN Shakti Nirman",
    launched: "2021",
    benefits: "Free nutritious meals to school children",
    eligibility: "Students of government and govt-aided schools",
    officialSite: "https://pmposhan.education.gov.in",
    logo: "fas fa-utensils",
    category: "Education",
    ministry: "Ministry of Education",
    status: "Active",
    longDescription:
      "The PM POSHAN scheme is the upgraded version of the Mid-Day Meal programme. It ensures free, nutritious meals to children in government and government-aided schools to improve their nutritional status, encourage school attendance, and reduce dropouts. It covers nearly 11.8 crore children across India."
  },
  {
    id: generateRandomId(),
    name: "PM SHRI Schools",
    description: "PM Schools for Rising India",
    fullName: "Pradhan Mantri Schools for Rising India",
    launched: "2022",
    benefits: "Model schools with modern facilities",
    eligibility: "Selected existing government schools",
    officialSite: "https://pmshrischools.education.gov.in",
    logo: "fas fa-school",
    category: "Education",
    ministry: "Ministry of Education",
    status: "Active",
    longDescription:
      "PM SHRI Schools are centrally sponsored model schools launched in 2022 to provide quality education with modern infrastructure, digital learning tools, and green initiatives. They serve as exemplars for other schools in their region, ensuring holistic education aligned with NEP 2020."
  },
  {
    id: generateRandomId(),
    name: "PM eVIDYA",
    description: "Digital education initiative",
    fullName: "Pradhan Mantri eVIDYA",
    launched: "2020",
    benefits: "Access to online education resources",
    eligibility: "Students, teachers, learners",
    officialSite: "https://diksha.gov.in",
    logo: "fas fa-tablet-alt",
    category: "Digital Education",
    ministry: "Ministry of Education",
    status: "Active",
    longDescription:
      "PM eVIDYA is a digital education initiative launched under Atmanirbhar Bharat Abhiyan to promote online learning. It includes DIKSHA portal, SWAYAM Prabha TV channels, radio podcasts, and e-content for school students and teachers. It has been a vital tool for continuity of education during the COVID-19 pandemic."
  },
  {
    id: generateRandomId(),
    name: "PMKSY",
    description: "Pradhan Mantri Krishi Sinchai Yojana",
    fullName: "Pradhan Mantri Krishi Sinchai Yojana",
    launched: "2015",
    benefits: "Improved irrigation facilities",
    eligibility: "Farmers across India",
    officialSite: "https://pmksy.gov.in",
    logo: "fas fa-tint",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "PMKSY is a national mission to improve irrigation efficiency and expand cultivable land under assured irrigation. It promotes water conservation, micro-irrigation, and watershed development. The scheme’s motto 'Har Khet Ko Pani' aims to provide water to every farm and increase farmers’ productivity sustainably."
  },
  {
    id: generateRandomId(),
    name: "Startup India Seed Fund",
    description: "Seed funding support for startups",
    fullName: "Startup India Seed Fund Scheme",
    launched: "2021",
    benefits: "Financial support for early-stage startups",
    eligibility: "Startups recognized by DPIIT",
    officialSite: "https://seedfund.startupindia.gov.in",
    logo: "fas fa-lightbulb",
    category: "Entrepreneurship",
    ministry: "Ministry of Commerce & Industry",
    status: "Active",
    longDescription:
      "Startup India Seed Fund Scheme provides financial assistance to early-stage startups for proof of concept, prototype development, product trials, and market entry. The scheme is a cornerstone in strengthening India's startup ecosystem, encouraging innovation and entrepreneurship."
  },
  {
    id: generateRandomId(),
    name: "Stand Up India",
    description: "Loan support for SC, ST, and women entrepreneurs",
    fullName: "Stand Up India Scheme",
    launched: "2016",
    benefits: "Bank loans from ₹10 lakh to ₹1 crore",
    eligibility: "SC/ST and women entrepreneurs",
    officialSite: "https://standupmitra.in",
    logo: "fas fa-handshake",
    category: "Entrepreneurship",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "Stand Up India promotes entrepreneurship among Scheduled Castes, Scheduled Tribes, and women by providing loans between ₹10 lakh and ₹1 crore for setting up greenfield enterprises. It focuses on job creation and inclusive growth through financial empowerment."
  },
  {
    id: generateRandomId(),
    name: "PM-VIKAS",
    description: "PM Vishwakarma Kaushal Samman",
    fullName: "Pradhan Mantri Vishwakarma Kaushal Samman",
    launched: "2023",
    benefits: "Skill training and financial support for artisans",
    eligibility: "Traditional artisans and craftspeople",
    officialSite: "https://pmvishwakarma.gov.in",
    logo: "fas fa-tools",
    category: "Skill Development",
    ministry: "Ministry of MSME",
    status: "Active",
    longDescription:
      "PM Vishwakarma Kaushal Samman (PM-VIKAS) is aimed at supporting traditional artisans and craftspeople by offering skill training, toolkit incentives, and collateral-free loans. It helps in preserving traditional crafts while improving livelihood opportunities for artisans."
  },
  {
    id: generateRandomId(),
    name: "PM Vaya Vandana Yojana",
    description: "Pension scheme for senior citizens",
    fullName: "Pradhan Mantri Vaya Vandana Yojana",
    launched: "2017",
    benefits: "Pension at guaranteed rate of return",
    eligibility: "Senior citizens (60 years and above)",
    officialSite: "https://licindia.in",
    logo: "fas fa-user-clock",
    category: "Social Security",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "PM Vaya Vandana Yojana is a pension scheme for senior citizens introduced by the Government of India through LIC. It provides a guaranteed return of 7.4% per annum for 10 years, ensuring financial security and stability for elderly citizens."
  },
  {
    id: generateRandomId(),
    name: "PMGKAY",
    description: "Pradhan Mantri Garib Kalyan Anna Yojana",
    fullName: "Pradhan Mantri Garib Kalyan Anna Yojana",
    launched: "2020",
    benefits: "Free food grains for poor households",
    eligibility: "Ration card holders and poor households",
    officialSite: "https://nfsa.gov.in",
    logo: "fas fa-bread-slice",
    category: "Food Security",
    ministry: "Ministry of Consumer Affairs, Food & Public Distribution",
    status: "Active",
    longDescription:
      "PMGKAY is a food security scheme launched during the COVID-19 pandemic, providing 5 kg of free food grains per person per month to NFSA beneficiaries. It has been extended multiple times to support poor households during economic hardships."
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat Digital Mission",
    description: "Digital health ID initiative",
    fullName: "Ayushman Bharat Digital Mission",
    launched: "2021",
    benefits: "Unique health ID and digital health records",
    eligibility: "All Indian citizens",
    officialSite: "https://abdm.gov.in",
    logo: "fas fa-notes-medical",
    category: "Health",
    ministry: "Ministry of Health & Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat Digital Mission (ABDM) aims to create a unified digital health infrastructure by providing every citizen with a unique Health ID. It enables easy access to medical records, telemedicine, and digital health services across India."
  },
  {
    id: generateRandomId(),
    name: "BharatNet Project",
    description: "Broadband connectivity to rural areas",
    fullName: "BharatNet Project",
    launched: "2011",
    benefits: "High-speed broadband for gram panchayats",
    eligibility: "Rural population",
    officialSite: "https://bharatnet.bbnl.nic.in",
    logo: "fas fa-network-wired",
    category: "Digital India",
    ministry: "Ministry of Communications",
    status: "Active",
    longDescription:
      "BharatNet is the world’s largest rural broadband project aiming to connect all 2.5 lakh gram panchayats of India with high-speed internet through optical fiber. It plays a key role in Digital India by improving e-governance, education, and health services in rural regions."
  },
  {
    id: generateRandomId(),
    name: "Smart Cities Mission",
    description: "Urban renewal and retrofitting program",
    fullName: "Smart Cities Mission",
    launched: "2015",
    benefits: "Urban infrastructure, IT connectivity, housing, transport",
    eligibility: "Selected Indian cities",
    officialSite: "https://smartcities.gov.in",
    logo: "fas fa-city",
    category: "Urban Development",
    ministry: "Ministry of Housing & Urban Affairs",
    status: "Active",
    longDescription:
      "Smart Cities Mission is an urban renewal project launched in 2015 to develop 100 cities across India with modern infrastructure, smart governance, sustainable housing, and efficient transport. It focuses on technology-driven solutions for urban challenges."
  }
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
  const schemeSlug = createSlug(scheme.description);
  window.history.pushState(null, null, `/${schemeSlug}`);

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
