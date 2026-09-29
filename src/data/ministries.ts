export interface MinistryImage {
  id: string;
  src: string;
  title: string;
  caption?: string;
  location?: string;
}

export interface MinistryPillar {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  fullDesc: string[];
  keyInitiatives: string[];
  impactStat: {
    number: string;
    label: string;
  };
  galleryImages: MinistryImage[];
}

export const ministriesData: MinistryPillar[] = [
  {
    id: "church-planting",
    slug: "church-planting",
    title: "Church Planting, Evangelism & Outreach Network",
    shortDesc:
      "Establishing thriving local churches where none exist in Punjab through relational house visits, indigenous leadership development, and 1 Cor. 3:7 partnership.",
    iconName: "Church",
    badge: "Core Pillar",
    fullDesc: [
      "It is the primary objective of Tabernacle of Grace Ministries to establish a church where no church exists. Workers joining the mission are equipped at the TOG Outreach Institute to proclaim Christ's love, human surrender, and salvation by faith. In the course of time, interested seekers are invited to prayer meetings where the Word of God is preached, birthing vibrant worshipping cell groups and local churches.",
      "Relational evangelism is foundational: our workers invest time visiting homes, listening to families, breaking cultural barriers, and earning trust through patient house visitation. As bridges of trust are built, seekers realize that the ministry is there to love and serve them, opening hearts to the Gospel message.",
      "The task does not end at church formation: potential local leaders are identified and trained to shepherd their own people. Once emerging churches stand on their own feet, pastoral and administrative oversight is transitioned to indigenous elders and evangelical bodies—standing on 1 Corinthians 3:7: 'So neither he who plants, nor he who waters is anything, but only God makes things grow.'",
    ],
    keyInitiatives: [
      "Establishing vibrant worshipping churches where no church previously existed",
      "Relational house-to-house visitation and bridge-building evangelism",
      "Seeker prayer fellowships and systematic discipleship in God's Word",
      "Training potential indigenous leaders to shepherd and administer their own congregations",
      "Short-term mission opportunities (1 week to 2 years) for youth, individuals, and church teams",
      "Holistic North India outreach: food aid, medical/eye camps, rural child education, and farmer training",
    ],
    impactStat: {
      number: "24+",
      label: "Active Branch Churches in Punjab",
    },
    galleryImages: [
      {
        id: "church-planting-1",
        src: "/images/ministries/church-planting/church-1.jpeg",
        title: "Seeker Prayer Fellowship & Word of God",
        caption: "Young believers and seekers gathering with Bibles in hand for weekly prayer meetings and discipleship in Punjab.",
        location: "Punjab Village Outreach",
      },
      {
        id: "church-planting-2",
        src: "/images/ministries/church-planting/church-2.jpeg",
        title: "Children's Prayer & Intercession Gathering",
        caption: "Village children kneeling in reverent prayer as part of the emerging local church community.",
        location: "Branch Sanctuary, Punjab",
      },
      {
        id: "church-planting-3",
        src: "/images/ministries/church-planting/church-3.jpeg",
        title: "Emerging Church Congregation & Pastoral Presbytery",
        caption: "Indigenous families and church workers united in fellowship, growing toward local self-governance under 1 Cor. 3:7.",
        location: "Punjab Branch Assembly",
      },
    ],
  },
  {
    id: "children-ministry",
    slug: "children",
    title: "Grace Children's Home & Child Sponsorship",
    shortDesc:
      "Providing loving boarding, daily nutrition, education, and holistic care for orphans and impoverished children in Ludhiana.",
    iconName: "HeartHandshake",
    badge: "Compassion",
    fullDesc: [
      "Millions of children in developing areas struggle daily for survival and access to basic schooling. Tabernacle of Grace established the Grace Children's Home in Ludhiana to rescue, protect, and empower destitute and orphan children.",
      "We provide boarding, balanced meals, medical care, clothing, quality schooling, and spiritual guidance in a secure, nurturing environment where children can thrive.",
      "Our Child Sponsorship Program creates a direct relationship based on mutual dignity, allowing partners to invest in a child's education and ensure a bright, hope-filled future.",
    ],
    keyInitiatives: [
      "Full residential boarding and healthcare at Grace Children's Home",
      "Formal English & Punjabi medium schooling support",
      "Child sponsorship program linking sponsors with needy students",
      "Moral and spiritual character education",
    ],
    impactStat: {
      number: "100%",
      label: "Enrolled in Formal Schooling",
    },
    galleryImages: [
      {
        id: "children-ministry-1",
        src: "/images/ministries/compassion-children/children-1.jpeg",
        title: "Grace Children's Home Boarding Family",
        caption: "Rescued orphans and vulnerable children receiving daily nutrition, quality education, and love at Grace Home.",
        location: "Grace Children's Home, Ludhiana",
      },
    ],
  },
  {
    id: "slum-ministry",
    slug: "community-slum",
    title: "Community & Slum Daycare Outreach",
    shortDesc:
      "Transforming lives in migrant slum settlements with educational daycare, food aid, clothing, and addiction prevention.",
    iconName: "Users",
    badge: "Community Care",
    fullDesc: [
      "Ludhiana has extensive migrant worker settlements populated by daily-wage laborers who have relocated from states including Uttar Pradesh, Rajasthan, Jammu & Kashmir, and Maharashtra.",
      "Because parents labor from morning until late night, children are frequently left vulnerable to neglect, street begging, and substance abuse. To address this crisis, TOG established dedicated daycare centers directly within the communities.",
      "Children attend our centers throughout the day, receiving tutoring, wholesome cooked meals, clean clothing, basic hygiene training, and moral instruction to break the generational cycle of poverty.",
    ],
    keyInitiatives: [
      "Free daytime learning center and basic literacy for slum youth",
      "Daily nutrition and clean drinking water provision",
      "Periodic clothing, blanket, and winter relief distribution",
      "Parental counseling and vocational guidance for migrant families",
    ],
    impactStat: {
      number: "150+",
      label: "Migrant Children Sheltered Daily",
    },
    galleryImages: [
      {
        id: "community-care-11",
        src: "/images/ministries/community-care/community.gif",
        title: "Daily Outreach in Motion",
        caption: "Documentary glimpse of our active daily daycare and nutrition operations.",
        location: "Frontline Daycare Field",
      },
      {
        id: "community-care-1",
        src: "/images/ministries/community-care/002.jpg",
        title: "Daycare Learning & Literacy Session",
        caption: "Migrant children engaged in morning study modules and basic literacy training.",
        location: "Slum Learning Center, Ludhiana",
      },
      {
        id: "community-care-2",
        src: "/images/ministries/community-care/003.jpg",
        title: "Classroom Nutrition & Meal Support",
        caption: "Hot nutritious cooked meals served daily to protect growing children from malnutrition.",
        location: "Ludhiana Center",
      },
      {
        id: "community-care-3",
        src: "/images/ministries/community-care/009.jpg",
        title: "Interactive Learning & Group Activities",
        caption: "Creative development, storytelling, and structured playtime in a safe supervised classroom.",
        location: "Community Center",
      },
      {
        id: "community-care-4",
        src: "/images/ministries/community-care/010.jpg",
        title: "Elementary Reading & Tutoring",
        caption: "Dedicated volunteers tutoring first-generation learners in Punjabi, Hindi, and English.",
        location: "Ludhiana Settlement",
      },
      {
        id: "community-care-5",
        src: "/images/ministries/community-care/011.jpg",
        title: "Hygiene Essentials & Clean Clothes Distribution",
        caption: "Distributing hygiene soap, clean clothing, and seasonal care packages to migrant kids.",
        location: "Slum Outreach Center",
      },
      {
        id: "community-care-6",
        src: "/images/ministries/community-care/012.jpg",
        title: "Safe Haven Classroom Assembly",
        caption: "Children sheltered safely away from hazardous roadside brick kilns while parents work shifts.",
        location: "Daycare Sanctuary",
      },
      {
        id: "community-care-7",
        src: "/images/ministries/community-care/025.jpg",
        title: "Early Childhood Development",
        caption: "Pre-primary educational foundation preparing preschool-aged children for mainstream school admissions.",
        location: "Community Center",
      },
      {
        id: "community-care-8",
        src: "/images/ministries/community-care/028.jpg",
        title: "Morning Assembly & Moral Instruction",
        caption: "Building character, mutual respect, and foundational values during morning gatherings.",
        location: "Ludhiana Learning Center",
      },
      {
        id: "community-care-9",
        src: "/images/ministries/community-care/034.jpg",
        title: "Community Food Relief Drive",
        caption: "Essential staple food packages distributed directly to needy migrant families.",
        location: "Ludhiana Slum Settlement",
      },
      {
        id: "community-care-10",
        src: "/images/ministries/community-care/035.jpg",
        title: "Student Smiles & Joyful Learning",
        caption: "Restoring hope, childhood dignity, and educational opportunities to underprivileged youth.",
        location: "Daycare Classroom",
      },
    ],
  },
  {
    id: "leadership-training",
    slug: "leadership-training",
    title: "Leadership Training Seminars & Pastors Support",
    shortDesc:
      "Equipping indigenous workers through hands-on classroom and field training, while partnering under the Pauline model to sponsor native pastors across India.",
    iconName: "Award",
    badge: "Empowerment",
    fullDesc: [
      "We believe training is very essential to prepare a worker of the Lord. Tabernacle of Grace provides hands-on missionary and leadership training where God's Word is taught in deeper ways. Students learn both in class and in the field, gaining practical ministry experience alongside seasoned international and native speakers who bring the Scriptures alive to reach Indian villages and cities through short-term and long-term tracks.",
      "Throughout India, God is raising up a dedicated generation of native pastors ready to win their countrymen for Christ. Unlike foreign workers, native pastors intimately know the local languages, understand cultural nuances, and live at the level of the people around them. Most of all, they are gripped with an urgency and deep compassion to proclaim Christ across their homeland.",
      "Yet, a growing church in developing regions frequently lacks the financial resources needed to train and send out pastors to plant churches and shepherd growing flocks. Like the Apostle Paul, who appealed to the established church to assist ministry in far-off places, TOG invites partners into this vital calling—enabling frontline pastors to remain full-time in ministry, preach the Gospel, and make true disciples.",
    ],
    keyInitiatives: [
      "Hands-on leadership seminars combining classroom doctrine with active field practicals",
      "International and indigenous guest speakers bringing God's Word alive to students",
      "Short-term and long-term training tracks designed to reach Indian villages and cities",
      "Pauline monthly pastoral sponsorship providing living stipends and ministry backing",
      "Formal ordination, credentialing, and presbytery recognition for native pastors",
      "Pastoral retreats, prayer accountability, and ministerial family support",
    ],
    impactStat: {
      number: "120+",
      label: "Pastors Supported & Leaders Trained Annually",
    },
    galleryImages: [
      {
        id: "leadership-training-1",
        src: "/images/ministries/empowerment-leadership/pastorsupport-1.jpeg",
        title: "Pastoral Ordination & Synod Credentialing",
        caption: "Bishop Paul and ministry presbytery presenting credentials and ordination certificates to native pastors at the Punjab Synod assembly.",
        location: "Punjab Synod Inaugural Assembly",
      },
      {
        id: "leadership-training-2",
        src: "/images/ministries/empowerment-leadership/pastorsupport-2.jpeg",
        title: "Leadership Training Seminar & Intercession",
        caption: "Church planters and pastoral leaders gathered for an intensive leadership seminar in heartfelt prayer and worship.",
        location: "TOG Ministry Training Center",
      },
      {
        id: "leadership-training-3",
        src: "/images/ministries/empowerment-leadership/pastorsupport-3.jpeg",
        title: "Commissioning Prayer for Field Workers",
        caption: "Laying on of hands and dedicatory prayer over frontline ministers, women leaders, and evangelists sent into Indian villages.",
        location: "Field Ministry Commissioning",
      },
    ],
  },
  {
    id: "bible-college",
    slug: "bible-college",
    title: "Logos Bible College & Theological Training",
    shortDesc:
      "Accredited theological degrees (C.Th, D.Th, B.Th) affiliated with East Asia School of Theology, Singapore, designed for working professionals and church leaders via live weekly Zoom classes.",
    iconName: "GraduationCap",
    badge: "Education",
    fullDesc: [
      "Affiliated with East Asia School of Theology in Singapore, Logos Bible College operates under Tabernacle of Grace Ministries to equip working professionals, ministers, and emerging Christian leaders with rigorous biblical scholarship, spiritual formation, and practical ministry skills.",
      "Designed specifically for working individuals and leaders seeking to study God's Word from home with affordable fees, live interactive classes are conducted via the Zoom app every Wednesday (Indian Time: 7:00 PM – 8:30 PM | Malaysia & Singapore GMT+8: 9:30 PM – 11:00 PM).",
      "Led under the oversight of Bishop Paul Tamizharasan and Dean Rev. Joshua Karthick, the college offers progressive modular tracks in English, preparing men and women for enduring leadership, preaching excellence, and cross-cultural evangelism with admissions currently open.",
    ],
    keyInitiatives: [
      "Certificate in Theology (C.Th) – 1 Year foundational program in English",
      "Diploma in Theology (D.Th) – 2 Years ministerial diploma",
      "Bachelor of Theology (B.Th) – 3 Years comprehensive theological degree",
      "Live Zoom interactive classes every Wednesday (7:00 PM – 8:30 PM IST / 9:30 PM – 11:00 PM SGT)",
      "Affiliated with East Asia School of Theology, Singapore with affordable tuition",
      "Admission Open: Contact Dean Rev. Joshua Karthick (+91 8595246679) or Bishop Paul (+91 9815121430)",
    ],
    impactStat: {
      number: "3 Degrees",
      label: "C.Th (1 Yr) • D.Th (2 Yrs) • B.Th (3 Yrs)",
    },
    galleryImages: [
      {
        id: "education-1",
        src: "/images/ministries/education/education-1.jpeg",
        title: "Logos Bible College – Admission Open Prospectus",
        caption: "Online Bible Course affiliated with East Asia School of Theology, Singapore. Live Zoom classes every Wednesday for C.Th, D.Th, and B.Th degrees.",
        location: "Affiliated: East Asia School of Theology, Singapore",
      },
    ],
  },
];
