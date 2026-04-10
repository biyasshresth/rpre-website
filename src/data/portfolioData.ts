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
  githubUrl?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "Bhumi",
    category: "Mobile Development",
    image: "/Ecomerce.png",
    description:
      "Find, buy, sell, and rent properties with ease. Our platform offers a seamless experience for all your real estate needs.",
    features: [
      "Advanced property search filters",
      "Virtual property tours",
      "Real-time price tracking",
      "Secure payment gateway",
      "Direct messaging with agents",
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
    liveUrl: "https://example.com/bhumi",
    githubUrl: "https://github.com/example/bhumi",
  },
  {
    id: 2,
    title: "CAS (Accounting Pro)",
    description:
      "Comprehensive accounting software for small businesses. Streamline your finances, manage invoices, and track expenses with ease.",
    category: "Web Development",
    image: "/MobileApp.png",
    features: [
      "Invoice generation and tracking",
      "Expense categorization",
      "Financial reports & analytics",
      "Multi-user access control",
      "Bank reconciliation",
      "Tax calculation assistance",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com/cas",
    githubUrl: "https://github.com/example/cas",
  },
  {
    id: 3,
    title: "ApplyCan",
    description:
      "ApplyCan simplifies study, PR, and pathways in Canada smart and digital",
    category: "Mobile Development",
    image: "/SecurityMonitoring.png",
    features: [
      "Application timeline tracking",
      "Document organization system",
      "PR eligibility checker",
      "University & college database",
      "Application status notifications",
      "Expert consultation booking",
    ],
    technologies: ["Flutter", "Firebase", "REST API", "Python Backend"],
    liveUrl: "https://example.com/applycan",
    githubUrl: "https://github.com/example/applycan",
  },
  {
    id: 4,
    title: "Royal Sports Park",
    description:
      "At Royal Sports Park, we make sports and event bookings effortless. Our user-friendly platform allows you to reserve courts, fields, and facilities for your favorite sports with just a few clicks.",
    category: "Web Development",
    image: "/FitnessApp.png",
    features: [
      "Real-time facility availability",
      "Online booking system",
      "Event scheduling & management",
      "Payment processing",
      "User reviews & ratings",
      "Admin dashboard for facility management",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Stripe API"],
    liveUrl: "https://example.com/royalsportspark",
    githubUrl: "https://github.com/example/royalsportspark",
  },
  {
    id: 5,
    title: "Gymandu",
    description:
      "Gymandu is a fitness app that helps you track your workouts, set goals, and stay motivated on your fitness journey.",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    features: [
      "Workout tracking & logging",
      "Personalized fitness plans",
      "Progress analytics",
      "Social challenge features",
      "Nutrition tracking",
      "Wearable device integration",
    ],
    technologies: ["React Native", "Firebase", "Redux", "Health Kit API"],
    liveUrl: "https://example.com/gymandu",
    githubUrl: "https://github.com/example/gymandu",
  },
  {
    id: 6,
    title: "Royal Countryside",
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