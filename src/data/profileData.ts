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
    workExperience: [
      {
        title: string,
        company: string,
        period: string,
        description: string[],
      },
    ],
    skills: {
      frontend: string[],
      backend: string[],
      other: string[],
    },
    education: [
      {
        degree: string,
        institution: string,
        period: string,
      },
    ],
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
    bio: "I build exceptional and accessible digital experiences for the web. Specialized in creating modern, responsive applications with React, TypeScript, and Node.js.",
    profilePicture: "altneene.jpg",
    resumeUrl: "string",
    contactEmail: "Mo11hmmed88@gmail.com",
    githubUrl: "string",
    linkedinUrl: "string",
    twitterUrl: "string",
    workExperience: [
      {
        title: "Full stack developer.",
        company: "Altneen Store",
        period: "2025 - present",
        description: [
            "Built a modern e-commerce platform focusing on fashion and electronics with Amazon affiliate integration.",
            "Developed responsive frontend using React.js and managed backend operations with Express.js and MongoDB"
        ],
      },
    ],
    skills: {
      frontend: ["React.js", "TailwindCss", "HTML5", "CSS3", "Zustand"],
      backend: ["string"],
      other: ["string"],
    },
    education: [
      {
        degree: "BCs in Software Engineering.",
        institution: "Karrary Universtiy.",
        period: "2021 - 2026",
      },
    ],
    certifications: [""],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce website with cart functionality, user authentication, and payment processing.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
            demoUrl: "https://example.com",
            codeUrl:"https://github.com/yourusername/ecommerce"
        },
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce website with cart functionality, user authentication, and payment processing.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
            demoUrl: "https://example.com",
            codeUrl:"https://github.com/yourusername/ecommerce"
        },
    ],
    about: [
        "I'm a passionate Full Stack Developer with over 5 years of experience building web applications. My journey in tech started when I was a computer science student, fascinated by how code can transform ideas into reality.",
        "Throughout my career, I've worked with startups and established companies, helping them implement technology solutions that solve real business problems. I enjoy theentire development process, from discussing requirements with stakeholders to deploying the final product."
    ]
}