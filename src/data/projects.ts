
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
    technologies: ["Flutter", "Dart", "Firebase", "Attendance Tracking", "Database Management"],
    downloads: "40% reduction in manual errors",
    features: ["Automated attendance tracking", "Administrative efficiency", "Error reduction", "Time theft prevention", "Showroom management"],
    category: "Flutter",
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
  },
  {
    title: "Expense Tracker App",
    description: "Comprehensive expense tracking application for iOS with budget management, category-wise spending analysis, and financial insights.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
    technologies: ["iOS", "Swift", "SwiftUI", "Core Data", "CloudKit", "Charts"],
    downloads: "Featured on App Store",
    features: ["Expense tracking", "Budget management", "Category analysis", "Financial insights", "Cloud sync", "Data visualization"],
    category: "iOS",
    links: {
      playstore: null,
      appstore: "https://apps.apple.com/app/expense-tracker",
      webapp: "https://expensetracker.com"
    },
    overview: "Advanced expense tracking solution for iOS users with comprehensive budget management and financial analytics.",
    developmentProcess: "Built using SwiftUI and Core Data with CloudKit integration for seamless data synchronization across devices.",
    challengesAndSolutions: "Implemented advanced data visualization achieving 90% user satisfaction and 40% improvement in financial awareness.",
    duration: {
      start: "Mar 2023",
      end: "Jun 2023"
    }
  },
  {
    title: "News App",
    description: "Cross-platform news application built with Kotlin Multiplatform providing real-time news updates with personalized content and offline reading.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
    technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "SQLDelight", "Koin"],
    downloads: "50K+ downloads across platforms",
    features: ["Real-time news", "Personalized content", "Offline reading", "Multi-platform support", "Push notifications", "Category filtering"],
    category: "KMP/CMP",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.newsapp.kmp",
      appstore: "https://apps.apple.com/app/news-kmp",
      webapp: "https://newsapp.com"
    },
    overview: "Multi-platform news application delivering real-time updates with shared business logic across Android and iOS.",
    developmentProcess: "Developed using Kotlin Multiplatform with Compose Multiplatform for shared UI components and business logic.",
    challengesAndSolutions: "Achieved 95% code sharing between platforms and 60% faster development cycle with unified architecture.",
    duration: {
      start: "Jan 2024",
      end: "Apr 2024"
    }
  },
  {
    title: "Nutrition App",
    description: "Health and nutrition tracking application built with Kotlin Multiplatform featuring meal planning, calorie tracking, and nutritional analysis.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
    technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Room", "DataStore", "Health APIs"],
    downloads: "30K+ active users",
    features: ["Meal planning", "Calorie tracking", "Nutritional analysis", "Progress monitoring", "Recipe suggestions", "Health integration"],
    category: "KMP/CMP",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.nutrition.kmp",
      appstore: "https://apps.apple.com/app/nutrition-kmp",
      webapp: "https://nutritionapp.com"
    },
    overview: "Cross-platform nutrition tracking solution with comprehensive meal planning and health monitoring capabilities.",
    developmentProcess: "Built with shared business logic and UI components using Kotlin Multiplatform and Compose Multiplatform technologies.",
    challengesAndSolutions: "Integrated with platform-specific health APIs achieving 85% user engagement and 45% improvement in health goal tracking.",
    duration: {
      start: "Aug 2023",
      end: "Dec 2023"
    }
  },
  {
    title: "Budget App",
    description: "Cross-platform budget management application built with Kotlin Multiplatform featuring expense tracking, savings goals, and financial planning tools.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
    technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "SQLDelight", "DataStore", "Charts"],
    downloads: "25K+ active users",
    features: ["Budget tracking", "Expense categorization", "Savings goals", "Financial reports", "Multi-currency support", "Cloud sync"],
    category: "KMP/CMP",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.budget.kmp",
      appstore: "https://apps.apple.com/app/budget-kmp",
      webapp: "https://budgetapp.com"
    },
    overview: "Comprehensive budget management solution with shared business logic across platforms for effective financial planning.",
    developmentProcess: "Built using Kotlin Multiplatform with shared UI components and financial calculation logic for consistent user experience.",
    challengesAndSolutions: "Achieved 90% code reuse between platforms and 50% improvement in budget accuracy through advanced analytics.",
    duration: {
      start: "May 2024",
      end: "Aug 2024"
    }
  },
  {
    title: "Shreenath Dairy Management App",
    description: "Comprehensive dairy management application for tracking incoming, outgoing products and delivery management with inventory control.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=300&fit=crop",
    technologies: ["Android", "Kotlin", "Inventory Management", "Delivery Tracking", "Database Management"],
    downloads: "30% improvement in inventory accuracy",
    features: ["Product tracking", "Delivery management", "Inventory control", "Quality monitoring", "Order processing", "Supply chain optimization"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.shreenath.dairy",
      appstore: null,
      webapp: "https://shreenath.com"
    },
    overview: "Digital dairy management solution streamlining product flow from incoming to delivery with comprehensive inventory tracking.",
    developmentProcess: "Engineered to handle complex dairy supply chain operations with real-time tracking and quality management systems.",
    challengesAndSolutions: "Improved inventory accuracy by 30% and reduced product wastage by 25% through automated tracking and quality controls.",
    duration: {
      start: "Feb 2021",
      end: "Jul 2021"
    }
  },
  {
    title: "Tingtongue App",
    description: "Digital grocery and fruits management application for inventory tracking, order processing, and product management with real-time updates.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop",
    technologies: ["Android", "Kotlin", "Inventory Management", "Order Processing", "Real-time Updates"],
    downloads: "45% increase in order efficiency",
    features: ["Inventory management", "Product cataloging", "Order processing", "Stock alerts", "Sales tracking", "Customer management"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.tingtongue.grocery",
      appstore: null,
      webapp: "https://tingtongue.com"
    },
    overview: "Comprehensive grocery and fruits management platform enabling digital inventory control and streamlined order processing.",
    developmentProcess: "Developed with focus on real-time inventory updates and efficient order management for fresh produce businesses.",
    challengesAndSolutions: "Achieved 45% increase in order efficiency and 35% reduction in stock shortages through automated inventory alerts.",
    duration: {
      start: "Sep 2020",
      end: "Jan 2021"
    }
  },
  {
    title: "Crazyburger App",
    description: "Digital burger delivery management application for order processing, delivery tracking, and inventory management with real-time updates.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
    technologies: ["Android", "Kotlin", "Delivery Management", "Order Processing", "Location Services"],
    downloads: "40% faster delivery times",
    features: ["Order management", "Delivery tracking", "Menu management", "Customer notifications", "Payment integration", "Driver coordination"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.crazyburger.delivery",
      appstore: null,
      webapp: "https://crazyburger.com"
    },
    overview: "Streamlined burger delivery platform managing entire order lifecycle from placement to delivery with real-time tracking.",
    developmentProcess: "Built to optimize food delivery operations with integrated tracking systems and automated customer notifications.",
    challengesAndSolutions: "Reduced delivery times by 40% and improved customer satisfaction by 50% through efficient order management and tracking.",
    duration: {
      start: "Nov 2020",
      end: "Mar 2021"
    }
  }
];

export const categories = ["All", "Android", "iOS", "Flutter", "KMP/CMP", "React Native", "Frontend", "Backend", "Fullstack"];
