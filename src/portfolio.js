/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rudairo Mushambi",
  title: "Hie, Rudairo Here!!!",
  subTitle: emoji(
    "Data-driven IT specialist with 3+ years of experience in proven track record in data story telling, cloud, servers, and networking. Proven ability to leverage data for business insights, design cloud solutions, manage servers, and resolve network issues."
  ),
  
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rudairo",
  linkedin: "https://www.linkedin.com/in/rudairo-mushambi-b8636423a/",
  gmail: "mushambir@africau.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A tech-savvy IT specialist with a knack for mastering new technologies across the software development lifecycle",
  skills: [
    emoji(
      "⚡ Proficient in programming languages: Python, Java, or C++, to develop software applications, scripts, and tools."
    ),
    emoji("⚡ Software development methodologies: Familiar with Agile, Waterfall, and DevOps."),
    emoji(
      "⚡ Cloud computing platforms: Proficiency in AWS, Azure, or GCP."
    ),
    emoji(
      "⚡ Excellent communication and presentation skills"
    ),
    emoji(
      "⚡ Data Analysis and Visualization: Tableau, Power BI"
    ),
    emoji(
      "⚡ Data management and analytics: Proficient in data management and analytics."
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "PowerBi",
      fontAwesomeClassname: "fab fa-dashcube"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Africa University",
      logo: require("./assets/images/Africa_University.jpg"),
      subHeader: "Bachelor of Science Honors Degree in Computer Information Systems",
      duration: "August 2019-June 2023",
      desc: "CGPA 3.50/4.00 ",
      descBullets: [
        "Cloud Computing",
        "Web Application Development",
        "Information systems Audit and Control",
        "Project Management",
        "Artificial Intelligence"
        
      ],
      
    },
    {
      schoolName: "Knowstics Academy Girls",
      logo: require("./assets/images/kno.jpg"),
      subHeader: "High School",
      descBullets: [
        "Merit award for academic excellence in Mathematics",
        "Completed O-level in hold of 10 subjects including Mathematics and English",
        "Completed A-level exams in Mathematics,Chemistry and Physics",
        
      ],
      
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming Languages: Python, Java & C++", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Operating Systems: Windows, Linux, and macOS", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Network Infrastructure: TCP/IP, networking protocols, and network devices", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Computing Platforms: AWS, Azure & GCP",
      progressPercentage: "90%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "SKICC TECH",
      companylogo: require("./assets/images/Skicc.png"),
      date: "August 2023 – Current",
      descBullets: [
        "Increased website conversion rate by 7% within 3 months, boosting client campaign ROI by 12%.",
        "Optimized Inventory Management by 25% with Data Visualization: Extracted and cleaned large retail inventory datasets using SQL.",
        "Streamlined Business Operations by 30% with Process Automation: Analyzed time-consuming manual processes across different departments."
      ],
    },
    {
      role: "Database Administrator (Internship)",
      company: "ADVANCED COMMUNICATION SYSTEMS",
      companylogo: require("./assets/images/bb16b10141d74504a33714c6823545dc.jpg"),
      date: "March 2022 – December 2022",
      descBullets: [
        "Accelerated query response times by 20%: Optimized database structures and queries, leading to significantly faster data retrieval and improved user productivity.",
        "Cut storage costs by 15%: Identified and eliminated redundant data, implemented data compression techniques, and optimized storage allocation",
        "Streamlined database migration by 25%: Carefully planned and executed a complex database migration to a new platform, minimizing downtime and ensuring a smooth transition",
      
      ],
    },
    {
      role: "Computer Technician",
      company: "Global Village",
      companylogo: require("./assets/images/zen.png"),
      date: "January 2022 – March 2022",
      
      descBullets: [
        " Enhanced employee productivity by 10%: Implemented user-friendly tools and applications, improved training programs, and provided ongoing support to employees",
        "Assisted users in understanding hardware operations and threats from the Internet",
        "Ensured that each computer system is free from viruses and that virus definition was constantly upgraded"
      ],
    },
    {
      role: "General Help",
      company: "Shiron Medical Pvt",
      companylogo: require("./assets/images/medical.png"),
      date: "February 2019 – August 2019 ",
      descBullets: [
        "Drafted Statements of Accounts",
        "Acted as a junior accounting clerk",
        "Negotiating and Closing Deals",
        "Building and Maintaining Customer Relationships",
      ],
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Click The Github Button for Live Project Files",
  projects: [
    {
      image: require("./assets/images/undraw_Chat_bot_re_e2gj.png"),
      projectName: "Enhancing Customer Experience with Personalized Chatbots",
      projectDesc: " Design and implement a personalized chatbot system to improve customer satisfaction, engagement, and brand loyalty.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/rudairo/LLM-Chatbot"
        },
        {
          name: "Live Demo",
          url: "https://llm-examples.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/undraw_Data_report_re_p4so.png"),
      projectName: "Identifying and Correcting Data Anomalies and Uncovering Hidden Patterns in Data",
      projectDesc: " To uncover hidden patterns and anomalies in customer reviews for 5 datasets and translate them into actionable insights that improve customer experience and drive business growth",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/rudairo/PowerBi-Dashboards"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/undraw_Artificial_intelligence_re_enpp.png"),
      projectName: "AI Summarizer Application: Customer Reviews Segmentation",
      projectDesc: "Utilize natural language processing (NLP) techniques to extract key themes, opinions, and sentiment from customer reviews. Reduced time spent analyzing customer reviews by 60% due to the automated summarization and segmentation capabilities of the AI application.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/rudairo/AI-Summarizer-Application"
        }
      ]
    },
    {
      image: require("./assets/images/undraw_House_searching_re_stk8.png"),
      projectName: "Real Estate App: Streamlining Home Buying and Selling",
      projectDesc: "Integrate advanced search filters and location-based recommendations to allow users to narrow down their property search based on specific criteria and preferences. Increased buyer-seller communication by 50% as the app provides a convenient platform for direct interaction.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/rudairo/Real-Estate-App"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/undraw_discount_d4bd.png"),
      projectName: "E-Commerce Price Tracker: Increasing Customer Retain",
      projectDesc: "Implement real-time price monitoring for a wide range of products across popular online retailers. Reduced cart abandonment by 15% as users are more confident in making purchasing decisions due to price transparency.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/rudairo/E-Commerce-Price-Tracker"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements & Certificationsthat that I have done !",

  achievementsCards: [
    
    
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      subtitle: "Deploy, configure, and maintain systems, including software installation, update, and core services.",
      image: require("./assets/images/linux.png"),
      footerLink: [
        
      ]
    },
    {
      title: "Database for Developers",
      subtitle: "Database management systems (DBMS) , development & handling sql queries for big data",
      image: require("./assets/images/Daco_4533338.png"),
      footerLink: [
        
      ]
    },
    
   
    
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Handling cloud migration initiatives, reviewing workload architectures & addressing high-risk issues",
      image: require("./assets/images/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png"),
      footerLink: [
        
      ]
    },
    
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      subtitle: "Connect and analyze your entire data estate by combining Power BI with Azure analytics services—including Azure Synapse Analytics and Azure Data Lake Storage",
      image: require("./assets/images/microsoft.png"),
      footerLink: [

      ],
      display: true
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Lets connect",
  number: "+263 786495808",
  email_address: "mushambir@africau.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  bigProjects,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};