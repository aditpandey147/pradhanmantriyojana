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
      "Small and marginal landholder farmer families owning up to 2 hectares of cultivable land",
    officialSite: "https://pmkisan.gov.in",
    logo: "fas fa-tractor",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme was launched in February 2019 with the aim of providing assured income support to farmers across India. This scheme addresses the financial needs of small and marginal landholder families, who often face uncertain income due to crop failures, price fluctuations, and natural disasters. Under PM-KISAN, eligible farmers receive ₹6,000 annually in three equal installments, directly transferred to their Aadhaar-linked bank accounts through the Direct Benefit Transfer (DBT) mechanism. This ensures transparency, removes middlemen, and guarantees timely delivery of benefits. The scheme specifically targets farmer families owning up to two hectares of cultivable land, thereby focusing on the most vulnerable segment of the agricultural community. Certain groups such as institutional landholders, income tax payers, and high-income professionals are excluded to ensure benefits reach those who truly depend on farming for survival. One of the strengths of PM-KISAN is that it provides flexibility, as the funds are not tied to specific expenses. Farmers can use the money for seeds, fertilizers, tools, household needs, or debt repayment, helping them achieve financial stability. Beyond individual support, PM-KISAN complements other government initiatives like PM Fasal Bima Yojana (crop insurance) and PM Krishi Sinchayee Yojana (irrigation support), creating a holistic ecosystem of agricultural support. Over time, the scheme has expanded its coverage and strengthened its verification mechanisms using digital technology and land record databases. As of today, PM-KISAN has disbursed billions of rupees, directly benefiting millions of farmer families across rural India. By reducing dependence on moneylenders, improving consumption capacity, and supporting farm investment, the scheme contributes to poverty reduction and rural economic growth. It also reflects the government’s vision of doubling farmers’ income and ensuring long-term agricultural sustainability. PM-KISAN remains one of the world’s largest income support programs for farmers, representing a major policy intervention in India’s rural economy."
  },
  {
    id: generateRandomId(),
    name: "PM-JAY",
    description: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    fullName: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    launched: "2018",
    benefits: "Health coverage of ₹5 lakh per family per year",
    eligibility: "Deprived rural families and identified occupational categories",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-hospital",
    category: "Health",
    ministry: "Ministry of Health & Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched in September 2018, is the world’s largest publicly funded health insurance scheme. Its primary objective is to reduce the financial burden of healthcare on poor and vulnerable families by providing free secondary and tertiary hospitalization coverage. PM-JAY provides an annual coverage of ₹5 lakh per family with no restriction on family size, age, or gender. Beneficiaries are identified based on the Socio-Economic Caste Census (SECC) database and specific occupational criteria, ensuring that the scheme targets the most disadvantaged households. The scheme covers over 1,500 medical packages including surgeries, diagnostics, and pre- and post-hospitalization costs, all provided on a cashless and paperless basis at empaneled public and private hospitals across the country. A major strength of PM-JAY is its portability, allowing beneficiaries to access healthcare services anywhere in India, irrespective of their home state. The scheme has significantly reduced out-of-pocket expenditure, which has historically been one of the main reasons for rural indebtedness and poverty. By preventing catastrophic healthcare expenses, PM-JAY helps families avoid falling deeper into financial distress. Technological innovations such as electronic health cards, biometric verification, and real-time monitoring systems ensure efficiency, transparency, and fraud prevention in service delivery. PM-JAY also incentivizes hospitals to expand infrastructure, improve service quality, and adopt digital health solutions. As of now, the scheme has benefited millions of households, with lakhs of hospital admissions being covered under it every year. It represents a paradigm shift in healthcare delivery in India by prioritizing universal health coverage and addressing the healthcare needs of the most vulnerable. In addition, PM-JAY complements other health missions like Ayushman Bharat Health and Wellness Centres, thereby creating a holistic healthcare ecosystem. This landmark program not only saves lives but also safeguards livelihoods by ensuring affordable access to quality healthcare services."
  },
  {
    id: generateRandomId(),
    name: "PM-UJJWALA",
    description: "Pradhan Mantri Ujjwala Yojana",
    fullName: "Pradhan Mantri Ujjwala Yojana",
    launched: "2016",
    benefits: "Free LPG connections to women from below-poverty-line households",
    eligibility: "Women belonging to BPL households",
    officialSite: "https://www.pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Social Welfare",
    ministry: "Ministry of Petroleum & Natural Gas",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY) was launched in May 2016 with the goal of promoting clean cooking fuel among poor households in India. Before this scheme, a significant proportion of rural families relied on traditional fuels like firewood, coal, or cow dung cakes, which not only harmed the environment but also caused severe indoor air pollution leading to respiratory diseases, especially among women and children. PMUY aims to address this health and social challenge by providing free LPG connections to women belonging to below-poverty-line households. Each beneficiary receives a financial support of ₹1,600 which covers the security deposit for the LPG cylinder, regulator, and installation charges. Additionally, the first refill and stove are often provided free or through easy installment schemes, making it easier for poor families to adopt LPG usage. The scheme has a special focus on marginalized groups such as SC/ST households, forest dwellers, and other vulnerable communities. By empowering women with access to clean cooking fuel, PMUY has reduced their drudgery of collecting firewood and improved their overall quality of life. It has also promoted environmental conservation by reducing deforestation and carbon emissions. Over 8 crore LPG connections have been distributed under PMUY, making it one of the largest clean energy programs in the world. The scheme has also created jobs in the LPG supply chain, boosting rural employment. While challenges remain, such as ensuring affordability of refill cylinders for the poorest families, the government continues to provide targeted subsidies and encourage regular LPG usage. PMUY stands as a milestone in India’s journey towards universal energy access, gender empowerment, and sustainable development."
  },
  {
    id: generateRandomId(),
    name: "PM-AWAS",
    description: "Pradhan Mantri Awas Yojana",
    fullName: "Pradhan Mantri Awas Yojana",
    launched: "2015",
    benefits: "Affordable housing for all by 2022",
    eligibility: "Economically weaker sections and low-income groups",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing",
    ministry: "Ministry of Housing & Urban Affairs",
    status: "Active",
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY) was launched in June 2015 with the ambitious vision of ensuring ‘Housing for All’ by 2022. The scheme was designed to tackle India’s acute housing shortage, particularly for the urban and rural poor, and to improve living standards by providing pucca houses with basic amenities. PMAY has two main components – PMAY-Urban (PMAY-U) targeting slum dwellers and low-income families in cities, and PMAY-Gramin (PMAY-G) focusing on rural households. Under PMAY-U, the scheme provides assistance through four verticals: in-situ slum redevelopment, credit-linked subsidy for home loans, affordable housing in partnership, and beneficiary-led house construction. PMAY-G, on the other hand, provides direct financial support of ₹1.20 to ₹1.30 lakh for constructing houses with essential facilities like toilets, electricity, LPG connections, and clean drinking water. One of the distinguishing features of PMAY is the emphasis on women empowerment, as houses are often registered in the name of women or jointly with their spouses. The scheme also promotes the use of eco-friendly, disaster-resistant construction technologies to ensure sustainable housing. PMAY has transformed millions of lives by giving families a sense of security, dignity, and improved health conditions. It has also generated massive employment in the construction and allied industries, boosting the economy. Though challenges such as timely execution, land availability, and urban planning persist, PMAY remains one of the most impactful housing programs globally. By aiming to provide a roof over every family’s head, the scheme symbolizes inclusive development and the government’s commitment to social welfare."
  },
  {
    id: generateRandomId(),
    name: "PM-MUDRA",
    description: "Pradhan Mantri MUDRA Yojana",
    fullName: "Pradhan Mantri Micro Units Development & Refinance Agency Ltd.",
    launched: "2015",
    benefits: "Loans up to ₹10 lakh for small and micro enterprises",
    eligibility: "Small business owners, entrepreneurs, and startups",
    officialSite: "https://www.mudra.org.in",
    logo: "fas fa-business-time",
    category: "Financial Inclusion",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "Pradhan Mantri MUDRA Yojana (PMMY), launched in April 2015, is a flagship financial inclusion program aimed at supporting small and micro enterprises that form the backbone of India’s economy. The scheme was created to address the challenges faced by small entrepreneurs in accessing affordable credit due to lack of collateral, credit history, or formal documentation. Under PMMY, loans up to ₹10 lakh are provided to non-corporate, non-farm small businesses through banks, microfinance institutions, and NBFCs. These loans are categorized into three products: Shishu (up to ₹50,000) for early-stage businesses, Kishore (₹50,001 to ₹5 lakh) for growing enterprises, and Tarun (₹5,00,001 to ₹10 lakh) for well-established small businesses seeking expansion. By tailoring support according to business needs, PMMY provides flexibility and ensures scalability. The scheme has been especially beneficial for first-generation entrepreneurs, women, SC/ST communities, and rural youth who want to start or expand businesses in manufacturing, trading, or services. One of the unique features of PMMY is that loans are collateral-free, reducing barriers for small entrepreneurs. The scheme has facilitated millions of loans worth billions of rupees, enabling job creation, innovation, and economic diversification. In addition, PMMY has contributed to formalizing the informal sector by bringing small enterprises under the ambit of institutional finance. Despite challenges like repayment risks and the need for financial literacy, PMMY continues to empower India’s entrepreneurial spirit and supports the vision of ‘Make in India’ and self-reliant growth. By funding the unfunded, the scheme has become a catalyst for inclusive and sustainable economic development."
  },
  {
    id: generateRandomId(),
    name: "PM-SVANidhi",
    description: "Pradhan Mantri Street Vendor’s AtmaNirbhar Nidhi",
    fullName: "Pradhan Mantri Street Vendor’s AtmaNirbhar Nidhi",
    launched: "2020",
    benefits: "Collateral-free loans up to ₹10,000 for street vendors",
    eligibility: "Registered street vendors under the Street Vendors Act, 2014",
    officialSite: "https://pmnsvy.in",
    logo: "fas fa-store",
    category: "Financial Inclusion",
    ministry: "Ministry of Housing & Urban Affairs",
    status: "Active",
    longDescription:
      "Pradhan Mantri Street Vendor’s AtmaNirbhar Nidhi (PM-SVANidhi) was launched in June 2020 to provide economic support to street vendors affected by the COVID-19 pandemic. Recognizing the vulnerability of urban informal workers, the scheme offers collateral-free loans up to ₹10,000 to street vendors, enabling them to restart their businesses and restore livelihoods disrupted by lockdowns. Vendors can avail of the loan for working capital, purchasing stock, or upgrading their business. PM-SVANidhi is designed to encourage digital transactions; vendors making digital payments become eligible for cashback incentives, promoting financial inclusion and transparency. The scheme also provides a mechanism for loan renewal, giving vendors access to higher credit limits upon timely repayment. Street vendors registered under the Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014 are eligible, ensuring a formal recognition process and protection of their rights. Beyond credit support, PM-SVANidhi includes skill development and financial literacy programs to help vendors manage their businesses efficiently. The scheme also fosters integration of street vendors into urban development plans, promoting sustainable livelihoods and contributing to the local economy. Since its launch, millions of vendors across India have benefited, demonstrating the government’s commitment to informal workers’ welfare. PM-SVANidhi not only addresses immediate financial needs but also strengthens resilience among street vendors by encouraging modernization, digital adoption, and formal financial linkages. By facilitating entrepreneurship at the grassroots level, the scheme contributes to economic recovery, urban employment, and inclusive growth in post-pandemic India."
  },
  {
    id: generateRandomId(),
    name: "PM-KUSUM",
    description: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
    fullName: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
    launched: "2019",
    benefits: "Solar pumps and grid-connected solar power for farmers",
    eligibility: "All farmers in India",
    officialSite: "https://pmkusum.nic.in",
    logo: "fas fa-solar-panel",
    category: "Renewable Energy",
    ministry: "Ministry of New and Renewable Energy",
    status: "Active",
    longDescription:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) was launched in 2019 with the objective of promoting solar energy adoption among farmers, reducing their dependence on grid electricity, and providing additional income through renewable energy generation. The scheme aims to install thousands of standalone solar pumps and grid-connected solar plants on farmers’ land, ensuring sustainable energy usage while empowering farmers economically. PM-KUSUM has three key components: installation of standalone solar pumps, solarization of existing grid-connected agricultural pumps, and the development of decentralized renewable power plants. Farmers who participate can receive financial assistance from the central and state governments, with subsidies covering a significant portion of the project cost. The scheme not only ensures reliable and affordable irrigation but also helps farmers reduce electricity bills and operational costs. Additionally, excess electricity generated by solar plants can be sold to the grid, providing farmers with an alternative revenue source and promoting rural entrepreneurship. PM-KUSUM supports environmental sustainability by reducing carbon emissions, promoting green energy, and contributing to India’s renewable energy targets. It also encourages technology adoption, training programs, and skill development for rural communities. By integrating agriculture with renewable energy, the scheme strengthens energy security, enhances farmers’ income, and supports climate-resilient farming. Since its inception, PM-KUSUM has facilitated thousands of installations across the country, contributing to energy transition, rural empowerment, and sustainable agricultural growth."
  },
  {
    id: generateRandomId(),
    name: "PM-FME",
    description: "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
    fullName: "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
    launched: "2020",
    benefits: "Credit-linked subsidy and support for food processing micro-enterprises",
    eligibility: "Micro food processing units and small food entrepreneurs",
    officialSite: "https://pmfme.mofpi.gov.in",
    logo: "fas fa-industry",
    category: "Entrepreneurship",
    ministry: "Ministry of Food Processing Industries",
    status: "Active",
    longDescription:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PM-FME) was launched in 2020 to strengthen and formalize the food processing sector in India, especially micro units and small entrepreneurs operating in the informal economy. The scheme provides financial support, credit-linked subsidies, and technical assistance to micro food processing enterprises, helping them enhance competitiveness, scale operations, and comply with food safety and quality standards. PM-FME targets self-help groups, farmer producer organizations, cooperatives, and individual entrepreneurs engaged in food processing activities such as milling, pickling, dairy, and packaging. Through the scheme, beneficiaries receive up to 35% subsidy on eligible project costs, access to low-cost credit, and marketing support, including participation in exhibitions, branding, and e-commerce promotion. Capacity-building initiatives under PM-FME include skill development, training on modern technology adoption, food safety compliance, and business development. By formalizing these micro-enterprises, the scheme increases productivity, improves quality standards, and enhances market linkages for small food producers. The initiative not only fosters entrepreneurship and income generation in rural and semi-urban areas but also contributes to national objectives like doubling farmers’ income and reducing post-harvest losses. PM-FME promotes employment generation, women participation, and value addition in the agri-food sector, strengthening India’s overall food processing ecosystem. By bridging the gap between informal and formal business practices, the scheme ensures sustainability, better access to finance, and economic resilience for micro food entrepreneurs."
  },
  {
    id: generateRandomId(),
    name: "PMFBY",
    description: "Pradhan Mantri Fasal Bima Yojana",
    fullName: "Pradhan Mantri Fasal Bima Yojana",
    launched: "2016",
    benefits: "Insurance coverage for crops against natural calamities",
    eligibility: "All farmers cultivating notified crops in India",
    officialSite: "https://pmfby.gov.in",
    logo: "fas fa-umbrella",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched in 2016, is a comprehensive crop insurance scheme designed to provide financial protection to farmers against crop loss due to natural calamities, pests, and diseases. The scheme aims to stabilize farmers’ income, encourage them to adopt modern technology and crop diversification, and reduce dependence on informal lending sources. PMFBY covers annual crops, horticultural crops, and commercial crops, offering risk coverage at the individual farm level or area-based level. Premium rates are highly subsidized, with the central and state governments sharing a substantial portion to make it affordable for small and marginal farmers. In case of crop loss, the scheme ensures timely compensation through Direct Benefit Transfer to farmers’ bank accounts, enabling them to restart cultivation without falling into debt. PMFBY also promotes accurate yield estimation, data-driven risk assessment, and the use of technology like remote sensing and drones to monitor crop health. By securing farmers’ income, the scheme reduces economic vulnerability, encourages adoption of quality seeds, and enhances agricultural productivity. Since its inception, PMFBY has enrolled millions of farmers and insured crores of hectares of farmland. The scheme plays a pivotal role in building a resilient agricultural ecosystem, supporting food security, and providing social security to farming communities. By combining risk mitigation, technology adoption, and financial inclusion, PMFBY represents a significant policy intervention in India’s agricultural landscape."
  },
  {
    id: generateRandomId(),
    name: "PMJDY",
    description: "Pradhan Mantri Jan Dhan Yojana",
    fullName: "Pradhan Mantri Jan Dhan Yojana",
    launched: "2014",
    benefits: "Universal access to bank accounts, credit, insurance, and pensions",
    eligibility: "All Indian citizens, especially the unbanked",
    officialSite: "https://pmjdy.gov.in",
    logo: "fas fa-wallet",
    category: "Financial Inclusion",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "Pradhan Mantri Jan Dhan Yojana (PMJDY), launched in August 2014, is a flagship financial inclusion program aimed at ensuring universal access to banking facilities for all Indian citizens, particularly those who have never held a bank account. The scheme allows individuals to open zero-balance savings accounts with access to a RuPay debit card, overdraft facility, insurance cover, and pension schemes. PMJDY is designed to integrate marginalized and underserved populations into the formal financial system, enabling them to save securely, access credit, and participate in government welfare programs directly through Direct Benefit Transfer (DBT). By providing a banking gateway to the unbanked, the scheme reduces dependency on informal lenders, improves financial literacy, and promotes responsible financial behavior. Over the years, PMJDY has facilitated millions of account openings, with many beneficiaries availing of overdraft facilities and insurance schemes like life, accident, and deposit insurance. The initiative also includes educational outreach, awareness campaigns, and financial literacy programs to empower account holders to utilize banking services effectively. The scheme plays a crucial role in disbursing subsidies under various government schemes, ensuring transparency, reducing leakages, and fostering economic equality. By bridging the financial gap between urban and rural populations, PMJDY strengthens social security, encourages entrepreneurship, and supports the broader vision of an inclusive, cashless, and digital economy in India. It stands as a transformative step toward financial empowerment, economic security, and nationwide economic development."
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat",
    description: "Pradhan Mantri Jan Arogya Yojana",
    fullName: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana",
    launched: "2018",
    benefits: "Health insurance coverage up to ₹5 lakh per family per year",
    eligibility: "Economically vulnerable families based on SECC database",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-notes-medical",
    category: "Health",
    ministry: "Ministry of Health & Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat, also known as Pradhan Mantri Jan Arogya Yojana (PM-JAY), was launched in 2018 to provide financial protection and improve access to quality healthcare for economically vulnerable families in India. The scheme offers health insurance coverage of up to ₹5 lakh per family per year for secondary and tertiary hospitalization. Beneficiaries can access cashless treatment in empaneled hospitals across India, ensuring equitable healthcare services. Ayushman Bharat is based on the Socio-Economic Caste Census (SECC) database, targeting families in need without requiring prior enrollment fees or premiums. The scheme covers over 1,500 medical procedures, including surgeries, treatments for critical illnesses, and day-care services. It promotes preventive healthcare, early diagnosis, and timely treatment, reducing out-of-pocket expenditure that often pushes families into debt. Ayushman Bharat integrates digital technology for beneficiary identification, hospital empanelment, and claim management, ensuring transparency, efficiency, and accountability. Additionally, the scheme complements health and wellness centers under the broader Ayushman Bharat initiative, emphasizing comprehensive primary healthcare, nutrition, maternal and child health, and chronic disease management. The initiative not only improves healthcare access but also generates employment for healthcare providers and enhances hospital infrastructure in underserved areas. Since its launch, millions of families have benefited from free and cashless treatment, contributing significantly to reducing health-related financial distress and promoting universal health coverage. By bridging the gap between the formal healthcare system and vulnerable populations, Ayushman Bharat strengthens social security, ensures timely medical intervention, and supports India’s vision of accessible, affordable, and quality healthcare for all."
  },
  {
    id: generateRandomId(),
    name: "Skill India",
    description: "National Skill Development Mission",
    fullName: "Skill India – National Skill Development Mission",
    launched: "2015",
    benefits: "Skill training, certifications, and employment opportunities",
    eligibility: "Youth and working-age population seeking skill development",
    officialSite: "https://www.msde.gov.in",
    logo: "fas fa-graduation-cap",
    category: "Skill Development",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    status: "Active",
    longDescription:
      "Skill India, launched in 2015 under the National Skill Development Mission, aims to empower India’s youth and workforce with market-relevant skills, certifications, and employment opportunities. The mission addresses the growing demand for skilled manpower across various sectors, including manufacturing, services, healthcare, IT, and entrepreneurship. Skill India encompasses multiple programs such as Pradhan Mantri Kaushal Vikas Yojana (PMKVY), National Apprenticeship Promotion Scheme (NAPS), and the Recognition of Prior Learning (RPL), providing structured training pathways and formal recognition for acquired skills. The initiative collaborates with industry partners, training institutions, and state governments to ensure quality skill delivery, bridging the gap between education and employment. Skill India emphasizes hands-on practical training, digital literacy, and soft skills development, equipping beneficiaries for sustainable livelihoods. By promoting entrepreneurship and self-employment, the mission encourages innovation, small business development, and economic participation among youth. It also focuses on women empowerment, inclusion of marginalized communities, and regional skill development to reduce urban-rural employment disparities. Skill India leverages technology through online training platforms, e-certifications, and skill tracking systems to ensure scalability and efficiency. The program aims to create a workforce that meets national and global industry standards, enhances productivity, and contributes to India’s economic growth. Since its inception, millions of individuals have been trained and certified under Skill India, fostering employability, boosting confidence, and enabling upward social mobility. By integrating skill development with industrial and economic planning, the mission strengthens human capital, supports Make in India initiatives, and prepares the workforce for future opportunities in emerging sectors."
  },
  {
    id: generateRandomId(),
    name: "PMAY-U",
    description: "Pradhan Mantri Awas Yojana – Urban",
    fullName: "Pradhan Mantri Awas Yojana – Urban",
    launched: "2015",
    benefits: "Affordable housing for urban poor and slum dwellers",
    eligibility: "Economically Weaker Section (EWS) and Low-Income Group (LIG) families in urban areas",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing",
    ministry: "Ministry of Housing & Urban Affairs",
    status: "Active",
    longDescription:
      "Pradhan Mantri Awas Yojana – Urban (PMAY-U), launched in 2015, aims to provide affordable housing to urban poor, slum dwellers, and economically weaker sections (EWS) across India. The scheme addresses the critical need for housing in rapidly urbanizing cities, promoting social inclusion, improved living conditions, and sustainable urban development. PMAY-U offers financial assistance through credit-linked subsidies, direct construction support, and affordable rental housing to eligible EWS and Low-Income Group (LIG) families. The scheme emphasizes inclusive growth by integrating urban planning, infrastructure development, and access to basic amenities such as water, sanitation, and electricity. Beneficiaries can avail of subsidies under the Credit Linked Subsidy Scheme (CLSS) for home loans, reducing the financial burden of construction or purchase. PMAY-U promotes innovative construction technologies, eco-friendly building practices, and community participation to enhance affordability, quality, and sustainability. The initiative also supports slum rehabilitation, tenure security, and incremental housing models to ensure long-term housing stability. By providing safe and dignified housing, the scheme contributes to improved health, education, and socio-economic well-being of urban residents. Since its inception, millions of urban households have benefited under PMAY-U, fostering better quality of life, economic empowerment, and reduced urban inequalities. The program plays a crucial role in achieving the national vision of ‘Housing for All’ by 2022 and aligns with the Sustainable Development Goals related to sustainable cities, social inclusion, and poverty alleviation. PMAY-U strengthens urban resilience, community development, and local employment opportunities, supporting India’s broader agenda of inclusive and sustainable urban growth."
  },
  {
    id: generateRandomId(),
    name: "Ujjwala Yojana",
    description: "Pradhan Mantri Ujjwala Yojana",
    fullName: "Pradhan Mantri Ujjwala Yojana",
    launched: "2016",
    benefits: "Free LPG connections to women from BPL households",
    eligibility: "Women from Below Poverty Line (BPL) households",
    officialSite: "https://pmuy.gov.in",
    logo: "fas fa-gas-pump",
    category: "Energy",
    ministry: "Ministry of Petroleum & Natural Gas",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY), launched in 2016, is a flagship energy initiative aimed at providing clean cooking fuel in the form of LPG connections to women from Below Poverty Line (BPL) households. The scheme seeks to reduce the health hazards caused by traditional cooking fuels such as firewood, coal, and biomass, which contribute to indoor air pollution and respiratory diseases. Under PMUY, eligible women receive free LPG connections, and the program also facilitates financial assistance for the first refills. By enabling access to clean cooking energy, the scheme promotes women’s empowerment, time-saving, and improved quality of life. PMUY also encourages behavioral change, adoption of modern energy solutions, and energy efficiency. The initiative integrates with other social welfare schemes to enhance outreach and awareness in rural and remote areas, ensuring that marginalized communities benefit from sustainable energy solutions. The scheme’s success is measured by the large-scale distribution of LPG connections, reduction in traditional fuel usage, and improvement in health outcomes for women and children. By promoting clean cooking fuel, PMUY contributes to environmental sustainability, reduces deforestation, and supports India’s climate goals. Since its inception, millions of households across India have benefited, reducing drudgery, improving health, and enhancing economic participation of women. PMUY represents a transformative step towards universal access to clean energy, social equity, and inclusive development, aligning with national and global energy access objectives."
  },
  {
    id: generateRandomId(),
    name: "Digital India",
    description: "Digital India Program",
    fullName: "Digital India Program",
    launched: "2015",
    benefits: "Digital infrastructure, services, and literacy for all citizens",
    eligibility: "All Indian citizens and government departments",
    officialSite: "https://www.digitalindia.gov.in",
    logo: "fas fa-network-wired",
    category: "Technology & Governance",
    ministry: "Ministry of Electronics & Information Technology",
    status: "Active",
    longDescription:
      "Digital India, launched in 2015, is a flagship program aimed at transforming India into a digitally empowered society and knowledge economy. The initiative focuses on three key vision areas: development of digital infrastructure, delivery of government services digitally, and promotion of digital literacy among citizens. Digital India encompasses various projects such as BharatNet, e-Governance initiatives, DigiLocker, MyGov, and electronic service delivery platforms to ensure seamless access to government services, transparency, and efficiency. The program promotes financial inclusion through digital payments, online banking, and mobile services, empowering citizens to participate in the digital economy. It also focuses on enabling digital skills, capacity-building, and innovation to enhance employability and entrepreneurship in the technology sector. Digital India aims to reduce the digital divide, ensure equitable access to technology in rural and urban areas, and improve public service delivery through e-Governance solutions. By leveraging technology, the initiative enhances citizen engagement, simplifies administrative processes, and promotes a paperless, cashless, and accountable governance model. Since its launch, Digital India has facilitated widespread adoption of digital services, increased broadband connectivity, and strengthened India’s position in the global digital economy. The program contributes to inclusive growth, technological innovation, and socio-economic development by enabling citizens, businesses, and government institutions to harness the benefits of digital transformation."
  },
   {
    id: generateRandomId(),
    name: "Pradhan Mantri Shram Yogi Maan-dhan",
    description: "Pension Scheme for Unorganized Workers",
    fullName: "Pradhan Mantri Shram Yogi Maan-dhan Yojana",
    launched: "2019",
    benefits: "Pension of ₹3,000 per month after 60 years of age",
    eligibility: "Unorganized sector workers aged 18–40 years with monthly income up to ₹15,000",
    officialSite: "https://www.pmsymidh.gov.in",
    logo: "fas fa-hand-holding-usd",
    category: "Pension",
    ministry: "Ministry of Labour & Employment",
    status: "Active",
    longDescription:
      "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM) is a voluntary and contributory pension scheme launched in 2019 to provide social security and financial stability to workers in the unorganized sector. This initiative addresses the lack of formal pension coverage for millions of laborers who contribute to the nation’s economy but remain outside the ambit of organized social security. Eligible workers aged 18–40 years with a monthly income of up to ₹15,000 can enroll and contribute a small monthly amount, which varies based on their age at the time of joining. After attaining the age of 60 years, beneficiaries receive a guaranteed pension of ₹3,000 per month, ensuring old-age financial support. PM-SYM integrates technology-driven registration, contribution tracking, and pension disbursal mechanisms, promoting transparency, ease of access, and accountability. The scheme is linked with Jan Dhan accounts and Aadhaar for seamless fund transfers and beneficiary identification. PM-SYM not only safeguards unorganized workers from financial insecurity during retirement but also fosters a culture of savings and long-term planning. It aligns with the broader social security agenda by complementing other welfare schemes such as life and health insurance programs for unorganized workers. By providing a reliable monthly pension, the scheme enhances social dignity, reduces dependency on family members, and improves the overall quality of life of participants. Since its inception, millions of workers have enrolled, contributing to inclusive social protection coverage and enabling economic empowerment of a traditionally underserved segment of society. PM-SYM represents a transformative step toward creating a comprehensive social safety net and promoting equitable growth in India."
  },
  {
    id: generateRandomId(),
    name: "Atal Pension Yojana",
    description: "Government Pension Scheme",
    fullName: "Atal Pension Yojana (APY)",
    launched: "2015",
    benefits: "Guaranteed minimum pension after 60 years based on contributions",
    eligibility: "All Indian citizens aged 18–40 years, primarily targeting workers in the unorganized sector",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-piggy-bank",
    category: "Pension",
    ministry: "Pension Fund Regulatory and Development Authority",
    status: "Active",
    longDescription:
      "Atal Pension Yojana (APY), launched in 2015, is a government-backed pension scheme aimed at providing financial security to citizens in their old age, particularly targeting workers in the unorganized sector. The scheme offers a guaranteed minimum pension ranging from ₹1,000 to ₹5,000 per month after the age of 60, based on the contribution level and the age at which the subscriber joins. APY is a voluntary and contributory program where subscribers make regular monthly contributions into their pension accounts, which are managed by the Pension Fund Regulatory and Development Authority (PFRDA). The scheme ensures continuity of contributions through flexible payment options, auto-debits, and digital access, making it convenient for participants. Subscribers who invest consistently benefit from compounding, while the government provides co-contributions for eligible individuals in the early years of enrollment, promoting wider participation. APY emphasizes financial literacy and retirement planning, helping citizens develop a habit of long-term savings and ensuring social security in later years. It covers unorganized sector workers, self-employed individuals, and other citizens without access to formal pension arrangements, thereby expanding social protection coverage in India. The initiative leverages technology for transparent account management, easy tracking of contributions, and timely disbursal of pensions. By promoting old-age financial security, Atal Pension Yojana enhances dignity, reduces dependency on family members, and fosters economic stability among subscribers. Since its launch, millions of Indians have enrolled under APY, contributing to a culture of retirement preparedness, inclusive growth, and a stronger social safety net for vulnerable populations. The scheme aligns with India’s broader vision of financial inclusion and universal social protection."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop Insurance Scheme",
    fullName: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    launched: "2016",
    benefits: "Insurance coverage against crop losses due to natural calamities, pests, and diseases",
    eligibility: "All farmers growing notified crops in notified areas",
    officialSite: "https://pmfby.gov.in",
    logo: "fas fa-seedling",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched in 2016, is a comprehensive crop insurance scheme designed to provide financial support to farmers in the event of crop losses caused by natural calamities, pests, or diseases. The scheme aims to protect farmers from economic distress, ensure crop resilience, and promote agricultural sustainability. PMFBY offers uniform premium rates, with the government subsidizing a significant portion of the premium for farmers, making it affordable and accessible. The scheme covers all stages of crop growth, from pre-sowing to post-harvest, and applies to notified crops in designated areas. Farmers receive timely indemnity payments in case of crop damage, minimizing the financial impact of unforeseen events and enabling them to continue agricultural activities without disruption. PMFBY integrates modern technology, including satellite imagery, remote sensing, and mobile applications, for accurate crop assessment, loss estimation, and claim processing. It encourages participation of insurance companies, state governments, and banks to ensure effective implementation and financial inclusion of farmers. By mitigating risk, PMFBY enhances creditworthiness, supports farm investments, and promotes adoption of innovative farming practices. Since its inception, millions of farmers across India have benefited, contributing to rural economic stability, food security, and sustainable agricultural development. The scheme represents a significant step towards safeguarding farmer livelihoods, reducing vulnerability to climate-related risks, and strengthening India’s agricultural ecosystem."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description: "Skill Development Program",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    launched: "2015",
    benefits: "Short-term skill training and certification for youth",
    eligibility: "Indian youth aged 18–35 seeking employment or skill enhancement",
    officialSite: "https://www.pmkvyofficial.org",
    logo: "fas fa-chalkboard-teacher",
    category: "Skill Development",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    status: "Active",
    longDescription:
      "Pradhan Mantri Kaushal Vikas Yojana (PMKVY), launched in 2015 under the Skill India mission, is a flagship program aimed at providing industry-relevant skill training and certification to Indian youth, enhancing their employability and promoting sustainable livelihoods. The scheme offers short-term skill courses aligned with the National Skill Qualification Framework (NSQF) in various sectors, including IT, manufacturing, healthcare, hospitality, and retail. Beneficiaries undergo structured training modules, hands-on practical learning, and assessment, culminating in nationally recognized certification. PMKVY collaborates with accredited training partners, industry experts, and state governments to ensure quality delivery and alignment with labor market demands. The initiative also incentivizes enrollment by providing financial rewards for successful completion, thereby encouraging youth participation and motivation. PMKVY emphasizes inclusive skill development, targeting marginalized communities, women, and differently-abled individuals to promote equitable access to opportunities. The program integrates digital technology for registration, course tracking, and certification issuance, ensuring transparency and efficiency. By bridging the gap between education and employment, PMKVY empowers youth to secure jobs, engage in entrepreneurship, and contribute meaningfully to the economy. Since its inception, millions of individuals have benefitted, acquiring skills, certifications, and employment opportunities, thereby enhancing productivity, competitiveness, and economic growth. PMKVY represents a transformative step towards building a skilled workforce, supporting Make in India initiatives, and fostering socio-economic development through human capital enhancement."
  },
  {
    id: generateRandomId(),
    name: "National Pension Scheme",
    description: "Government Pension Plan",
    fullName: "National Pension Scheme (NPS)",
    launched: "2004",
    benefits: "Regular pension after retirement based on contributions",
    eligibility: "Indian citizens aged 18–65 years, including government and private sector employees",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-money-bill-wave",
    category: "Pension",
    ministry: "Pension Fund Regulatory and Development Authority",
    status: "Active",
    longDescription:
      "National Pension Scheme (NPS), launched in 2004, is a government-sponsored pension program designed to provide retirement income to Indian citizens through a structured contribution-based model. The scheme targets employees from both government and private sectors, offering them an opportunity to accumulate retirement savings while earning market-linked returns. NPS operates on the principles of defined contribution, where subscribers contribute regularly to their pension accounts, which are managed by professional Pension Fund Managers under the supervision of the Pension Fund Regulatory and Development Authority (PFRDA). At retirement, subscribers can withdraw a portion of the corpus as a lump sum and use the remaining amount to purchase an annuity, ensuring a regular pension stream. NPS promotes financial literacy, disciplined savings, and long-term retirement planning. It offers multiple investment options, including equity, corporate bonds, and government securities, allowing participants to optimize returns based on their risk appetite. The scheme is portable across jobs and locations, making it flexible for a mobile workforce. Additionally, NPS provides tax benefits under relevant provisions, encouraging wider participation. Since its inception, millions of citizens have enrolled under NPS, building retirement security, financial independence, and a culture of long-term planning. By providing a structured framework for retirement income, NPS contributes to social security, economic stability, and inclusive growth, ensuring that citizens can maintain their quality of life post-retirement."
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana",
    description: "Health Insurance Scheme",
    fullName: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    launched: "2018",
    benefits: "Cashless hospitalization coverage up to ₹5 lakh per family per year",
    eligibility: "Low-income families listed in SECC 2011 database",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-hospital",
    category: "Health",
    ministry: "Ministry of Health & Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY) is a flagship health insurance scheme launched in 2018 to provide comprehensive and cashless health coverage to economically vulnerable families. The scheme targets low-income households identified through the Socio-Economic Caste Census (SECC) 2011 database, ensuring that the most marginalized populations gain access to quality healthcare. PM-JAY covers hospitalization expenses up to ₹5 lakh per family per year for secondary and tertiary care treatments, including surgeries, medical procedures, and pre-existing conditions. Beneficiaries can access treatment in empaneled public and private hospitals across India without any out-of-pocket expenditure, fostering financial protection and reducing health-related poverty. The scheme leverages technology through an integrated IT platform for beneficiary identification, hospital empanelment, claim management, and real-time monitoring, ensuring transparency and efficiency. PM-JAY emphasizes preventive healthcare and awareness campaigns to improve health outcomes and reduce disease burden. By providing equitable access to quality healthcare, the program enhances social inclusion, supports family well-being, and improves life expectancy. Since its inception, millions of families have benefited from cashless treatment, reducing the financial burden of medical emergencies and enhancing trust in public health systems. PM-JAY represents a transformative step towards universal health coverage in India, strengthening the health infrastructure, promoting public-private partnerships, and ensuring that no citizen is denied essential medical care due to financial constraints."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Ujjwala Yojana",
    description: "Clean Cooking Fuel Initiative",
    fullName: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    launched: "2016",
    benefits: "Free LPG connections for women from below poverty line households",
    eligibility: "Women from BPL households who do not have an LPG connection",
    officialSite: "https://pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Energy",
    ministry: "Ministry of Petroleum & Natural Gas",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY), launched in 2016, is a transformative initiative aimed at providing clean cooking fuel, specifically LPG connections, to women from below poverty line (BPL) households across India. The scheme addresses health hazards caused by traditional cooking methods using firewood, coal, or dung cakes, which generate smoke and indoor air pollution, leading to respiratory and other chronic diseases. Under PMUY, eligible women receive a free LPG connection along with a stove, enabling safer and more efficient cooking practices. The government also promotes awareness campaigns on LPG usage, safety, and refilling to ensure effective adoption. PMUY contributes to gender empowerment by reducing the burden of fuel collection, improving convenience, and allowing women to engage in productive activities. The scheme is integrated with digital platforms for application, verification, and tracking, ensuring transparency, timely delivery, and grievance redressal. PMUY aligns with environmental goals by reducing deforestation and lowering household carbon emissions, promoting sustainable energy practices. Since its launch, millions of women have benefited, transforming rural and urban households by providing cleaner, safer, and more reliable cooking solutions. The program has significantly enhanced quality of life, health outcomes, and overall well-being, while fostering energy inclusivity and reducing the reliance on polluting fuels. PMUY exemplifies India’s commitment to social welfare, gender equity, and sustainable development through large-scale, technology-enabled interventions."
  },
  {
    id: generateRandomId(),
    name: "Swachh Bharat Mission",
    description: "Clean India Initiative",
    fullName: "Swachh Bharat Mission (Urban & Rural)",
    launched: "2014",
    benefits: "Elimination of open defecation, improved sanitation, and clean public spaces",
    eligibility: "All citizens, with a focus on rural communities and urban slums",
    officialSite: "https://swachhbharatmission.gov.in",
    logo: "fas fa-broom",
    category: "Sanitation",
    ministry: "Ministry of Housing and Urban Affairs & Ministry of Jal Shakti",
    status: "Active",
    longDescription:
      "Swachh Bharat Mission (SBM), launched in 2014, is one of India’s largest cleanliness and sanitation campaigns aimed at transforming the country into a cleaner and healthier nation. The mission targets elimination of open defecation, improving solid waste management, and creating awareness about hygiene and sanitation practices across rural and urban areas. SBM focuses on constructing household and community toilets, providing sanitation infrastructure, and ensuring behavioral change through education and community engagement. The program encourages participation from citizens, local governance bodies, NGOs, and private sectors to collectively maintain cleanliness in public spaces, schools, and healthcare facilities. In rural areas, the mission prioritizes achieving Open Defecation Free (ODF) status, while in urban areas, it emphasizes solid waste management, cleanliness drives, and waste segregation initiatives. SBM employs technology for monitoring progress, mapping sanitation coverage, and incentivizing community participation through mobile apps and dashboards. The campaign has significantly reduced health hazards, prevented waterborne diseases, and enhanced quality of life for millions of citizens. By integrating environmental sustainability, public awareness, and behavioral change, Swachh Bharat Mission strengthens civic responsibility and community engagement. Since its inception, the program has constructed millions of toilets, improved waste management infrastructure, and motivated citizens to adopt hygienic practices, contributing to cleaner cities and villages, a healthier population, and a more sustainable environment. SBM represents a landmark initiative in India’s development agenda, showcasing the power of coordinated action, public participation, and innovative governance in driving nationwide change."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Gram Sadak Yojana",
    description: "Rural Road Development Scheme",
    fullName: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    launched: "2000",
    benefits: "All-weather road connectivity to unconnected rural habitations",
    eligibility: "Rural habitations with population criteria as per scheme guidelines",
    officialSite: "https://pmgsy.nic.in",
    logo: "fas fa-road",
    category: "Infrastructure",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "Pradhan Mantri Gram Sadak Yojana (PMGSY), launched in 2000, is a central government initiative aimed at providing all-weather road connectivity to unconnected rural habitations, thereby fostering socio-economic development and reducing rural isolation. The scheme targets rural villages and habitations based on population thresholds, ensuring inclusive infrastructure development. PMGSY focuses on constructing new roads, upgrading existing roads, and maintaining quality standards to ensure durability, safety, and accessibility. By connecting villages to markets, health facilities, educational institutions, and government services, the scheme facilitates economic growth, social mobility, and improved livelihoods. PMGSY emphasizes transparency, efficiency, and accountability in implementation through technology-enabled monitoring, including geo-tagging of road construction, online progress tracking, and performance audits. The initiative also promotes employment generation through local workforce engagement and skill development during construction activities. Improved rural connectivity under PMGSY has led to enhanced agricultural productivity, better access to essential services, and increased participation of rural communities in the broader economy. Since its inception, millions of kilometers of roads have been constructed, connecting thousands of habitations, reducing travel time, and improving transportation efficiency. PMGSY plays a pivotal role in bridging rural-urban divides, fostering inclusive development, and strengthening the nation’s physical infrastructure. By enabling seamless mobility, the scheme contributes to economic empowerment, social inclusion, and sustainable rural transformation."
  },
  {
    id: generateRandomId(),
    name: "National Rural Employment Guarantee Act (MGNREGA)",
    description: "Employment Guarantee Program",
    fullName: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
    launched: "2005",
    benefits: "Guaranteed 100 days of wage employment per year for rural households",
    eligibility: "Adult members of rural households willing to do unskilled manual work",
    officialSite: "https://nrega.nic.in",
    logo: "fas fa-tools",
    category: "Employment",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), enacted in 2005, is a landmark social security program designed to provide guaranteed wage employment to rural households in India. The scheme mandates the provision of at least 100 days of unskilled manual work per year to every adult member willing to participate, ensuring livelihood security and financial stability for rural communities. MGNREGA focuses on asset creation, including water conservation, land development, afforestation, and rural infrastructure projects, thereby enhancing local productivity and sustainability. The program promotes transparency, accountability, and timely wage payments through digital platforms, including Aadhaar-linked payment systems and real-time monitoring dashboards. MGNREGA empowers marginalized groups, including women and scheduled castes/tribes, by providing direct income, reducing dependency on informal labor markets, and fostering social inclusion. The scheme encourages active participation of local self-governments (Gram Panchayats) in planning and implementing projects, strengthening grassroots democracy and community engagement. Since its implementation, MGNREGA has significantly reduced rural poverty, enhanced food security, and improved access to essential services by creating durable community assets. The program also acts as an economic stabilizer during agrarian distress or natural calamities, providing a safety net for vulnerable households. MGNREGA represents a transformative approach to rural development, combining employment generation, infrastructure development, and social empowerment, contributing to equitable growth and poverty alleviation across India."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description: "Skill Development Initiative",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    launched: "2015",
    benefits: "Skill training and certification for youth, improving employability",
    eligibility: "Youth aged 15–35, unemployed or underemployed",
    officialSite: "https://www.pmkvyofficial.org",
    logo: "fas fa-graduation-cap",
    category: "Skill Development",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    status: "Active",
    longDescription:
      "Pradhan Mantri Kaushal Vikas Yojana (PMKVY), launched in 2015, is a flagship scheme aimed at empowering India’s youth by providing skill training and certification to enhance employability. The program is designed to bridge the gap between industry requirements and the skills possessed by young job seekers. PMKVY offers short-term skill courses in various sectors such as IT, manufacturing, hospitality, healthcare, and retail, aligned with the National Skills Qualification Framework (NSQF). Beneficiaries receive training from accredited training centers, followed by assessments and certification to validate their competencies. The scheme provides financial incentives to trainees, including rewards for successful course completion, reducing the economic burden on participants. PMKVY also emphasizes inclusive training, targeting women, differently-abled individuals, and marginalized communities to ensure equitable access to skill development opportunities. By equipping youth with industry-relevant skills, the program promotes entrepreneurship, self-employment, and wage employment, contributing to economic growth and reducing unemployment. The scheme leverages digital platforms for enrollment, progress tracking, and certification management, ensuring transparency and efficiency. PMKVY’s emphasis on practical, hands-on training enhances the readiness of youth for the workforce, aligning skill development with national priorities of Make in India and Atmanirbhar Bharat. Since its launch, millions of youth have benefited from the program, gaining certifications recognized by industries and employers across India. PMKVY strengthens the country’s human capital, improves livelihoods, and fosters social mobility by providing a clear pathway for skill acquisition, career advancement, and economic empowerment. The scheme demonstrates India’s commitment to creating a skilled, competitive, and future-ready workforce capable of driving national development."
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
      "Digital India, launched in 2015, is a comprehensive initiative aimed at transforming India into a digitally empowered society and knowledge economy. The program focuses on three core areas: digital infrastructure as a utility to every citizen, delivering government services digitally, and fostering digital literacy. Digital India promotes the development of high-speed internet networks, common service centers, and mobile connectivity across urban and rural areas, bridging the digital divide. The program emphasizes digitization of public services, including government documents, e-governance initiatives, financial transactions, and healthcare services, enabling seamless access and transparency. Through skill development programs, workshops, and awareness campaigns, Digital India enhances digital literacy and equips citizens with the necessary skills to navigate online platforms safely and efficiently. The initiative also encourages innovation and entrepreneurship in the technology sector, supporting startups and tech-based solutions to national challenges. Key projects under Digital India include e-signatures, digital lockers, BharatNet for broadband connectivity, and the promotion of digital payments and financial inclusion. By integrating technology into governance, the program reduces paperwork, improves efficiency, and strengthens accountability across public service delivery. Digital India has revolutionized the way citizens interact with the government, access education, healthcare, and financial services, and participate in economic opportunities. The program empowers citizens, promotes transparency, fosters innovation, and accelerates India’s transformation into a knowledge-driven, inclusive, and technologically advanced nation. By leveraging digital tools and platforms, Digital India enhances the reach and efficiency of government programs, supports entrepreneurship, and ensures that technology becomes an enabler of social and economic development across India."
  },
  {
    id: generateRandomId(),
    name: "Beti Bachao Beti Padhao",
    description: "Girl Child Welfare Initiative",
    fullName: "Beti Bachao Beti Padhao (BBBP)",
    launched: "2015",
    benefits: "Prevention of gender-based discrimination, education promotion for girls",
    eligibility: "All families, with special focus on regions with low child sex ratio",
    officialSite: "https://wcd.nic.in/bbbp-schemes",
    logo: "fas fa-child",
    category: "Women & Child Development",
    ministry: "Ministry of Women & Child Development",
    status: "Active",
    longDescription:
      "Beti Bachao Beti Padhao (BBBP), launched in 2015, is a flagship initiative aimed at addressing gender inequality, preventing female foeticide, and promoting the education and empowerment of girls in India. The program focuses on regions with low child sex ratio (CSR) and seeks to change societal attitudes through awareness campaigns, community engagement, and strict enforcement of laws against gender-based discrimination. BBBP integrates efforts from multiple ministries, including Women & Child Development, Health & Family Welfare, and Education, to create a comprehensive approach for the protection and development of the girl child. The scheme promotes equal opportunities in education, ensuring that girls have access to quality schooling, scholarships, and mentorship programs. It also emphasizes awareness campaigns targeting families, communities, and schools to sensitize them on the importance of the girl child and the benefits of gender equality. BBBP leverages technology, media, and outreach programs to reach remote and vulnerable communities, encouraging behavioral change and societal support for girls. The initiative monitors progress through data collection, evaluation, and reporting on child sex ratio, enrollment rates, and community participation. By reducing discrimination, enhancing education, and promoting empowerment, BBBP contributes to a more inclusive and equitable society. Since its launch, the scheme has positively impacted awareness levels, improved school enrollment rates for girls, and strengthened community-based advocacy for gender equality. Beti Bachao Beti Padhao exemplifies India’s commitment to safeguarding the rights of girls, promoting their well-being, and creating opportunities for them to contribute meaningfully to the nation’s growth and development."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Awas Yojana",
    description: "Affordable Housing Scheme",
    fullName: "Pradhan Mantri Awas Yojana – Housing for All (Urban & Rural)",
    launched: "2015",
    benefits: "Subsidized home loans, affordable housing construction for low-income families",
    eligibility: "Economically weaker sections, low and middle-income groups",
    officialSite: "https://pmaymis.gov.in",
    logo: "fas fa-home",
    category: "Housing",
    ministry: "Ministry of Housing and Urban Affairs & Ministry of Rural Development",
    status: "Active",
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY), launched in 2015, is a flagship initiative aimed at providing affordable housing to urban and rural populations, ensuring ‘Housing for All’ by 2022. The program targets economically weaker sections (EWS), low-income groups (LIG), and middle-income groups (MIG) who face difficulties in acquiring adequate housing. PMAY offers financial assistance in the form of interest subsidies on home loans, direct financial support for construction or enhancement of houses, and incentives for using green building technologies. In urban areas, the scheme emphasizes credit-linked subsidies, affordable rental housing, and promoting private sector participation to accelerate housing development. In rural areas, PMAY-Rural focuses on constructing pucca houses with basic amenities, leveraging local resources, labor, and community participation. The program incorporates technology for beneficiary identification, online application processing, and tracking progress, ensuring transparency and timely delivery of services. PMAY also emphasizes sustainable and inclusive urban planning by integrating housing with basic infrastructure, sanitation, and social amenities. By reducing housing shortages, improving living conditions, and empowering low-income families, PMAY enhances social welfare and quality of life. Since its launch, millions of households have benefited from safe and affordable housing, contributing to economic stability, community development, and overall social upliftment. The scheme reflects India’s commitment to inclusive growth, urban-rural integration, and ensuring that every citizen has access to dignified living conditions, fostering equitable development and national progress."
  },
  {
    id: generateRandomId(),
    name: "Atal Pension Yojana",
    description: "Pension Scheme for Unorganized Sector",
    fullName: "Atal Pension Yojana (APY)",
    launched: "2015",
    benefits: "Guaranteed minimum pension for subscribers after 60 years",
    eligibility: "Workers in the unorganized sector aged 18–40 with a bank account",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-piggy-bank",
    category: "Social Security",
    ministry: "Pension Fund Regulatory and Development Authority (PFRDA)",
    status: "Active",
    longDescription:
      "Atal Pension Yojana (APY), launched in 2015, is a government-backed social security scheme designed to provide financial security and a guaranteed pension to workers in the unorganized sector upon reaching the age of 60. The program aims to encourage voluntary and regular contributions from subscribers, enabling them to accumulate a retirement corpus over their working life. APY offers a fixed monthly pension ranging from ₹1,000 to ₹5,000, depending on the contribution made and the age of joining. Subscribers can open APY accounts through banks and post offices, linking contributions to their bank accounts for automatic debit. The scheme is targeted at individuals aged 18–40 who work in informal sectors without formal retirement benefits, providing them with a reliable income source post-retirement. The government co-contributes 50% of the subscriber’s contribution or ₹1,000 per annum for eligible participants for the first five years, promoting wider participation. APY also emphasizes financial literacy, awareness campaigns, and ease of access through digital platforms, ensuring transparency, convenience, and accountability. By offering long-term financial security, APY protects workers from old-age poverty, promotes savings habits, and strengthens the social safety net for vulnerable populations. Since its launch, millions of unorganized workers have enrolled in the scheme, securing a pension that ensures dignity, stability, and peace of mind in their retirement years. APY reflects India’s commitment to inclusive social protection, empowering citizens to achieve financial independence and resilience in later life."
  },
  {
    id: generateRandomId(),
    name: "National Health Mission",
    description: "Healthcare Initiative",
    fullName: "National Health Mission (NHM)",
    launched: "2013",
    benefits: "Affordable and accessible healthcare services, improved public health",
    eligibility: "All citizens, with special focus on rural and vulnerable populations",
    officialSite: "https://nhm.gov.in",
    logo: "fas fa-hospital",
    category: "Health",
    ministry: "Ministry of Health and Family Welfare",
    status: "Active",
    longDescription:
      "The National Health Mission (NHM), launched in 2013, is a comprehensive program aimed at providing affordable, accessible, and quality healthcare services to all citizens of India, with a special focus on rural and underserved populations. NHM integrates the previous National Rural Health Mission (NRHM) and National Urban Health Mission (NUHM) to strengthen healthcare infrastructure, human resources, and service delivery across the country. The scheme emphasizes maternal and child health, preventive and promotive health interventions, disease control programs, and health system strengthening. NHM provides financial assistance for establishing primary health centers, sub-centers, and community health centers, ensuring availability of essential medicines, vaccines, and medical equipment. Accredited social health activists (ASHAs) and community health workers play a key role in outreach, awareness, and service delivery at the grassroots level. The program also promotes the use of technology for telemedicine, digital health records, and health information management, enhancing efficiency and monitoring outcomes. NHM ensures that vulnerable populations, including women, children, elderly, and marginalized communities, receive timely healthcare interventions. By focusing on preventive healthcare, immunization, nutrition, sanitation, and health education, NHM reduces disease burden and improves quality of life. The mission also emphasizes capacity building, training healthcare professionals, and integrating traditional and modern medical practices. Since its launch, NHM has contributed to lowering infant and maternal mortality rates, increasing immunization coverage, and improving access to essential health services, especially in remote and difficult-to-reach areas. The scheme represents India’s commitment to achieving universal health coverage, enhancing health equity, and fostering a healthier population capable of contributing to national development. NHM’s holistic approach strengthens the health system, promotes community participation, and ensures sustainable improvements in public health across India."
  },
  {
    id: generateRandomId(),
    name: "Ayushman Bharat",
    description: "Health Insurance and Wellness Initiative",
    fullName: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    launched: "2018",
    benefits: "Health insurance coverage of up to ₹5 lakh per family, free treatment at empaneled hospitals",
    eligibility: "Rural and urban poor families identified through SECC database",
    officialSite: "https://www.pmjay.gov.in",
    logo: "fas fa-notes-medical",
    category: "Health",
    ministry: "Ministry of Health and Family Welfare",
    status: "Active",
    longDescription:
      "Ayushman Bharat, also known as Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched in 2018, is India’s flagship health protection scheme aimed at providing financial coverage and access to quality healthcare for economically vulnerable families. The program provides health insurance coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization in empaneled public and private hospitals across the country. PM-JAY targets rural and urban poor families identified through the Socio-Economic Caste Census (SECC) database, ensuring that health protection reaches those most in need. The scheme offers cashless and paperless treatment, covering expenses such as hospitalization, surgery, diagnostics, medicines, and pre- and post-hospitalization care. Ayushman Bharat also emphasizes preventive care through wellness centers, which provide health check-ups, maternal and child health services, non-communicable disease management, and health education at the community level. The program leverages digital technology, including e-cards, hospital empanelment platforms, and real-time monitoring systems, to ensure transparency, efficiency, and accountability. By reducing out-of-pocket healthcare expenditure, Ayushman Bharat protects families from financial distress caused by medical emergencies and fosters equity in health service delivery. Since its launch, millions of families have benefited from cashless hospitalization, improving access to quality healthcare and enhancing health outcomes across India. Ayushman Bharat reflects the government’s commitment to universal health coverage, social protection, and building a healthier, more productive population capable of contributing to national development."
  },
  {
    id: generateRandomId(),
    name: "Sukanya Samriddhi Yojana",
    description: "Savings Scheme for Girl Child",
    fullName: "Sukanya Samriddhi Yojana (SSY)",
    launched: "2015",
    benefits: "Long-term savings with high interest, financial security for girls’ education and marriage",
    eligibility: "Girl children below 10 years of age, one account per child",
    officialSite: "https://www.postofficeindia.in",
    logo: "fas fa-piggy-bank",
    category: "Savings & Investment",
    ministry: "Ministry of Finance, Department of Posts",
    status: "Active",
    longDescription:
      "Sukanya Samriddhi Yojana (SSY), launched in 2015, is a government-backed savings scheme designed to provide long-term financial security for the education and marriage of girl children in India. The scheme encourages parents and guardians to open a dedicated account for their girl child before she reaches 10 years of age, with one account permitted per child. SSY offers attractive interest rates, which are compounded annually, making it one of the most lucrative small savings instruments in India. Deposits can be made for a maximum of 15 years from the date of account opening, and the account matures after 21 years, providing substantial corpus for the girl’s higher education or marriage expenses. Partial withdrawals are permitted for educational purposes from the age of 18. The scheme promotes the financial empowerment of girls, encouraging savings habits among families while addressing gender disparity in education and social status. Contributions to SSY are eligible for tax benefits under Section 80C of the Income Tax Act, making it both a savings and tax-efficient investment tool. By ensuring that funds are specifically allocated for girls’ welfare, SSY fosters a sense of security and independence for the girl child, reducing economic barriers to education and opportunities. Since its inception, the scheme has gained widespread popularity, contributing to increased financial awareness among families and supporting national objectives of gender equality, education promotion, and women’s empowerment. Sukanya Samriddhi Yojana exemplifies India’s commitment to securing the future of its girl children through financial planning, inclusive growth, and sustainable socio-economic development."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Ujjwala Yojana",
    description: "Clean Cooking Fuel Initiative",
    fullName: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    launched: "2016",
    benefits: "Free LPG connections to women from below-poverty-line households",
    eligibility: "Women from BPL households, priority for rural areas",
    officialSite: "https://www.pmuy.gov.in",
    logo: "fas fa-fire",
    category: "Energy & Environment",
    ministry: "Ministry of Petroleum and Natural Gas",
    status: "Active",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana (PMUY), launched in 2016, is a landmark initiative aimed at providing clean cooking fuel to women from below-poverty-line (BPL) households, promoting health, safety, and environmental sustainability. The scheme facilitates free LPG connections for eligible women, reducing their dependence on traditional biomass fuels such as firewood, coal, and cow dung, which contribute to indoor air pollution and respiratory diseases. PMUY emphasizes women’s empowerment by recognizing them as the primary beneficiaries, enabling safer, cleaner, and more convenient cooking practices. The program also incorporates awareness campaigns on the benefits of LPG usage, safety measures, and efficient fuel utilization. PMUY provides financial support to cover security deposits, ensuring affordability for economically vulnerable households. By reducing indoor air pollution and drudgery associated with fuel collection, the scheme improves health outcomes, particularly for women and children, and contributes to environmental conservation. The initiative has been instrumental in reaching millions of households across rural and urban India, enhancing quality of life and promoting socio-economic development. PMUY also supports government objectives related to energy access, climate change mitigation, and inclusive growth. Since its launch, the program has successfully facilitated the adoption of clean cooking fuel, reduced health hazards, and empowered women through access to modern energy solutions. Pradhan Mantri Ujjwala Yojana demonstrates India’s commitment to sustainable development, public health improvement, and social equity by providing essential energy services to marginalized communities."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop Insurance Scheme",
    fullName: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    launched: "2016",
    benefits: "Comprehensive crop insurance covering yield losses due to natural calamities, pests, and diseases",
    eligibility: "All farmers growing notified crops, voluntary or mandatory depending on state",
    officialSite: "https://pmfby.gov.in",
    logo: "fas fa-seedling",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    status: "Active",
    longDescription:
      "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched in 2016, is a flagship crop insurance scheme aimed at providing financial security to farmers against crop losses due to natural calamities, pests, and diseases. The program seeks to stabilize farmers’ incomes, encourage investment in agriculture, and enhance food security in India. PMFBY covers a wide range of crops, including cereals, pulses, oilseeds, horticultural, and commercial crops, depending on state notifications. Farmers pay a nominal premium, while the government provides substantial support to cover the balance of the actuarial premium, ensuring affordability. The scheme emphasizes prompt and accurate claims settlement through technology-enabled assessment, satellite imagery, crop cutting experiments, and mobile applications. PMFBY encourages farmers to adopt innovative practices, invest in quality inputs, and manage risks effectively, reducing distress caused by crop failures. The program also integrates financial literacy, awareness campaigns, and capacity-building initiatives to educate farmers about insurance benefits and processes. By providing timely compensation for crop losses, PMFBY protects farmers’ livelihoods, sustains agricultural productivity, and fosters rural development. Since its launch, the scheme has enrolled millions of farmers, covering vast agricultural areas and mitigating the financial impact of natural disasters. PMFBY represents India’s commitment to risk management, agricultural resilience, and inclusive growth by ensuring that farmers can maintain economic stability and continue contributing to national food security even in adverse conditions."
  },
  {
    id: generateRandomId(),
    name: "Stand Up India Scheme",
    description: "Entrepreneurship Support for SC/ST and Women",
    fullName: "Stand Up India Scheme",
    launched: "2016",
    benefits: "Facilitates bank loans from ₹10 lakh to ₹1 crore to start greenfield enterprises",
    eligibility: "SC/ST and women entrepreneurs, aged 18 and above",
    officialSite: "https://www.standupmitra.in",
    logo: "fas fa-briefcase",
    category: "Entrepreneurship",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "The Stand Up India Scheme, launched in 2016, is designed to promote entrepreneurship among Scheduled Castes (SC), Scheduled Tribes (ST), and women by facilitating bank loans to start greenfield enterprises in manufacturing, services, or the trading sector. The scheme provides financial support ranging from ₹10 lakh to ₹1 crore for setting up new ventures, helping beneficiaries overcome the capital barriers that often prevent them from starting businesses. Stand Up India offers handholding support through dedicated platforms, guidance on project preparation, and assistance in navigating government schemes and regulatory procedures. The program aims to foster economic empowerment, job creation, and inclusive growth by enabling historically marginalized groups to participate actively in the economy. Beneficiaries receive easy access to bank credit through participating financial institutions, with simplified documentation and advisory services. The initiative also encourages mentorship, capacity building, and market linkages to ensure sustainability and profitability of the enterprises. By promoting entrepreneurship among SC/ST and women, Stand Up India enhances socio-economic mobility, reduces inequality, and strengthens the ecosystem for inclusive development. The scheme complements other government initiatives aimed at supporting micro, small, and medium enterprises (MSMEs) while fostering innovation, skill utilization, and economic diversification. Since its inception, Stand Up India has facilitated thousands of successful loans, helping beneficiaries establish sustainable businesses, generate employment opportunities, and contribute to local and national economic growth. The scheme embodies India’s commitment to social equity, empowerment of marginalized communities, and fostering a vibrant entrepreneurial culture across the country."
  },
  {
    id: generateRandomId(),
    name: "Pradhan Mantri Gram Sadak Yojana",
    description: "Rural Road Connectivity Scheme",
    fullName: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    launched: "2000",
    benefits: "All-weather road connectivity to unconnected habitations, improved rural mobility",
    eligibility: "Rural habitations with population above threshold criteria",
    officialSite: "https://pmgsy.nic.in",
    logo: "fas fa-road",
    category: "Infrastructure",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "Pradhan Mantri Gram Sadak Yojana (PMGSY), launched in 2000, is a nationwide program aimed at providing all-weather road connectivity to unconnected rural habitations across India. The scheme focuses on enhancing rural mobility, promoting economic development, and facilitating access to essential services such as healthcare, education, and markets. PMGSY prioritizes habitations with populations above specified thresholds, ensuring equitable distribution of infrastructure development. Roads constructed under the program adhere to quality standards, ensuring durability and sustainability, and integrate environmentally sensitive designs where required. The initiative promotes rural employment by involving local contractors, laborers, and self-help groups in construction and maintenance activities. PMGSY also strengthens transport linkages, enabling farmers to access markets efficiently, improving supply chains, and fostering rural entrepreneurship. The scheme contributes to reducing rural isolation, enhancing social inclusion, and supporting overall socio-economic development. By providing dependable road infrastructure, PMGSY facilitates faster movement of goods and people, improving quality of life and enabling better delivery of government schemes. Since its inception, the program has constructed thousands of kilometers of roads, connecting millions of rural citizens to the mainstream economy. PMGSY represents India’s commitment to rural development, infrastructure expansion, and inclusive growth by bridging the urban-rural divide and ensuring that every citizen has access to mobility, opportunity, and prosperity."
  },
  {
    id: generateRandomId(),
    name: "National Social Assistance Programme",
    description: "Social Security Scheme",
    fullName: "National Social Assistance Programme (NSAP)",
    launched: "1995",
    benefits: "Financial assistance to elderly, widows, and disabled persons in need",
    eligibility: "BPL households, elderly above 60, widows above 40, and persons with disabilities",
    officialSite: "https://nsap.nic.in",
    logo: "fas fa-hands-helping",
    category: "Social Welfare",
    ministry: "Ministry of Rural Development",
    status: "Active",
    longDescription:
      "The National Social Assistance Programme (NSAP), launched in 1995, is a flagship social security initiative aimed at providing financial support to vulnerable sections of society, including the elderly, widows, and persons with disabilities living below the poverty line (BPL). The program seeks to ensure a minimum level of social protection, reduce economic distress, and improve the quality of life for disadvantaged individuals. NSAP consists of multiple sub-schemes such as Indira Gandhi National Old Age Pension Scheme (IGNOAPS), Indira Gandhi National Widow Pension Scheme (IGNWPS), and Indira Gandhi National Disability Pension Scheme (IGNDPS), providing periodic monetary assistance to eligible beneficiaries. The program also encourages state governments to supplement central assistance, fostering cooperative federalism and broader coverage. NSAP enhances social inclusion by targeting the most marginalized populations, promoting dignity and security for those who lack family or community support. Beneficiaries receive financial aid directly to their bank accounts, ensuring transparency and minimizing leakages. The initiative also incorporates awareness campaigns, grievance redressal mechanisms, and monitoring systems to strengthen service delivery. By providing a safety net, NSAP mitigates vulnerability due to old age, widowhood, or disability, enabling recipients to meet basic needs, access healthcare, and sustain livelihoods. Since its inception, the program has reached millions of beneficiaries, supporting India’s commitment to social welfare, inclusive development, and poverty alleviation. NSAP embodies the government’s vision of equitable growth, social justice, and economic empowerment of marginalized communities."
  },
  {
    id: generateRandomId(),
    name: "Digital India Programme",
    description: "Technology & Governance Initiative",
    fullName: "Digital India Programme",
    launched: "2015",
    benefits: "Enhanced digital infrastructure, e-governance, internet access, and digital literacy",
    eligibility: "All citizens, businesses, and government departments",
    officialSite: "https://www.digitalindia.gov.in",
    logo: "fas fa-laptop-code",
    category: "Technology & Governance",
    ministry: "Ministry of Electronics and Information Technology",
    status: "Active",
    longDescription:
      "The Digital India Programme, launched in 2015, is a transformative initiative aimed at harnessing technology to improve governance, service delivery, and citizen engagement across India. The program seeks to create a digitally empowered society and knowledge economy by focusing on three key pillars: digital infrastructure as a core utility to every citizen, delivery of services digitally, and digital literacy. Under Digital India, initiatives include expanding broadband connectivity, establishing common service centers, providing e-governance solutions, promoting digital payments, and ensuring access to information through online platforms. The program emphasizes transparency, efficiency, and accountability in government operations while enabling citizens to access essential services from anywhere, anytime. Digital India also fosters innovation, entrepreneurship, and skill development in emerging technologies, bridging the digital divide between urban and rural areas. By promoting digital literacy and awareness, the initiative empowers individuals to utilize technology for education, healthcare, financial inclusion, and livelihood enhancement. The program integrates government departments, private sector partners, and community stakeholders to create scalable, sustainable, and citizen-centric solutions. Since its launch, Digital India has facilitated the widespread adoption of technology in governance, improved delivery of public services, enabled e-signatures, e-health, e-education, and promoted cashless transactions. The initiative strengthens India’s position as a global digital hub, promotes socio-economic development, and ensures that citizens are active participants in the digital economy. Digital India embodies the government’s vision of modern governance, inclusive growth, and technological empowerment for all."
  },
  {
    id: generateRandomId(),
    name: "Atal Pension Yojana",
    description: "Pension Scheme for Unorganized Sector",
    fullName: "Atal Pension Yojana (APY)",
    launched: "2015",
    benefits: "Guaranteed minimum pension, flexible contribution, social security",
    eligibility: "Indian citizens aged 18-40, with a savings account",
    officialSite: "https://www.npscra.nsdl.co.in",
    logo: "fas fa-piggy-bank",
    category: "Financial Inclusion",
    ministry: "Ministry of Finance",
    status: "Active",
    longDescription:
      "Atal Pension Yojana (APY), launched in 2015, is a government-backed pension scheme designed to provide social security to citizens working in the unorganized sector. The scheme ensures a fixed monthly pension ranging from ₹1,000 to ₹5,000 after the subscriber reaches the age of 60, depending on the contributions made during the accumulation phase. APY promotes financial inclusion by allowing individuals with irregular or low income to save gradually for their retirement, thereby reducing dependency on family or government aid in old age. Contributions are flexible and can be made monthly, quarterly, or half-yearly through bank accounts linked with the subscriber’s unique ID. The government co-contributes 50% of the total contribution or ₹1,000 per annum for eligible subscribers for the first five years, enhancing the benefit and encouraging participation. APY also ensures transparency and safety as funds are managed through the National Pension System (NPS), regulated by the Pension Fund Regulatory and Development Authority (PFRDA). The scheme has a robust online enrollment process, regular account statements, and portability across banks, ensuring ease of access for subscribers. APY strengthens the social security net, protects against old-age financial vulnerability, and encourages a culture of disciplined savings. Since its inception, it has attracted millions of subscribers across urban and rural areas, contributing to economic empowerment and inclusive growth. By offering a guaranteed pension, APY aligns with the government’s vision of providing a secure financial future for all citizens and reducing inequality in retirement preparedness. It integrates modern banking, technology, and governance to create a scalable, reliable, and sustainable pension system for India’s unorganized workforce."
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
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY), launched in 2015, is a flagship initiative by the Government of India aimed at providing affordable housing to urban and rural citizens, with a vision of 'Housing for All' by 2022. The scheme covers both urban (PMAY-U) and rural (PMAY-G) areas, targeting economically weaker sections (EWS), low-income groups (LIG), and middle-income groups (MIG) to enable them to own a pucca house with basic amenities. PMAY offers financial support in the form of interest subsidies on housing loans, direct financial assistance for construction or enhancement, and incentives for adopting energy-efficient technologies. The program encourages private sector participation and leverages innovative financing models to scale affordable housing. PMAY also emphasizes inclusivity by prioritizing women-headed households, senior citizens, and differently-abled individuals. Beneficiaries can avail themselves of loans from banks and housing finance institutions at subsidized rates, ensuring financial feasibility. The scheme integrates technology for transparent application processing, fund disbursement, and monitoring of construction quality, ensuring accountability and efficiency. PMAY aims to improve living conditions, reduce slum prevalence, and contribute to socio-economic development by providing secure shelter and fostering community infrastructure. Since its inception, millions of homes have been sanctioned and constructed under PMAY, benefiting low-income families across the country. The scheme aligns with India’s sustainable development goals by promoting affordable housing, improving urban planning, and ensuring that all citizens have access to safe, dignified, and quality living spaces. PMAY represents a critical step toward inclusive growth, urban transformation, and poverty alleviation."
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
    longDescription:
      "The National Health Mission (NHM), launched in 2013, is a comprehensive government program aimed at strengthening healthcare delivery across India, particularly in rural areas and underserved regions. NHM integrates the earlier National Rural Health Mission (NRHM) and National Urban Health Mission (NUHM), ensuring equitable access to quality healthcare for all citizens. The program focuses on maternal and child health, immunization, disease prevention, health system infrastructure, and capacity building of healthcare professionals. NHM promotes public-private partnerships to enhance service delivery, improve availability of medical equipment and essential medicines, and upgrade health facilities. The initiative also emphasizes community participation through health committees, awareness campaigns, and mobilization of local health workers such as Accredited Social Health Activists (ASHAs). NHM addresses communicable and non-communicable diseases through targeted programs, vaccination drives, and preventive healthcare measures. It integrates technology for data management, monitoring, and telemedicine services, expanding access to specialized care in remote locations. By providing free or subsidized healthcare services, NHM reduces financial barriers, promotes early diagnosis and treatment, and contributes to better health outcomes. The mission also supports health education, behavior change initiatives, and emergency preparedness to improve public health resilience. Since its inception, NHM has enhanced access to healthcare for millions of citizens, reduced maternal and infant mortality, and strengthened India’s health infrastructure. The initiative aligns with the government’s commitment to universal health coverage, sustainable development, and equitable access to healthcare for all, ensuring healthier, more productive communities."
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
    longDescription:
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched in 2018, is India’s largest health insurance scheme aimed at providing financial protection and access to quality healthcare for vulnerable families. The scheme offers cashless treatment for secondary and tertiary healthcare services in empaneled hospitals across the country, covering over 10 crore families with an annual health insurance coverage of up to ₹5 lakh per family. PM-JAY targets economically weaker populations in rural and urban areas, reducing the financial burden of hospitalization and improving health outcomes. The program integrates digital technologies for beneficiary identification, hospital empanelment, claims management, and real-time monitoring to ensure transparency, efficiency, and quick service delivery. PM-JAY covers a wide range of medical procedures, including surgeries, treatments for chronic illnesses, maternity care, and critical care services, ensuring comprehensive healthcare support. The scheme also promotes public-private partnerships, leveraging existing health infrastructure and expertise to expand service reach. By eliminating out-of-pocket expenses, PM-JAY safeguards families from catastrophic health expenditures, strengthens health system resilience, and enhances trust in public healthcare services. Since its launch, millions of treatments have been availed under PM-JAY, benefiting citizens from marginalized communities and remote regions. Ayushman Bharat contributes to India’s goal of universal health coverage, inclusive development, and equitable access to quality healthcare, ensuring that no citizen is deprived of essential medical services due to financial constraints."
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
    longDescription:
      "Beti Bachao Beti Padhao (BBBP), launched in 2015, is a government initiative aimed at addressing the declining child sex ratio, promoting girls’ education, and empowering the girl child in India. The program focuses on three key pillars: prevention of gender-biased sex-selective elimination, ensuring survival and protection of the girl child, and promoting education and participation in socio-economic development. BBBP combines advocacy, awareness campaigns, policy interventions, and community engagement to change societal attitudes and improve the status of girls in India. The scheme collaborates with health, education, and law enforcement departments to implement measures for early detection of gender bias, timely medical care, and enforcement of laws against female feticide. BBBP also promotes enrollment, retention, and quality education for girls, providing scholarships, mentoring, and skill development opportunities to empower them. Community-based programs encourage parental support, reduce discrimination, and ensure access to healthcare and nutrition. The initiative engages media, civil society, and local authorities to spread awareness and mobilize societal support for gender equality. Since its inception, BBBP has contributed to improving the child sex ratio in several districts, increased awareness about the value of the girl child, and promoted inclusive participation in education and social development. By focusing on protection, education, and empowerment, Beti Bachao Beti Padhao strengthens gender equality, reduces discrimination, and fosters a more equitable society. It aligns with India’s vision of empowering women, promoting human development, and building a progressive, inclusive nation."
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
    longDescription:
      "The National Nutrition Mission, or Poshan Abhiyaan, launched in 2018, is a flagship government initiative aimed at improving nutritional outcomes for children, pregnant women, and lactating mothers in India. The mission focuses on reducing stunting, undernutrition, anemia, and low birth weight through interventions such as supplementary nutrition, immunization, health check-ups, and behavior change communication. Poshan Abhiyaan leverages technology, real-time monitoring, and digital platforms to track service delivery, identify gaps, and ensure accountability. The program engages Anganwadi workers, community leaders, and local governance institutions to implement nutrition-related activities effectively at the grassroots level. Awareness campaigns, capacity building, and community mobilization are integral components to promote healthy eating habits, hygiene, and maternal care. By addressing malnutrition early in life, the mission contributes to improved cognitive development, physical health, and long-term educational and economic outcomes. Poshan Abhiyaan also integrates initiatives for micronutrient supplementation, growth monitoring, and health education, fostering holistic child development. The mission aligns with India’s Sustainable Development Goals (SDGs), targeting improved health, well-being, and social equity, while strengthening institutional frameworks for nutrition governance. Through Poshan Abhiyaan, the government aims to create a healthier, more productive, and resilient population, reducing the burden of malnutrition and fostering sustainable human development across communities."
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
    longDescription:
      "Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY), launched in 2015, is a government initiative aimed at providing continuous and reliable electricity to rural India while enhancing infrastructure for agricultural and household power needs. The scheme focuses on feeder separation for agricultural and domestic consumption, strengthening sub-transmission and distribution networks, and electrifying unconnected villages. DDUGJY promotes energy access, economic development, and quality of life improvements in rural areas. By leveraging modern technology, smart metering, and real-time monitoring, the scheme ensures efficient electricity distribution and reduces power losses. Rural households benefit from reliable lighting, energy for appliances, and improved educational and healthcare facilities. Farmers gain access to uninterrupted electricity for irrigation and farm-related activities, enhancing productivity and income. DDUGJY also encourages private sector participation, capacity building, and employment opportunities in rural electrification projects. Since its launch, thousands of villages have been electrified, contributing to socio-economic upliftment and bridging urban-rural energy gaps. The scheme supports sustainable development, environmental considerations, and energy security. By delivering modern electricity infrastructure, DDUGJY empowers rural communities, stimulates economic growth, and fosters inclusive development across India’s countryside."
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
  longDescription:
    "The Smart Cities Mission, launched in 2015 by the Government of India, is a transformative urban development initiative aimed at creating 100 smart cities across the country that are citizen-centric, sustainable, and technologically advanced. The mission seeks to improve urban living by integrating core infrastructure elements such as adequate water supply, efficient sanitation, reliable energy, intelligent transport systems, and robust IT connectivity. Smart Cities are designed to be economically productive, environmentally sustainable, and socially inclusive, focusing on improving the quality of life for residents. The mission encourages cities to adopt innovative solutions for urban mobility, waste management, energy efficiency, and public safety using digital technologies and data-driven governance. Citizen participation is central to the initiative, empowering residents to be actively involved in planning, monitoring, and decision-making processes. Smart Cities leverage public-private partnerships (PPP) to implement sustainable infrastructure projects and enhance investment opportunities. The program also emphasizes green spaces, clean air initiatives, and climate-resilient planning to promote environmental well-being. By fostering innovation, the mission supports local entrepreneurship, job creation, and skill development. Since its inception, numerous cities have undertaken projects such as smart traffic management, e-governance platforms, smart water meters, urban mobility solutions, and digitally connected public services, demonstrating measurable improvements in efficiency, transparency, and citizen satisfaction. The Smart Cities Mission aligns with India’s vision of sustainable urbanization, economic growth, and enhanced livability, transforming the urban landscape while addressing the challenges posed by rapid population growth, urban congestion, and environmental stress. By integrating technology, governance, and citizen engagement, the Smart Cities Mission seeks to build urban spaces that are resilient, inclusive, and capable of supporting the aspirations of present and future generations."
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
  longDescription:
    "The BharatNet Project, launched in 2011, is India’s flagship initiative to provide high-speed broadband connectivity to all 2.5 lakh gram panchayats in rural areas, creating a foundation for Digital India. The mission aims to bridge the digital divide between urban and rural regions, enabling equitable access to digital services, education, health, governance, and economic opportunities. The project is implemented through a combination of optical fiber networks, wireless technologies, and last-mile connectivity solutions, ensuring reliable internet access to remote and underserved villages. BharatNet facilitates e-governance by enabling online delivery of government services, digital financial inclusion through access to banking and digital payment platforms, and enhanced educational and skill development opportunities for rural populations. The project also empowers farmers, entrepreneurs, and small businesses to leverage online markets, e-commerce platforms, and digital supply chains, fostering rural entrepreneurship and socio-economic development. Health services are improved via telemedicine initiatives and digital health platforms, reducing the gap in quality healthcare access between urban and rural areas. Furthermore, BharatNet supports smart village and smart agriculture initiatives, contributing to sustainable rural development. With a focus on affordability, accessibility, and scalability, the project is designed to support a wide range of applications, including public Wi-Fi hotspots, digital literacy programs, and community information centers. By providing a robust digital backbone, BharatNet enhances communication, collaboration, and innovation across rural India, positioning the country to harness the benefits of the digital economy. The mission is not only transforming connectivity but also enabling socio-economic empowerment, bridging information gaps, and fostering inclusive growth for rural communities, ensuring that no citizen is left behind in the digital era."
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
  const schemeSlug = createSlug(scheme.description);
  const schemeNameSlug = createSlug(scheme.name);
  window.history.pushState(null, null, `/${schemeNameSlug}/${schemeSlug}`);

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
