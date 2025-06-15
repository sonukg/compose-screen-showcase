
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  downloads: string;
  features: string[];
  category: string;
  links: {
    playstore: string | null;
    appstore: string | null;
    webapp: string;
  };
  overview?: string;
  developmentProcess?: string;
  challengesAndSolutions?: string;
  duration?: {
    start: string;
    end: string;
  };
}

export const projects: Project[] = [
  {
    title: "AU 0101",
    description: "AU Small Finance Bank App for UPI payments, bill payments, travel bookings, card management, loan applications, and investment opportunities including IPOs and Mutual Funds.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&h=300&fit=crop",
    technologies: ["Android", "Kotlin", "UPI", "UPI Lite", "Payment Gateway", "Banking APIs"],
    downloads: "Available on Play Store",
    features: ["UPI payments", "Bill payments", "Travel bookings", "Card management", "Loan applications", "Investment in IPOs and Mutual Funds"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.ausmallfinancebank.amb&hl=en&gl=US",
      appstore: null,
      webapp: "https://aubank.in"
    },
    overview: "Comprehensive banking application facilitating seamless UPI payments and diverse financial services for AU Small Finance Bank customers.",
    developmentProcess: "Engineered with advanced security protocols and integrated multiple financial services into a single platform for enhanced user engagement.",
    challengesAndSolutions: "Implemented advanced security measures achieving 35% reduction in fraudulent transactions and reinforcing user trust for financial operations.",
    duration: {
      start: "Sep 2023",
      end: "Jul 2024"
    }
  },
  {
    title: "Cummins Saathi App",
    description: "Comprehensive app supporting five distinct user personas for Cummins users, available in 11 native Indian languages with customized maps, training videos, and reward systems.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    technologies: ["Android", "Kotlin", "Maps API", "Multilingual Support", "Analytics", "Reward Systems"],
    downloads: "95% adoption rate among targeted users",
    features: ["Five user personas", "11 native languages", "Customized maps", "Training videos", "Leadership board", "MITWA reward points"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.cummins.saathi&hl=en&gl=US",
      appstore: null,
      webapp: "https://cummins.com"
    },
    overview: "All-in-one application for Cummins users to efficiently complete tasks with multilingual support and advanced analytics.",
    developmentProcess: "Built with focus on user diversity and accessibility, featuring advanced analytics for user behavior insights.",
    challengesAndSolutions: "Achieved 95% adoption rate within first quarter and 20% improvement in feature utilization through integrated analytics.",
    duration: {
      start: "Jan 2022",
      end: "Apr 2023"
    }
  },
  {
    title: "Coolberg Team App",
    description: "Social networking app designed for product branding built with Flutter, featuring advanced notification systems and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    technologies: ["Flutter", "Dart", "Firebase", "Firebase Cloud Messaging", "Social Networking"],
    downloads: "35% increase in user engagement",
    features: ["Social networking", "Product branding", "Team collaboration", "Real-time notifications", "Firebase integration"],
    category: "Flutter",
    links: {
      playstore: null,
      appstore: null,
      webapp: "https://coolberg.in"
    },
    overview: "Social networking platform designed specifically for product branding and team collaboration using modern Flutter architecture.",
    developmentProcess: "Developed using Flutter with Firebase Cloud Messaging integration for real-time updates and team activities.",
    challengesAndSolutions: "Implemented advanced notification systems achieving 35% increase in user engagement and ensuring real-time updates.",
    duration: {
      start: "Oct 2021",
      end: "Dec 2021"
    }
  },
  {
    title: "Storex App",
    description: "Android application to automate the process of receiving and delivering chemical-related products for different sites located at various locations.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
    technologies: ["Android", "Kotlin", "Process Automation", "Location Services", "Inventory Management"],
    downloads: "25% boost in operational efficiency",
    features: ["Process automation", "Product receiving", "Delivery management", "Multi-location support", "Inventory tracking"],
    category: "Android",
    links: {
      playstore: null,
      appstore: null,
      webapp: "https://storex.com"
    },
    overview: "Process automation application for chemical product management across multiple locations with focus on efficiency and accuracy.",
    developmentProcess: "Built to streamline chemical product logistics with automated receiving and delivery processes across different sites.",
    challengesAndSolutions: "Boosted operational efficiency by 25% and reduced delivery errors by 15% through comprehensive automation.",
    duration: {
      start: "Apr 2021",
      end: "Oct 2021"
    }
  },
  {
    title: "YAMS - Yash Attendance Management System",
    description: "Comprehensive attendance management system for vehicle showroom with automated tracking and administrative efficiency features.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    technologies: ["Android", "Java", "Kotlin", "Attendance Tracking", "Database Management"],
    downloads: "40% reduction in manual errors",
    features: ["Automated attendance tracking", "Administrative efficiency", "Error reduction", "Time theft prevention", "Showroom management"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.etonius.yashhond&hl=en",
      appstore: null,
      webapp: "https://yashattendance.com"
    },
    overview: "Automated attendance management system specifically designed for vehicle showrooms with focus on accuracy and efficiency.",
    developmentProcess: "Engineered to automate attendance processes with comprehensive tracking and administrative features.",
    challengesAndSolutions: "Achieved 40% reduction in manual tracking errors and decreased time theft by 30% while enhancing administrative efficiency by 25%.",
    duration: {
      start: "Dec 2019",
      end: "Feb 2020"
    }
  },
  {
    title: "Shreeji Vending Service",
    description: "Ready-mix tea and coffee online ordering app with comprehensive admin and user panels for enhanced order management.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop",
    technologies: ["Android", "Java", "Online Ordering", "Admin Panel", "Payment Integration"],
    downloads: "40% increase in order accuracy",
    features: ["Online ordering", "Ready-mix beverages", "Admin panel", "User panel", "Order accuracy", "Customer retention"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.shreeji.android&hl=en",
      appstore: null,
      webapp: "https://shreejiservice.com"
    },
    overview: "Comprehensive online ordering platform for ready-mix beverages with dual-panel architecture for efficient order management.",
    developmentProcess: "Designed with scalable architecture supporting high transaction volumes with both admin and user-friendly interfaces.",
    challengesAndSolutions: "Achieved 40% increase in order accuracy and 35% growth in repeat customer rate while handling over 5,000 daily transactions.",
    duration: {
      start: "Jun 2019",
      end: "Nov 2019"
    }
  },
  {
    title: "SCGT - Saturday Club Global Trust",
    description: "Multi-level marketing recommendation app for buying goods across all categories with transaction facilitation between parties.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["Android", "Java", "MLM Systems", "E-commerce", "Transaction Management"],
    downloads: "35% increase in successful deals",
    features: ["MLM recommendation system", "Multi-category products", "Transaction facilitation", "User engagement", "Deal optimization"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.etonius.scgtngo&hl=en",
      appstore: null,
      webapp: "https://scgt.org"
    },
    overview: "Multi-level marketing platform facilitating transactions across diverse product categories with optimized recommendation systems.",
    developmentProcess: "Engineered to support complex MLM operations with focus on transaction optimization and user engagement.",
    challengesAndSolutions: "Optimized transaction processes achieving 35% increase in successful deals and enhanced user engagement by 40%.",
    duration: {
      start: "Jan 2019",
      end: "Jun 2019"
    }
  },
  {
    title: "Yogiraj YCT App",
    description: "Advanced money management application with enhanced budgeting, expense tracking features, and multi-device security protocols.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["Android", "Java", "Financial Management", "Security Protocols", "Data Synchronization"],
    downloads: "Enhanced financial management",
    features: ["Money management", "Advanced budgeting", "Expense tracking", "Multi-device access", "Financial data protection"],
    category: "Android",
    links: {
      playstore: null,
      appstore: null,
      webapp: "https://yogiraj.com"
    },
    overview: "Comprehensive money management solution with advanced budgeting capabilities and robust security for financial data protection.",
    developmentProcess: "Developed with focus on financial data security and seamless multi-device synchronization for user convenience.",
    challengesAndSolutions: "Implemented advanced security protocols enabling seamless multi-device access while protecting sensitive user financial data.",
    duration: {
      start: "Mar 2020",
      end: "Jun 2020"
    }
  }
];

export const categories = ["All", "Android", "iOS", "Flutter", "KMP/CMP", "React Native", "Frontend", "Backend", "Fullstack"];
