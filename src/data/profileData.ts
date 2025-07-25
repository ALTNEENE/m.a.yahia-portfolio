import altneen from "../../public/altneene.jpg"

export type ProfileType = {
    name: string,
    title: string,
    bio: string,
    profilePicture: string,
    resumeUrl: string,
    contactEmail: string,
    githubUrl: string,
    linkedinUrl: string,
    twitterUrl: string,
    workExperience: any,
    skills: {
      frontend: string[],
      backend: string[],
      other: string[],
    },
    education: any,
    certifications: string[],
    // projects: [
    //     {
    //         title: string,
    //         description: string,
    //         tags: string[],
    //         image: string,
    //         demoUrl: string,
    //         codeUrl:string
    //     },
    // ]
    projects: any,
    about: string[]
}

export const profileData: ProfileType = {
    name: "M. A. Yahia",
    title: "Software Engineer.",
    bio: "Junior Software Engineer with experience in full-stack web development using JavaScript, React.js, Node.js, and MongoDB. Proven success building real-world systems, including an aid distribution platform for Sudanese refugees with the World Food Programme. Founder of an e-commerce platform (Altneene Store) focused on affiliate marketing. Strong foundation in computer science (CS50x, HarvardX), cybersecurity, and data analytics. Passionate about creating impactful software and working on mission-driven projects.",
    profilePicture: "altneene.jpg",
    resumeUrl: "string",
    contactEmail: "Mo11hmmed88@gmail.com",
    githubUrl: "https://github.com/ALTNEENE",
    linkedinUrl: "string",
    twitterUrl: "string",
    workExperience: [
      {
        title: "Data Collection and Analysis",
        company: "Team Manager",
        period: "Jun 2024 – Jul 2024, Nov 2023 – Jan 2025",
        description: [
          "Collected refugee data from Family Attestation Cards",
          "Cleaned, refine and analyzed the data",
          "Uploaded the clean data to the aid distribution system"
      
        ],
      },
      {
        title: "System Programmer.",
        company: "Kiryandongo Sudanese Community (With AFFI & WFP)",
        period: "Jul 2024 – Feb 2025",
        description: [
          	"Built a system to support aid distribution for Sudanese refugees.",
          	"Integrated beneficiary data with UNHCR’s GDT system.",
          	"Technologies used: Node.js, MongoDB, REST APIs"
        ],
      },
      {
        title: "Founder & Full-Stack Developer.",
        company: "Altneen Store",
        period: "Jul 2024 – Feb 2025",
        description: [
          "Built a modern e-commerce platform focusing on fashion and electronics with Amazon affiliate integration.",
          "Developed responsive frontend using React.js and managed backend operations with Node.js and MongoDB.",
          "Implemented features such as product filtering, affiliate product cards, and blog-based SEO strategy. "         
        ],
      },
    ],
    skills: {
      frontend: ["React.js", "TailwindCss", "HTML5", "CSS3", "Zustand"],
      backend: ["Node.js", "Express.js", "MongoDB", "Fastify", "JWT Auth", "OAuth", "REST Apis"],
      other: ["Github", "Agile methods", "Creativity and Design Thinking", "Data analytics", "CI/CD"],
    },
    education: [
      {
        degree: "BCs in Software Engineering.",
        institution: "Karrary Universtiy.",
        period: "2021 - 2026",
      },
      {
        degree: "Vocational Certificate in Computer Science.",
        institution: "Harvardx Universtiy.",
        period: "2023 - 2024",
      },
    ],
    certifications: [
      	"Google Cybersecurity Professional Certificate",
      	"Project Management Planning",
      	"Mini Diploma in Data Analytics (in progress)",
      	"Software Engineering: Modeling Software Systems using UML (The Hong Kong University of Science and Technology)",
        "Creativity and Design Thinking (Re:Coded)",
        "Projece Management Planning - Edraak"

    ],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce website with cart functionality, user authentication, and payment processing.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
            demoUrl: "https://altneene.store",
            codeUrl:"https://github.com/ALTNEENE/"
        },
        {
            title: "Aid Distribution System",
            description: "",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
            demoUrl: "https://example.com",
            codeUrl:"https://github.com/ALTNEENE/"
        },
    ],
    about: [
        "I'm a passionate Full Stack Developer with over 5 years of experience building web applications. My journey in tech started when I was a computer science student, fascinated by how code can transform ideas into reality.",
        "Throughout my career, I've worked with startups and established companies, helping them implement technology solutions that solve real business problems. I enjoy theentire development process, from discussing requirements with stakeholders to deploying the final product."
    ]
}