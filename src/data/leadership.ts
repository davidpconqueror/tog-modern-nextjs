export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const bishopProfile = {
  name: "Bishop Paul Tamilarasan",
  spouse: "Mrs. Beulah Tamilarasan",
  title: "Founder & Presiding Bishop",
  organization: "Tabernacle of Grace Ministries Diocese",
  born: "May 21, 1975",
  origin: "Namakkal District, Tamil Nadu, India",
  family: {
    children: [
      { name: "Jubaldevaprasad", relation: "Son" },
      { name: "Helen Priscilla", relation: "Daughter" },
    ],
  },
  welcomeMessage: {
    salutation: "Greetings in our Lord's blessed name!",
    content: [
      "Whatever reason might have brought you here, one thing is certain: God has a purposeful plan for your life. You are not on this earth by accident—you were created in God's own image with a unique divine assignment.",
      "Even before you were born, God planned to bless you, grant you peace, and give you abundant life. In His presence, we find forgiveness, true freedom, and divine favor. We pray that you feel warmly welcomed into the Tabernacle of Grace fellowship.",
    ],
  },
  testimony: [
    {
      heading: "Early Life & Spiritual Awakening",
      text: "Born into an orthodox Hindu Naidu family in Namakkal, Tamil Nadu, I experienced the loss of my father at the age of ten. My mother worked tirelessly to raise us. For the first 18 years of my life, I practiced our traditional customs. In September 1993, Jesus met me in an undeniable and transforming encounter, calling me out of darkness into His marvelous light. In 1994, I obeyed the Lord in water baptism.",
    },
    {
      heading: "Surrendering Career for Full-Time Ministry",
      text: "Having trained in Civil Engineering, I sensed an undeniable prompting to surrender my profession and dedicate my days entirely to gospel work. I joined Namakkal AG Church as a full-time worker, learning pastoral care, prayer, and evangelism from the ground up.",
    },
    {
      heading: "Theological Preparation & Marriage",
      text: "In June 1997, I entered the Tamil Nadu Bible College in Madurai, completing my Bachelor in Theology (B.Th) in February 2000. On July 12, 2000, I was united in marriage to Beulah, the daughter of Rev. Johndevaprasad (IGL Church Salem). We subsequently served as assistant pastors in Namakkal before receiving our pioneering mandate.",
    },
    {
      heading: "Pioneering Call to North India",
      text: "During my seminary years, I prayed relentlessly for North India. In 2001, we took a leap of faith and relocated over 2,500 kilometers north to the state of Punjab. God graciously gave us fluent mastery of both Hindi and Punjabi, and empowered us to overcome cultural hurdles, establish cell prayer groups, and plant vibrant indigenous worshipping congregations.",
    },
    {
      heading: "The Diocese Today",
      text: "Today, under the Grace of God, we supervise a growing network of over 24 branch churches across Punjab. Our ministry encompasses Grace Children's Home for orphans and underprivileged children, active slum daycare initiatives, pastors' equipping seminars, emergency humanitarian aid, and church planting in unreached villages.",
    },
  ],
  timeline: [
    { year: "1975", title: "Born in Namakkal", description: "Raised in Tamil Nadu in an orthodox household." },
    { year: "1993", title: "Personal Conversion", description: "Encountered Jesus Christ; baptized in 1994." },
    { year: "1995", title: "Entered Ministry", description: "Resigned from Civil Engineering to serve at Namakkal AG Church." },
    { year: "2000", title: "Seminary & Marriage", description: "Graduated B.Th from TNBC Madurai; married Beulah." },
    { year: "2001", title: "Pioneering Punjab", description: "Relocated to Punjab; mastered Punjabi & Hindi to begin church plants." },
    { year: "2010+", title: "Diocese & Outreach", description: "Established 24+ branch churches, Grace Children's Home & Slum Daycare." },
  ] as TimelineEvent[],
};
