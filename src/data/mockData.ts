// Mock data for RPRE Landing Page (TypeScript)

import { Code, Smartphone, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* =========================
   Interfaces
========================= */

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Stat {
  id: number;
  value: number;
  label: string;
  suffix?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

/* =========================
   Services
========================= */

export const services: Readonly<Service[]> = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Transform your digital presence with cutting-edge web solutions. We craft responsive, scalable, and user-centric websites that drive engagement and deliver exceptional performance across all devices.",
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      link:"/web-landing"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Bring your ideas to life with innovative mobile applications. Our expert team delivers native and cross-platform solutions that provide seamless user experiences and robust functionality. We craft responsive, scalable  websites.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      link:"/mobile-app"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user interfaces with our expert design services. We focus on user-centered design principles to deliver seamless experiences that delight your customers.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800",
      link:"/ui-ux-design"
  },
] as const;

/* =========================
   Portfolio
========================= */

export const portfolio: Readonly<PortfolioItem[]> = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/Ecomerce.png",  
    description: "Modern shopping experience with seamless checkout",
  },
  {
    id: 2,
    title: "FinTech Mobile App",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "Secure financial transactions on the go",
  },
  {
    id: 3,
    title: "Healthcare Portal",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    description: "Patient management and telemedicine solution",
  },
  {
    id: 4,
    title: "Sports App development",
    category: "Web Development",
     image: "/Sports.png",
    description: "Real-time device monitoring and analytics",
  },
  {
    id: 5,
    title: "Security Audit System",
    category: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    description: "Comprehensive security assessment platform",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800",
    description: "Personal wellness and activity monitoring",
  },
] as const;

/* =========================
   Stats
========================= */

export const stats: Readonly<Stat[]> = [
  { id: 1, value: 250, label: "Projects Completed", suffix: "+" },
  { id: 2, value: 150, label: "Our Happy Clients", suffix: "+" },
  { id: 3, value: 8, label: "Years Experience" },
  { id: 4, value: 50, label: "Team Members", suffix: "+" },
] as const;

/* =========================
   Testimonials
========================= */

export const testimonials: Readonly<Testimonial[]> = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechCorp",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "RPRE transformed our digital infrastructure completely. Their expertise in web development and security is unmatched. The team delivered beyond our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, InnovateLabs",
    avatar: "https://i.pravatar.cc/150?img=2",
    content:
      "Working with RPRE was a game-changer for our mobile app. They brought creativity, technical excellence, and dedication to every sprint. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, SecureFlow",
    avatar: "https://i.pravatar.cc/150?img=3",
    content:
      "The cyber security solutions provided by RPRE gave us peace of mind. Their proactive approach and thorough assessments are exceptional.",
    rating: 5,
  },
] as const;

/* === 
   Blogs
 === */

// export const blogs: Readonly<Blog[]> = [
//   {
//     id: 1,
//     title: "The Future of Web Development: Trends to Watch in 2025",
//     excerpt:
//       "Explore the latest technologies and frameworks shaping the web development landscape, from AI-powered tools to progressive web apps.",
//     author: "Alex Thompson",
//     date: "Dec 15, 2024",
//     category: "Web Development",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//     readTime: "5 min read",
//   },
//   {
//     id: 2,
//     title: "Mobile App Security: Best Practices for 2025",
//     excerpt:
//       "Learn essential security measures to protect your mobile applications from emerging threats and vulnerabilities.",
//     author: "Priya Sharma",
//     date: "Dec 12, 2024",
//     category: "Cyber Security",
//     image:
//       "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800",
//     readTime: "7 min read",
//   },
//   {
//     id: 3,
//     title: "Building Scalable Cloud Solutions: A Comprehensive Guide",
//     excerpt:
//       "Discover how to design and implement cloud architectures that grow with your business needs.",
//     author: "David Kumar",
//     date: "Dec 10, 2024",
//     category: "Cloud Computing",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
//     readTime: "6 min read",
//   },
// ] as const;

/* =========================
   Clients
========================= */

export const clients: Readonly<Client[]> = [
  {
    id: 1,
    name: "TechCorp",
    logo:
      "https://via.placeholder.com/150x60/2F5E4B/ffffff?text=TechCorp",
  },
  {
    id: 2,
    name: "InnovateLabs",
    logo:
      "https://via.placeholder.com/150x60/7FAE8D/ffffff?text=InnovateLabs",
  },
  {
    id: 3,
    name: "SecureFlow",
    logo:
      "https://via.placeholder.com/150x60/7A5234/ffffff?text=SecureFlow",
  },
  {
    id: 4,
    name: "DataSphere",
    logo:
      "https://via.placeholder.com/150x60/2F5E4B/ffffff?text=DataSphere",
  },
  {
    id: 5,
    name: "CloudNine",
    logo:
      "https://via.placeholder.com/150x60/7FAE8D/ffffff?text=CloudNine",
  },
  {
    id: 6,
    name: "ByteWorks",
    logo:
      "https://via.placeholder.com/150x60/7A5234/ffffff?text=ByteWorks",
  },
] as const;
