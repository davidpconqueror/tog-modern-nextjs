export interface ResourceDocument {
  id: string;
  title: string;
  category: "Annual Report" | "Monthly Update" | "Ministry Guide" | "Doctrine";
  year: string;
  fileType: "PDF" | "DOCX";
  fileSize: string;
  description: string;
  downloadUrl: string;
}

export interface ArchiveMilestone {
  title: string;
  period: string;
  description: string;
  category: string;
  highlights: string[];
}

export const resourceDocuments: ResourceDocument[] = [
  {
    id: "annual-report-2024",
    title: "TOG Ministries Annual Ministry & Financial Report 2024",
    category: "Annual Report",
    year: "2024",
    fileType: "PDF",
    fileSize: "2.4 MB",
    description:
      "Comprehensive annual overview of church planting across Punjab, children home operations, financial stewardship, and outreach milestones.",
    downloadUrl: "#",
  },
  {
    id: "annual-report-2023",
    title: "TOG Ministries Annual Ministry & Financial Report 2023",
    category: "Annual Report",
    year: "2023",
    fileType: "PDF",
    fileSize: "1.9 MB",
    description:
      "Detailed summary of regional evangelism initiatives, pastor equip conferences, and humanitarian aid distribution in Ludhiana.",
    downloadUrl: "#",
  },
  {
    id: "spc-punjab-2024",
    title: "SPC Punjab Monthly Ministry & Mission Reports",
    category: "Monthly Update",
    year: "2024",
    fileType: "PDF",
    fileSize: "850 KB",
    description:
      "Monthly field reports from frontline native missionaries documenting village prayer cells, water baptisms, and newly formed fellowships.",
    downloadUrl: "#",
  },
  {
    id: "statement-of-faith",
    title: "Diocese Statement of Faith & Doctrinal Standards",
    category: "Doctrine",
    year: "2023",
    fileType: "PDF",
    fileSize: "420 KB",
    description:
      "Official 8-point doctrinal framework, biblical ordinances of baptism and communion, and episcopal ministry governance guidelines.",
    downloadUrl: "#",
  },
  {
    id: "pastoral-training-handbook",
    title: "Native Pastors Equip & Leadership Curriculum Guide",
    category: "Ministry Guide",
    year: "2022",
    fileType: "PDF",
    fileSize: "1.5 MB",
    description:
      "Core syllabus and practical module handbook utilized by the TOG Outreach Institute for training indigenous church planters.",
    downloadUrl: "#",
  },
];

export const archiveMilestones: ArchiveMilestone[] = [
  {
    title: "COVID-19 Humanitarian Relief Distribution",
    period: "2020 – 2021",
    category: "Humanitarian Aid",
    description:
      "Emergency distribution of essential food grains, masks, sanitizers, and medical aid to vulnerable migrant laborers and daily wagers affected by lockdowns in Ludhiana.",
    highlights: [
      "Over 3,000 food ration kits supplied to stranded families",
      "Free face masks and sanitizer kits distributed throughout rural settlements",
      "Special medical counseling and emergency pastoral prayer hotlines",
    ],
  },
  {
    title: "Branch Church Foundation Stones & Construction",
    period: "2015 – 2020",
    category: "Church Buildings",
    description:
      "Land acquisition and foundation stone laying ceremonies for permanent worshipping centers across rural and semi-urban Punjab districts.",
    highlights: [
      "Dedication of permanent sanctuary halls",
      "Community water filtration setups at rural church locations",
      "Foundation laying gatherings with indigenous pastoral council",
    ],
  },
  {
    title: "Pioneering Church Plants & Slum Daycare Launch",
    period: "2001 – 2014",
    category: "Historical Archive",
    description:
      "Early years of ministry following Bishop Paul Tamilarasan's relocation from Tamil Nadu to Punjab, starting house fellowships and establishing Grace Children's Home.",
    highlights: [
      "First Punjabi language house fellowships inaugurated",
      "Launch of free education center for migrant slum children",
      "Inaugural Pastor's Equip conference in Ludhiana",
    ],
  },
];
