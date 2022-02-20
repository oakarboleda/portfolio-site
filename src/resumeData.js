import { AiFillHtml5} from "react-icons/ai";
import { FaCss3Alt, FaReact, FaShopify, FaDrupal, FaLaravel, FaSass } from "react-icons/fa";
import {SiTypescript, SiJavascript, SiMagento } from "react-icons/si";

// Navigation Bar SECTION
const navBar = {
  show: true,
};
const illustration = {
  animated: true // set to false to use static SVG
};
const about = {
  show: true,
  heading: "About Me",
 subtitle: "I'm a computer-science engineer who loves to code.",
  resume: "https://drive.google.com/file/d/1CFB-WT-791OGMIHncnBDOlpV1aoFbEs2/view?usp=sharing",
};


const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEV FOCUSED ON CLEAN, AND FUNCTIONAL CODE",
  skills: [
    "Experience in developing UI/UX design and coding for web, mobile, and desktop -Successfully delivered projects on time with attention to detail",
    "I write code and create meaningful software.",
    "I'm passionate about understanding how to solve complex problems with elegant code.",
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
  title: "Contact Me ️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "oakarboleda@gmail.com"
};


export { illustration, about, skillsSection, contactInfo, techStack, navBar };
