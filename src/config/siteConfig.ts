
//If you want to include blogs on your site, set showBlogs to true, otherwise set to false
// If you set to true, make sure to create your blog mdx files in contents/blogs/
const showBlogs = false;

export const siteConfig = {
    // ========================= Global Settings =========================
    siteName: "Saim Siddique",
    name: "Saim Siddique",
    metadataTitle: "Full-Stack Software Engineer",
    siteDescription:
        "Builder-first full-stack engineer focused on product-grade systems, mobile apps, and backend infrastructure.",
    tabIcon: "/icon.svg", //An image found in the public folder to use as the tab icon. 
    socials: {
        github: {
            show: true,
            url: "https://github.com/SaimSiddique1",
        },
        linkedin: {
            show: true,
            url: "https://www.linkedin.com/in/saimsiddique1/",
        },
        twitter: {
            show: false,
            url: "https://twitter.com/username",
        }
    },
    showDevLogo: false, // Set to true to show a developer logo (</>) with site name, false for just site name
    siteColorTheme: "purple", // Options: blue, green, purple, pink, orange, red, yellow, teal


    // ========================= NAVIGATION =========================
    navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        ...(showBlogs ? [
            { label: "Blogs", href: "/blogs" }
        ] : []),
        { label: "Contact", href: "/contact" },
    ],

    // ========================= HERO SECTION CONFIG =========================
    hero: {
        headline: "Hi, I'm",
        subtitle:
        "CS student at UMBC | Full-Stack Engineer | Mobile, backend, and real-time systems",
        profileImage: "/projects/saim.png",
        ctaPrimary: {
            include: true,
            label: "Explore Projects",
            href: "/projects",
        },
        ctaSecondary: {
            include: true,
            label: "Contact Me",
            href: "/contact",
        },
    },

    // ========================= ABOUT PAGE CONFIG =========================
    about: {
        bio: `I'm a junior at the University of Maryland, Baltimore County pursuing a B.S. in Computer Science. Most of my work centers on building full systems end to end, with experience across mobile apps, backend services, and real-time infrastructure. Outside of coursework, I work as a Software Engineer Intern (Backend Lead) in the DAMS Lab and build production-style projects that reflect my interest in practical, systems-level engineering.`,

        skills: {
            frontend: {
                name: "Frontend",
                include: true,
                skill:[
                    "React",
                    "React Native",
                    "JavaScript",
                    "TypeScript",
                ]
            },
            backend: {
                name: "Backend",
                include: true,
                skill:[
                    "Node.js / Express",
                    "MongoDB",
                    "REST APIs",
                    "MQTT",
                    "WebSockets",
                ],
            },
            cloud: {
                name: "Infrastructure",
                include: true,
                skill: ["Docker", "Azure", "Linux", "VirtualBox", "Windows", "Basic TCP/IP"]
            },
            ai_security: {
                name: "Languages",
                include: true,
                skill:[
                    "Python",
                    "C++",
                    "Java",
                    "TypeScript",
                    "JavaScript",
                ],
            },
            tools: {
                name: "Tools & Collaboration",
                include: true,
                skill: ["Git/GitHub", "Jira", "Agile/Scrum", "Postman"],
            },
        },

        experience: [
            {
                role: "Software Engineer Intern - Backend Lead",
                company: "DAMS Lab, University of Maryland, Baltimore County",
                duration: "Jul 2025 - Present",
                points: [
                    "Leading backend architecture for the Smart Library IoT platform with MQTT telemetry ingestion (5s publish interval), MongoDB time-series schema design, and floor-scoped WebSocket streaming.",
                    "Implementing a write-first pipeline that validates sensor payloads before persistence using indexed roomId/timestamp queries and idempotent sensorId-timestamp constraints.",
                    "Building subscription-based WebSocket routing with dynamic floor registration to reduce unnecessary broadcast traffic across concurrent React Native clients.",
                ],
            },
             {
                role: "Manager on Duty - Technical Operations",
                company: "Rite Aid",
                duration: "Mar 2023 - Aug 2025",
                points: [
                    "Provided frontline technical support for POS registers, inventory platforms, and back-office systems to maintain uninterrupted operations.",
                    "Reduced technology downtime by 20% through proactive troubleshooting, root-cause analysis, and coordination with corporate IT escalation channels.",
                    "Configured and maintained scanners, receipt printers, and workstations while training staff on system workflows and access best practices.",
                ],
            },
            // Add more experiences as needed
        ], 

        education: [
            {
                degree: "B.S. Computer Science",
                institution: "University of Maryland, Baltimore County (UMBC)",
                duration: "Expected May 2027",
                details: [
                    "GPA: 3.5/4.0",
                    "Baltimore, MD",
                ]
                    
            },
            {
                degree: "Intermediate Technical Interview Prep Program (Data Structures & Algorithms)",
                institution: "CodePath",
                duration: "Aug 2025",
                details: [
                    "Remote",
                ]
            },
            // Add more education entries as needed
        ]
    },

    // ========================= Blogs PAGE CONFIG =========================
    // if you want to include a blogs on your site, set showBlogs to true (found on top), otherwise set to false
    
    blogs: {
        include: showBlogs, //Don't change this line
        description: "Read my latest articles on web development, programming tips, and tech trends.",
    },

    // ========================= CONTACT PAGE CONFIG =========================
    contact: {
        header: "Contact",
        description:
        "Open to internships, engineering roles, and founder-minded collaborations.",
        email: "saimsiddique728@gmail.com",
        phone: "443-729-6033",
        location: "Baltimore, MD",
        includeForm: true, // Set to true to include contact form, false to hide
    },

    // ========================= Resend CONFIG =========================
    //Change if using the contact form
    resend: {
        fromEmail: "Portfolio Contact <onboarding@resend.dev>", 
        toEmail: "saimsiddique728@gmail.com", // your personal email
    },

    // ========================= FOOTER CONFIG =========================
    footer: {
        copyrightName: "Saim Siddique",
        copyrightYear: "2025",
        details: "UMBC CS | Full-stack systems builder",
    },
};

export default siteConfig;
