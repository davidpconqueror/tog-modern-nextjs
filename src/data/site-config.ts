export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const siteConfig = {
  name: "Tabernacle of Grace Ministries",
  dioceseName: "Tabernacle of Grace Ministries Diocese",
  shortName: "TOG Ministries",
  tagline: "Discipling the Church to Disciple the World",
  motto: "Loving, Liberating, and Life-Giving",
  description:
    "An evangelical, indigenous, holistic faith missionary organization in Punjab, India, reaching the unreached through church planting, children's homes, slum care, and leadership development.",
  url: "https://tog.org.in",
  leader: {
    name: "Bishop Paul Tamilarasan",
    spouse: "Mrs. Beulah Tamilarasan",
    title: "Bishop & Founder",
    email: "deepgospel@gmail.com",
    address: {
      street: "No.246/10, St. No. 1, Pritam Nagar, Civil Lines",
      city: "Ludhiana",
      state: "Punjab",
      country: "India",
    },
  },
  social: {
    facebook: "https://www.facebook.com/paultamizharasan",
    youtube: "https://www.youtube.com/paultamilarasan",
    email: "mailto:deepgospel@gmail.com",
  },
  banking: {
    accountName: "PAULTAMILARASAN",
    bankName: "State Bank of India (SBI)",
    branch: "Fountain Chowk Branch, Ludhiana",
    accountNumber: "30583616986",
    city: "Ludhiana, Punjab, India",
    paypalAvailable: true,
    partnershipNote:
      "Tabernacle of Grace Ministries is a faith ministry. It is not underwritten by any one church or denomination. We look to God to impress individuals, churches, and business people to partner with us through financial support, prayer, and faith.",
  },
  stats: [
    { label: "Churches Planted & Supervised", value: "24+" },
    { label: "Years of Ministry in Punjab", value: "24+" },
    { label: "Children & Slum Youth Supported", value: "500+" },
    { label: "Native Pastors & Leaders Trained", value: "120+" },
  ],
  navItems: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Ministries", href: "/ministries" },
    { title: "Resources", href: "/resources" },
    { title: "Gallery", href: "/gallery" },
    { title: "Get Involved & Give", href: "/get-involved" },
  ] as NavItem[],
};
