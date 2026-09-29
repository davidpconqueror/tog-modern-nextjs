export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  date: string;
  location: string;
  sectionId: string;
}

export interface GallerySubsection {
  id: string;
  folderName: string;
  title: string;
  badge: string;
  period: string;
  location: string;
  description: string;
  accent: "amber" | "sage" | "sky" | "lavender";
  images: GalleryImage[];
}

export const galleryData: GallerySubsection[] = [
  {
    id: "branch-church-foundation-laying",
    folderName: "Branch church foundation laying",
    title: "Branch Church Foundation Laying",
    badge: "Church Architecture & Dedications",
    period: "2017 – 2019",
    location: "Punjab District Stations",
    description:
      "Land preparation, ceremonial foundation stone laying, and pastoral dedications marking permanent prayer sanctuaries across rural and semi-urban Punjab.",
    accent: "amber",
    images: [
      {
        id: "church-stone-2019-1",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/20190907_114043.jpg",
        title: "Foundation Stone Dedication Prayer",
        caption: "Bishop Paul and ministry pastors leading the consecration ceremony on the building site.",
        date: "September 7, 2019",
        location: "Punjab Mission Site",
        sectionId: "branch-church-foundation-laying",
      },
      {
        id: "church-stone-2019-2",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/20190907_114014.jpg",
        title: "Cornerstone Setting Ceremony",
        caption: "Ceremonial mortar placement and laying of the primary foundation stone by the church presbytery.",
        date: "September 7, 2019",
        location: "Punjab Mission Site",
        sectionId: "branch-church-foundation-laying",
      },
      {
        id: "church-stone-2019-3",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/20190907_113930.jpg",
        title: "Pastoral Blessing over the Land",
        caption: "Community gathering and prayer of blessing over the newly acquired church grounds.",
        date: "September 7, 2019",
        location: "Punjab Mission Site",
        sectionId: "branch-church-foundation-laying",
      },
      {
        id: "church-prep-2018-1",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/IMG_20180418_111511.jpg",
        title: "Site Survey & Boundary Inspection",
        caption: "On-site assessment and ground layout planning for sanctuary wall footings.",
        date: "April 18, 2018",
        location: "Rural Station",
        sectionId: "branch-church-foundation-laying",
      },
      {
        id: "church-prep-2018-2",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/IMG_20180101_150635.jpg",
        title: "New Year Dedication Assembly",
        caption: "Congregants gathering at the site to usher in the new year with thanksgiving and construction prayers.",
        date: "January 1, 2018",
        location: "Diocese Station",
        sectionId: "branch-church-foundation-laying",
      },
      {
        id: "church-foundation-2017-1",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/IMG_20171222_123820.jpg",
        title: "Excavation and Footing Preparation",
        caption: "Ground excavation and brickwork preparation for the branch hall foundation trench.",
        date: "December 22, 2017",
        location: "Ludhiana Outskirts",
        sectionId: "branch-church-foundation-laying",
      },
      {
        id: "church-foundation-2017-2",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/IMG_20171222_122925.jpg",
        title: "Foundation Masonry Works",
        caption: "Initial layer of masonry laid under the direction of local church elders and builders.",
        date: "December 22, 2017",
        location: "Ludhiana Outskirts",
        sectionId: "branch-church-foundation-laying",
      },
      {
        id: "church-foundation-2017-3",
        src: "/images/Gallery/Branch%20church%20foundation%20laying/IMG_20171222_122912.jpg",
        title: "Site Footing Consecration",
        caption: "Pastor and workers inspecting the corner footing alignment before masonry curing.",
        date: "December 22, 2017",
        location: "Ludhiana Outskirts",
        sectionId: "branch-church-foundation-laying",
      },
    ],
  },
  {
    id: "covid-19-relief",
    folderName: "Covid-19 Relief",
    title: "COVID-19 Humanitarian Food Relief",
    badge: "Emergency Food & Ration Support",
    period: "October 2021",
    location: "Ludhiana Migrant Settlements",
    description:
      "Emergency food rations, wheat flour bags, and grocery sustenance packages delivered to daily wage laborers and vulnerable households amidst lockdown disruptions.",
    accent: "sage",
    images: [
      {
        id: "covid-food-2021-1",
        src: "/images/Gallery/Covid-19%20Relief/20211017_133325.jpg",
        title: "Emergency Ration Kit Distribution",
        caption: "Volunteers and church leaders distributing essential food grains to registered local families.",
        date: "October 17, 2021",
        location: "Ludhiana Community Center",
        sectionId: "covid-19-relief",
      },
      {
        id: "covid-food-2021-2",
        src: "/images/Gallery/Covid-19%20Relief/20211017_133354.jpg",
        title: "Staple Grains Handover to Mothers",
        caption: "Direct distribution of flour and pulses to destitute mothers facing severe food shortages.",
        date: "October 17, 2021",
        location: "Ludhiana Outreach Point",
        sectionId: "covid-19-relief",
      },
      {
        id: "covid-food-2021-3",
        src: "/images/Gallery/Covid-19%20Relief/20211017_133356.jpg",
        title: "Organized Relief Queue & Care",
        caption: "Socially distanced relief drive ensuring each needy household received comprehensive nutrition kits.",
        date: "October 17, 2021",
        location: "Ludhiana Outreach Point",
        sectionId: "covid-19-relief",
      },
      {
        id: "covid-food-2021-4",
        src: "/images/Gallery/Covid-19%20Relief/20211017_133602.jpg",
        title: "Family Survival Provisions",
        caption: "Elderly residents receiving staple grain sacks to sustain multi-generational households.",
        date: "October 17, 2021",
        location: "Ludhiana Field Camp",
        sectionId: "covid-19-relief",
      },
      {
        id: "covid-food-2021-5",
        src: "/images/Gallery/Covid-19%20Relief/20211017_133611.jpg",
        title: "Relief Packaging and Dispatch",
        caption: "Logistics staging area with bulk essential goods prepared for doorstep delivery to immobilized families.",
        date: "October 17, 2021",
        location: "Ludhiana Relief Staging",
        sectionId: "covid-19-relief",
      },
      {
        id: "covid-food-2021-6",
        src: "/images/Gallery/Covid-19%20Relief/20211017_133644.jpg",
        title: "Frontline Compassion Outreach",
        caption: "Personal blessing and prayer extended to every beneficiary receiving humanitarian sustenance.",
        date: "October 17, 2021",
        location: "Ludhiana Community Center",
        sectionId: "covid-19-relief",
      },
    ],
  },
  {
    id: "covid-19-mask-and-sanitizer",
    folderName: "covid 19 mask and sanitizer",
    title: "COVID-19 Mask & Sanitizer Hygiene Aid",
    badge: "Public Health & Preventive Care",
    period: "June – September 2021",
    location: "Rural Hamlets & Urban Colonies",
    description:
      "Direct distribution of protective face masks, alcohol sanitizers, and community health sensitization across underprivileged neighborhoods during the peak pandemic.",
    accent: "sky",
    images: [
      {
        id: "covid-mask-2021-1",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210613_120916.jpg",
        title: "Village Mask & Sanitizer Camp",
        caption: "Outdoor distribution desk providing medical-grade face masks and bottles of sanitizer.",
        date: "June 13, 2021",
        location: "Punjab Village Encampment",
        sectionId: "covid-19-mask-and-sanitizer",
      },
      {
        id: "covid-mask-2021-2",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210613_121007.jpg",
        title: "Sanitation Demonstrations",
        caption: "Instructing local youth and community members on proper hygiene protocols and virus prevention.",
        date: "June 13, 2021",
        location: "Punjab Village Encampment",
        sectionId: "covid-19-mask-and-sanitizer",
      },
      {
        id: "covid-mask-2021-3",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210613_121212.jpg",
        title: "Personal Safety Kits for Laborers",
        caption: "Equipping daily wagers with long-lasting protective face coverings and personal sanitizer bottles.",
        date: "June 13, 2021",
        location: "Ludhiana Labor Colony",
        sectionId: "covid-19-mask-and-sanitizer",
      },
      {
        id: "covid-mask-2021-4",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210613_121309.jpg",
        title: "Community Outreach Team",
        caption: "Pastoral care workers reaching households unable to afford basic commercial medical supplies.",
        date: "June 13, 2021",
        location: "Ludhiana Labor Colony",
        sectionId: "covid-19-mask-and-sanitizer",
      },
      {
        id: "covid-mask-2021-5",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210613_121414.jpg",
        title: "Hygiene Supplies for Families",
        caption: "Providing multi-pack masks and sanitization supplies to protect family units.",
        date: "June 13, 2021",
        location: "Ludhiana Labor Colony",
        sectionId: "covid-19-mask-and-sanitizer",
      },
      {
        id: "covid-mask-2021-6",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210613_121527.jpg",
        title: "Frontline Medical Aid Distribution",
        caption: "Volunteer team concluding morning distribution rounds in rural residential settlements.",
        date: "June 13, 2021",
        location: "Ludhiana District",
        sectionId: "covid-19-mask-and-sanitizer",
      },
      {
        id: "covid-mask-2021-7",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210925_202615.jpg",
        title: "Evening Distribution Drive",
        caption: "Follow-up distribution drive in late September addressing persistent pandemic needs.",
        date: "September 25, 2021",
        location: "Urban Slum Enclave",
        sectionId: "covid-19-mask-and-sanitizer",
      },
      {
        id: "covid-mask-2021-8",
        src: "/images/Gallery/covid%2019%20mask%20and%20sanitizer/20210925_202657.jpg",
        title: "Community Sanitation Awareness",
        caption: "Concluding evening session with safety kits handed out to neighborhood youth and elders.",
        date: "September 25, 2021",
        location: "Urban Slum Enclave",
        sectionId: "covid-19-mask-and-sanitizer",
      },
    ],
  },
  {
    id: "field-ministry-and-gatherings",
    folderName: "Field Ministry & Gatherings",
    title: "Diocese Field Ministry & Gatherings",
    badge: "Fellowship & Leadership Outreach",
    period: "October 2021",
    location: "Punjab Diocese Stations",
    description:
      "Pastoral leadership council meetings, local believer assemblies, and field outreach coordination across North India mission fields.",
    accent: "lavender",
    images: [
      {
        id: "field-meeting-1",
        src: "/images/Gallery/WhatsApp%20Image%202021-10-29%20at%201.24.34%20PM.jpeg",
        title: "Pastoral Council Consultation",
        caption: "Bishop Paul Tamilarasan conferring with regional missionary workers and field evangelists.",
        date: "October 29, 2021",
        location: "Diocese Secretariat, Ludhiana",
        sectionId: "field-ministry-and-gatherings",
      },
      {
        id: "field-meeting-2",
        src: "/images/Gallery/WhatsApp%20Image%202021-10-29%20at%201.24.34%20PM%20(1).jpeg",
        title: "Indigenous Missionaries Assembly",
        caption: "Native pastors and leaders gathered for strategy, scriptural encouragement, and intercessory prayer.",
        date: "October 29, 2021",
        location: "Diocese Secretariat, Ludhiana",
        sectionId: "field-ministry-and-gatherings",
      },
      {
        id: "field-meeting-3",
        src: "/images/Gallery/WhatsApp%20Image%202021-10-29%20at%201.24.35%20PM.jpeg",
        title: "Community Fellowship & Field Review",
        caption: "Pastoral team review of community care efforts and upcoming village gospel outreach campaigns.",
        date: "October 29, 2021",
        location: "Diocese Secretariat, Ludhiana",
        sectionId: "field-ministry-and-gatherings",
      },
    ],
  },
];
