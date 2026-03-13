// src/data/portfolioData.ts
 
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: "Web Development" | "Mobile Development" | "Cyber Security";
  image: string;
}

export const portfolio: PortfolioItem[] = [
   {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/Ecomerce.png", 
    description: "Modern shopping experience with seamless checkout",
  },
  {
    id: 2,
    title: " Mobile Banking  App",
    description: "Secure and intuitive banking experience.",
    category: "Mobile Development",
    image: "/MobileApp.png",
  },
  {
    id: 3,
    title: "Security Monitoring System",
    description: "Enterprise cybersecurity solution.",
    category: "Cyber Security",
    image: "/SecurityMonitoring.png",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "Cross-platform fitness app with analytics dashboard.",
    category: "Mobile Development",
    image: "/FitnessApp.png",
  },

  {
    id: 5,
    title: "Cyber Security Dashboard",
    description: "Real-time security monitoring and alert system.",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    id: 6,
    title: "Network Protection System",
    description: "Enterprise-grade firewall and intrusion detection system.",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
];

