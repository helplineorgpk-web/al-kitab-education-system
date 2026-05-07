export type SchoolCategory = "Own School" | "Adopted School";

export interface SchoolStat {
  value: string;
  label: string;
}

export interface TopResult {
  name: string;
  className: "9th" | "10th";
  marks: string;
  totalMarks: string;
  position?: string;
  year?: string;
  image?: string;
}

export interface AnnualEvent {
  name: string;
  description: string;
  date?: string;
  image?: string;
  tag?: string;
}

export const defaultTopResults: TopResult[] = [
  {
    name: "Top Achiever",
    className: "10th",
    marks: "1050",
    totalMarks: "1100",
    position: "1st Position",
    year: "2025",
  },
  {
    name: "Star Student",
    className: "10th",
    marks: "1020",
    totalMarks: "1100",
    position: "2nd Position",
    year: "2025",
  },
  {
    name: "Distinction Holder",
    className: "10th",
    marks: "990",
    totalMarks: "1100",
    position: "3rd Position",
    year: "2025",
  },
  {
    name: "Top Achiever",
    className: "9th",
    marks: "510",
    totalMarks: "550",
    position: "1st Position",
    year: "2025",
  },
  {
    name: "Star Student",
    className: "9th",
    marks: "498",
    totalMarks: "550",
    position: "2nd Position",
    year: "2025",
  },
  {
    name: "Distinction Holder",
    className: "9th",
    marks: "485",
    totalMarks: "550",
    position: "3rd Position",
    year: "2025",
  },
];

export const defaultAnnualEvents: AnnualEvent[] = [
  {
    name: "Annual Sports Gala",
    description:
      "A full day of athletics, races, tug-of-war, and team competitions to build teamwork, fitness, and school spirit.",
    tag: "Sports",
    date: "Annual",
  },
  {
    name: "Parent Teacher Meeting (PTM)",
    description:
      "A structured session where parents meet teachers, review student progress, and align on academic and personal growth goals.",
    tag: "Academic",
    date: "Quarterly",
  },
  {
    name: "Teacher Day",
    description:
      "A heartwarming celebration honoring teachers for their dedication, with student-led tributes, performances, and gifts.",
    tag: "Celebration",
    date: "October",
  },
  {
    name: "Watermelon Day",
    description:
      "A summer fun day where students enjoy fresh watermelon together, creating joyful memories and a sense of togetherness.",
    tag: "Fun Day",
    date: "Summer",
  },
  {
    name: "Mango Day",
    description:
      "A favorite seasonal celebration filled with mangoes, smiles, and bonding activities among students and teachers.",
    tag: "Fun Day",
    date: "Mango Season",
  },
  {
    name: "Test Reports & Result Day",
    description:
      "Detailed examination report distribution with parent-teacher discussions, student feedback, and academic progress reviews.",
    tag: "Academic",
    date: "Term Wise",
  },
  {
    name: "Independence Day Celebration",
    description:
      "National pride event with flag hoisting, speeches, tableaus, national songs, and patriotic activities for students.",
    tag: "National",
    date: "August 14",
  },
  {
    name: "Quiz & Speech Competition",
    description:
      "Inter-class competitions encouraging confidence, public speaking, knowledge, and healthy academic competition.",
    tag: "Academic",
    date: "Annual",
  },
];

export interface School {
  id: number;
  slug: string;
  category: SchoolCategory;
  name: string;
  location: string;
  shortDescription: string;
  description: string;
  historyTitle?: string;
  historyText?: string;
  upgradeTitle?: string;
  upgradeText?: string;
  futureTitle?: string;
  futureText?: string;
  imageSlots: number;
  stats?: SchoolStat[];
  founded?: string;
  level?: string;
  topResults?: TopResult[];
  annualEvents?: AnnualEvent[];
}

export const ownSchools: School[] = [
  {
    id: 23,
    slug: "al-kitab-higher-secondary-school-rana-town-lahore",
    category: "Own School",
    name: "Al-Kitab Higher Secondary School",
    location: "Rana Town, Lahore",
    shortDescription: "Free education for over 1,100 students from underserved families.",
    description:
      "Al-Kitab Higher Secondary School is a flagship campus of Al-Kitab Education System under Helpline Welfare Trust. The school provides completely free education to more than 1,100 students and focuses on academic growth, character building, and long-term social uplift.",
    historyTitle: "History",
    historyText:
      "The journey began in 2015 on donated land that once housed an abandoned poultry farm. What started with 15 students grew into a full educational institution serving a large community.",
    upgradeTitle: "Current Need",
    upgradeText:
      "The campus has reached full capacity and urgently needs expansion so more children can be enrolled and continue their education journey.",
    futureTitle: "Future Vision",
    futureText:
      "The next phase is to build additional floors and stronger facilities so no deserving child is left out.",
    imageSlots: 8,
    founded: "2015",
    level: "Higher Secondary",
    stats: [
      { value: "1,100+", label: "Students Enrolled" },
      { value: "645", label: "Girls Studying" },
      { value: "500+", label: "Boys Studying" },
      { value: "2015", label: "Founded" },
    ],
  },
  {
    id: 18,
    slug: "irtaqa-e-itfal-high-school-manawan-lahore",
    category: "Own School",
    name: "Irtaqa-e-Itfal High School",
    location: "Manawan, Lahore",
    shortDescription: "A holistic school model with education, health support, and family care.",
    description:
      "Irtaqa-e-Itfal High School serves over 1,000 students with free education and welfare support. Helpline Welfare Trust supports families through uniforms, books, health checkups, and community-focused initiatives.",
    historyTitle: "Holistic Approach",
    historyText:
      "The school goes beyond textbooks through student health support, school supplies, and food support for deserving families.",
    upgradeTitle: "Community Empowerment",
    upgradeText:
      "Vocational training initiatives for mothers help families gain sustainable income and stability.",
    futureTitle: "Clean Water Program",
    futureText:
      "Safe drinking water access has been expanded through filtration support for both students and nearby residents.",
    imageSlots: 8,
    level: "High School",
    stats: [
      { value: "1,000+", label: "Students Enrolled" },
      { value: "Free", label: "Education for All" },
      { value: "RO", label: "Clean Water Plant" },
      { value: "Active", label: "Family Welfare Support" },
    ],
  },
  {
    id: 33,
    slug: "al-kitab-school-rajanpur-gullowali",
    category: "Own School",
    name: "Al-Kitab School Rajanpur (Gullowali)",
    location: "Rajanpur (Gullowali)",
    shortDescription: "An under-construction school for a highly underserved area.",
    description:
      "This project is being developed to provide quality, accessible education in a region with very limited school availability. Most enrolled children will study free of cost through Helpline Welfare Trust support.",
    historyTitle: "Under Construction",
    historyText:
      "The school is being built to fill a major gap where quality institutions are scarce within a wide radius.",
    upgradeTitle: "Current Development Focus",
    upgradeText:
      "Construction priorities include safe classrooms, sanitation access, trained staff hiring, and a classroom setup plan that can absorb high early demand from nearby villages.",
    futureTitle: "Long-Term Vision",
    futureText:
      "The future roadmap includes gradual expansion toward higher education opportunities within the same community.",
    imageSlots: 8,
    level: "Under Construction",
    stats: [
      { value: "75%+", label: "Free Seats Planned" },
      { value: "25 KM", label: "Underserved Area Reach" },
      { value: "Phase 1", label: "Construction Stage" },
      { value: "K-University", label: "Long Term Vision" },
    ],
  },
  {
    id: 25,
    slug: "ch-rehmat-ali-higher-secondary-school-boys-gojra",
    category: "Own School",
    name: "Ch Rehmat Ali Higher Secondary School for Boys",
    location: "Gojra",
    shortDescription: "Boys higher secondary campus focused on quality and opportunity.",
    description:
      "This campus in the Al-Kitab Education System supports boys from low-income communities through free and affordable quality schooling, trained teachers, and learning facilities.",
    historyTitle: "Community Impact",
    historyText:
      "The school supports academic learning, character development, and practical growth for students from underserved backgrounds.",
    upgradeTitle: "Support Services",
    upgradeText:
      "Students receive uniforms, books, and additional academic support where needed.",
    futureTitle: "Inclusive Growth",
    futureText:
      "The school continues to strengthen student outcomes through stronger facilities and educational support systems.",
    imageSlots: 6,
    level: "Higher Secondary - Boys",
    stats: [
      { value: "1,400+", label: "Complex Total Students" },
      { value: "Boys", label: "Higher Secondary Focus" },
      { value: "Free", label: "Education Access" },
      { value: "Active", label: "Daily Operations" },
    ],
  },
  {
    id: 26,
    slug: "iman-maryam-girls-higher-secondary-school-gojra",
    category: "Own School",
    name: "Iman Maryam Girls Higher Secondary School",
    location: "Aligarh Educational Complex, Gojra",
    shortDescription: "Girls-focused higher secondary education with transport support.",
    description:
      "Iman Maryam Girls Higher Secondary School provides free quality education and transport assistance to help girls continue their studies without financial barriers.",
    historyTitle: "A Vision Rooted in Empowerment",
    historyText:
      "Established to meet strong demand for girls education, this campus has become a vital part of educational access for nearby villages.",
    upgradeTitle: "Helpline Commitment",
    upgradeText:
      "Helpline Welfare Trust continues investing in facilities, staff quality, and safe learning conditions for girls.",
    futureTitle: "Future Women Leaders",
    futureText:
      "The school prepares confident, educated young women to lead and uplift their communities.",
    imageSlots: 8,
    founded: "2002",
    level: "Higher Secondary - Girls",
    stats: [
      { value: "600+", label: "Girls Enrolled" },
      { value: "22", label: "Villages Served" },
      { value: "2002", label: "Founded" },
      { value: "Free", label: "Education & Transport" },
    ],
  },
  {
    id: 27,
    slug: "emman-maryam-smart-school-gojra",
    category: "Own School",
    name: "Emman Maryam Smart School",
    location: "Aligarh Educational Complex, Gojra",
    shortDescription: "Primary-level smart learning environment for early education.",
    description:
      "The Smart School focuses on foundational education for young children with child-friendly learning spaces and early technology exposure.",
    historyTitle: "Early Learning Foundation",
    historyText:
      "Built as the primary learning arm of the Aligarh complex, this school supports children who otherwise have limited access to schooling.",
    upgradeTitle: "Smart Education Focus",
    upgradeText:
      "Infrastructure, classroom tools, and digital support are being strengthened to improve early learning outcomes.",
    futureTitle: "Brighter Futures",
    futureText:
      "The school aims to equip children with confidence, literacy, and digital readiness from the start.",
    imageSlots: 8,
    level: "Smart Primary School",
    stats: [
      { value: "300+", label: "Primary Children" },
      { value: "24", label: "Computer Lab Systems" },
      { value: "Smart", label: "Learning Environment" },
      { value: "Free", label: "Early Education Access" },
    ],
  },
  {
    id: 24,
    slug: "al-kitab-primary-school-bahawalpur-chani-goth",
    category: "Own School",
    name: "Al-Kitab Primary School, Bahawalpur",
    location: "Chani Goth, Bahawalpur",
    shortDescription: "A growing rural primary school started with 15 students.",
    description:
      "Established in 2021, this school expanded from a small start into a meaningful education center for children in nearby villages.",
    historyTitle: "Green Growth Initiative",
    historyText:
      "Local engagement and education awareness efforts helped build both environmental and educational participation in the area.",
    upgradeTitle: "Community Programs",
    upgradeText:
      "School events and community participation continue building civic values and national awareness.",
    futureTitle: "Rural Education Expansion",
    futureText:
      "The long-term goal is to increase enrollment from nearby villages, strengthen teacher development, and improve early learning outcomes for first-generation students.",
    imageSlots: 6,
    founded: "2021",
    level: "Primary School",
    stats: [
      { value: "83", label: "Students Currently" },
      { value: "6", label: "Dedicated Teachers" },
      { value: "2021", label: "Founded" },
      { value: "Rural", label: "Community Focus" },
    ],
  },
  {
    id: 39,
    slug: "al-kitab-school-of-technology-abid-town",
    category: "Own School",
    name: "Al-Kitab School of Technology",
    location: "Abid Town, Sheikhupura",
    shortDescription: "Technology-oriented campus serving underserved children.",
    description:
      "This campus offers education support with a mixed sustainability model where most students study free through NGO support while some families contribute minimal fees.",
    historyTitle: "Access to Quality Learning",
    historyText:
      "The school was formed to provide quality education opportunities to students who lacked access due to financial limits.",
    upgradeTitle: "Technology and Skills",
    upgradeText:
      "Program planning includes stronger digital learning opportunities, practical skills exposure, and teacher capacity-building for modern classroom delivery.",
    futureTitle: "Academic and Character Growth",
    futureText:
      "The mission is to keep expanding education quality while strengthening personal development and long-term student success.",
    imageSlots: 4,
    level: "Technology Focused",
    stats: [
      { value: "75%+", label: "Free Seats" },
      { value: "Tech", label: "Skills Focus" },
      { value: "Mixed", label: "Sustainability Model" },
      { value: "Active", label: "Operations" },
    ],
  },
  {
    id: 42,
    slug: "al-kitab-education-system-campus-9",
    category: "Own School",
    name: "Al-Kitab Education System Campus 9",
    location: "Newly Added Campus",
    shortDescription: "Ninth own-school entry reserved for latest campus profile.",
    description:
      "This slot represents your 9th own school in Al-Kitab Education System. You can update this page with final name, location, and profile details anytime.",
    historyTitle: "Planned Campus Profile",
    historyText:
      "This page is prepared so your full 9-school structure is live on the website. Once you share official details, this entry can be converted into a complete real profile.",
    upgradeTitle: "What To Add Next",
    upgradeText:
      "Recommended updates: campus name, district, enrollment, class levels, key programs, and major milestones achieved.",
    futureTitle: "Ready for Launch",
    futureText:
      "The page layout and image slots are already prepared, so final content can be published quickly with minimal additional development.",
    imageSlots: 6,
    level: "To Be Updated",
    stats: [
      { value: "9th", label: "Own School Slot" },
      { value: "Soon", label: "Launching" },
      { value: "Setup", label: "In Progress" },
      { value: "Active", label: "Page Ready" },
    ],
  },
];

export const adoptedSchools: School[] = [
  {
    id: 38,
    slug: "benazir-public-girls-higher-secondary-school-nawabshah",
    category: "Adopted School",
    name: "Benazir Public Girls Higher Secondary School",
    location: "Nawabshah",
    shortDescription: "A large girls campus revitalized through full adoption support.",
    description:
      "Helpline Welfare Trust adopted and strengthened this school to ensure girls continue receiving quality education in a safe and empowering environment.",
    historyTitle: "From Struggle to Excellence",
    historyText:
      "The school faced resource and infrastructure constraints before adoption, but now operates as a stronger institution.",
    upgradeTitle: "Transformative Investment",
    upgradeText:
      "Support includes teachers, resources, facilities, nutrition, and transport to sustain high attendance and better outcomes.",
    futureTitle: "Female Leadership",
    futureText:
      "The school is shaping a generation of girls ready to lead their families and communities.",
    imageSlots: 8,
    level: "Higher Secondary - Girls",
    stats: [
      { value: "2,200+", label: "Girls Enrolled" },
      { value: "Adopted", label: "By Helpline" },
      { value: "Free", label: "Education Access" },
      { value: "Active", label: "Operations" },
    ],
  },
  {
    id: 20,
    slug: "govt-gps-misri-bheel-school",
    category: "Adopted School",
    name: "Govt GPS Misri Bheel School",
    location: "Tando Allah Yar",
    shortDescription: "Revived from closure into an active learning center.",
    description:
      "Once abandoned, this school has been restored through adoption support and community mobilization.",
    historyTitle: "School Revival Story",
    historyText:
      "This campus had nearly stopped functioning before intervention. Helpline Welfare Trust helped reactivate it through repairs, staffing support, and local re-enrollment efforts.",
    upgradeTitle: "Operational Stabilization",
    upgradeText:
      "Current support focuses on teaching continuity, classroom resources, and attendance tracking so progress remains stable year-round.",
    futureTitle: "Community-Based Growth",
    futureText:
      "The roadmap is to improve literacy levels, strengthen parent engagement, and build a model for sustained public-school revival in similar areas.",
    imageSlots: 6,
    level: "Govt Primary School",
    stats: [
      { value: "Revived", label: "From Closure" },
      { value: "Active", label: "Daily Classes" },
      { value: "Free", label: "Education Support" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 21,
    slug: "govt-gps-nabi-baksh-gabool-school",
    category: "Adopted School",
    name: "Govt GPS Nabi Baksh Gabool School",
    location: "Tando Allah Yar",
    shortDescription: "Rural transformation through educational adoption and support.",
    description:
      "This school has improved through infrastructure and education support, becoming a reliable learning center for local children.",
    historyTitle: "Transformation in a Rural Setting",
    historyText:
      "Before adoption, the school operated with limited resources and low confidence from families. Structured support restored trust and brought students back to regular classes.",
    upgradeTitle: "Strengthening Learning Conditions",
    upgradeText:
      "Support includes classroom rehabilitation, learning materials, and teacher support mechanisms aimed at improving classroom performance.",
    futureTitle: "Sustained Learning Outcomes",
    futureText:
      "Future priorities include stronger foundational literacy, consistent retention, and better transition rates to upper classes.",
    imageSlots: 6,
    level: "Govt Primary School",
    stats: [
      { value: "Rural", label: "Community Focus" },
      { value: "Restored", label: "Trust & Operations" },
      { value: "Free", label: "Education Support" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 19,
    slug: "sindh-govt-primary-school-nimro-sharif",
    category: "Adopted School",
    name: "Sindh Govt Primary School (Nimro Sharif)",
    location: "Mirpurkhas",
    shortDescription: "Improved attendance and learning through school renewal.",
    description:
      "The school was revitalized with repairs, resources, and re-enrollment drives to restore regular classes and student retention.",
    historyTitle: "From Neglect to Stability",
    historyText:
      "The campus previously struggled with low enrollment and weak facilities. Adoption support created safer classrooms and improved confidence in the school.",
    upgradeTitle: "Core Service Improvements",
    upgradeText:
      "Teacher support, essential school supplies, and basic WASH reliability have helped sustain regular schooling and better attendance.",
    futureTitle: "Improved Primary Outcomes",
    futureText:
      "The goal is to keep improving foundational reading and numeracy while building stronger parent-school collaboration.",
    imageSlots: 6,
    level: "Govt Primary School",
    stats: [
      { value: "Renewed", label: "Campus Status" },
      { value: "WASH", label: "Facilities Restored" },
      { value: "Free", label: "Education Support" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 22,
    slug: "gps-sardar-khan-laghari-school",
    category: "Adopted School",
    name: "GPS Sardar Khan Laghari School",
    location: "Mirpurkhas",
    shortDescription: "Comprehensive renewal of a previously under-resourced campus.",
    description:
      "Through adoption support, this school now provides stable learning conditions with stronger facilities and teaching support.",
    historyTitle: "A Renewed Campus",
    historyText:
      "With constrained resources in earlier years, the school needed structural and academic support. Adoption efforts helped restore a student-centered environment.",
    upgradeTitle: "Facility and Classroom Upgrades",
    upgradeText:
      "Interventions focus on safer classrooms, usable learning spaces, and resource availability to keep teaching consistent.",
    futureTitle: "Retention and Quality Focus",
    futureText:
      "Next steps include improving retention across grades and strengthening student performance through better monitoring and support.",
    imageSlots: 5,
    level: "Govt Primary School",
    stats: [
      { value: "Renewed", label: "Facilities" },
      { value: "Stable", label: "Teaching Support" },
      { value: "Free", label: "Education Access" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 9,
    slug: "gps-roru-goth-school",
    category: "Adopted School",
    name: "GPS Roru Goth School",
    location: "Mirpurkhas",
    shortDescription: "Repaired and reactivated for consistent primary education.",
    description:
      "School infrastructure, WASH access, teachers, and materials were improved to restore quality education delivery.",
    historyTitle: "Adoption-Led Reactivation",
    historyText:
      "The school previously faced major operational gaps. Structured support helped resume stable classroom routines and community participation.",
    upgradeTitle: "Quality and Access",
    upgradeText:
      "Current efforts emphasize classroom consistency, learning resources, and school safety essentials for daily attendance.",
    futureTitle: "Learning Continuity",
    futureText:
      "The long-term plan is to ensure durable quality standards so primary students can transition confidently to higher classes.",
    imageSlots: 5,
    level: "Govt Primary School",
    stats: [
      { value: "Repaired", label: "Infrastructure" },
      { value: "Active", label: "Classroom Routines" },
      { value: "Free", label: "Education Support" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 10,
    slug: "govt-gps-bagliar-mithi-school",
    category: "Adopted School",
    name: "Govt GPS Bagliar Mithi School",
    location: "Tharparkar",
    shortDescription: "From closure to a functioning and hopeful school campus.",
    description:
      "This school was brought back to life through restoration and adoption support, creating a safe learning environment for children.",
    historyTitle: "From Closed to Functional",
    historyText:
      "Bagliar Mithi School was once inactive and unable to serve local children. Adoption intervention restarted operations and reopened access to schooling.",
    upgradeTitle: "Rehabilitation Support",
    upgradeText:
      "Infrastructure repair, staffing support, and material provision restored daily teaching in a safer and more organized setting.",
    futureTitle: "A Sustainable Rural Model",
    futureText:
      "The goal is to make this school a durable model for low-cost, high-impact educational recovery in remote communities.",
    imageSlots: 5,
    level: "Govt Primary School",
    stats: [
      { value: "Reopened", label: "From Closure" },
      { value: "Daily", label: "Active Teaching" },
      { value: "Free", label: "Education Support" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 11,
    slug: "govt-gps-kakrario-saman-mian-school",
    category: "Adopted School",
    name: "Govt GPS Kakrario Saman Mian School",
    location: "Tharparkar",
    shortDescription: "Teacher and student support for sustained school operations.",
    description:
      "Helpline supports school operations, teacher salaries, and educational resources to improve outcomes for low-income students.",
    historyTitle: "Support Where It Matters Most",
    historyText:
      "The school serves highly vulnerable communities where educational continuity depends on stable staffing and operational support.",
    upgradeTitle: "Academic and Staff Stability",
    upgradeText:
      "Funding for teachers and supplies has improved classroom regularity and helped maintain momentum in student learning.",
    futureTitle: "Long-Term Student Success",
    futureText:
      "Future efforts will focus on stronger academic performance and student progression across primary grades.",
    imageSlots: 5,
    level: "Govt Primary School",
    stats: [
      { value: "Stable", label: "Staff Support" },
      { value: "Active", label: "Operations" },
      { value: "Free", label: "Education Access" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 12,
    slug: "govt-gps-misali-goth-school",
    category: "Adopted School",
    name: "Govt GPS Misali Goth School",
    location: "Tharparkar",
    shortDescription: "Strengthened through operational and staffing support.",
    description:
      "The school benefits from stable staff support and learning resources, helping maintain quality classroom delivery.",
    historyTitle: "Committed Community Support",
    historyText:
      "This school relied on external support to remain operational. Adoption has helped protect continuity for students and teachers.",
    upgradeTitle: "Operational Reliability",
    upgradeText:
      "Improvements include sustained staff payments, learning materials, and maintenance support that keep classrooms active.",
    futureTitle: "Better Outcomes for Every Child",
    futureText:
      "The future direction is to improve attendance, retention, and grade-level learning in a consistent and measurable way.",
    imageSlots: 6,
    level: "Govt Primary School",
    stats: [
      { value: "Stable", label: "Operations" },
      { value: "Reliable", label: "Teaching Support" },
      { value: "Free", label: "Education Access" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 13,
    slug: "govt-gps-katho-samma-school",
    category: "Adopted School",
    name: "Govt GPS Katho Samma School",
    location: "Tharparkar",
    shortDescription: "A transformed campus through adoption partnership.",
    description:
      "Teacher and resource support improved stability and created a stronger learning environment for children from low-income families.",
    historyTitle: "Partnership for Transformation",
    historyText:
      "Through adoption, the school moved from a fragile setup to a more stable education space serving children who previously had limited options.",
    upgradeTitle: "Teacher and Resource Backing",
    upgradeText:
      "School operations were strengthened by ensuring regular teacher support and key educational supplies.",
    futureTitle: "Consistent Quality Delivery",
    futureText:
      "Priorities include maintaining quality teaching standards and strengthening student confidence in early learning years.",
    imageSlots: 4,
    level: "Govt Primary School",
    stats: [
      { value: "Active", label: "Daily Classes" },
      { value: "Stable", label: "Teaching Support" },
      { value: "Free", label: "Education Access" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 36,
    slug: "gps-ando-muhajir-school",
    category: "Adopted School",
    name: "GPS Ando Muhajir School",
    location: "Tando Allah Yar",
    shortDescription: "Financial and academic support to uplift a public school.",
    description:
      "Adoption support for teacher salaries and learning resources has helped improve access and quality for local students.",
    historyTitle: "Public School Uplift",
    historyText:
      "The school served children from economically constrained families and needed sustained support for stability and quality.",
    upgradeTitle: "Teaching and Material Support",
    upgradeText:
      "Interventions include staff salary support, classroom resources, and community engagement to improve attendance.",
    futureTitle: "Stable Primary Education Access",
    futureText:
      "The focus is to keep enrollment stable and improve learning outcomes through consistent school operations.",
    imageSlots: 7,
    level: "Govt Primary School",
    stats: [
      { value: "Active", label: "Operations" },
      { value: "Supported", label: "Teaching Staff" },
      { value: "Free", label: "Education Access" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 40,
    slug: "sindh-govt-primary-school-boys-sammu-goth",
    category: "Adopted School",
    name: "Sindh Govt Primary School (Boys) - Sammu Goth",
    location: "Karachi",
    shortDescription: "Adopted school profile for Karachi region support.",
    description:
      "This adopted campus receives support to improve teacher availability, learning resources, and student participation.",
    historyTitle: "Karachi Adoption Expansion",
    historyText:
      "This profile reflects expansion of the adoption model into Karachi to strengthen underserved public-school communities.",
    upgradeTitle: "Support Priorities",
    upgradeText:
      "Support areas include teacher continuity, classroom basics, student supplies, and local enrollment engagement.",
    futureTitle: "City-Based Impact Scale",
    futureText:
      "Future work aims to increase reach and replicate successful support systems across similar campuses.",
    imageSlots: 4,
    level: "Govt Primary School - Boys",
    stats: [
      { value: "Karachi", label: "Region" },
      { value: "Active", label: "Operations" },
      { value: "Free", label: "Education Access" },
      { value: "Adopted", label: "By Helpline" },
    ],
  },
  {
    id: 43,
    slug: "adopted-school-13",
    category: "Adopted School",
    name: "Adopted School 13",
    location: "To Be Updated",
    shortDescription: "Reserved slot for your latest adopted school profile.",
    description:
      "This page is reserved for the 13th adopted school under Al-Kitab Education System. You can update full details and images when finalized.",
    historyTitle: "Profile Placeholder",
    historyText:
      "This entry is intentionally kept as a complete page shell so your 13-school adopted network is represented correctly on the website.",
    upgradeTitle: "Details Needed",
    upgradeText:
      "Add finalized school name, district, baseline condition, and key interventions to convert this into a full profile.",
    futureTitle: "Ready for Final Data",
    futureText:
      "Once details are shared, this page can be updated in one pass without any routing or layout changes.",
    imageSlots: 6,
    level: "To Be Updated",
    stats: [
      { value: "13th", label: "Adopted School Slot" },
      { value: "Soon", label: "Going Live" },
      { value: "Setup", label: "In Progress" },
      { value: "Active", label: "Page Ready" },
    ],
  },
];

export const allSchools = [...ownSchools, ...adoptedSchools];

export const schoolStats = {
  own: ownSchools.length,
  adopted: adoptedSchools.length,
  total: ownSchools.length + adoptedSchools.length,
};
