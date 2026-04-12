// src/data/portfolioData.ts

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: "Web Development" | "Mobile Development";
  image: string;
  features?: string[];
  technologies?: string[];
  liveUrl?: string;
   isOngoing?: boolean;  
}

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "Bhumi",
    category: "Mobile Development",
            isOngoing: false,

    image: "/Bhumi.png",
    description:
      "Find, buy, sell, and rent properties with ease. Our platform offers a seamless experience for all your real estate needs.",
    features: [
      "Advanced property search filters",
      "Virtual property tours",
      "Real-time price tracking",
      "Secure payment gateway",
      "Direct messaging with agents",
    ],
    technologies: ["Flutter", "Baato Maps API", "Node JS"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.royalpalmrealestate.bhumi&hl=en",    
  },
  {
    id: 2,
    title: "CAS (Accounting Pro)",
            isOngoing: false,

    description:
      "Comprehensive accounting software for small businesses. Streamline your finances, manage invoices, and track expenses with ease.",
    category: "Web Development",
    image: "/Accounting.png",
    features: [
      "Invoice generation and tracking",
      "Expense categorization",
      "Financial reports & analytics",
      "Multi-user access control",
      "Bank reconciliation",
      "Tax calculation assistance",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
   
  },
  {
    id: 3,
    title: "ApplyCan",
            isOngoing: false,

    description:
      "ApplyCan simplifies study, PR, and pathways in Canada smart and digital",
    category: "Mobile Development",
    image: "/Applycan.png",
    features: [
      "Application timeline tracking",
      "Document organization system",
      "PR eligibility checker",
      "University & college database",
      "Application status notifications",
      "Expert consultation booking",
    ],
    technologies: ["Flutter", "Firebase", "Laravel", "Laravel Backend"],
    liveUrl: "https://play.google.com/store/search?q=applycan&c=apps&hl=en",  
  },
  {
    id: 4,
    title: "Royal Sports Park",
    isOngoing: true,
    description:
      "At Royal Sports Park, we make sports and event bookings effortless. Our user-friendly platform allows you to reserve courts, fields, and facilities for your favorite sports with just a few clicks.",
    category: "Web Development",
    image: "/Royalsports.png",
    features: [
      "Real-time facility availability",
      "Online booking system",
      "Event scheduling & management",
      "Payment processing",
      "User reviews & ratings",
      "Admin dashboard for facility management",
    ],
    technologies: ["React", "Express.js", "Stripe API"],
    liveUrl: "https://example.com/royalsportspark",
   },
  {
    id: 5,
    title: "Gymandu",
    isOngoing: true,
    description:
      "Gymandu is a fitness app that helps you track your workouts, set goals, and stay motivated on your fitness journey.",
    category: "Mobile Development",
     image: "/GymMandu.png",
    features: [
      "Workout tracking & logging",
      "Personalized fitness plans",
      "Progress analytics",
      "Social challenge features",
      "Nutrition tracking",
      "Wearable device integration",
    ],
    technologies: ["React Native", "Firebase","Health Kit API"],
    liveUrl: "https://example.com/gymandu",     
  },
  {
    id: 6,
    title: "Royal Countryside",
        isOngoing: false,

    description:
      "Surrounded by picturesque views, our restaurant offers a cozy atmosphere and delectable dishes made from fresh, locally-sourced ingredients.",
    category: "Web Development",
    image: "/Countryside.png",
    features: [
      "Online reservation system",
      "Digital menu with images",
      "Table management system",
      "Delivery & takeout options",
      "Chef's special showcases",
      "Customer loyalty program",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "https://royalcountryside.com.np/",
    
  },
  {
    id: 7,
    title: "Royal Palm Real Estate",
        isOngoing: false,

    description:
      "Discover your dream home with Royal Palm Real Estate. We offer a wide range of properties, from cozy apartments to luxurious villas, tailored to your preferences.",
    category: "Web Development",
    image: "/Rpre.png",
    features: [
      "Advanced property search",
      "Virtual property tours",
      "Mortgage calculator",
      "Property comparison tools",
      "Client testimonials",
      "Agent network management",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Mapbox API"],
    liveUrl: "https://royalpalmrealestate.com.np/",
  },
];