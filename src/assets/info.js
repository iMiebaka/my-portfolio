const contact = {
  phone: "+234 803 422 4184",
  email: "miebakaiwarri.dev@gmail.com",
  address: "Port Harcourt, Nigeria",
  workingAt: "Uobis",
};

const info = {
  profile: {
    name: "Miebaka Iwarri",
    position: "Software Engineer",
    details: `I currently work at ${contact.workingAt}.  I major in Web and Mobile apps. 
    I like to try out new technologies and challenge myself to be the best Software Developer of my time.
     My Technologies are Django, Flask, React, React Native, Vue and Docker.`,
  },
  experience: [
    ["01", "Award", "mdi mdi-trophy achievement-icon", "port-testimony"],
    [
      "04",
      "Clients",
      "mdi mdi-account-multiple-outline achievement-icon",
      "port-testimony port-testimony-solid",
    ],
    [
      `0${new Date().getFullYear() - 2019}`,
      "Years Experience",
      "mdi mdi-timelapse achievement-icon",
      "port-testimony",
    ],
    [
      "10+",
      "Projects",
      "mdi mdi-projector-screen achievement-icon",
      "port-testimony",
    ],
  ],
  timeline: [
    {
      bodyType: "myexperience-body",
      title: "Fireworks",
      body: "I self-taught my way \
      into understanding how computer hardware and embedded systems  \
      (Arduino) works \
      I got electrocuted a lot during the process. However, I was able to get \
      some automation projects done.",
      year: 2019,
    },
    {
      bodyType: "myexperience-body",
      title: "Web Development",
      body: "I picked up HTML, CSS, and Javascript. \
        I knew python really well so I took to Django and Flask \
        as my backend support. I was able to build the Whatsapp clone with this skill.",
      year: 2020,
    },
    {
      bodyType: "myexperience-body",
      title: "Frontend to Mobile",
      body: "React and Vue are my frontend tools. I have built some projects with \
      these technologies. Now I code Mobile applications with React Native.\
      And this landed me my first role as a Software Engineer.",
      year: 2022,
    },
  ],
  expirenceSummary:
    "I have tried so many fields of programming and software development,\
    to know how System Design and Software Development works\
    So far it's been from Embedded Systems, Web Development, Machine Learning\
    to Mobile Development. I made a simplified timeline below.",
  contact: [
    // [
    //   "mdi mdi-phone-in-talk port-contact-icons",
    //   "Call Me",
    //   `<a className="port-contact-info" href="tel:${contact.phone}">${contact.phone}</a>`,
    // ],
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
    youtube: "https://www.youtube.com/channel/UCsGKSxC-QiXPldnLiDiSo5g",
    twitter: "https://twitter.com/miebakaIwarri",
    linkedin: "https://linkedin.com/in/miebakaiwarri",
    github: "https://github.com/iMiebaka",
  },
  cv: "Miebaka-Iwarri_CV.pdf",
};

export default info;
