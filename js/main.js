// Generate random ID for schemes
function generateRandomId() {
  return "PM" + Math.floor(1000 + Math.random() * 9000);
}

// Function to create URL-friendly slug
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & special chars with -
    .replace(/^-+|-+$/g, "");
}

// Sample data for PM schemes
const schemes = [
  {
    id: generateRandomId(),
    name: "PM-KISAN Scheme",
    description:
      "Pradhan Mantri Kisan Samman Nidhi Yojana – Government income support scheme for farmers in India.",
    fullName: "Pradhan Mantri Kisan Samman Nidhi Yojana (PM-KISAN)",
    launched: "2019",
    benefits:
      "₹6,000 per year given in three equal installments directly into farmer bank accounts via Direct Benefit Transfer (DBT).",
    eligibility:
      "Small and marginal farmer families with up to 2 hectares of cultivable land. Excludes institutional landholders, income tax payers, and professionals like doctors/engineers/government employees.",
    officialSite: "https://pmkisan.gov.in",
    logo: "fas fa-tractor",
    category: "Agriculture & Farmer Welfare",
    ministry: "Ministry of Agriculture & Farmers Welfare, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Kisan Samman Nidhi Yojana (PM-KISAN), launched in 2019, is a flagship government scheme aimed at providing direct income support to small and marginal farmers in India. Under this program, eligible farmers receive ₹6,000 annually in three equal installments through Aadhaar-linked bank accounts via the Direct Benefit Transfer (DBT) system. The scheme targets farmers owning up to 2 hectares of cultivable land, excluding institutional landholders, income tax payers, and professionals such as doctors, engineers, and government employees. PM-KISAN enhances farmers' financial security, reduces rural poverty, and promotes agricultural productivity. By eliminating intermediaries, the scheme ensures timely and transparent payments. It complements other central schemes like PM Fasal Bima Yojana for crop insurance and PM Krishi Sinchayee Yojana for irrigation support. With millions of beneficiaries, PM-KISAN strengthens rural livelihoods, fosters inclusive growth, and contributes to the government’s vision of doubling farmers’ income while supporting sustainable agricultural development across India."
  },
  {
    id: generateRandomId(),
    name: "PM-JAY (Ayushman Bharat)",
    description:
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana – World’s largest government health insurance scheme.",
    fullName: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    launched: "2018",
    benefits:
      "Cashless health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization.",
    eligibility:
      "Poor and vulnerable families identified through the Socio-Economic Caste Census (SECC) and specific occupational categories.",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-hospital",
    category: "Health & Social Security",
    ministry: "Ministry of Health & Family Welfare, Government of India",
    status: "Active",
    longDescription:
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched in 2018, is the world’s largest government health insurance scheme providing comprehensive coverage to poor and vulnerable families across India. Beneficiaries receive cashless health insurance of up to ₹5 lakh per family per year for secondary and tertiary hospitalization at empaneled public and private hospitals. PM-JAY covers over 1,500 medical packages, including surgeries, diagnostics, and post-hospitalization care. Beneficiaries are identified using the SECC database and certain occupational categories. The scheme ensures portability across India, allowing citizens to access treatment nationwide. By offering cashless, paperless services with biometric verification, PM-JAY reduces out-of-pocket medical expenses and prevents medical debt. The program complements Ayushman Bharat Health and Wellness Centres, strengthening universal health coverage in India, improving healthcare access, promoting financial security, and enhancing social welfare outcomes for millions of families."
  },
  {
    id: generateRandomId(),
    name: "PM-Ujjwala Yojana",
    description:
      "Pradhan Mantri Ujjwala Yojana – Free LPG connections for women from BPL households to promote clean cooking fuel.",
    fullName: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    launched: "2016",
    benefits:
      "Free LPG connections with financial assistance for deposit, stove, and first refill.",
    eligibility:
      "Women belonging to Below Poverty Line (BPL) households, including SC/ST families, forest dwellers, and vulnerable groups.",
    officialSite: "https://www.pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Energy & Social Welfare",
    ministry: "Ministry of Petroleum & Natural Gas, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY), launched in 2016, is a government initiative to provide free LPG connections to women from Below Poverty Line (BPL) households, promoting clean cooking fuel and improving health outcomes. Each eligible household receives financial support covering the security deposit, regulator, and installation charges. The scheme targets SC/ST families, forest dwellers, and other vulnerable communities. By replacing traditional fuels like wood and kerosene, PMUY reduces indoor air pollution, saves time and labor for women, and contributes to environmental sustainability. Over 8 crore connections have been distributed, empowering rural women, reducing deforestation, lowering carbon emissions, and promoting cleaner energy usage. The program plays a key role in rural energy inclusion, social welfare, and sustainable development."
  },
  {
    id: generateRandomId(),
    name: "PM-Awas Yojana",
    description:
      "Pradhan Mantri Awas Yojana – Affordable housing scheme ensuring Housing for All by 2022.",
    fullName: "Pradhan Mantri Awas Yojana (PMAY)",
    launched: "2015",
    benefits:
      "Financial assistance and subsidies for pucca houses with basic amenities in rural and urban areas.",
    eligibility:
      "Economically Weaker Sections (EWS), Low-Income Groups (LIG), and slum dwellers.",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing & Urban Development",
    ministry: "Ministry of Housing & Urban Affairs, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY), launched in 2015, is a flagship housing scheme to achieve ‘Housing for All’ by 2022. The program provides financial assistance and subsidies for constructing pucca houses with essential amenities such as toilets, electricity, LPG, and water connections. PMAY has two components: PMAY-Urban (for slum dwellers and low-income groups in cities) and PMAY-Gramin (for rural households). Women’s ownership is prioritized, empowering them with property rights and financial independence. The scheme encourages eco-friendly and sustainable construction technologies, generates employment in the construction sector, and improves living conditions. Millions of beneficiaries have received houses, reducing homelessness, supporting social welfare, and contributing to inclusive urban and rural development across India."
  },
  {
    id: generateRandomId(),
    name: "PM-MUDRA Yojana",
    description:
      "Pradhan Mantri MUDRA Yojana – Loan scheme supporting small and micro businesses in India.",
    fullName:
      "Pradhan Mantri Micro Units Development and Refinance Agency Yojana (PM-MUDRA)",
    launched: "2015",
    benefits:
      "Collateral-free loans up to ₹10 lakh under Shishu, Kishore, and Tarun categories for small businesses and startups.",
    eligibility:
      "Small entrepreneurs, startups, and non-corporate small businesses including traders, manufacturers, and service providers.",
    officialSite: "https://www.mudra.org.in",
    logo: "fas fa-business-time",
    category: "Financial Inclusion & Entrepreneurship",
    ministry: "Ministry of Finance, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri MUDRA Yojana (PMMY), launched in 2015, is a government-backed financial inclusion scheme supporting small and micro businesses in India. It provides collateral-free loans up to ₹10 lakh under three categories: Shishu (up to ₹50,000) for startups, Kishore (₹50,001–₹5 lakh) for growing businesses, and Tarun (₹5–10 lakh) for established enterprises. The scheme empowers first-generation entrepreneurs, women, rural youth, and SC/ST communities engaged in manufacturing, trading, and services. PMMY promotes self-reliance, job creation, and entrepreneurship, bridging credit gaps and reducing dependence on informal lenders. Millions of businesses have benefited, contributing to Make in India, inclusive economic growth, and formalization of small enterprises nationwide."
  },
 {
    id: generateRandomId(),
    name: "PM-SVANidhi",
    description:
      "Pradhan Mantri Street Vendor’s AtmaNirbhar Nidhi – Collateral-free loans and financial support for street vendors in India.",
    fullName: "Pradhan Mantri Street Vendor’s AtmaNirbhar Nidhi (PM-SVANidhi)",
    launched: "2020",
    benefits:
      "Collateral-free loans up to ₹10,000 with cashback incentives for digital transactions to help street vendors restart businesses.",
    eligibility:
      "Registered street vendors under the Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014.",
    officialSite: "https://pmnsvy.in",
    logo: "fas fa-store",
    category: "Financial Inclusion & Urban Livelihoods",
    ministry: "Ministry of Housing & Urban Affairs, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Street Vendor’s AtmaNirbhar Nidhi (PM-SVANidhi), launched in 2020, is a government initiative providing financial support to street vendors affected by the COVID-19 pandemic. The scheme offers collateral-free loans up to ₹10,000 to help vendors restart their businesses, purchase stock, and expand operations. Incentives are provided for digital transactions to encourage financial inclusion and transparency. PM-SVANidhi also allows timely loan renewal with higher credit limits for consistent repayment. In addition, beneficiaries receive training in financial literacy and business management, promoting sustainable livelihoods and entrepreneurship. Millions of street vendors across India have benefited from this program, improving their income stability, economic resilience, and contribution to local economies. The scheme supports informal workers, strengthens urban livelihoods, and fosters self-reliance in small-scale entrepreneurship."
  },
  {
    id: generateRandomId(),
    name: "PM-KUSUM",
    description:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan – Solar power and energy support scheme for farmers in India.",
    fullName: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",
    launched: "2019",
    benefits:
      "Financial assistance for standalone solar pumps, solarizing grid-connected pumps, and decentralized solar power plants for farmers.",
    eligibility: "All farmers in India.",
    officialSite: "https://pmkusum.nic.in",
    logo: "fas fa-solar-panel",
    category: "Renewable Energy & Agriculture",
    ministry: "Ministry of New and Renewable Energy, Government of India",
    status: "Active",
    longDescription:
      "PM-KUSUM, launched in 2019, is a government scheme promoting solar energy adoption among Indian farmers to reduce dependence on grid electricity and generate additional income. The program provides financial assistance for standalone solar pumps, solarization of existing grid-connected pumps, and decentralized solar power plants. By supporting renewable energy infrastructure, PM-KUSUM helps farmers lower electricity bills, sell surplus power to the grid, and adopt sustainable farming practices. The scheme fosters rural entrepreneurship, technology adoption, and climate-resilient agriculture. It also contributes to environmental sustainability by reducing carbon emissions and promoting green energy solutions. Beneficiaries are provided guidance, subsidies, and technical support, enabling widespread adoption of solar technology and strengthening India’s renewable energy sector while enhancing farmers’ livelihoods and productivity."
  },
  {
    id: generateRandomId(),
    name: "PM-FME",
    description:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises – Support for micro food businesses in India.",
    fullName: "Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PM-FME)",
    launched: "2020",
    benefits:
      "Credit-linked subsidies, financial support, technical assistance, and marketing support for small food processing units.",
    eligibility:
      "Micro food processing units, small food entrepreneurs, SHGs, FPOs, and cooperatives.",
    officialSite: "https://pmfme.mofpi.gov.in",
    logo: "fas fa-industry",
    category: "Entrepreneurship & Food Processing",
    ministry: "Ministry of Food Processing Industries, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PM-FME), launched in 2020, is designed to formalize and strengthen micro food processing units across India. The scheme provides credit-linked subsidies up to 35%, financial assistance, technical support, and marketing help including participation in exhibitions and e-commerce platforms. It targets small food entrepreneurs, Self Help Groups (SHGs), Farmer Producer Organizations (FPOs), and cooperatives involved in milling, dairy, pickling, and packaging sectors. PM-FME enhances productivity, improves quality standards, and creates market linkages for small food businesses. The scheme promotes entrepreneurship, women’s participation, and employment generation while contributing to doubling farmers’ income and reducing post-harvest losses. By formalizing micro food enterprises, PM-FME strengthens the rural economy, ensures sustainable growth, and supports India’s food processing sector on a national scale."
  },
  {
    id: generateRandomId(),
    name: "PMFBY",
    description:
      "Pradhan Mantri Fasal Bima Yojana – Comprehensive crop insurance scheme for Indian farmers.",
    fullName: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    launched: "2016",
    benefits:
      "Insurance coverage for crops against natural calamities, pests, and diseases with timely compensation via Direct Benefit Transfer.",
    eligibility: "All farmers cultivating notified crops in India.",
    officialSite: "https://pmfby.gov.in",
    logo: "fas fa-umbrella",
    category: "Agriculture & Risk Management",
    ministry: "Ministry of Agriculture & Farmers Welfare, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched in 2016, is a flagship crop insurance scheme designed to protect Indian farmers from financial losses due to natural calamities, pests, and diseases. The scheme provides timely compensation directly to farmers’ bank accounts through the Direct Benefit Transfer (DBT) system. PMFBY encourages crop diversification, reduces dependency on informal credit sources, and stabilizes farmers’ incomes. Premiums are subsidized by central and state governments to ensure affordability. The program uses advanced technologies like remote sensing, drones, and data analytics for crop monitoring and risk assessment. Millions of farmers across India benefit from PMFBY, securing their livelihoods, promoting adoption of quality seeds and modern agricultural practices, and enhancing resilience against climate risks while supporting sustainable agriculture and rural prosperity."
  },
  {
    id: generateRandomId(),
    name: "PMJDY",
    description:
      "Pradhan Mantri Jan Dhan Yojana – Universal banking access and financial inclusion scheme in India.",
    fullName: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    launched: "2014",
    benefits:
      "Zero-balance bank accounts, RuPay debit card, overdraft facility, insurance cover, and pension access for all citizens.",
    eligibility: "All Indian citizens, especially unbanked populations.",
    officialSite: "https://pmjdy.gov.in",
    logo: "fas fa-wallet",
    category: "Financial Inclusion & Digital Banking",
    ministry: "Ministry of Finance, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Jan Dhan Yojana (PMJDY), launched in 2014, is a national financial inclusion program providing universal banking access to all Indian citizens. The scheme allows beneficiaries to open zero-balance bank accounts with RuPay debit cards, overdraft facilities, insurance coverage, and pension options. PMJDY integrates marginalized populations into the formal banking system, enabling Direct Benefit Transfer (DBT) of subsidies and welfare payments. The program improves financial literacy, encourages savings, reduces dependence on informal lenders, and empowers citizens economically. Millions have benefitted from PMJDY, accessing banking services for the first time, promoting cashless transactions, social security, and financial independence while contributing to inclusive growth and India’s digital economy."
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat",
    description:
      "Pradhan Mantri Jan Arogya Yojana – Health insurance coverage for vulnerable families in India.",
    fullName: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    launched: "2018",
    benefits:
      "Health insurance coverage up to ₹5 lakh per family per year for secondary and tertiary hospitalization.",
    eligibility:
      "Economically vulnerable families identified using the SECC database.",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-notes-medical",
    category: "Health & Insurance",
    ministry: "Ministry of Health & Family Welfare, Government of India",
    status: "Active",
    longDescription:
      "Ayushman Bharat (PM-JAY), launched in 2018, provides financial protection and access to quality healthcare for economically vulnerable families. The scheme offers cashless health insurance coverage of up to ₹5 lakh per family per year across empaneled hospitals in India. Covering over 1,500 medical procedures including surgeries, critical illness treatments, and day-care services, the program reduces out-of-pocket healthcare expenses and prevents debt accumulation. Digital systems ensure transparency and efficiency in beneficiary identification, hospital empanelment, and claim management. The initiative complements Health and Wellness Centres under Ayushman Bharat for comprehensive primary care, maternal and child health, and chronic disease management. Millions of families benefit annually, enhancing social security, improving access to healthcare, and supporting India’s vision of universal health coverage.",
  },
  {
    id: generateRandomId(),
    name: "Skill India",
    description:
      "National Skill Development Mission – Skill training and employment opportunities for Indian youth.",
    fullName: "Skill India – National Skill Development Mission",
    launched: "2015",
    benefits:
      "Skill training, certification, and enhanced employment opportunities across multiple sectors.",
    eligibility:
      "Youth and working-age population seeking skill development and vocational training.",
    officialSite: "https://www.msde.gov.in",
    logo: "fas fa-graduation-cap",
    category: "Skill Development & Employment",
    ministry:
      "Ministry of Skill Development & Entrepreneurship, Government of India",
    status: "Active",
    longDescription:
      "Skill India, launched under the National Skill Development Mission in 2015, empowers youth and workforce with industry-relevant skills, certifications, and employment opportunities. The mission includes programs such as Pradhan Mantri Kaushal Vikas Yojana (PMKVY), National Apprenticeship Promotion Scheme (NAPS), and Recognition of Prior Learning (RPL), bridging the gap between education and employment. Skill India promotes hands-on practical training, digital literacy, entrepreneurship, and soft skills. Collaborating with industry partners, training institutions, and state governments, it ensures quality skill delivery. The initiative targets women, marginalized communities, and rural populations, enhancing employability, fostering entrepreneurship, and contributing to economic growth. Millions have been trained, promoting inclusive social mobility and preparing the workforce for emerging sectors and global industry standards.",
  },
  {
    id: generateRandomId(),
    name: "PMAY-U",
    description:
      "Pradhan Mantri Awas Yojana – Urban – Affordable housing for urban poor and slum dwellers.",
    fullName: "Pradhan Mantri Awas Yojana – Urban (PMAY-U)",
    launched: "2015",
    benefits:
      "Financial assistance, credit-linked subsidies, and affordable housing solutions for EWS and LIG families.",
    eligibility:
      "Economically Weaker Section (EWS) and Low-Income Group (LIG) families in urban areas.",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing & Urban Development",
    ministry: "Ministry of Housing & Urban Affairs, Government of India",
    status: "Active",
    longDescription:
      "PMAY-U, launched in 2015, provides affordable housing for urban poor, slum dwellers, and EWS/LIG families across India. The scheme offers financial assistance via credit-linked subsidies, direct construction support, and affordable rental housing. PMAY-U emphasizes inclusive urban growth, access to basic amenities, eco-friendly construction, and community participation. Beneficiaries can leverage Credit Linked Subsidy Scheme (CLSS) for home loans. The initiative supports slum rehabilitation, tenure security, and sustainable housing models. Since inception, millions of urban households have benefited, improving living standards, health, and socio-economic well-being. The program aligns with ‘Housing for All’ goals, promoting inclusive urban development and reducing urban inequalities.",
  },
  {
    id: generateRandomId(),
    name: "Ujjwala Yojana",
    description:
      "Pradhan Mantri Ujjwala Yojana – Free LPG connections for women from BPL households in India.",
    fullName: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    launched: "2016",
    benefits:
      "Free LPG connections and support for clean cooking energy to BPL women.",
    eligibility: "Women from Below Poverty Line (BPL) households.",
    officialSite: "https://pmuy.gov.in",
    logo: "fas fa-gas-pump",
    category: "Energy & Social Welfare",
    ministry: "Ministry of Petroleum & Natural Gas, Government of India",
    status: "Active",
    longDescription:
      "PMUY, launched in 2016, promotes clean cooking fuel by providing free LPG connections to women from BPL households. It reduces health hazards caused by traditional cooking fuels and promotes women’s empowerment, time-saving, and better quality of life. The scheme facilitates first refills and encourages modern energy adoption. PMUY integrates with other social welfare initiatives to reach marginalized communities, improves health outcomes, reduces deforestation, and supports climate goals. Millions of households have benefited, enhancing energy access, environmental sustainability, and socio-economic development.",
  },
  {
    id: generateRandomId(),
    name: "Digital India",
    description:
      "Digital India Program – Transforming India into a digitally empowered society and knowledge economy.",
    fullName: "Digital India Program",
    launched: "2015",
    benefits:
      "Digital infrastructure, e-services, and digital literacy for all citizens and government departments.",
    eligibility: "All Indian citizens and government departments.",
    officialSite: "https://www.digitalindia.gov.in",
    logo: "fas fa-network-wired",
    category: "Technology & Governance",
    ministry:
      "Ministry of Electronics & Information Technology, Government of India",
    status: "Active",
    longDescription:
      "Digital India, launched in 2015, aims to transform India into a digitally empowered society. It focuses on digital infrastructure, e-governance, and digital literacy. Key initiatives include BharatNet, DigiLocker, MyGov, and electronic service delivery platforms, promoting transparency, efficiency, and access to government services. The program enhances financial inclusion through digital payments, mobile banking, and online services. By fostering digital skills, capacity-building, and innovation, it promotes employability and entrepreneurship. Digital India reduces the digital divide, enables citizen engagement, and strengthens the nation’s position in the global digital economy. Since launch, it has improved broadband connectivity, service delivery, and socio-economic development.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Shram Yogi Maan-dhan",
    description:
      "Voluntary pension scheme providing ₹3,000/month for unorganized sector workers after 60.",
    fullName: "Pradhan Mantri Shram Yogi Maan-dhan Yojana (PM-SYM)",
    launched: "2019",
    benefits: "Pension of ₹3,000 per month after 60 years of age",
    eligibility:
      "Unorganized sector workers aged 18–40 years with monthly income up to ₹15,000",
    officialSite: "https://www.pmsymidh.gov.in",
    logo: "fas fa-hand-holding-usd",
    category: "Pension & Social Security",
    ministry: "Ministry of Labour & Employment, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM) is a voluntary pension scheme launched in 2019 to provide financial security for unorganized sector workers. Eligible workers aged 18–40 with monthly income up to ₹15,000 contribute a small monthly amount. After 60 years, beneficiaries receive a guaranteed pension of ₹3,000 per month. The scheme integrates technology-driven registration, contribution tracking, and pension disbursal linked with Jan Dhan accounts and Aadhaar. PM-SYM fosters savings culture, long-term planning, and social security, enhancing dignity and reducing dependence on family members. Millions of workers have enrolled, contributing to inclusive social protection and equitable growth.",
  },
  {
    id: generateRandomId(),
    name: "Atal Pension Yojana",
    description:
      "Government-backed pension scheme guaranteeing minimum pension for citizens after 60.",
    fullName: "Atal Pension Yojana (APY)",
    launched: "2015",
    benefits:
      "Guaranteed minimum pension after 60 years based on contributions",
    eligibility:
      "All Indian citizens aged 18–40 years, primarily targeting unorganized sector workers",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-piggy-bank",
    category: "Pension & Social Security",
    ministry:
      "Pension Fund Regulatory and Development Authority, Government of India",
    status: "Active",
    longDescription:
      "Atal Pension Yojana (APY), launched in 2015, provides financial security to Indian citizens, focusing on unorganized sector workers. Subscribers aged 18–40 contribute monthly to receive a guaranteed pension of ₹1,000–₹5,000 after 60, depending on contribution level. The scheme promotes long-term savings, retirement planning, and financial literacy. Managed by PFRDA, APY offers flexible contributions, auto-debits, co-contributions by the government for eligible participants, and digital account management. Millions of citizens have enrolled, enhancing retirement security, reducing family dependency, and expanding social protection coverage in India.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Fasal Bima Yojana",
    description:
      "Comprehensive crop insurance covering losses from natural calamities, pests, and diseases.",
    fullName: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    launched: "2016",
    benefits:
      "Insurance coverage against crop losses due to natural calamities, pests, and diseases",
    eligibility: "All farmers growing notified crops in notified areas",
    officialSite: "https://pmfby.gov.in",
    logo: "fas fa-seedling",
    category: "Agriculture & Crop Insurance",
    ministry: "Ministry of Agriculture & Farmers Welfare, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched in 2016, provides financial protection to farmers against crop losses from natural calamities, pests, and diseases. With subsidized uniform premium rates, the scheme ensures affordability and accessibility. PMFBY covers all crop stages and offers timely indemnity payments to reduce economic distress. Modern technologies like satellite imagery, remote sensing, and mobile apps are used for crop assessment and claim processing. The scheme enhances creditworthiness, encourages innovative farming practices, and promotes rural economic stability. Millions of farmers benefit, ensuring food security and sustainable agricultural development across India.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description:
      "Skill training and certification for youth to improve employability.",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    launched: "2015",
    benefits: "Short-term skill training and certification for youth",
    eligibility:
      "Indian youth aged 18–35 seeking employment or skill enhancement",
    officialSite: "https://www.pmkvyofficial.org",
    logo: "fas fa-chalkboard-teacher",
    category: "Skill Development & Employment",
    ministry:
      "Ministry of Skill Development & Entrepreneurship, Government of India",
    status: "Active",
    longDescription:
      "Pradhan Mantri Kaushal Vikas Yojana (PMKVY), launched in 2015, is a flagship skill development program under Skill India. It offers short-term, industry-aligned training and certification in sectors like IT, healthcare, manufacturing, hospitality, and retail. Beneficiaries receive hands-on practical training, assessment, and recognized certification. PMKVY collaborates with accredited training partners and industry to ensure quality delivery. The initiative incentivizes successful completion, promotes inclusion of marginalized communities, women, and differently-abled individuals, and leverages digital tools for registration and course tracking. Millions have benefited, gaining skills, certifications, and employment opportunities, supporting Make in India and socio-economic development.",
  },
  {
    id: generateRandomId(),
    name: "National Pension Scheme",
    description:
      "Government-contributory pension plan offering retirement income based on contributions.",
    fullName: "National Pension Scheme (NPS)",
    launched: "2004",
    benefits: "Regular pension after retirement based on contributions",
    eligibility:
      "Indian citizens aged 18–65 years, including government and private sector employees",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-money-bill-wave",
    category: "Pension & Retirement Planning",
    ministry:
      "Pension Fund Regulatory and Development Authority, Government of India",
    status: "Active",
    longDescription:
      "National Pension Scheme (NPS), launched in 2004, is a government-sponsored retirement savings program providing regular pension income through structured contributions. Subscribers from government and private sectors invest in pension accounts managed by professional fund managers under PFRDA supervision. At retirement, a portion can be withdrawn as lump sum and the remainder used to purchase an annuity, ensuring monthly pension. NPS promotes disciplined savings, financial literacy, and long-term planning, offering multiple investment options across equities, corporate bonds, and government securities. Millions of citizens participate, ensuring retirement security, economic stability, and inclusive social protection.",
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana",
    description: "Health Insurance Scheme",
    fullName: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    launched: "2018",
    benefits:
      "Cashless hospitalization coverage up to ₹5 lakh per family per year",
    eligibility: "Low-income families listed in SECC 2011 database",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-hospital",
    category: "Health",
    ministry: "Ministry of Health & Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY) is a flagship health insurance scheme launched in 2018 to provide comprehensive and cashless health coverage to economically vulnerable families. The scheme targets low-income households identified through the SECC 2011 database, ensuring access to quality healthcare. PM-JAY covers hospitalization expenses up to ₹5 lakh per family per year for secondary and tertiary care, including surgeries and medical procedures. Beneficiaries can access treatment in empaneled hospitals across India without out-of-pocket expenses. Leveraging integrated IT platforms for beneficiary identification, hospital empanelment, claim management, and real-time monitoring, the scheme ensures transparency and efficiency. PM-JAY promotes preventive healthcare, social inclusion, and life improvement, benefiting millions since its inception.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Ujjwala Yojana",
    description: "Clean Cooking Fuel Initiative",
    fullName: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    launched: "2016",
    benefits:
      "Free LPG connections for women from below poverty line households",
    eligibility: "Women from BPL households who do not have an LPG connection",
    officialSite: "https://pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Energy",
    ministry: "Ministry of Petroleum & Natural Gas",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY), launched in 2016, provides free LPG connections to women from BPL households, promoting clean cooking and reducing health hazards caused by traditional fuels. The scheme supports safer cooking practices, reduces indoor air pollution, and empowers women by saving time and labor. Digital platforms streamline application, verification, and tracking for transparency. PMUY also promotes environmental sustainability by reducing deforestation and carbon emissions. Since launch, millions of women have benefited, enhancing health, convenience, and socio-economic well-being while fostering energy inclusion and sustainable development.",
  },
  {
    id: generateRandomId(),
    name: "Swachh Bharat Mission",
    description: "Clean India Initiative",
    fullName: "Swachh Bharat Mission (Urban & Rural)",
    launched: "2014",
    benefits:
      "Elimination of open defecation, improved sanitation, and clean public spaces",
    eligibility:
      "All citizens, with a focus on rural communities and urban slums",
    officialSite: "https://swachhbharatmission.gov.in",
    logo: "fas fa-broom",
    category: "Sanitation",
    ministry: "Ministry of Housing and Urban Affairs & Ministry of Jal Shakti",
    status: "Active",
    longDescription:
      "Swachh Bharat Mission (SBM), launched in 2014, is a nationwide cleanliness and sanitation campaign aimed at eliminating open defecation, improving solid waste management, and creating awareness about hygiene practices. The mission constructs household and community toilets, improves sanitation infrastructure, and fosters behavioral change through education and community engagement. Rural areas focus on achieving Open Defecation Free status, while urban areas prioritize solid waste management and cleanliness initiatives. Technology-enabled monitoring ensures transparency, progress tracking, and citizen participation. SBM has improved public health, environmental sustainability, and quality of life for millions, making it one of India’s landmark development initiatives.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Gram Sadak Yojana",
    description: "Rural Road Development Scheme",
    fullName: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    launched: "2000",
    benefits: "All-weather road connectivity to unconnected rural habitations",
    eligibility:
      "Rural habitations with population criteria as per scheme guidelines",
    officialSite: "https://pmgsy.nic.in",
    logo: "fas fa-road",
    category: "Infrastructure",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "Pradhan Mantri Gram Sadak Yojana (PMGSY), launched in 2000, provides all-weather road connectivity to unconnected rural habitations, fostering socio-economic development and reducing rural isolation. The scheme constructs new roads, upgrades existing ones, and ensures quality standards for durability and safety. Improved connectivity links villages to markets, healthcare, education, and government services, enhancing livelihoods and social mobility. Technology-enabled monitoring, geo-tagging, and performance audits ensure transparency and efficiency. PMGSY also generates local employment and skill development. Millions of kilometers of roads have been built, connecting thousands of habitations, improving transportation, and contributing to inclusive rural growth.",
  },
  {
    id: generateRandomId(),
    name: "National Rural Employment Guarantee Act (MGNREGA)",
    description: "Employment Guarantee Program",
    fullName:
      "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
    launched: "2005",
    benefits:
      "Guaranteed 100 days of wage employment per year for rural households",
    eligibility:
      "Adult members of rural households willing to do unskilled manual work",
    officialSite: "https://nrega.nic.in",
    logo: "fas fa-tools",
    category: "Employment",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), enacted in 2005, guarantees at least 100 days of unskilled manual labor per year to adult members of rural households, providing livelihood security and financial stability. The scheme focuses on asset creation such as water conservation, land development, and rural infrastructure, improving local productivity and sustainability. Digital platforms with Aadhaar-linked payments ensure transparency, accountability, and timely wage disbursement. MGNREGA empowers marginalized groups, strengthens local governance, reduces rural poverty, and enhances food security. The program also serves as an economic stabilizer during agrarian distress, creating durable community assets and contributing to equitable rural development across India.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description: "Skill Development Initiative",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    launched: "2015",
    benefits:
      "Skill training and certification for youth, improving employability",
    eligibility: "Youth aged 15–35, unemployed or underemployed",
    officialSite: "https://www.pmkvyofficial.org",
    logo: "fas fa-graduation-cap",
    category: "Skill Development",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    status: "Active",
    longDescription:
      "Pradhan Mantri Kaushal Vikas Yojana (PMKVY), launched in 2015, empowers India’s youth by providing skill training and certification to enhance employability. The program bridges the gap between industry requirements and youth skills, offering short-term courses in IT, manufacturing, hospitality, healthcare, and retail aligned with the NSQF. Trainees receive hands-on training, assessment, and nationally recognized certification. Financial incentives and inclusive outreach target women, differently-abled individuals, and marginalized communities. PMKVY promotes entrepreneurship, wage employment, and self-employment, leveraging digital platforms for registration, progress tracking, and certification. Millions have benefited, acquiring industry-ready skills, boosting careers, livelihoods, and contributing to national economic growth.",
  },
  {
    id: generateRandomId(),
    name: "Digital India",
    description: "Technology and Governance Initiative",
    fullName: "Digital India Programme",
    launched: "2015",
    benefits: "Digital infrastructure, services, and literacy for citizens",
    eligibility: "All citizens with internet access",
    officialSite: "https://www.digitalindia.gov.in",
    logo: "fas fa-laptop-code",
    category: "Technology",
    ministry: "Ministry of Electronics & Information Technology",
    status: "Active",
    longDescription:
      "Digital India, launched in 2015, aims to transform India into a digitally empowered society and knowledge economy. The initiative focuses on three pillars: digital infrastructure for all, digital delivery of services, and digital literacy. It promotes high-speed internet, mobile connectivity, common service centers, and the digitization of government services for seamless access. Digital India enhances skill development, financial inclusion, innovation, and entrepreneurship in technology. Key projects include e-sign, digital lockers, BharatNet, and digital payments. By integrating technology into governance, the program improves efficiency, transparency, and citizen engagement. It strengthens public service delivery, fosters inclusive growth, and positions India as a knowledge-driven, technologically advanced nation.",
  },
  {
    id: generateRandomId(),
    name: "Beti Bachao Beti Padhao",
    description: "Girl Child Welfare Initiative",
    fullName: "Beti Bachao Beti Padhao (BBBP)",
    launched: "2015",
    benefits:
      "Prevention of gender-based discrimination, promotion of girls’ education",
    eligibility: "All families, focusing on regions with low child sex ratio",
    officialSite: "https://wcd.nic.in/bbbp-schemes",
    logo: "fas fa-child",
    category: "Women & Child Development",
    ministry: "Ministry of Women & Child Development",
    status: "Active",
    longDescription:
      "Beti Bachao Beti Padhao (BBBP), launched in 2015, addresses gender inequality, prevents female foeticide, and promotes education and empowerment of girls. The program targets regions with low child sex ratio, combining awareness campaigns, community engagement, and strict enforcement of laws. BBBP integrates efforts from multiple ministries, ensuring equal opportunities, scholarships, and mentorship for girls. Technology, media, and outreach initiatives drive behavioral change, while monitoring and data collection track progress in CSR and enrollment rates. Since its launch, BBBP has increased awareness, improved school enrollment, and fostered community advocacy for gender equality, contributing to an inclusive and equitable society.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Awas Yojana",
    description: "Affordable Housing Scheme",
    fullName: "Pradhan Mantri Awas Yojana – Housing for All (Urban & Rural)",
    launched: "2015",
    benefits:
      "Subsidized home loans and affordable housing construction for low-income families",
    eligibility: "Economically weaker sections, low and middle-income groups",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing",
    ministry:
      "Ministry of Housing and Urban Affairs & Ministry of Rural Development",
    status: "Active",
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY), launched in 2015, provides affordable housing to urban and rural populations, ensuring ‘Housing for All’ by 2022. The program targets economically weaker sections, low- and middle-income groups, offering interest subsidies, financial support for construction, and incentives for green building technologies. PMAY integrates technology for beneficiary identification, online applications, and progress tracking. The scheme promotes sustainable urban planning, inclusive development, and improved living conditions. Millions of households have benefited, gaining safe and affordable homes, enhanced quality of life, and social empowerment, reflecting India’s commitment to equitable growth and dignified living.",
  },
  {
    id: generateRandomId(),
    name: "Atal Pension Yojana",
    description: "Pension Scheme for Unorganized Sector",
    fullName: "Atal Pension Yojana (APY)",
    launched: "2015",
    benefits: "Guaranteed minimum pension for subscribers after 60 years",
    eligibility:
      "Workers in the unorganized sector aged 18–40 with a bank account",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-piggy-bank",
    category: "Social Security",
    ministry: "Pension Fund Regulatory and Development Authority (PFRDA)",
    status: "Active",
    longDescription:
      "Atal Pension Yojana (APY), launched in 2015, provides financial security and a guaranteed pension to workers in the unorganized sector after age 60. The scheme encourages voluntary contributions, offering fixed monthly pensions of ₹1,000 to ₹5,000 based on contributions and joining age. Subscribers link accounts to banks or post offices for auto-debit of contributions. The government co-contributes for eligible participants during the first five years. APY promotes financial literacy, transparency, and ease of access through digital platforms. Millions have enrolled, securing post-retirement income, fostering savings habits, and strengthening the social safety net, empowering citizens to achieve dignity and financial independence.",
  },
  {
    id: generateRandomId(),
    name: "National Health Mission",
    description: "Healthcare Initiative",
    fullName: "National Health Mission (NHM)",
    launched: "2013",
    benefits:
      "Affordable and accessible healthcare services, improved public health",
    eligibility:
      "All citizens, with special focus on rural and vulnerable populations",
    officialSite: "https://nhm.gov.in",
    logo: "fas fa-hospital",
    category: "Health",
    ministry: "Ministry of Health and Family Welfare",
    status: "Active",
    longDescription:
      "The National Health Mission (NHM), launched in 2013, provides affordable, accessible, and quality healthcare services to all citizens, focusing on rural and underserved populations. NHM integrates NRHM and NUHM to strengthen infrastructure, workforce, and service delivery. The program emphasizes maternal and child health, disease control, preventive care, and health system strengthening. Financial assistance supports primary health centers, sub-centers, and community health centers, ensuring medicines, vaccines, and equipment. ASHAs and community health workers facilitate outreach and awareness. NHM leverages telemedicine and digital health records for efficiency. It reduces disease burden, improves health equity, and fosters universal health coverage in India.",
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat",
    description: "Health Insurance and Wellness Initiative",
    fullName: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    launched: "2018",
    benefits:
      "Health insurance coverage of up to ₹5 lakh per family, free treatment at empaneled hospitals",
    eligibility:
      "Rural and urban poor families identified through SECC database",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-notes-medical",
    category: "Health",
    ministry: "Ministry of Health and Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat (PM-JAY), launched in 2018, provides financial protection and access to quality healthcare for economically vulnerable families. It offers health insurance up to ₹5 lakh per family per year for hospitalization in empaneled public and private hospitals. PM-JAY targets families identified through SECC, offering cashless treatment for hospitalization, surgery, diagnostics, and pre- and post-care. The program includes wellness centers for preventive care, maternal and child health, and non-communicable disease management. Digital platforms ensure transparency and efficiency. Millions have benefited, reducing out-of-pocket healthcare expenditure and improving access to quality healthcare, supporting universal health coverage and social protection.",
  },
  {
    id: generateRandomId(),
    name: "Sukanya Samriddhi Yojana",
    description: "Savings Scheme for Girl Child",
    fullName: "Sukanya Samriddhi Yojana (SSY)",
    launched: "2015",
    benefits:
      "Long-term savings with high interest, financial security for girls’ education and marriage",
    eligibility: "Girl children below 10 years of age, one account per child",
    officialSite: "https://www.postofficeindia.in",
    logo: "fas fa-piggy-bank",
    category: "Savings & Investment",
    ministry: "Ministry of Finance, Department of Posts",
    status: "Active",
    longDescription:
      "Sukanya Samriddhi Yojana (SSY), launched in 2015, provides long-term financial security for girl children’s education and marriage. Parents or guardians open accounts for girls below 10 years, with one account per child. SSY offers attractive, compounded interest rates, deposits for up to 15 years, and maturity after 21 years. Partial withdrawals are allowed from age 18 for education. Contributions qualify for tax benefits under Section 80C. The scheme promotes savings habits, financial empowerment, and gender equality. Since inception, SSY has enhanced financial awareness among families and supported national goals of education, women’s empowerment, and socio-economic development.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Ujjwala Yojana",
    description: "Clean Cooking Fuel Initiative",
    fullName: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    launched: "2016",
    benefits:
      "Free LPG connections to women from below-poverty-line households",
    eligibility: "Women from BPL households, priority for rural areas",
    officialSite: "https://www.pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Energy & Environment",
    ministry: "Ministry of Petroleum and Natural Gas",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY), launched in 2016, provides clean cooking fuel to women from BPL households, reducing dependence on biomass fuels. Eligible women receive free LPG connections, enhancing safety, convenience, and environmental sustainability. Awareness campaigns promote LPG usage, safety, and efficiency. The scheme reduces indoor air pollution, improves women’s health, and empowers them by easing fuel collection burdens. Millions of households have benefited, adopting cleaner cooking solutions, enhancing quality of life, and contributing to socio-economic development. PMUY supports energy access, climate goals, and inclusive growth.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop Insurance Scheme",
    fullName: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    launched: "2016",
    benefits:
      "Comprehensive crop insurance covering yield losses due to natural calamities, pests, and diseases",
    eligibility:
      "All farmers growing notified crops, voluntary or mandatory depending on state",
    officialSite: "https://pmfby.gov.in",
    logo: "fas fa-seedling",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched in 2016, provides financial security to farmers against crop losses from natural calamities, pests, and diseases. Covering notified crops, PMFBY stabilizes farmers’ incomes, promotes investment in agriculture, and ensures food security. Farmers pay nominal premiums while the government supports the actuarial balance. The scheme uses satellite imagery, crop cutting experiments, and mobile apps for prompt claim settlement. PMFBY educates farmers on insurance benefits and risk management. Millions of farmers benefit, mitigating financial losses, sustaining productivity, and supporting rural development. The program strengthens agricultural resilience and inclusive growth.",
  },
  {
    id: generateRandomId(),
    name: "Stand Up India Scheme",
    description: "Entrepreneurship Support for SC/ST and Women",
    fullName: "Stand Up India Scheme",
    launched: "2016",
    benefits:
      "Facilitates bank loans from ₹10 lakh to ₹1 crore to start greenfield enterprises",
    eligibility: "SC/ST and women entrepreneurs, aged 18 and above",
    officialSite: "https://www.standupmitra.in",
    logo: "fas fa-briefcase",
    category: "Entrepreneurship",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "The Stand Up India Scheme, launched in 2016, promotes entrepreneurship among SC/ST and women by facilitating bank loans for greenfield enterprises in manufacturing, services, or trading. Loans range from ₹10 lakh to ₹1 crore, helping overcome capital barriers. The scheme offers handholding support, project guidance, and assistance navigating government schemes. Beneficiaries receive easy access to bank credit, simplified documentation, mentorship, capacity building, and market linkages. The initiative fosters economic empowerment, job creation, inclusive growth, and socio-economic mobility. Thousands of loans have been successfully facilitated, enabling sustainable businesses and contributing to local and national economic growth.",
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Gram Sadak Yojana",
    description: "Rural Road Connectivity Scheme",
    fullName: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    launched: "2000",
    benefits:
      "All-weather road connectivity to unconnected habitations, improved rural mobility",
    eligibility: "Rural habitations with population above threshold criteria",
    officialSite: "https://pmgsy.nic.in",
    logo: "fas fa-road",
    category: "Infrastructure",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "Pradhan Mantri Gram Sadak Yojana (PMGSY), launched in 2000, provides all-weather road connectivity to unconnected rural habitations. The scheme enhances rural mobility, economic development, and access to healthcare, education, and markets. It prioritizes habitations above population thresholds and ensures durable, sustainable roads. PMGSY promotes rural employment via local contractors and labor, strengthens transport linkages, and fosters rural entrepreneurship. Thousands of kilometers of roads have been built, connecting millions of rural citizens to the economy. PMGSY contributes to social inclusion, reduces rural isolation, and supports overall socio-economic development.",
  },
  {
    id: generateRandomId(),
    name: "National Social Assistance Programme",
    description: "Social Security Scheme",
    fullName: "National Social Assistance Programme (NSAP)",
    launched: "1995",
    benefits:
      "Financial assistance to elderly, widows, and disabled persons in need",
    eligibility:
      "BPL households, elderly above 60, widows above 40, and persons with disabilities",
    officialSite: "https://nsap.nic.in",
    logo: "fas fa-hands-helping",
    category: "Social Welfare",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "The National Social Assistance Programme (NSAP), launched in 1995, provides financial support to elderly, widows, and persons with disabilities from BPL households. NSAP includes schemes like IGNOAPS, IGNWPS, and IGNDPS, delivering periodic monetary assistance to eligible beneficiaries. The program enhances social inclusion, dignity, and security for marginalized populations. Financial aid is directly transferred to bank accounts for transparency. NSAP mitigates vulnerability due to age, widowhood, or disability, enabling recipients to meet basic needs, access healthcare, and sustain livelihoods. Millions of beneficiaries have been supported, reflecting India’s commitment to social welfare, inclusive development, and poverty alleviation.",
  },
  {
    id: generateRandomId(),
    name: "Digital India Programme",
    description: "Technology & Governance Initiative",
    fullName: "Digital India Programme",
    launched: "2015",
    benefits:
      "Enhanced digital infrastructure, e-governance, internet access, and digital literacy",
    eligibility: "All citizens, businesses, and government departments",
    officialSite: "https://www.digitalindia.gov.in",
    logo: "fas fa-laptop-code",
    category: "Technology & Governance",
    ministry: "Ministry of Electronics and Information Technology",
    status: "Active",
    longDescription:
      "Digital India, launched in 2015, leverages technology to improve governance, service delivery, and citizen engagement. The program focuses on digital infrastructure, e-service delivery, and digital literacy. Initiatives include broadband expansion, common service centers, e-governance solutions, digital payments, and information access. The scheme enhances transparency, efficiency, and accountability while empowering citizens to access services remotely. Digital India fosters innovation, entrepreneurship, skill development, and bridges urban-rural digital divides. The program integrates government, private, and community stakeholders to create sustainable solutions, enabling education, healthcare, financial inclusion, and livelihoods. It strengthens India’s position as a global digital hub and promotes inclusive socio-economic development.",
  },
  {
    id: generateRandomId(),
    name: "Atal Pension Yojana",
    description: "Pension Scheme for Unorganized Sector",
    fullName: "Atal Pension Yojana (APY)",
    launched: "2015",
    benefits:
      "Guaranteed minimum pension, flexible contribution, social security",
    eligibility: "Indian citizens aged 18-40, with a savings account",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-piggy-bank",
    category: "Financial Inclusion",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "Atal Pension Yojana (APY), launched in 2015, provides social security for unorganized sector workers. Subscribers receive fixed pensions from ₹1,000 to ₹5,000 after age 60, depending on contributions. Flexible contributions are allowed through linked bank accounts, with government co-contribution for eligible subscribers in the first five years. Managed under NPS by PFRDA, APY ensures transparency and safety. The scheme offers online enrollment, account portability, and regular statements. APY protects against old-age financial vulnerability, encourages disciplined savings, and promotes economic empowerment. Millions of urban and rural citizens have benefited, securing retirement income and fostering inclusive growth.",
  },
  {
  id: generateRandomId(),
  name: "Pradhan Mantri Awas Yojana",
  description: "Affordable Housing Scheme",
  fullName: "Pradhan Mantri Awas Yojana – Urban & Rural",
  launched: "2015",
  benefits: "Affordable housing with financial assistance, interest subsidies, housing loans",
  eligibility: "Urban & rural poor, women-headed households, economically weaker sections",
  officialSite: "https://pmaymis.gov.in",
  logo: "fas fa-home",
  category: "Housing & Urban Development",
  ministry: "Ministry of Housing and Urban Affairs",
  status: "Active",
  longDescription: "Pradhan Mantri Awas Yojana (PMAY), launched in 2015, is a flagship government scheme in India aimed at providing affordable housing to citizens across urban and rural areas under the vision of 'Housing for All'. The program covers both PMAY-Urban (PMAY-U) and PMAY-Gramin (PMAY-G) components, targeting economically weaker sections (EWS), low-income groups (LIG), and middle-income groups (MIG). PMAY offers multiple benefits including interest subsidies on housing loans, direct financial assistance for construction or enhancement, and incentives for adopting energy-efficient and sustainable building technologies. Special priority is given to women-headed households, senior citizens, and differently-abled individuals to ensure inclusive growth. The scheme leverages digital platforms for transparent application processing, fund disbursement, and real-time monitoring of construction quality, enhancing accountability and efficiency. Millions of houses have been sanctioned and constructed since its launch, improving living standards, reducing slum prevalence, and fostering socio-economic development. By promoting access to pucca houses with basic amenities such as electricity, clean water, and sanitation, PMAY not only enhances quality of life but also contributes to urban planning and rural development objectives. Private sector participation, innovative financing models, and collaboration with banks and housing finance institutions ensure timely loan disbursement at subsidized rates. Citizens can track applications and access information through the official PMAY portal at pmaymis.gov.in. Overall, Pradhan Mantri Awas Yojana represents a transformative step in India’s housing policy, empowering low-income families, promoting equitable urbanization, and supporting the government’s mission of affordable housing for all."
},
{
  id: generateRandomId(),
  name: "National Health Mission",
  description: "Healthcare Improvement Initiative",
  fullName: "National Health Mission (NHM)",
  launched: "2013",
  benefits: "Enhanced public healthcare services, maternal and child health, disease control",
  eligibility: "All citizens, with focus on rural and vulnerable populations",
  officialSite: "https://nhm.gov.in",
  logo: "fas fa-hospital",
  category: "Health & Wellness",
  ministry: "Ministry of Health and Family Welfare",
  status: "Active",
  longDescription: "The National Health Mission (NHM), launched in 2013, is one of India’s most comprehensive government healthcare schemes, aimed at strengthening healthcare infrastructure and service delivery across the country. By integrating the National Rural Health Mission (NRHM) and National Urban Health Mission (NUHM), NHM ensures equitable access to quality healthcare services, especially in rural, underserved, and vulnerable populations. The mission focuses on maternal and child health, immunization, disease prevention, health system capacity building, and the promotion of preventive healthcare measures. NHM encourages public-private partnerships to enhance medical service delivery, improve availability of essential medicines, and upgrade health facilities. Community participation is a key component, with local health committees and Accredited Social Health Activists (ASHAs) playing an essential role in awareness, mobilization, and delivery of services. Technology is integrated into data management, telemedicine services, and real-time monitoring of health programs, improving transparency and effectiveness. By offering free or subsidized healthcare, NHM reduces financial barriers, promotes early diagnosis, and improves health outcomes. The mission has significantly lowered maternal and infant mortality rates and expanded access to quality healthcare in remote areas. NHM aligns with India’s sustainable development goals, contributing to universal health coverage, improved public health infrastructure, and equitable access to essential health services for all citizens. Citizens can access program details and updates through the official NHM portal at nhm.gov.in."
},
{
  id: generateRandomId(),
  name: "Ayushman Bharat Yojana",
  description: "Health Insurance Scheme",
  fullName: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
  launched: "2018",
  benefits: "Cashless health insurance coverage up to ₹5 lakh per family annually",
  eligibility: "Rural and urban poor families, identified through socio-economic criteria",
  officialSite: "https://www.pmjay.gov.in",
  logo: "fas fa-notes-medical",
  category: "Health & Welfare",
  ministry: "Ministry of Health and Family Welfare",
  status: "Active",
  longDescription: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched in 2018, is India’s largest government health insurance initiative, providing financial protection and access to quality healthcare for vulnerable families. Covering over 10 crore families, the scheme offers cashless secondary and tertiary healthcare services up to ₹5 lakh per family annually in empaneled public and private hospitals. PM-JAY targets rural and urban poor households identified through socio-economic criteria, ensuring access to timely medical interventions without financial burden. The scheme integrates digital technology for beneficiary identification, hospital empanelment, claims processing, and real-time monitoring to enhance transparency, efficiency, and accountability. PM-JAY covers a wide range of treatments including surgeries, chronic illnesses, maternity care, and critical care services. By eliminating out-of-pocket healthcare expenses, the program reduces catastrophic financial risk, improves health outcomes, and strengthens trust in public healthcare systems. Millions of treatments have been availed under the program, contributing to universal health coverage and inclusive health development in India. The official PM-JAY portal at pmjay.gov.in provides beneficiaries with information, hospital listings, and claim support. Overall, Ayushman Bharat plays a pivotal role in promoting equitable healthcare, reducing financial hardships, and supporting the government’s vision of accessible health services for all citizens."
},
{
  id: generateRandomId(),
  name: "Beti Bachao Beti Padhao",
  description: "Girl Child Protection & Education Scheme",
  fullName: "Beti Bachao Beti Padhao (BBBP)",
  launched: "2015",
  benefits: "Promotes girl child survival, education, gender equality, and empowerment",
  eligibility: "All girls and their families across India",
  officialSite: "https://wcd.nic.in/bbbp-schemes",
  logo: "fas fa-female",
  category: "Women & Child Development",
  ministry: "Ministry of Women and Child Development",
  status: "Active",
  longDescription: "Beti Bachao Beti Padhao (BBBP), launched in 2015, is a key government scheme aimed at improving the status of girls in India by addressing declining child sex ratios, promoting girls’ education, and empowering the girl child. The program focuses on three pillars: preventing gender-biased sex selection, ensuring survival and protection of girls, and promoting education and participation in socio-economic development. BBBP integrates advocacy, awareness campaigns, policy interventions, and community mobilization to change societal attitudes towards girls. The scheme collaborates with health, education, and law enforcement agencies to enforce laws against female feticide, provide timely medical care, and monitor child protection programs. It also supports girls’ education by offering scholarships, mentoring programs, and skill development initiatives. Through community engagement, media campaigns, and capacity-building activities, BBBP encourages parents and local communities to support girls’ rights and education. Since its inception, the scheme has positively impacted child sex ratios in multiple districts, increased awareness about gender equality, and fostered inclusion in educational and developmental programs. By addressing both protection and empowerment, Beti Bachao Beti Padhao aligns with India’s vision of gender equality, social justice, and human development. Detailed information, program updates, and guidelines are available at the official BBBP portal at wcd.nic.in/bbbp-schemes."
},
  {
  id: generateRandomId(),
  name: "National Nutrition Mission",
  description: "Nutrition & Health Scheme",
  fullName: "Poshan Abhiyaan",
  launched: "2018",
  benefits: "Reducing malnutrition, improving maternal and child health, micronutrient supplementation",
  eligibility: "Pregnant women, lactating mothers, and children up to 6 years",
  officialSite: "https://poshanabhiyaan.gov.in",
  logo: "fas fa-apple-alt",
  category: "Health & Nutrition",
  ministry: "Ministry of Women and Child Development",
  status: "Active",
  longDescription: "The National Nutrition Mission, also known as Poshan Abhiyaan, launched in 2018, is a flagship government program aimed at improving nutritional outcomes for children, pregnant women, and lactating mothers across India. The initiative focuses on reducing stunting, undernutrition, anemia, and low birth weight through a combination of interventions such as supplementary nutrition, health check-ups, immunization, and behavior change communication. Poshan Abhiyaan leverages technology for real-time monitoring, data tracking, and digital reporting, enabling transparency and accountability in program implementation. Anganwadi workers, local governance institutions, and community leaders play a vital role in ensuring effective service delivery at the grassroots level. Awareness campaigns, capacity building, and community mobilization promote healthy eating habits, hygiene, and maternal care practices. The mission also emphasizes micronutrient supplementation and growth monitoring to address hidden hunger and ensure holistic child development. By addressing malnutrition in the early stages of life, Poshan Abhiyaan contributes to improved cognitive development, physical health, and long-term socio-economic outcomes. The program aligns with India’s Sustainable Development Goals (SDGs), targeting health, well-being, and social equity. Since its inception, Poshan Abhiyaan has empowered communities, strengthened institutional frameworks for nutrition governance, and promoted collaboration between health, education, and social welfare sectors. Beneficiaries can access information, guidelines, and updates through the official website at poshanabhiyaan.gov.in. Overall, the National Nutrition Mission represents a comprehensive and inclusive approach to improving public health, fostering sustainable human development, and building a healthier, more productive population in India."
},
{
  id: generateRandomId(),
  name: "Deen Dayal Upadhyaya Gram Jyoti Yojana",
  description: "Rural Electrification Scheme",
  fullName: "DDUGJY",
  launched: "2015",
  benefits: "Rural electrification, feeder separation, and reliable electricity supply to villages",
  eligibility: "All rural households and villages without electricity",
  officialSite: "https://www.ddugjy.gov.in",
  logo: "fas fa-bolt",
  category: "Energy & Infrastructure",
  ministry: "Ministry of Power",
  status: "Active",
  longDescription: "Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY), launched in 2015, is a central government scheme designed to provide continuous and reliable electricity to rural India. The program focuses on feeder separation for agricultural and domestic consumption, strengthening sub-transmission and distribution networks, and electrifying villages that previously lacked access to electricity. By improving energy infrastructure, DDUGJY enhances the quality of life for rural households, supports educational and healthcare facilities, and enables productive activities such as irrigation and small-scale enterprises. The scheme employs modern technologies, smart metering, and real-time monitoring to improve distribution efficiency and reduce power losses. Thousands of villages have been electrified under DDUGJY, bridging the rural-urban energy gap and promoting inclusive socio-economic development. Farmers benefit from uninterrupted electricity for irrigation, increasing productivity and income, while households gain reliable lighting and access to modern appliances. The program encourages private sector participation, local capacity building, and employment generation in the energy sector. DDUGJY aligns with India’s sustainable development goals by supporting energy access, economic empowerment, and environmental considerations. Citizens and stakeholders can find guidelines, updates, and program details on the official DDUGJY website at ddugjy.gov.in. Overall, the scheme represents a transformative step in India’s rural electrification policy, contributing to improved living standards, economic growth, and rural prosperity."
},
{
  id: generateRandomId(),
  name: "Smart Cities Mission",
  description: "Urban Development & Smart Infrastructure Scheme",
  fullName: "Smart Cities Mission",
  launched: "2015",
  benefits: "Creation of citizen-friendly, sustainable, and technologically advanced urban centers",
  eligibility: "Selected cities based on State/UT proposals and ranking under the mission framework",
  officialSite: "https://smartcities.gov.in",
  logo: "fas fa-city",
  category: "Urban Development & Infrastructure",
  ministry: "Ministry of Housing and Urban Affairs",
  status: "Active",
  longDescription: "The Smart Cities Mission, launched in 2015 by the Government of India, is a transformative initiative aimed at developing 100 citizen-friendly, sustainable, and technologically advanced cities across the country. The program focuses on improving urban living standards by integrating core infrastructure elements such as water supply, sanitation, reliable energy, intelligent transport systems, and robust IT connectivity. Smart Cities leverage digital technologies and data-driven governance to optimize mobility, waste management, energy efficiency, and public safety. Citizen engagement is central to the initiative, empowering residents to participate in planning, monitoring, and decision-making processes. Public-private partnerships (PPP) are encouraged to implement innovative infrastructure projects, attract investments, and promote economic growth. Green spaces, climate-resilient urban planning, and sustainable development practices are prioritized to enhance environmental well-being. Since its inception, several cities have implemented smart traffic management, e-governance platforms, smart meters, and digital service delivery systems, leading to measurable improvements in efficiency, transparency, and citizen satisfaction. The mission aligns with India’s long-term urbanization goals, supporting economic productivity, social inclusivity, and quality of life enhancement. Detailed information, project updates, and application guidelines are available on the official Smart Cities Mission portal at smartcities.gov.in. Overall, the Smart Cities Mission represents a holistic approach to urban transformation, fostering innovation, sustainability, and resilience in India’s urban landscape."
},
{
  id: generateRandomId(),
  name: "BharatNet Project",
  description: "Rural Broadband Connectivity Initiative",
  fullName: "BharatNet Project",
  launched: "2011",
  benefits: "High-speed broadband connectivity to all gram panchayats, bridging the digital divide",
  eligibility: "All rural areas and gram panchayats across India",
  officialSite: "https://bharatnet.bbnl.nic.in",
  logo: "fas fa-network-wired",
  category: "Digital Infrastructure",
  ministry: "Ministry of Communications",
  status: "Active",
  longDescription: "The BharatNet Project, launched in 2011, is India’s flagship initiative to provide high-speed broadband connectivity to all gram panchayats in rural areas, bridging the digital divide and enabling equitable access to information and services. The program deploys optical fiber networks, wireless technologies, and last-mile connectivity solutions to ensure reliable internet access in remote and underserved villages. BharatNet supports e-governance initiatives, enabling citizens to access government services online efficiently. It facilitates digital financial inclusion by connecting rural populations to banking and digital payment platforms. The initiative also promotes education, skill development, and entrepreneurship by providing access to online learning, e-commerce, and digital marketplaces. Telemedicine and health services benefit from broadband connectivity, improving healthcare accessibility in rural regions. Community information centers, smart village initiatives, and public Wi-Fi hotspots further enhance inclusivity and social development. The program fosters socio-economic empowerment, enabling citizens to participate in the digital economy and access opportunities previously limited to urban areas. With a focus on affordability, scalability, and reliability, BharatNet serves as a backbone for India’s Digital India vision. Updates, guidelines, and implementation details are available on the official portal at bharatnet.bbnl.nic.in. Overall, BharatNet is a transformative project that empowers rural communities, strengthens infrastructure, and promotes inclusive growth by bridging the digital divide."
},
  {
  id: generateRandomId(),
  name: "PM Viksit Bharat Yojna",
  description: "Holistic Development Mission for a Developed India by 2047",
  fullName: "Pradhan Mantri Viksit Bharat Yojna",
  launched: "2023",
  benefits: "Comprehensive growth across infrastructure, digital empowerment, healthcare, education, agriculture, and employment to achieve the vision of a developed India by 2047",
  eligibility: "All citizens of India; special focus on rural, youth, women, and marginalized communities",
  officialSite: "https://www.india.gov.in",
  logo: "fas fa-flag",
  category: "National Development",
  ministry: "NITI Aayog / Multiple Ministries",
  status: "Active",
  longDescription: "Pradhan Mantri Viksit Bharat Yojna, launched in 2023, is a visionary and holistic development initiative aimed at transforming India into a fully developed nation by 2047, marking 100 years of independence. The scheme focuses on inclusive growth across multiple sectors, including infrastructure, digital innovation, healthcare, education, agriculture, skill development, and employment generation. By prioritizing marginalized communities, rural populations, youth, and women, the initiative ensures equitable access to development opportunities. PM Viksit Bharat Yojna emphasizes participatory governance, encouraging citizen engagement and collaboration with state governments, private sector partners, and civil society organizations. Large-scale projects under the scheme include smart cities, modern highways, renewable energy projects, digital connectivity, and innovation hubs. The program also promotes entrepreneurship, MSME growth, and employment opportunities through targeted skill development and vocational training aligned with emerging industries. Healthcare access is enhanced via improved rural infrastructure, telemedicine services, and universal health coverage. In agriculture, the scheme encourages sustainable farming practices, technology adoption, and rural livelihood enhancement. Environmental sustainability is integrated through green energy initiatives and climate-resilient planning. By leveraging technology, innovation, and collaborative governance, PM Viksit Bharat Yojna aims to bridge socio-economic divides, foster economic growth, and create a prosperous and inclusive India. Citizens can access detailed program information, updates, and guidelines at india.gov.in. Overall, the initiative represents a comprehensive roadmap for India’s development, combining sustainability, inclusivity, and innovation to achieve the nation’s long-term vision of prosperity and global leadership."
},
{
  id: generateRandomId(),
  name: "Viksit Bharat Rojgar Yojna",
  description: "Employment Generation and Skill Development Mission",
  fullName: "Pradhan Mantri Viksit Bharat Rojgar Yojna",
  launched: "2024",
  benefits: "Youth receive financial assistance ₹5,000–₹15,000/month during training, plus subsidies, loans, and entrepreneurship support",
  eligibility: "Unemployed youth, job seekers, entrepreneurs, and workers in rural and urban areas",
  officialSite: "https://www.india.gov.in",
  logo: "fas fa-briefcase",
  category: "Employment & Skill Development",
  ministry: "Ministry of Labour and Employment",
  status: "Active",
  longDescription: "Viksit Bharat Rojgar Yojna, launched in 2024, is a flagship employment and skill development initiative under the broader vision of Viksit Bharat 2047. The program focuses on creating sustainable job opportunities and enhancing the employability of India’s youth by providing comprehensive training in sectors such as manufacturing, services, agriculture, and digital industries. The scheme integrates modern skill development programs, vocational courses, and digital upskilling to ensure youth are job-ready and globally competitive. Beneficiaries receive monthly financial assistance ranging from ₹5,000 to ₹15,000 during training and placement phases. The scheme also supports entrepreneurship by offering loans, grants, mentorship, and business development assistance. Special emphasis is placed on inclusion, targeting women, rural workers, and marginalized communities to ensure equitable access to employment opportunities. Digital platforms connect job seekers with employers, while apprenticeships and industry partnerships bridge skill gaps and provide hands-on experience. By fostering employment, entrepreneurship, and sustainable livelihoods, the Viksit Bharat Rojgar Yojna empowers millions of citizens, reduces unemployment, and contributes to national economic growth. The initiative aligns with India’s goal of building a skilled, self-reliant workforce capable of driving inclusive development. Citizens can access program guidelines, updates, and resources at india.gov.in. Overall, the scheme represents a strategic intervention to enhance employment, improve income generation, and support India’s vision of a developed nation by 2047."
},
{
  id: generateRandomId(),
  name: "PM Dhan-Dhanya Krishi Yojana",
  description: "Pradhan Mantri Dhan-Dhanya Krishi Yojana 2025 – A central government scheme to boost crop productivity, diversification, and sustainable agriculture in India",
  fullName: "Pradhan Mantri Dhan-Dhanya Krishi Yojana (PM-DDKY)",
  launched: "2025",
  benefits: "Financial support for crop diversification, productivity, sustainable practices, and improved farmer income across 100 districts",
  eligibility: "Farmers in identified districts, including small and marginal farmers (~1.7 crore beneficiaries)",
  officialSite: "https://agricoop.gov.in",
  logo: "fas fa-seedling",
  category: "Agriculture & Rural Development",
  ministry: "Ministry of Agriculture & Farmers Welfare",
  status: "Active",
  longDescription: "Pradhan Mantri Dhan-Dhanya Krishi Yojana (PM-DDKY), approved in 2025 with an allocation of ₹24,000 crore, is a central government initiative designed to boost agricultural productivity, promote crop diversification, and encourage sustainable farming practices across 100 selected districts in India. Targeting approximately 1.7 crore farmers, including small and marginal farmers, the scheme provides financial support for acquiring high-quality seeds, modern farming equipment, improved irrigation facilities, and adoption of eco-friendly agricultural methods. PM-DDKY complements existing programs like Pradhan Mantri Fasal Bima Yojana and PM Krishi Sinchayee Yojana, creating a comprehensive support ecosystem for farmers. The district-based approach allows for customized interventions based on local agro-climatic conditions, ensuring maximum impact and efficient resource utilization. The scheme not only increases crop yield and farmer income but also contributes to rural employment, strengthens supply chains, and promotes sustainable agricultural practices. Additionally, PM-DDKY emphasizes climate-resilient farming, better post-harvest management, and efficient resource usage to ensure long-term food security. Farmers and stakeholders can access guidelines, application details, and updates on the official Ministry of Agriculture & Farmers Welfare website at agricoop.gov.in. Overall, PM-DDKY represents a strategic effort to modernize agriculture, improve farmer livelihoods, reduce rural poverty, and strengthen India’s agricultural sector for sustainable growth."
  },
{
    id: generateRandomId(),
    name: "PM-SYM (Shri Mahila Yojana)",
    description:
      "Pradhan Mantri Shri Mahila Yojana – Financial support and empowerment scheme for women entrepreneurs in India.",
    fullName: "Pradhan Mantri Shri Mahila Yojana (PM-SYM)",
    launched: "2021",
    benefits:
      "Low-interest loans, skill development programs, and startup support for women-owned micro and small enterprises.",
    eligibility:
      "Women entrepreneurs, SHGs, and self-employed women in urban and rural areas.",
    officialSite: "https://www.pmsym.gov.in",
    logo: "fas fa-female",
    category: "Women Empowerment & Entrepreneurship",
    ministry: "Ministry of Women & Child Development, Government of India",
    status: "Active",
    longDescription:
      "PM-SYM, launched in 2021, is a dedicated scheme to financially empower women entrepreneurs in India. It provides low-interest loans, capacity-building programs, and mentoring support to help women start or expand micro and small businesses. The initiative encourages skill development, innovation, and market linkages while promoting gender equality in economic participation. PM-SYM complements existing women-centric schemes and creates sustainable livelihood opportunities. Beneficiaries can access financial and advisory support through designated banks and online portals, fostering women’s entrepreneurship and contributing to local economic growth."
},
{
    id: generateRandomId(),
    name: "PM-GAN (Gramin Awas Nirman)",
    description:
      "Pradhan Mantri Gramin Awas Nirman – Rural housing and development initiative ensuring safe and pucca houses for rural poor.",
    fullName: "Pradhan Mantri Gramin Awas Nirman (PM-GAN)",
    launched: "2020",
    benefits:
      "Financial assistance for construction or improvement of pucca houses with basic amenities like electricity, toilets, and clean water.",
    eligibility:
      "Rural poor, women-headed households, EWS and LIG families.",
    officialSite: "https://pmayg.nic.in",
    logo: "fas fa-home",
    category: "Housing & Rural Development",
    ministry: "Ministry of Housing & Urban Affairs, Government of India",
    status: "Active",
    longDescription:
      "PM-GAN, launched in 2020, focuses on providing affordable and safe housing to rural households in India. The scheme provides financial assistance for constructing new pucca houses or upgrading existing homes, ensuring essential amenities such as toilets, electricity, and drinking water. Priority is given to women-headed families and vulnerable groups to promote inclusivity and gender equity. By improving rural housing infrastructure, PM-GAN enhances living standards, reduces health risks, and generates employment in the rural construction sector. The scheme leverages technology for monitoring, transparent fund transfer via DBT, and effective implementation at the village level."
},
{
    id: generateRandomId(),
    name: "PM-KMY (Krishi Mitra Yojana)",
    description:
      "Pradhan Mantri Krishi Mitra Yojana – Agricultural support and modernization program for farmers in India.",
    fullName: "Pradhan Mantri Krishi Mitra Yojana (PM-KMY)",
    launched: "2022",
    benefits:
      "Training, advisory services, subsidized inputs, and financial assistance to improve farm productivity and income.",
    eligibility:
      "Small and marginal farmers, farmer groups, and FPOs across India.",
    officialSite: "https://pmkmy.gov.in",
    logo: "fas fa-seedling",
    category: "Agriculture & Farmer Welfare",
    ministry: "Ministry of Agriculture & Farmers Welfare, Government of India",
    status: "Active",
    longDescription:
      "PM-KMY, launched in 2022, aims to modernize agriculture and support farmers in improving productivity and income. The scheme provides training on modern farming techniques, advisory services, and access to subsidized seeds, fertilizers, and equipment. It promotes sustainable and climate-resilient farming practices while linking farmers to markets and financial resources. PM-KMY empowers small and marginal farmers, farmer groups, and FPOs, enabling them to adopt technology, reduce post-harvest losses, and enhance livelihoods. The scheme also emphasizes capacity building, digital tools for farm management, and holistic agricultural development to strengthen India’s farming sector."
},
{
    id: generateRandomId(),
    name: "PM-SMART (Skill & Modernization for Agriculture & Rural Transformation)",
    description:
      "Comprehensive skill development and modernization scheme for rural youth and farmers in India.",
    fullName: "Pradhan Mantri Skill & Modernization for Agriculture & Rural Transformation (PM-SMART)",
    launched: "2023",
    benefits:
      "Skill development programs, digital literacy, modern farming techniques, and financial assistance to enhance productivity and rural employment.",
    eligibility:
      "Rural youth, farmers, and self-help groups across India.",
    officialSite: "https://pmsmart.gov.in",
    logo: "fas fa-chalkboard-teacher",
    category: "Skill Development & Rural Empowerment",
    ministry: "Ministry of Rural Development, Government of India",
    status: "Active",
    longDescription:
      "PM-SMART, launched in 2023, is a holistic scheme targeting skill enhancement, technology adoption, and employment generation in rural India. It focuses on training rural youth in modern agricultural practices, digital tools, and entrepreneurship. The program integrates capacity-building workshops, financial support, and mentorship to promote self-reliance and productivity. By modernizing agriculture and supporting rural livelihoods, PM-SMART contributes to sustainable development, reduces migration pressures, and fosters economic growth in villages. Beneficiaries receive access to training centers, digital learning platforms, and financial schemes to implement innovative solutions locally."
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

// Helper function to create URL-friendly slugs
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

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
    schemeCard.className =
      "bg-white rounded-xl shadow-lg p-6 scheme-card cursor-pointer";
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
    schemeItem.className =
      "bg-white rounded-xl shadow-lg p-6 scheme-card mb-4 cursor-pointer";
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

  // Update browser URL without reloading the page
  const schemeSlug = createSlug(scheme.name);
  const newUrl = `${window.location.origin}${window.location.pathname}?scheme=${schemeSlug}`;
  window.history.pushState({ scheme: schemeSlug }, "", newUrl);

  // Update WhatsApp share link
  const shareText = `Check out this PM Scheme: ${scheme.name} - ${scheme.description}. Learn more at: ${newUrl}`;
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
        <p class="text-gray-700">${scheme.longDescription}</p>
      </div>
       
      <div class="flex items-center flex-wrap gap-4">
        <a href="${scheme.officialSite}" target="_blank" class="btn-orange px-6 py-3 rounded-lg flex items-center">
          <i class="fas fa-external-link-alt mr-2"></i> Official Website
        </a>
        <button id="share-btn" class="border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg">
          <i class="far fa-share-square mr-2"></i> Share
        </button>
        <a href="${whatsappLink.href}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center">
          <i class="fab fa-whatsapp mr-2"></i> Share via WhatsApp
        </a>
      </div>
    </div>
  `;

  // Add event listener for share button
  document
    .getElementById("share-btn")
    .addEventListener("click", () => shareScheme(scheme));

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to handle back button
function handleBackButton() {
  detailsContainer.classList.add("hidden");
  schemesContainer.classList.remove("hidden");
  whatsappShare.classList.add("hidden");

  // Remove scheme parameter from URL without page reload
  const url = new URL(window.location);
  url.searchParams.delete("scheme");
  window.history.pushState({}, "", url);
}

// Function to check URL parameters and show corresponding scheme
function checkUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const schemeParam = urlParams.get("scheme");

  if (schemeParam) {
    // Find scheme by slug
    const scheme = schemes.find((s) => createSlug(s.name) === schemeParam);
    if (scheme) {
      showSchemeDetails(scheme);
    }
  }
}

// Function to share scheme
function shareScheme(scheme) {
  if (navigator.share) {
    navigator
      .share({
        title: scheme.name,
        text: scheme.description,
        url: `${window.location.origin}${
          window.location.pathname
        }?scheme=${createSlug(scheme.name)}`,
      })
      .catch((error) => {
        console.log("Error sharing:", error);
      });
  } else {
    // Fallback: Copy to clipboard
    const shareUrl = `${window.location.origin}${
      window.location.pathname
    }?scheme=${createSlug(scheme.name)}`;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  }
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

  // Check if URL has a scheme parameter and show corresponding scheme
  checkUrlParams();

  // Listen for popstate events (back/forward navigation)
  window.addEventListener("popstate", function (event) {
    // If we have a scheme in URL, show it, otherwise show list
    const urlParams = new URLSearchParams(window.location.search);
    const schemeParam = urlParams.get("scheme");

    if (schemeParam) {
      const scheme = schemes.find((s) => createSlug(s.name) === schemeParam);
      if (scheme) {
        showSchemeDetails(scheme);
      }
    } else {
      handleBackButton();
    }
  });

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
});

// Email subscription function
function submitButton() {
  const emailInput = document.querySelector('input[type="email"]');
  const msgDiv = document.getElementById("msg");

  if (emailInput.value) {
    msgDiv.style.display = "flex";
    emailInput.value = "";

    // Hide message after 5 seconds
    setTimeout(() => {
      msgDiv.style.display = "none";
    }, 5000);
  }
}

// disable right-click menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// block common developer-shortcuts and view-source
document.addEventListener("keydown", function (e) {
  // Normalize key (modern browsers)
  const key = e.key || e.keyCode;

  // Block F12
  if (key === "F12" || key === 123) {
    e.preventDefault();
    return false;
  }

  // Block Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (key === "I" ||
      key === "J" ||
      key === "C" ||
      key === 73 ||
      key === 74 ||
      key === 67)
  ) {
    e.preventDefault();
    return false;
  }

  // Block Ctrl+U (view source), Ctrl+S (save), Ctrl+Shift+S, Ctrl+P (print)
  if (
    (e.ctrlKey || e.metaKey) &&
    (key === "U" ||
      key === "S" ||
      key === "P" ||
      key === "u" ||
      key === "s" ||
      key === "p" ||
      key === 85 ||
      key === 83 ||
      key === 80)
  ) {
    e.preventDefault();
    return false;
  }

  // Block Ctrl+Shift+K (firefox webconsole), Ctrl+Shift+K keyCode fallback
  if (e.ctrlKey && e.shiftKey && (key === "K" || key === 75 || key === "k")) {
    e.preventDefault();
    return false;
  }
});

// Optional: mild devtools-open detection (heuristic, unreliable)
(function detectDevTools() {
  const threshold = 160;
  let open = false;
  function check() {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      if (!open) {
        open = true;
        console.log("DevTools likely opened");
        // Do NOT forcibly redirect users — that is hostile. You can log or show UI instead.
      }
    } else {
      open = false;
    }
  }
  setInterval(check, 1000);
})();
