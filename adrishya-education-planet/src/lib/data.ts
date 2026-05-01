export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  price: string;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  level: string;
  topics: string[];
  videoUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: "cat-1", name: "UPSC Civil Services", icon: "🏛️", color: "from-purple-500 to-indigo-600" },
  { id: "cat-2", name: "SSC CGL", icon: "📋", color: "from-blue-500 to-cyan-600" },
  { id: "cat-3", name: "Banking (IBPS/SBI)", icon: "🏦", color: "from-green-500 to-emerald-600" },
  { id: "cat-4", name: "Railway (RRB)", icon: "🚂", color: "from-orange-500 to-red-600" },
  { id: "cat-5", name: "State PSC", icon: "🏢", color: "from-pink-500 to-rose-600" },
  { id: "cat-6", name: "NDA/CDS", icon: "🎖️", color: "from-yellow-500 to-amber-600" },
  { id: "cat-7", name: "CTET/TET", icon: "📚", color: "from-teal-500 to-cyan-600" },
  { id: "cat-8", name: "GATE Engineering", icon: "⚙️", color: "from-violet-500 to-purple-600" },
  { id: "cat-9", name: "Defence (CDS/AFCAT)", icon: "🛡️", color: "from-red-500 to-orange-600" },
  { id: "cat-10", name: "Law Entrance (CLAT)", icon: "⚖️", color: "from-indigo-500 to-blue-600" },
  { id: "cat-11", name: "Medical (NEET-PG)", icon: "🏥", color: "from-cyan-500 to-teal-600" },
  { id: "cat-12", name: "CAT/MBA", icon: "📊", color: "from-emerald-500 to-green-600" },
  { id: "cat-13", name: "CA/Commerce", icon: "💰", color: "from-amber-500 to-yellow-600" },
  { id: "cat-14", name: "JEE/Engineering", icon: "🔧", color: "from-rose-500 to-pink-600" },
  { id: "cat-15", name: "Police (SI/Constable)", icon: "👮", color: "from-slate-500 to-gray-600" },
  { id: "cat-16", name: "IT/Computer", icon: "💻", color: "from-blue-600 to-indigo-600" },
  { id: "cat-17", name: "Teaching (KVS/NVS)", icon: "🎓", color: "from-green-600 to-teal-600" },
  { id: "cat-18", name: "Agriculture", icon: "🌾", color: "from-lime-500 to-green-600" },
  { id: "cat-19", name: "Insurance (LIC/NIC)", icon: "🛡️", color: "from-purple-600 to-violet-600" },
  { id: "cat-20", name: "Foreign Languages", icon: "🌍", color: "from-sky-500 to-blue-600" },
  { id: "cat-21", name: "Current Affairs", icon: "📰", color: "from-red-600 to-rose-600" },
  { id: "cat-22", name: "Reasoning & Aptitude", icon: "🧠", color: "from-fuchsia-500 to-pink-600" },
  { id: "cat-23", name: "General Knowledge", icon: "📖", color: "from-orange-600 to-amber-600" },
  { id: "cat-24", name: "Personality Development", icon: "🌟", color: "from-yellow-500 to-orange-500" },
];

export const courses: Course[] = [
  // UPSC Civil Services
  { id: "c1", title: "UPSC CSE Prelims Complete", description: "Complete preparation for UPSC Civil Services Preliminary Examination with GS Paper 1 & CSAT coverage.", category: "cat-1", icon: "🏛️", price: "₹4,999", duration: "12 Months", lessons: 450, students: 12500, rating: 4.8, level: "Advanced", topics: ["Indian History", "Geography", "Polity", "Economy", "Science & Tech", "Environment", "CSAT"] },
  { id: "c2", title: "UPSC CSE Mains GS Paper 1-4", description: "In-depth preparation for all four General Studies papers of UPSC Mains examination.", category: "cat-1", icon: "🏛️", price: "₹6,999", duration: "10 Months", lessons: 380, students: 8900, rating: 4.9, level: "Advanced", topics: ["GS Paper 1", "GS Paper 2", "GS Paper 3", "GS Paper 4", "Essay Writing"] },
  { id: "c3", title: "UPSC Essay Writing Mastery", description: "Master the art of essay writing for UPSC Mains with model essays and practice sessions.", category: "cat-1", icon: "📝", price: "₹1,999", duration: "3 Months", lessons: 60, students: 5600, rating: 4.7, level: "Intermediate", topics: ["Essay Structure", "Philosophical Essays", "Current Affairs Essays", "Practice Sets"] },

  // SSC CGL
  { id: "c4", title: "SSC CGL Tier 1 Complete", description: "Complete preparation for SSC CGL Tier 1 - Reasoning, Quantitative Aptitude, English, GK.", category: "cat-2", icon: "📋", price: "₹1,499", duration: "6 Months", lessons: 300, students: 25000, rating: 4.6, level: "Intermediate", topics: ["Reasoning", "Maths", "English", "General Awareness"] },
  { id: "c5", title: "SSC CGL Tier 2 Mains", description: "Advanced preparation for SSC CGL Tier 2 with Quantitative Abilities and English Language.", category: "cat-2", icon: "📋", price: "₹1,999", duration: "4 Months", lessons: 200, students: 15000, rating: 4.5, level: "Advanced", topics: ["Advanced Maths", "Advanced English", "Statistics"] },
  { id: "c6", title: "SSC CHSL Complete Course", description: "Full preparation for SSC Combined Higher Secondary Level examination.", category: "cat-2", icon: "📝", price: "₹999", duration: "4 Months", lessons: 180, students: 18000, rating: 4.4, level: "Beginner", topics: ["Reasoning", "Maths", "English", "GK"] },

  // Banking
  { id: "c7", title: "IBPS PO Complete Course", description: "Complete preparation for IBPS Probationary Officer - Prelims + Mains + Interview.", category: "cat-3", icon: "🏦", price: "₹2,499", duration: "8 Months", lessons: 350, students: 20000, rating: 4.7, level: "Intermediate", topics: ["Reasoning", "Quant", "English", "GA", "Computer", "Interview Prep"] },
  { id: "c8", title: "SBI Clerk Complete", description: "Complete SBI Clerk preparation with Prelims and Mains coverage.", category: "cat-3", icon: "🏦", price: "₹1,499", duration: "5 Months", lessons: 220, students: 16000, rating: 4.5, level: "Beginner", topics: ["Reasoning", "Numerical Ability", "English", "General Awareness"] },
  { id: "c9", title: "RBI Grade B Officer", description: "Premium preparation for Reserve Bank of India Grade B examination.", category: "cat-3", icon: "🏦", price: "₹3,999", duration: "10 Months", lessons: 400, students: 8000, rating: 4.8, level: "Advanced", topics: ["Phase 1", "Phase 2", "Economic & Social Issues", "Finance", "Interview"] },

  // Railway
  { id: "c10", title: "RRB NTPC CBT 1 & 2", description: "Complete Railway NTPC preparation covering both CBT stages.", category: "cat-4", icon: "🚂", price: "₹999", duration: "5 Months", lessons: 200, students: 30000, rating: 4.4, level: "Beginner", topics: ["Maths", "Reasoning", "GK", "General Science"] },
  { id: "c11", title: "RRB Group D Complete", description: "Full preparation for Railway Group D examination.", category: "cat-4", icon: "🚂", price: "₹699", duration: "3 Months", lessons: 150, students: 35000, rating: 4.3, level: "Beginner", topics: ["Mathematics", "General Intelligence", "General Science", "GK"] },
  { id: "c12", title: "RRB ALP Technician", description: "Complete preparation for Railway Assistant Loco Pilot and Technician posts.", category: "cat-4", icon: "🔧", price: "₹1,299", duration: "6 Months", lessons: 250, students: 12000, rating: 4.5, level: "Intermediate", topics: ["Maths", "Reasoning", "General Science", "Technical Ability"] },

  // State PSC
  { id: "c13", title: "UP PCS Complete Course", description: "Uttar Pradesh Provincial Civil Service complete preparation.", category: "cat-5", icon: "🏢", price: "₹3,999", duration: "12 Months", lessons: 500, students: 9000, rating: 4.6, level: "Advanced", topics: ["GS Paper 1", "GS Paper 2", "GS Paper 3", "GS Paper 4", "Essay", "Hindi"] },
  { id: "c14", title: "BPSC Complete Course", description: "Bihar Public Service Commission complete preparation.", category: "cat-5", icon: "🏢", price: "₹3,499", duration: "10 Months", lessons: 400, students: 7000, rating: 4.5, level: "Advanced", topics: ["General Studies", "Optional Paper", "Hindi Literature", "Current Affairs"] },
  { id: "c15", title: "MPPSC Complete", description: "Madhya Pradesh Public Service Commission complete preparation course.", category: "cat-5", icon: "🏢", price: "₹2,999", duration: "10 Months", lessons: 380, students: 5500, rating: 4.4, level: "Intermediate", topics: ["GS Paper 1", "GS Paper 2", "GS Paper 3", "Optional"] },

  // NDA/CDS
  { id: "c16", title: "NDA Complete Course", description: "National Defence Academy exam preparation with Maths and GAT coverage.", category: "cat-6", icon: "🎖️", price: "₹1,999", duration: "6 Months", lessons: 280, students: 14000, rating: 4.6, level: "Intermediate", topics: ["Mathematics", "GAT", "English", "General Science", "History", "Geography"] },
  { id: "c17", title: "CDS OTA & IMA", description: "Combined Defence Services exam preparation for OTA and IMA.", category: "cat-6", icon: "🎖️", price: "₹2,499", duration: "8 Months", lessons: 320, students: 10000, rating: 4.5, level: "Advanced", topics: ["English", "General Knowledge", "Elementary Maths"] },
  { id: "c18", title: "AFCAT Complete", description: "Air Force Common Admission Test complete preparation.", category: "cat-6", icon: "✈️", price: "₹1,799", duration: "5 Months", lessons: 200, students: 8000, rating: 4.4, level: "Intermediate", topics: ["Reasoning", "Numerical Ability", "General Awareness", "English", "Military Aptitude"] },

  // CTET/TET
  { id: "c19", title: "CTET Paper 1", description: "Central Teacher Eligibility Test Paper 1 for Primary Level (Class 1-5).", category: "cat-7", icon: "📚", price: "₹999", duration: "4 Months", lessons: 150, students: 22000, rating: 4.5, level: "Beginner", topics: ["Child Development", "Mathematics", "Environmental Studies", "Language 1", "Language 2"] },
  { id: "c20", title: "CTET Paper 2", description: "Central Teacher Eligibility Test Paper 2 for Upper Primary Level (Class 6-8).", category: "cat-7", icon: "📚", price: "₹1,299", duration: "5 Months", lessons: 200, students: 18000, rating: 4.6, level: "Intermediate", topics: ["Child Development", "Subject Specific", "Social Science/Maths-Science", "Languages"] },
  { id: "c21", title: "Super TET Complete", description: "Uttar Pradesh Super TET complete preparation course.", category: "cat-7", icon: "📚", price: "₹1,499", duration: "6 Months", lessons: 250, students: 15000, rating: 4.5, level: "Intermediate", topics: ["General Knowledge", "Reasoning", "Teaching Aptitude", "Subject Knowledge"] },

  // GATE
  { id: "c22", title: "GATE CSE Complete", description: "GATE Computer Science Engineering complete preparation with all subjects.", category: "cat-8", icon: "⚙️", price: "₹3,499", duration: "8 Months", lessons: 350, students: 18000, rating: 4.8, level: "Advanced", topics: ["DSA", "TOC", "OS", "DBMS", "CN", "Discrete Maths", "Engineering Maths"] },
  { id: "c23", title: "GATE ECE Complete", description: "GATE Electronics & Communication Engineering complete course.", category: "cat-8", icon: "⚙️", price: "₹3,499", duration: "8 Months", lessons: 340, students: 12000, rating: 4.7, level: "Advanced", topics: ["Network Theory", "Control Systems", "Signals & Systems", "Analog Electronics", "Digital Electronics"] },
  { id: "c24", title: "GATE Mechanical", description: "GATE Mechanical Engineering complete preparation course.", category: "cat-8", icon: "⚙️", price: "₹3,499", duration: "8 Months", lessons: 360, students: 14000, rating: 4.7, level: "Advanced", topics: ["Thermodynamics", "Fluid Mechanics", "Manufacturing", "Strength of Materials", "Machine Design"] },

  // Defence
  { id: "c25", title: "Indian Army GD Complete", description: "Complete preparation for Indian Army General Duty soldier recruitment.", category: "cat-9", icon: "🛡️", price: "₹499", duration: "2 Months", lessons: 80, students: 40000, rating: 4.3, level: "Beginner", topics: ["General Knowledge", "Maths", "Reasoning", "Physical Fitness Guide"] },
  { id: "c26", title: "Indian Navy SSR/AA", description: "Indian Navy Senior Secondary Recruit and Artificer Apprentice preparation.", category: "cat-9", icon: "⚓", price: "₹799", duration: "3 Months", lessons: 120, students: 15000, rating: 4.4, level: "Beginner", topics: ["Mathematics", "Science", "English", "General Knowledge"] },

  // CLAT
  { id: "c27", title: "CLAT Complete Course", description: "Common Law Admission Test complete preparation for 5-year LLB programs.", category: "cat-10", icon: "⚖️", price: "₹2,499", duration: "6 Months", lessons: 250, students: 12000, rating: 4.6, level: "Intermediate", topics: ["English", "GK & Current Affairs", "Legal Reasoning", "Logical Reasoning", "Quantitative"] },

  // NEET-PG
  { id: "c28", title: "NEET PG Medicine", description: "Complete preparation for NEET Post Graduate medical entrance.", category: "cat-11", icon: "🏥", price: "₹8,999", duration: "12 Months", lessons: 600, students: 6000, rating: 4.9, level: "Advanced", topics: ["Medicine", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics", "Ophthalmology"] },

  // CAT/MBA
  { id: "c29", title: "CAT Complete Course", description: "Common Admission Test preparation for IIMs and top B-schools.", category: "cat-12", icon: "📊", price: "₹4,999", duration: "8 Months", lessons: 300, students: 16000, rating: 4.7, level: "Advanced", topics: ["VARC", "DILR", "Quantitative Aptitude", "Mock Tests"] },
  { id: "c30", title: "XAT/MAT/SNAP Complete", description: "Complete MBA entrance preparation for XAT, MAT, SNAP and other exams.", category: "cat-12", icon: "📊", price: "₹2,999", duration: "6 Months", lessons: 200, students: 9000, rating: 4.5, level: "Intermediate", topics: ["Quant", "LRDI", "English", "GK", "Essay Writing"] },

  // CA/Commerce
  { id: "c31", title: "CA Foundation Complete", description: "Chartered Accountant Foundation course complete preparation.", category: "cat-13", icon: "💰", price: "₹3,499", duration: "6 Months", lessons: 280, students: 10000, rating: 4.6, level: "Beginner", topics: ["Accounts", "Law", "Economics", "Quantitative Aptitude"] },
  { id: "c32", title: "CA Intermediate Group 1", description: "CA Intermediate Group 1 complete preparation.", category: "cat-13", icon: "💰", price: "₹4,999", duration: "8 Months", lessons: 350, students: 7000, rating: 4.7, level: "Advanced", topics: ["Advanced Accounts", "Corporate Law", "Taxation", "Cost & Management Accounting"] },

  // JEE
  { id: "c33", title: "JEE Mains Complete", description: "JEE Main complete preparation covering Physics, Chemistry and Mathematics.", category: "cat-14", icon: "🔧", price: "₹3,999", duration: "12 Months", lessons: 500, students: 22000, rating: 4.7, level: "Intermediate", topics: ["Physics", "Chemistry", "Mathematics", "Mock Tests", "Previous Year Papers"] },
  { id: "c34", title: "JEE Advanced Complete", description: "JEE Advanced preparation for IIT admission.", category: "cat-14", icon: "🔧", price: "₹5,999", duration: "10 Months", lessons: 400, students: 12000, rating: 4.8, level: "Advanced", topics: ["Advanced Physics", "Advanced Chemistry", "Advanced Maths"] },

  // Police
  { id: "c35", title: "UP Police SI Complete", description: "Uttar Pradesh Police Sub Inspector complete preparation.", category: "cat-15", icon: "👮", price: "₹1,299", duration: "5 Months", lessons: 200, students: 25000, rating: 4.5, level: "Intermediate", topics: ["General Knowledge", "Law & Constitution", "Numerical Ability", "Reasoning", "Hindi"] },
  { id: "c36", title: "Delhi Police Constable", description: "Delhi Police Constable complete preparation course.", category: "cat-15", icon: "👮", price: "₹699", duration: "3 Months", lessons: 120, students: 30000, rating: 4.3, level: "Beginner", topics: ["GK", "Reasoning", "Numerical Ability", "Computer Knowledge"] },

  // IT/Computer
  { id: "c37", title: "Full Stack Web Development", description: "Complete web development with HTML, CSS, JavaScript, React, Node.js.", category: "cat-16", icon: "💻", price: "₹4,999", duration: "6 Months", lessons: 280, students: 20000, rating: 4.8, level: "Beginner", topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "Projects"] },
  { id: "c38", title: "Python Programming Masterclass", description: "Complete Python programming from basics to advanced with projects.", category: "cat-16", icon: "🐍", price: "₹2,499", duration: "4 Months", lessons: 180, students: 28000, rating: 4.7, level: "Beginner", topics: ["Python Basics", "OOP", "Data Structures", "Libraries", "Projects", "Django"] },
  { id: "c39", title: "Data Science & AI", description: "Complete Data Science and Artificial Intelligence course.", category: "cat-16", icon: "🤖", price: "₹5,999", duration: "8 Months", lessons: 350, students: 15000, rating: 4.9, level: "Intermediate", topics: ["Python", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Projects"] },

  // Teaching KVS/NVS
  { id: "c40", title: "KVS PGT Complete", description: "Kendriya Vidyalaya Sangathan Post Graduate Teacher preparation.", category: "cat-17", icon: "🎓", price: "₹2,999", duration: "6 Months", lessons: 250, students: 10000, rating: 4.5, level: "Advanced", topics: ["Subject Knowledge", "Pedagogy", "GK", "Reasoning", "English"] },
  { id: "c41", title: "KVS TGT Complete", description: "Kendriya Vidyalaya Sangathan Trained Graduate Teacher preparation.", category: "cat-17", icon: "🎓", price: "₹2,499", duration: "5 Months", lessons: 220, students: 12000, rating: 4.5, level: "Intermediate", topics: ["Subject Knowledge", "Pedagogy", "GK", "Reasoning"] },

  // Agriculture
  { id: "c42", title: "ICAR AIEEA Complete", description: "Indian Council of Agricultural Research entrance exam preparation.", category: "cat-18", icon: "🌾", price: "₹1,999", duration: "6 Months", lessons: 200, students: 6000, rating: 4.4, level: "Intermediate", topics: ["Agriculture", "Botany", "Chemistry", "Physics", "Mathematics/Biology"] },

  // Insurance
  { id: "c43", title: "LIC AAO Complete", description: "Life Insurance Corporation Administrative Officer complete preparation.", category: "cat-19", icon: "🛡️", price: "₹1,999", duration: "5 Months", lessons: 200, students: 9000, rating: 4.5, level: "Intermediate", topics: ["Reasoning", "Quant", "English", "GK", "Insurance Knowledge"] },
  { id: "c44", title: "NICL AO Complete", description: "National Insurance Company AO complete preparation.", category: "cat-19", icon: "🛡️", price: "₹1,799", duration: "5 Months", lessons: 180, students: 7000, rating: 4.4, level: "Intermediate", topics: ["Reasoning", "Quant", "English", "GK", "Insurance"] },

  // Foreign Languages
  { id: "c45", title: "English Speaking Course", description: "Complete English speaking course for competitive exams and interviews.", category: "cat-20", icon: "🌍", price: "₹1,499", duration: "3 Months", lessons: 100, students: 35000, rating: 4.6, level: "Beginner", topics: ["Grammar", "Vocabulary", "Spoken English", "Fluency Practice"] },
  { id: "c46", title: "Japanese N5 & N4", description: "Japanese Language Proficiency Test N5 and N4 preparation.", category: "cat-20", icon: "🇯🇵", price: "₹2,999", duration: "6 Months", lessons: 180, students: 4000, rating: 4.5, level: "Beginner", topics: ["Hiragana", "Katakana", "Kanji", "Grammar", "Listening Practice"] },

  // Current Affairs
  { id: "c47", title: "Monthly Current Affairs 2025", description: "Comprehensive monthly current affairs magazine and video series.", category: "cat-21", icon: "📰", price: "₹499", duration: "12 Months", lessons: 144, students: 50000, rating: 4.7, level: "All Levels", topics: ["National", "International", "Economy", "Science & Tech", "Sports", "Awards"] },
  { id: "c48", title: "Daily Current Affairs", description: "Daily current affairs analysis and news update series.", category: "cat-21", icon: "📰", price: "₹299", duration: "12 Months", lessons: 365, students: 60000, rating: 4.8, level: "All Levels", topics: ["Daily News", "Editorial Analysis", "One-Liners", "MCQ Practice"] },

  // Reasoning & Aptitude
  { id: "c49", title: "Logical Reasoning Master", description: "Master logical reasoning for all competitive examinations.", category: "cat-22", icon: "🧠", price: "₹999", duration: "3 Months", lessons: 150, students: 40000, rating: 4.6, level: "Intermediate", topics: ["Verbal Reasoning", "Non-Verbal Reasoning", "Analytical Reasoning", "Critical Thinking"] },
  { id: "c50", title: "Quantitative Aptitude Pro", description: "Master quantitative aptitude and advanced mathematics.", category: "cat-22", icon: "🧮", price: "₹999", duration: "4 Months", lessons: 180, students: 38000, rating: 4.7, level: "Intermediate", topics: ["Number System", "Algebra", "Geometry", "Trigonometry", "Data Interpretation", "Advanced Maths"] },

  // General Knowledge
  { id: "c51", title: "Indian History Complete", description: "Complete Indian History from Ancient to Modern period.", category: "cat-23", icon: "📖", price: "₹1,499", duration: "6 Months", lessons: 200, students: 25000, rating: 4.6, level: "Intermediate", topics: ["Ancient India", "Medieval India", "Modern India", "Art & Culture", "World History"] },
  { id: "c52", title: "Indian Geography Complete", description: "Complete Indian and World Geography for all exams.", category: "cat-23", icon: "🗺️", price: "₹1,299", duration: "5 Months", lessons: 180, students: 20000, rating: 4.5, level: "Intermediate", topics: ["Physical Geography", "Indian Geography", "World Geography", "Map Reading", "Environment"] },
  { id: "c53", title: "Indian Polity & Constitution", description: "Complete Indian Polity and Constitution for UPSC, SSC and State exams.", category: "cat-23", icon: "⚖️", price: "₹1,499", duration: "5 Months", lessons: 190, students: 30000, rating: 4.8, level: "Intermediate", topics: ["Constitution", "Fundamental Rights", "Directive Principles", "Governance", "Parliament"] },

  // Personality Development
  { id: "c54", title: "Interview Preparation", description: "Complete interview preparation for government and private sector jobs.", category: "cat-24", icon: "🌟", price: "₹1,999", duration: "2 Months", lessons: 60, students: 18000, rating: 4.7, level: "All Levels", topics: ["Common Questions", "Body Language", "Communication", "Mock Interviews"] },
  { id: "c55", title: "Communication Skills", description: "Develop professional communication skills for career growth.", category: "cat-24", icon: "🗣️", price: "₹999", duration: "2 Months", lessons: 40, students: 15000, rating: 4.5, level: "All Levels", topics: ["Verbal Communication", "Written Communication", "Presentation Skills", "Email Writing"] },

  // More courses
  { id: "c56", title: "UPSC Optional Geography", description: "UPSC Mains Optional Paper - Geography complete preparation.", category: "cat-1", icon: "🗺️", price: "₹3,499", duration: "8 Months", lessons: 280, students: 5000, rating: 4.7, level: "Advanced", topics: ["Physical Geography", "Human Geography", "Indian Geography", "Regional Planning", "Map Work"] },
  { id: "c57", title: "SSC GD Constable Complete", description: "Complete preparation for SSC GD Constable examination.", category: "cat-2", icon: "👮", price: "₹499", duration: "2 Months", lessons: 80, students: 45000, rating: 4.3, level: "Beginner", topics: ["GK", "Reasoning", "Maths", "Hindi/English"] },
  { id: "c58", title: "IBPS RRB Officer Scale", description: "IBPS Regional Rural Bank Officer Scale 1 preparation.", category: "cat-3", icon: "🏦", price: "₹1,999", duration: "5 Months", lessons: 200, students: 10000, rating: 4.5, level: "Intermediate", topics: ["Reasoning", "Quant", "English", "GA", "Computer"] },
  { id: "c59", title: "CUET PG Complete", description: "Common University Entrance Test PG complete preparation.", category: "cat-12", icon: "📊", price: "₹2,999", duration: "4 Months", lessons: 180, students: 14000, rating: 4.5, level: "Intermediate", topics: ["Domain Knowledge", "General Awareness", "Language", "Logical Reasoning"] },
  { id: "c60", title: "HTML/CSS Beginner", description: "Learn HTML and CSS from scratch to build beautiful websites.", category: "cat-16", icon: "🌐", price: "₹499", duration: "1 Month", lessons: 40, students: 50000, rating: 4.6, level: "Beginner", topics: ["HTML Basics", "CSS Styling", "Responsive Design", "Projects"] },
  { id: "c61", title: "Environment & Ecology", description: "Complete Environment and Ecology for UPSC and State PSC exams.", category: "cat-23", icon: "🌿", price: "₹999", duration: "3 Months", lessons: 100, students: 15000, rating: 4.5, level: "Intermediate", topics: ["Ecology", "Biodiversity", "Climate Change", "Pollution", "Conservation"] },
  { id: "c62", title: "Economy for Competitive Exams", description: "Indian Economy complete preparation for all competitive exams.", category: "cat-23", icon: "💹", price: "₹1,499", duration: "4 Months", lessons: 150, students: 22000, rating: 4.6, level: "Intermediate", topics: ["Micro Economics", "Macro Economics", "Indian Economy", "Budget", "Banking", "International Trade"] },
  { id: "c63", title: "UP Police Constable", description: "Complete UP Police Constable preparation course.", category: "cat-15", icon: "👮", price: "₹699", duration: "3 Months", lessons: 100, students: 35000, rating: 4.4, level: "Beginner", topics: ["General Knowledge", "Reasoning", "Numerical Ability", "Hindi", "Law"] },
  { id: "c64", title: "CSIR NET Life Science", description: "CSIR UGC NET Life Science complete preparation.", category: "cat-14", icon: "🔬", price: "₹3,999", duration: "8 Months", lessons: 300, students: 5000, rating: 4.7, level: "Advanced", topics: ["Biochemistry", "Molecular Biology", "Cell Biology", "Genetics", "Ecology", "Evolution"] },
];

export const getPdfsForCategory = (categoryName: string) => {
  return [
    { title: `${categoryName} - Study Material (Part 1)`, pages: 120, size: "5.2 MB" },
    { title: `${categoryName} - Important Questions`, pages: 80, size: "3.1 MB" },
    { title: `${categoryName} - Previous Year Papers`, pages: 150, size: "8.5 MB" },
    { title: `${categoryName} - Quick Revision Notes`, pages: 60, size: "2.4 MB" },
    { title: `${categoryName} - Practice Sets`, pages: 100, size: "4.8 MB" },
  ];
};

export const getTestsForCategory = (categoryName: string) => {
  return [
    { title: `${categoryName} - Mock Test 1`, questions: 50, duration: "60 min", difficulty: "Medium" },
    { title: `${categoryName} - Mock Test 2`, questions: 50, duration: "60 min", difficulty: "Hard" },
    { title: `${categoryName} - Mock Test 3`, questions: 100, duration: "120 min", difficulty: "Medium" },
    { title: `${categoryName} - Previous Year Test`, questions: 100, duration: "120 min", difficulty: "Hard" },
    { title: `${categoryName} - Practice Test`, questions: 25, duration: "30 min", difficulty: "Easy" },
  ];
};
