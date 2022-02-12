const illustration = {
  animated: true // set to false to use static SVG
};
const about = {
  show: true,
  heading: "About Me",
  imageSize: 375,
  message:
    "I’m a full-stack engineer, a designer, and game enthusiast",
  resume: "https://drive.google.com/file/d/1CFB-WT-791OGMIHncnBDOlpV1aoFbEs2/view?usp=sharing",
};

const skills = {
  hard: [
    {
      type: "frontend",
      title: "Javascript",
      text: "Javascript",
      url: 'https://tc39.es/ecma262/',
      img: "https://cdn.svgporn.com/logos/javascript.svg"
    },
    {
      type: "frontend",
      title: "React",
      text: "React",
      url: 'https://reactjs.org/',
      img: "https://cdn.svgporn.com/logos/react.svg"
    },
    {
      type: "frontend",
      title: "Gatsby",
      text: "gatsby",
      url: 'https://gatsbyjs.com/',
      img: "https://cdn.svgporn.com/logos/gatsby.svg"
    },
    {
      type: "frontend",
      title: "Sass",
      text: "Sass",
      url: 'https://sass-lang.com/',
      img: "https://cdn.svgporn.com/logos/sass.svg"
    },
    {
      type: "frontend",
      title: "Bootstrap",
      text: "Bootstrap",
      url: 'https://getbootstrap.com/',
      img: "https://cdn.svgporn.com/logos/bootstrap.svg"
    },
    {
      type: "frontend",
      title: "Material-ui",
      text: "Material-ui",
      url: 'https://material-ui.com/',
      img: "https://cdn.svgporn.com/logos/material-ui.svg"
    },
    {
      type: "frontend",
      title: "Ionic",
      text: "Ionic",
      url: 'https://ionicframework.com/',
      img: "https://cdn.svgporn.com/logos/ionic.svg"
    },
    {
      type: "frontend",
      title: "Flat UI",
      text: "flat-ui",
      url: 'https://designmodo.github.io/Flat-UI/',
      img: "https://cdn.svgporn.com/logos/flat-ui.svg"
    },
    {
      type: "frontend",
      title: "Uikit",
      text: "Uikit",
      url: 'https://getuikit.com/',
      img: "https://cdn.svgporn.com/logos/uikit.svg"
    },
    {
      type: "frontend",
      title: "Semantic UI",
      text: "semantic-ui",
      url: 'https://semantic-ui.com/',
      img: "https://cdn.svgporn.com/logos/semantic-ui.svg"
    },
    {
      type: "frontend",
      title: "Eslint",
      text: "Eslint",
      url: 'https://eslint.org/',
      img: "https://cdn.svgporn.com/logos/eslint.svg"
    },
    {
      type: "frontend",
      title: "Prettier",
      text: "prettier",
      url: 'https://prettier.io/',
      img: "https://cdn.svgporn.com/logos/prettier.svg"
    },
    {
      type: "frontend",
      title: "Stylelint",
      text: "Stylelint",
      url: 'https://stylelint.io/',
      img: "https://cdn.svgporn.com/logos/stylelint.svg"
    },
    {
      type: "frontend",
      title: "React-spring",
      text: "react-spring",
      url: 'https://react-spring.io/',
      img: "https://cdn.svgporn.com/logos/react-spring.svg"
    },
    {
      type: "frontend",
      title: "Webpack",
      text: "Webpack",
      url: 'https://webpack.github.io/',
      img: "https://cdn.svgporn.com/logos/webpack.svg"
    },
    {
      type: "version-control",
      title: "Git",
      text: "Git",
      url: 'https://git-scm.com/',
      img: "https://cdn.svgporn.com/logos/git-icon.svg"
    },
    {
      type: "frontend",
      title: "Npm",
      text: "npm",
      url: 'https://npmjs.com/',
      img: "https://cdn.svgporn.com/logos/npm-icon.svg"
    },
    {
      type: "frontend",
      title: "Yarn",
      text: "yarn",
      url: 'https://yarnpkg.com/',
      img: "https://cdn.svgporn.com/logos/yarn.svg"
    },
    {
      type: "frontend",
      title: "Gulp",
      text: "Gulp",
      url: 'https://gulpjs.com/',
      img: "https://cdn.svgporn.com/logos/gulp.svg"
    },
    {
      type: "frontend",
      title: "Grunt",
      text: "Grunt",
      url: 'https://gruntjs.com/',
      img: "https://cdn.svgporn.com/logos/grunt.svg"
    },
    {
      type: "backend",
      title: "Composer",
      text: "Composer",
      url: 'https://getcomposer.org/',
      img: "https://cdn.svgporn.com/logos/composer.svg"
    },
    {
      type: "backend",
      title: "Nodejs",
      text: "Nodejs",
      url: 'https://nodejs.org/en/',
      img: "https://cdn.svgporn.com/logos/nodejs-icon.svg"
    },
    {
      type: "backend",
      title: "Express",
      text: "Express",
      url: 'https://expressjs.com/',
      img: "https://cdn.svgporn.com/logos/express.svg"
    },
    {
      type: "backend",
      title: "Firebase",
      text: "Firebase",
      url: 'https://firebase.google.com/',
      img: "https://cdn.svgporn.com/logos/firebase.svg"
    },
    {
      type: "backend",
      title: "GraphQL",
      text: "graphql",
      url: 'https://graphql.org/',
      img: "https://cdn.svgporn.com/logos/graphql.svg"
    },
    {
      type: "backend",
      title: "Apollo",
      text: "apollo",
      url: 'https://apollographql.com/',
      img: "https://cdn.svgporn.com/logos/apollostack.svg"
    },
    {
      type: "backend",
      title: "Postman",
      text: "postman",
      url: 'https://postman.com/',
      img: "https://cdn.svgporn.com/logos/postman.svg"
    },
    {
      type: "backend",
      title: "Heroku",
      text: "Heroku",
      url: 'https://heroku.com/',
      img: "https://cdn.svgporn.com/logos/heroku-icon.svg"
    },
    {
      type: "backend",
      title: "Docker",
      text: "docker",
      url: 'https://docker.com/',
      img: "https://cdn.svgporn.com/logos/docker-icon.svg"
    },

  ],
  soft: [
    {
      type: "version-control",
      title: "GitHub",
      text: "GitHub",
      url: 'https://github.com/',
      img: "https://cdn.svgporn.com/logos/github-octocat.svg"
    },
    {
      type: "version-control",
      title: "Bitbucket",
      text: "Bitbucket",
      url: 'https://bitbucket.org/product/',
      img: "https://cdn.svgporn.com/logos/bitbucket.svg"
    },
    {
      type: "version-control",
      title: "Gitlab",
      text: "Gitlab",
      url: 'https://about.gitlab.com/',
      img: "https://cdn.svgporn.com/logos/gitlab.svg"
    },
    {
      type: "tools",
      title: "Figma",
      text: "Figma",
      url: 'https://figma.com/',
      img: "https://cdn.svgporn.com/logos/figma.svg"
    },
    {
      type: "tools",
      title: "Invision",
      text: "Invision",
      url: 'https://invisionapp.com/',
      img: "https://cdn.svgporn.com/logos/invision-icon.svg"
    },
    {
      type: "tools",
      title: "WebStorm",
      text: "Webstorm",
      url: 'https://jetbrains.com/webstorm/',
      img: "https://cdn.svgporn.com/logos/webstorm.svg"
    },
    {
      type: "tools",
      title: "PHPStorm",
      text: "phpstorm",
      url: 'https://jetbrains.com/phpstorm/',
      img: "https://cdn.svgporn.com/logos/phpstorm.svg"
    },
    {
      type: "tools",
      title: "Visual studio code",
      text: "Visual-studio-code",
      url: 'https://code.visualstudio.com/',
      img: "https://cdn.svgporn.com/logos/visual-studio-code.svg"
    },
    {
      type: "tools",
      title: "Atom",
      text: "atom",
      url: 'https://atom.io/',
      img: "https://cdn.svgporn.com/logos/atom-icon.svg"
    },
    {
      type: "tools",
      title: "SublimeText",
      text: "sublimetext",
      url: 'https://sublimetext.com/',
      img: "https://cdn.svgporn.com/logos/sublimetext-icon.svg"
    }
  ],
  managment: [
    {
      type: "managment",
      title: "Jira",
      text: "Jira",
      url: 'https://atlassian.com/ru/software/jira',
      img: "https://cdn.svgporn.com/logos/jira.svg"
    },
    {
      type: "managment",
      title: "Confluence",
      text: "Confluence",
      url: 'https://atlassian.com/ru/software/confluence',
      img: "https://cdn.svgporn.com/logos/confluence.svg"
    },
    {
      type: "managment",
      title: "Trello",
      text: "Trello",
      url: 'https://trello.com/',
      img: "https://cdn.svgporn.com/logos/trello.svg"
    },
    {
      type: "managment",
      title: "Slack",
      text: "Slack",
      url: 'https://slack.com/',
      img: "https://cdn.svgporn.com/logos/slack-icon.svg"
    }
  ],
  socialLinks: [
    {
      link: 'https://github.com/TeriFash',
      title: 'GitHub',
      text: 'github',
      icon: 'github',
    },
    {
      link: 'https://linkedin.com/in/viktor-gura/',
      title: 'LinkedIn',
      text: 'linkedin',
      icon: 'linkedin',
    },
    {
      link: 'https://telegram.im/@TeriFash',
      title: 'Telegram',
      text: 'telegram',
      icon: 'telegram',
    },
    // {
    //   link: 'https://www.facebook.com/profile.php?id=100015717390714',
    //   title: 'FaceBook',
    //   text: 'facebook',
    //   icon: 'fab fa-facebook'
    // },
    // {
    //   link: '',
    //   title: 'Resume',
    //   text: 'resume',
    //   icon: 'file-earmark-text-fill',
    // },
  ],
};

const dataStrings = [
  "Powered by caffeine"
];

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6260680915",
  email_address: "oakarboleda@gmail.com"
};


export { illustration, about, skills, dataStrings, contactInfo };
