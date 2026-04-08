// src/data/portfolioData.ts
 
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: "Web Development" | "Mobile Development" ;
  image: string;
}

export const portfolio: PortfolioItem[] = [
   {
    id: 1,
    title: "Bhumi ",
    category: "Mobile Development",
    image: "/Ecomerce.png", 
    description: "Find, buy, sell, and rent properties with ease. Our platform offers a seamless experience for all your real estate needs.",
  },
  {
    id: 2,
    title: " CAS(Accounting pro) ",
    description: "Comprehensive accounting software for small businesses. Streamline your finances, manage invoices, and track expenses with ease.",
    category: "Web Development",
    image: "/MobileApp.png",
  },
  {
    id: 3,
    title: "ApplyCan",
    description: "ApplyCan simplifies study, PR, and pathways in Canada smart and digital",
    category: "Mobile Development",
    image: "/SecurityMonitoring.png",
  },
  {
    id: 4,
    title: "Royal sports park",
    description: "At Royal Sports Park, we make sports and event bookings effortless. Our user-friendly platform allows you to reserve courts, fields, and facilities for your favorite sports with just a few clicks.",
    category: "Web Development",
    image: "/FitnessApp.png",
  },

  {
    id: 5,
    title: "Gymandu",
    description: "Gymandu is a fitness app that helps you track your workouts, set goals, and stay motivated on your fitness journey.",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    id: 6,
    title: "Royal country side",
    description: "Surrounded by picturesque views, our restaurant offers a cozy atmosphere and delectable dishes made from fresh, locally-sourced ingredients.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
    {
    id: 7,
    title: "Royal palm Real estate",
    description: "Discover your dream home with Royal Palm Real Estate. We offer a wide range of properties, from cozy apartments to luxurious villas, tailored to your preferences.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
];

