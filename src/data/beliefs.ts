export interface BeliefItem {
  id: string;
  title: string;
  summary: string;
  scriptures: string[];
  details: string;
}

export const beliefsData: BeliefItem[] = [
  {
    id: "scriptures",
    title: "The Holy Scriptures",
    summary: "The Scriptures are Inspired by God and declare His design and plan for mankind.",
    scriptures: ["2 Timothy 3:15-16", "2 Peter 1:21"],
    details:
      "We believe the Bible is the inspired and only infallible and authoritative written Word of God. It provides humanity with the divine roadmap for salvation, godly living, and eternity.",
  },
  {
    id: "trinity",
    title: "The One True God (The Trinity)",
    summary: "Revealed in three persons: Father, Son, and Holy Spirit.",
    scriptures: ["Deuteronomy 6:4", "Matthew 28:19", "Mark 12:29"],
    details:
      "There is only one true God who has revealed Himself as eternally self-existent, self-revealed as the 'I AM', and who has further revealed Himself to embody the principles of relationship and association as Father, Son, and Holy Spirit.",
  },
  {
    id: "deity-of-christ",
    title: "The Deity of the Lord Jesus Christ",
    summary: "As God's Son, Jesus was both human and divine, born of a virgin, lived sinlessly, and rose bodily.",
    scriptures: ["Isaiah 7:14", "Romans 8:34", "Acts 1:10", "1 Corinthians 15:3-4"],
    details:
      "We believe in His virgin birth, His sinless life, His miracles, His vicarious and atoning death through His shed blood, His bodily resurrection, His ascension to the right hand of the Father, and His personal return in power and glory.",
  },
  {
    id: "fall-and-salvation",
    title: "The Fall of Man & Redemption",
    summary: "Man willingly fell to sin, and humanity's only hope is salvation through the shed blood of Jesus Christ.",
    scriptures: ["Romans 5:12-19", "Romans 10:13-15", "1 John 5:10"],
    details:
      "Though created innocent and good, humanity by voluntary transgression fell and incurred physical and spiritual death. Salvation is received through repentance toward God and faith toward our Lord Jesus Christ.",
  },
  {
    id: "restoration",
    title: "Restored Fellowship with God",
    summary: "Every person can have restored fellowship through accepting Christ's offer of forgiveness.",
    scriptures: ["John 3:3", "Romans 10:9-10", "Ephesians 2:8-9"],
    details:
      "By the washing of regeneration and renewing of the Holy Spirit, being justified by grace through faith, man becomes an heir of God according to the hope of eternal life.",
  },
  {
    id: "ordinances",
    title: "Sacred Ordinances (Baptism & Communion)",
    summary: "Water Baptism by immersion and Holy Communion as symbolic remembrance of Christ's sacrifice.",
    scriptures: ["Matthew 28:19", "Romans 6:4", "1 Corinthians 11:26"],
    details:
      "We practice two ordinances: (1) Water baptism by immersion for all who repent and believe, signifying burial with Christ and resurrection to walk in newness of life; and (2) The Lord's Supper, consisting of bread and the fruit of the vine, expressing our sharing the divine nature and remembering His death till He comes.",
  },
  {
    id: "holy-spirit",
    title: "Baptism in the Holy Spirit",
    summary: "A distinct empowerment following salvation for witnessing and supernatural service.",
    scriptures: ["Luke 24:49", "Acts 1:4, 8", "Acts 2:4"],
    details:
      "All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Spirit, which brings empowerment for life and service, imparting spiritual gifts for the work of the ministry.",
  },
  {
    id: "divine-healing",
    title: "Divine Healing & Blessed Hope",
    summary: "Deliverance from sickness provided in the Atonement, and the imminent return of Jesus Christ.",
    scriptures: ["Isaiah 53:4-5", "Matthew 8:16-17", "James 5:14-16", "1 Thessalonians 4:16-17"],
    details:
      "Divine healing is an integral part of the gospel. Relief from sickness is provided in the atonement and is the privilege of all believers. We look forward with joy to the Blessed Hope—the resurrection of those who have fallen asleep in Christ.",
  },
];

export const visionPillars = [
  "Carry the Salvation and Healing message to unreached people groups across Punjab and North India.",
  "Conduct biblical training, seminars, conventions, and mass gospel campaigns.",
  "Establish dedicated prayer altars and intercessory prayer networks.",
  "Plant self-sustaining, disciple-making indigenous local churches.",
  "Establish Cell Groups to disciple, mentor, and spiritually strengthen families.",
  "Operate in the Biblical fivefold ministry gifting (Apostles, Prophets, Evangelists, Pastors, Teachers - Eph 4:11).",
  "Glorify God through sacrificial service to orphans, destitute children, and marginalized slum communities.",
];
