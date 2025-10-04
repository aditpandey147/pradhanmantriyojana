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
      "Pradhan Mantri Kisan Samman Nidhi Yojana (PM-KISAN) is a flagship income support scheme launched in February 2019 to provide assured income support to farmers in India. Eligible farmers receive ₹6,000 annually in three installments directly into Aadhaar-linked bank accounts via the Direct Benefit Transfer (DBT) system. The scheme targets small and marginal farmers owning up to 2 hectares of cultivable land. By eliminating middlemen, PM-KISAN ensures transparency and timely payments. It complements other farmer welfare programs such as PM Fasal Bima Yojana (crop insurance) and PM Krishi Sinchayee Yojana (irrigation support). As of now, PM-KISAN has benefited millions of farmers and remains one of the world’s largest income support programs, strengthening rural households, reducing poverty, and helping achieve the government’s vision of doubling farmers’ income.",
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
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched in September 2018, is the world’s largest publicly funded health insurance scheme. It provides cashless coverage of ₹5 lakh per family per year for hospitalization at empaneled public and private hospitals. The scheme covers more than 1,500 medical packages including surgeries, diagnostics, and post-hospitalization care. Beneficiaries are identified based on the SECC database and targeted occupational groups. PM-JAY ensures portability across India, allowing beneficiaries to access healthcare anywhere in the country. With its emphasis on cashless and paperless service delivery, biometric verification, and fraud prevention, PM-JAY has transformed healthcare accessibility for millions of poor families, reducing out-of-pocket expenses and preventing medical debt. The scheme complements Ayushman Bharat Health and Wellness Centres, strengthening India’s universal health coverage framework.",
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
      "Pradhan Mantri Ujjwala Yojana (PMUY), launched in May 2016, provides free LPG connections to women from Below Poverty Line (BPL) families to promote clean cooking fuel. Each household receives financial support of ₹1,600 covering the security deposit, regulator, and installation charges. The scheme aims to reduce dependence on unsafe fuels like wood and kerosene, improving women’s health and reducing indoor pollution. PMUY has distributed more than 8 crore LPG connections, empowering women, improving health outcomes, and contributing to environmental conservation. By replacing traditional fuels with LPG, the scheme reduces deforestation and carbon emissions while saving time and labor for rural women. Targeted subsidies continue to support the poorest families in sustaining LPG usage.",
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
      "Pradhan Mantri Awas Yojana (PMAY), launched in 2015, is the government’s flagship housing scheme to achieve ‘Housing for All’ by 2022. The scheme has two components: PMAY-Urban (PMAY-U) for slum dwellers and low-income groups in cities, and PMAY-Gramin (PMAY-G) for rural households. It provides financial assistance and subsidies for building pucca houses with facilities like toilets, LPG, electricity, and water. Women’s ownership is prioritized, empowering them with property rights. PMAY also promotes eco-friendly construction technologies. Millions of houses have been built under PMAY, reducing homelessness, improving living conditions, and generating employment in the construction sector. It remains one of the most impactful housing programs in the world.",
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
      "Pradhan Mantri MUDRA Yojana (PMMY), launched in April 2015, is a financial inclusion scheme that provides collateral-free loans up to ₹10 lakh to small and micro enterprises. Loans are divided into Shishu (up to ₹50,000) for startups, Kishore (₹50,001–₹5 lakh) for growing businesses, and Tarun (₹5–10 lakh) for established businesses. The scheme empowers first-generation entrepreneurs, women, SC/ST communities, and rural youth by supporting businesses in manufacturing, trading, and services. By funding small businesses, PMMY creates jobs, promotes self-reliance, and contributes to Make in India. Millions of loans have been sanctioned under PMMY, formalizing small businesses, reducing credit gaps, and driving inclusive economic growth.",
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
      "PM-SVANidhi, launched in June 2020, provides economic support to street vendors affected by the COVID-19 pandemic. The scheme offers collateral-free loans up to ₹10,000, enabling vendors to restart businesses, purchase stock, or upgrade operations. Digital payments are incentivized through cashback, promoting financial inclusion and transparency. The program also provides mechanisms for loan renewal with higher credit limits for timely repayment. Skill development and financial literacy initiatives help vendors manage businesses efficiently. Millions of street vendors across India have benefited, reflecting the government’s commitment to informal workers, entrepreneurship, and urban economic recovery.",
  },
  {
    id: generateRandomId(),
    name: "PM-KUSUM",
    description:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan – Solar power and energy support scheme for farmers in India.",
    fullName:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",
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
      "PM-KUSUM, launched in 2019, aims to promote solar energy adoption among farmers, reduce dependence on grid electricity, and generate additional income through renewable energy. The scheme supports standalone solar pumps, solarization of existing pumps, and decentralized solar plants. Financial assistance and subsidies cover a significant portion of costs, enabling farmers to lower electricity bills and sell excess power to the grid. PM-KUSUM encourages technology adoption, skill development, and environmental sustainability while strengthening rural entrepreneurship and climate-resilient agriculture.",
  },
  {
    id: generateRandomId(),
    name: "PM-FME",
    description:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises – Support for micro food businesses in India.",
    fullName:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PM-FME)",
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
      "PM-FME, launched in 2020, aims to formalize and strengthen micro food processing enterprises across India. The scheme provides credit-linked subsidies up to 35%, technical assistance, and marketing support, including exhibitions and e-commerce promotion. It targets SHGs, FPOs, cooperatives, and individual entrepreneurs in milling, dairy, pickling, and packaging sectors. PM-FME enhances productivity, quality standards, and market linkages, fosters rural entrepreneurship, employment generation, women participation, and contributes to doubling farmers’ income and reducing post-harvest losses.",
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
      "PMFBY, launched in 2016, provides crop insurance protection against losses from natural calamities, pests, and diseases. It stabilizes farmers’ income, encourages crop diversification, and reduces dependence on informal credit. Premiums are subsidized by central and state governments. Compensation is directly transferred to farmers’ accounts through DBT. The scheme uses technology like remote sensing and drones for crop monitoring and risk assessment. PMFBY has insured millions of farmers, securing livelihoods, improving adoption of quality seeds, and strengthening India’s agricultural resilience.",
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
      "PMJDY, launched in August 2014, is a flagship financial inclusion scheme providing universal banking access to all Indian citizens. Beneficiaries can open zero-balance accounts with a RuPay debit card, overdraft facility, insurance cover, and pension options. The scheme integrates marginalized populations into the formal financial system, facilitating DBT of subsidies and welfare benefits. PMJDY improves financial literacy, reduces reliance on informal lenders, and encourages savings. It has enabled millions to access banking services, contributing to economic empowerment, social security, and inclusive growth in India’s cashless and digital economy.",
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
    benefits:
      "Affordable housing with financial assistance, interest subsidies, housing loans",
    eligibility:
      "Urban & rural poor, women-headed households, economically weaker sections",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing & Urban Development",
    ministry: "Ministry of Housing and Urban Affairs",
    status: "Active",
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY), launched in 2015, is a flagship initiative aimed at providing affordable housing to urban and rural citizens with a vision of 'Housing for All' by 2022. The scheme covers PMAY-U and PMAY-G, targeting EWS, LIG, and MIG groups. It offers financial support via interest subsidies, direct assistance, and incentives for energy-efficient construction. PMAY prioritizes women-headed households, senior citizens, and differently-abled individuals. Beneficiaries can access loans at subsidized rates, with transparent application processing and monitoring. Millions of homes have been sanctioned and constructed, improving living conditions, reducing slum prevalence, and fostering socio-economic development.",
  },
  {
    id: generateRandomId(),
    name: "National Health Mission",
    description: "Healthcare Improvement Initiative",
    fullName: "National Health Mission (NHM)",
    launched: "2013",
    benefits:
      "Enhanced public healthcare services, maternal and child health, disease control",
    eligibility: "All citizens, with focus on rural and vulnerable populations",
    officialSite: "https://nhm.gov.in",
    logo: "fas fa-hospital",
    category: "Health & Wellness",
    ministry: "Ministry of Health and Family Welfare",
    status: "Active",
    longDescription:
      "The National Health Mission (NHM), launched in 2013, strengthens healthcare delivery across India, particularly in rural areas. Integrating NRHM and NUHM, NHM ensures equitable access to quality healthcare. Focus areas include maternal and child health, immunization, disease prevention, and health system infrastructure. The program leverages public-private partnerships, technology for data and telemedicine, and community participation via ASHAs. NHM reduces financial barriers, promotes early diagnosis, and improves health outcomes. Since its inception, it has enhanced healthcare access, reduced maternal and infant mortality, and strengthened India’s health infrastructure.",
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat Yojana",
    description: "Health Insurance Scheme",
    fullName: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    launched: "2018",
    benefits:
      "Cashless health insurance coverage up to ₹5 lakh per family annually",
    eligibility:
      "Rural and urban poor families, identified through socio-economic criteria",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-notes-medical",
    category: "Health & Welfare",
    ministry: "Ministry of Health and Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat PM-JAY, launched in 2018, is India’s largest health insurance scheme, providing financial protection and access to quality healthcare. Covering over 10 crore families, it offers cashless secondary and tertiary care up to ₹5 lakh annually. Targeting economically weaker populations, PM-JAY reduces financial burdens of hospitalization. The scheme integrates digital technologies for beneficiary identification, hospital empanelment, claims management, and monitoring. It covers surgeries, chronic illnesses, maternity, and critical care. Millions of treatments have been availed, promoting universal health coverage, inclusive development, and equitable access to healthcare.",
  },
  {
    id: generateRandomId(),
    name: "Beti Bachao Beti Padhao",
    description: "Girl Child Protection & Education Scheme",
    fullName: "Beti Bachao Beti Padhao (BBBP)",
    launched: "2015",
    benefits:
      "Promotes girl child survival, education, gender equality, and empowerment",
    eligibility: "All girls and their families across India",
    officialSite: "https://wcd.nic.in/bbbp-schemes",
    logo: "fas fa-female",
    category: "Women & Child Development",
    ministry: "Ministry of Women and Child Development",
    status: "Active",
    longDescription:
      "Beti Bachao Beti Padhao (BBBP), launched in 2015, addresses declining child sex ratio, promotes girls’ education, and empowers the girl child. The program focuses on prevention of gender-biased elimination, survival, protection, and education. BBBP combines advocacy, awareness campaigns, policy interventions, and community engagement. It collaborates with health, education, and law enforcement to prevent female feticide. The scheme provides scholarships, mentoring, and skill development. Since inception, BBBP has improved child sex ratio, increased awareness, and promoted inclusive education, reducing discrimination and fostering gender equality.",
  },
  {
    id: generateRandomId(),
    name: "National Nutrition Mission",
    description: "Nutrition & Health Scheme",
    fullName: "Poshan Abhiyaan",
    launched: "2018",
    benefits:
      "Reducing malnutrition, improving maternal and child health, micronutrient supplementation",
    eligibility:
      "Pregnant women, lactating mothers, and children up to 6 years",
    officialSite: "https://poshanabhiyaan.gov.in",
    logo: "fas fa-apple-alt",
    category: "Health & Nutrition",
    ministry: "Ministry of Women and Child Development",
    status: "Active",
    longDescription:
      "The National Nutrition Mission (Poshan Abhiyaan), launched in 2018, aims to improve nutrition for children, pregnant women, and lactating mothers. It reduces stunting, undernutrition, anemia, and low birth weight via supplementary nutrition, immunization, health check-ups, and behavior change communication. Leveraging technology and real-time monitoring, the program engages Anganwadi workers and local governance. Awareness campaigns, capacity building, and community mobilization promote healthy habits. Poshan Abhiyaan contributes to cognitive, physical, and long-term socio-economic development, aligning with India’s SDGs for health and social equity.",
  },
  {
    id: generateRandomId(),
    name: "Deen Dayal Upadhyaya Gram Jyoti Yojana",
    description: "Rural Electrification Scheme",
    fullName: "DDUGJY",
    launched: "2015",
    benefits:
      "Rural electrification, feeder separation, and reliable electricity supply to villages",
    eligibility: "All rural households and villages without electricity",
    officialSite: "https://www.ddugjy.gov.in",
    logo: "fas fa-bolt",
    category: "Energy & Infrastructure",
    ministry: "Ministry of Power",
    status: "Active",
    longDescription:
      "Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY), launched in 2015, provides continuous electricity to rural India. The scheme includes feeder separation, strengthening transmission and distribution networks, and electrifying unconnected villages. It enhances energy access, economic development, and quality of life. Modern technology, smart metering, and monitoring improve efficiency and reduce losses. Farmers and households benefit from reliable electricity. Thousands of villages have been electrified, bridging urban-rural energy gaps and promoting inclusive development.",
  },
  {
    id: generateRandomId(),
    name: "Smart Cities Mission",
    description: "Urban Development & Smart Infrastructure Scheme",
    fullName: "Smart Cities Mission",
    launched: "2015",
    benefits:
      "Creation of citizen-friendly, sustainable, and technologically advanced urban centers",
    eligibility:
      "Selected cities based on State/UT proposals and ranking under the mission framework",
    officialSite: "https://smartcities.gov.in",
    logo: "fas fa-city",
    category: "Urban Development & Infrastructure",
    ministry: "Ministry of Housing and Urban Affairs",
    status: "Active",
    longDescription:
      "The Smart Cities Mission, launched in 2015, aims to create 100 smart cities that are citizen-centric, sustainable, and technologically advanced. Core infrastructure includes water supply, sanitation, energy, intelligent transport, and IT connectivity. Cities adopt innovative solutions for mobility, waste management, energy efficiency, and public safety using digital technologies. Citizen participation is central to planning and monitoring. PPP models implement sustainable projects, promote investment, and improve livability. Since inception, projects include smart traffic management, e-governance, smart meters, and digitally connected services. The mission aligns with India’s sustainable urbanization, economic growth, and improved quality of life.",
  },
  {
    id: generateRandomId(),
    name: "BharatNet Project",
    description: "Rural Broadband Connectivity Initiative",
    fullName: "BharatNet Project",
    launched: "2011",
    benefits:
      "High-speed broadband connectivity to all gram panchayats, bridging the digital divide",
    eligibility: "All rural areas and gram panchayats across India",
    officialSite: "https://bharatnet.bbnl.nic.in",
    logo: "fas fa-network-wired",
    category: "Digital Infrastructure",
    ministry: "Ministry of Communications",
    status: "Active",
    longDescription:
      "The BharatNet Project, launched in 2011, provides high-speed broadband to all gram panchayats, bridging the rural-urban digital divide. The project uses optical fiber, wireless, and last-mile solutions for reliable internet in remote villages. BharatNet enables e-governance, digital financial inclusion, education, skill development, and rural entrepreneurship. Telemedicine, smart village initiatives, and community centers enhance access to healthcare and economic opportunities. The scheme fosters socio-economic empowerment, inclusivity, and innovation, enabling rural populations to fully participate in the digital economy.",
  },
  {
    id: generateRandomId(),
    name: "PM Viksit Bharat Yojna",
    description: "Holistic Development Mission for a Developed India by 2047",
    fullName: "Pradhan Mantri Viksit Bharat Yojna",
    launched: "2023",
    benefits:
      "Comprehensive growth across infrastructure, digital empowerment, healthcare, education, agriculture, and employment to achieve the vision of a developed India by 2047",
    eligibility:
      "All citizens of India; special focus on rural, youth, women, and marginalized communities",
    officialSite: "https://www.india.gov.in",
    logo: "fas fa-flag",
    category: "National Development",
    ministry: "NITI Aayog / Multiple Ministries",
    status: "Active",
    longDescription:
      "Pradhan Mantri Viksit Bharat Yojna, launched in 2023, aims to transform India into a developed nation by 2047. The scheme focuses on infrastructure, digital innovation, healthcare, education, agriculture, and employment. It prioritizes inclusive growth for women, youth, rural, and marginalized communities. The initiative fosters entrepreneurship, skill development, green energy, and technology innovation. Large-scale projects include highways, smart cities, and digital infrastructure. Participatory governance ensures citizens contribute to development. The scheme aligns with sustainability, inclusivity, and innovation, bridging socio-economic divides and empowering every citizen.",
  },
  {
    id: generateRandomId(),
    name: "Viksit Bharat Rojgar Yojna",
    description: "Employment Generation and Skill Development Mission",
    fullName: "Pradhan Mantri Viksit Bharat Rojgar Yojna",
    launched: "2024",
    benefits:
      "Youth receive financial assistance ₹5,000–₹15,000/month during training, plus subsidies, loans, and entrepreneurship support",
    eligibility:
      "Unemployed youth, job seekers, entrepreneurs, and workers in rural and urban areas",
    officialSite: "https://www.india.gov.in",
    logo: "fas fa-briefcase",
    category: "Employment & Skill Development",
    ministry: "Ministry of Labour and Employment",
    status: "Active",
    longDescription:
      "Viksit Bharat Rojgar Yojna, launched in 2024, creates sustainable employment and empowers India’s workforce. It generates jobs in manufacturing, services, agriculture, and digital sectors while emphasizing skill development and digital upskilling. Youth receive financial support during training, and entrepreneurs get loans, grants, and mentorship. Special focus is on women, rural workers, and marginalized communities. Digital platforms connect job seekers with employers. Apprenticeships and industry partnerships bridge skill gaps. The scheme fosters employment, entrepreneurship, livelihoods, and socio-economic empowerment, supporting India’s vision of a developed nation by 2047.",
  },
  {
    id: generateRandomId(),
    name: "PM Dhan-Dhanya Krishi Yojana",
    description:
      "Pradhan Mantri Dhan-Dhanya Krishi Yojana 2025 – A central government scheme to boost crop productivity, diversification, and sustainable agriculture in India",
    fullName: "Pradhan Mantri Dhan-Dhanya Krishi Yojana (PM-DDKY)",
    launched: "2025",
    benefits:
      "Financial support for crop diversification, productivity, sustainable practices, and improved farmer income across 100 districts",
    eligibility:
      "Farmers in identified districts, including small and marginal farmers (~1.7 crore beneficiaries)",
    officialSite: "https://agricoop.gov.in",
    logo: "fas fa-seedling",
    category: "Agriculture & Rural Development",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "PM Dhan-Dhanya Krishi Yojana (PM-DDKY), approved in 2025 with ₹24,000 crore allocation, boosts crop productivity, diversification, and sustainable farming across 100 districts. Targeting ~1.7 crore farmers, it provides seeds, modern techniques, improved irrigation, and sustainable practices. The scheme complements PMFBY and PM Krishi Sinchayee Yojana, promoting climate-resilient agriculture and better post-harvest management. District-based interventions allow localized support, benefiting small and marginal farmers and rural communities by creating jobs and improving supply chains. PM-DDKY advances sustainable development, increases farmer income, reduces rural poverty, and strengthens agricultural growth. Guidelines and updates are available at https://agricoop.gov.in.",
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
