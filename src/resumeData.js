import { AiFillHtml5} from "react-icons/ai";
import { FaCss3Alt, FaReact, FaShopify, FaDrupal, FaLaravel, FaSass } from "react-icons/fa";
import {SiTypescript, SiJavascript, SiMagento } from "react-icons/si";


const illustration = {
  animated: true // set to false to use static SVG
};
const about = {
  show: true,
  heading: "About Me",
 subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  resume: "https://drive.google.com/file/d/1CFB-WT-791OGMIHncnBDOlpV1aoFbEs2/view?usp=sharing",
};


const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "Integration of third party services such as Firebase/ AWS / Digital Ocean",
  ],


  softwareSkills: [
    {
      skillName: "HTML5",
      icon: <AiFillHtml5/>
    },
    {
      skillName: "CSS3",
      icon: <FaCss3Alt/>
    },
    {
      skillName: "TypeScript",
      icon: <SiTypescript/>
    },
    {
      skillName: "JavaScript",
      icon: <SiJavascript/>
    },
    {
      skillName: "React",
      icon: <FaReact />
    },
    {
      skillName: "SASS",
      icon: <FaSass/>
    },
    {
      skillName: "Shopify",
      icon: <FaShopify/>
    },
    {
      skillName: "Magento",
      icon: <SiMagento/>
    },
    {
      skillName: "Laravel",
      icon: <FaLaravel />
    },

    {
      skillName: "Drupal",
      icon: <FaDrupal/>
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



const contactInfo = {
  title: "Contact Me️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "oakarboleda@gmail.com"
};


export { illustration, about, skillsSection, contactInfo, techStack };
