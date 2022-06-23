import lajoCover from "./images/Lajo-The-Unbanked-Platform.png";
import workspaceCover from "./images/Workspace.png";
import whatsappCover from "./images/private_chat_screenshot.png";
import youtubegoCover from "./images/s1.png";
import cafeteriaManagementCover from "./images/cafeteriaManagement.png"


const projects = [
  {
    cover_image: lajoCover,
    projectName: "Lajo",
    link: "https://lajoapp.com/",
    live: true,
    details: {
        title: "Lajo",
        body: `This web app is known as the bank for the unbanking platform, it's a
        fintech project that help SME save up and get interest at a set
        duration.`,
      tools: "Flask and Vue",
    },
  },
  {
    cover_image: workspaceCover,
    projectName: "Workspace",
    link: "https://workspaceapp.works/",
    live: true,
    details: {
        body: `This web application seeks to solve of the problem employers face when managing employees.
        Some of the featues include, employee management, payroll system and attendance management.`,
        tools: "Flask and React",
    },
  },
  {
    cover_image: whatsappCover,
    projectName: "Whatapp Clone",
    link: "https://github.com/iMiebaka/Whatsapp_full_clone",
    details: {
      body: `This web project is a collaburation from a Youtuber @clumes. It the clone of the Whatsapp application owned by facebook.
            Some of the featues include, real time messageing and video calling`,
      tools: "Django",
    },
  },
  {
    cover_image: youtubegoCover,
    projectName: "YouTube GO Clone",
    link: "https://github.com/iMiebaka/youtubeGoClone",
    details: {
      body: `This mobile development project, I made a clone of the YouTube's Go app. 
            It's come with media player integration.`,
      tools: "React Native",
    },
  },
  {
    cover_image: cafeteriaManagementCover,
    projectName: "Cafeteria Management System",
    link: "https://github.com/iMiebaka/Cafeteria-Management-System",
    details: {
      body: `This was a research work that seeks to solve the ticketing problem in Adeleke University Cafeteria.`,
      tools: "C# and C++",
    },
  },
];

export default projects;
