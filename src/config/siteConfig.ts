
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
            show: false,
            url: "https://github.com/username",
        },
        linkedin: {
            show: false,
            url: "https://linkedin.com/in/username",
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
        "A computer science student and full-stack engineer building product-grade systems with real users in mind.",
        profileImage: "/profile.jpg",
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
        bio: `Builder-first engineer who ships full systems end to end: mobile apps, backends, real-time infrastructure, and payments. I focus on clarity, scalability, and practical engineering over buzzwords.`,

        skills: {
            frontend: {
                name: "Frontend",
                include: true,
                skill:[
                    "React",
                    "React Native",
                    "TypeScript / JavaScript",
                    "Tailwind CSS",
                    "Expo",
                    "UI Systems",
                    "Framer Motion",
                    "Google Maps API",
                ]
            },
            backend: {
                name: "Backend",
                include: true,
                skill:[
                    "Node.js / Express",
                    "MongoDB",
                    "Supabase",
                    "Stripe",
                    "MQTT (Mosquitto)",
                    "REST APIs",
                    "Real-time systems",
                ],
            },
            cloud: {
                name: "Cloud & Infrastructure",
                include: true,
                skill: ["Docker", "Linux", "Vercel", "Azure", "CI/CD"]
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
                skill: ["Git/GitHub", "VS Code", "Postman", "Docker", "Agile"],
            },
        },

        experience: [
            {
                role: "Research Assistant",
                company: "DAMS Lab, UMBC",
                duration: "Jul 2025 - Present",
                points: [
                    "Built backend services for a React Native IoT monitoring app with live environmental data.",
                    "Designed APIs and socket channels for real-time updates across devices.",
                    "Dockerized the data pipeline and MQTT server for reliable deployment.",
                ],
            },
             {
                role: "Manager on Duty",
                company: "Rite Aid",
                duration: "Mar 2023 - Aug 2025",
                points: [
                    "Supported POS and back-office systems, reducing downtime through proactive diagnostics.",
                    "Trained staff on technical workflows and led day-to-day operations.",
                    "Owned issue triage and escalation to keep critical systems running.",
                ],
            },
            // Add more experiences as needed
        ], 

        education: [
            {
                degree: "B.S. Computer Science",
                institution: "University of Maryland Baltimore County (UMBC)",
                duration: "Expected May 2027",
                details: [
                    "Focus areas: systems, backend engineering, and applied software design",
                    "Relevant coursework: data structures, algorithms, databases, web development",
                ]
                    
            },
            {
                degree: "CodePath - Intermediate Technical Interview Prep",
                institution: "CodePath",
                duration: "Aug 2025",
                details: [
                    "Advanced problem solving, data structures, and interview readiness.",
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
        email: "saim.siddique@umbc.edu",
        phone: "",
        location: "Baltimore, MD",
        includeForm: true, // Set to true to include contact form, false to hide
    },

    // ========================= Resend CONFIG =========================
    //Change if using the contact form
    resend: {
        fromEmail: "Portfolio Contact <onboarding@resend.dev>", 
        toEmail: "your.email@domain.com", // your personal email
    },

    // ========================= FOOTER CONFIG =========================
    footer: {
        copyrightName: "Saim Siddique",
        copyrightYear: "2025",
        details: "Full-stack engineer building product-grade systems and real-time infrastructure.",
    },
};

export default siteConfig;
