const contact = {
  phone: "+234 123 1235",
  email: "miebakaiwarri.dev@gmail.com",
  address: "15 John Doe str, NG",
};

const info = {
  profile: {
    name: "Miebaka Iwarri",
    position: "Software Engineer",
  },
  experience: [
    ["02", "Awards", "mdi mdi-trophy achievement-icon", "port-testimony"],
    [
      "50+",
      "Clients",
      "mdi mdi-account-multiple-outline achievement-icon",
      "port-testimony port-testimony-solid",
    ],
    [
      "03",
      "Years Experience",
      "mdi mdi-timelapse achievement-icon",
      "port-testimony",
    ],
    [
      "80+",
      "Projects",
      "mdi mdi-projector-screen achievement-icon",
      "port-testimony",
    ],
  ],
  timeline: [
    {
      bodyType: "myexperience-body",
      title: "Step 1",
      body: "Lorem ipsum dolor sit amet \
        consectetur adipisicing elit. Quasi \
        cumque deleniti perferendis lo lo",
      year: 2019,
    },
    {
      bodyType: "myexperience-body-two",
      title: "Step 2",
      body: "Lorem ipsum dolor sit amet \
        consectetur adipisicing elit. Quasi \
        cumque deleniti perferendis lo lo",
      year: 2019,
    },
    {
      bodyType: "myexperience-body",
      title: "Step 3",
      body: "Lorem ipsum dolor sit amet \
        consectetur adipisicing elit. Quasi \
        cumque deleniti perferendis lo lo",
      year: 2019,
    },
  ],
  expirenceSummary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,\
  fuga ratione nulla facere ea, repellendus mollitia beatae,\
  repudiandae corrupti explicabo quod officiis laborum? Qui culpa,\
  maxime rem id voluptate atque.",
  contact: [
    [
      "mdi mdi-phone-in-talk port-contact-icons",
      "Call Me",
      `<a className="port-contact-info" href="tel:${contact.phone}">${contact.phone}</a>`,
    ],
    [
      "mdi mdi-message-plus port-contact-icons",
      "Email",
      `<a className="port-contact-info" href="mailto:${contact.email}">${contact.email}</a>`,
    ],
    [
      "mdi mdi-map-marker-outline port-contact-icons",
      "Address",
      `<span className="port-contact-info">${contact.address}</span>`,
    ],
  ],
  socials: {
    facebook: "https://facebook.com/miebaka.iwarri",
    twitter: "https://twitter.com/miebakaIwarri",
    instagram: "https://instagram.com/miebaka.iwarri",
    linkedin: "https://linkedin.com/in/miebakaiwarri",
  },
  cv: "Miebaka-Iwarri_CV.pdf",
};

export default info;
