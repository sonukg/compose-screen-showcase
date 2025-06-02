
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
    title: "FitTracker Pro",
    description: "A comprehensive fitness tracking app with workout planning, progress tracking, and social features. Built with Jetpack Compose and Firebase.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Hilt"],
    downloads: "100K+ downloads",
    features: ["Real-time workout tracking", "Social challenges", "Progress analytics", "Offline support"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.fittracker.pro",
      appstore: "https://apps.apple.com/app/fittracker-pro/id123456789",
      webapp: "https://fittracker-pro.com"
    },
    overview: "FitTracker Pro is a comprehensive fitness application designed to help users maintain their fitness goals through advanced tracking and social engagement features.",
    developmentProcess: "Developed using modern Android architecture with Jetpack Compose for UI, Room for local data storage, and Firebase for cloud synchronization and real-time features.",
    challengesAndSolutions: "Main challenge was implementing real-time synchronization across multiple devices. Solved by implementing a robust offline-first architecture with conflict resolution.",
    duration: {
      start: "Jan 2023",
      end: "Jun 2023"
    }
  },
  {
    title: "EcoShop",
    description: "Sustainable shopping app that helps users find eco-friendly products and track their environmental impact.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    technologies: ["Kotlin", "MVVM", "Retrofit", "Glide", "Material Design"],
    downloads: "50K+ downloads",
    features: ["Product sustainability scores", "Carbon footprint tracking", "Local store finder", "Wishlist management"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.ecoshop",
      appstore: "https://apps.apple.com/app/ecoshop/id123456790",
      webapp: "https://ecoshop.com"
    },
    overview: "EcoShop promotes sustainable shopping by providing users with detailed environmental impact data for products and stores.",
    developmentProcess: "Built with MVVM architecture, utilizing Retrofit for API calls and implementing a comprehensive rating system for product sustainability.",
    challengesAndSolutions: "Challenge was aggregating sustainability data from multiple sources. Created a unified scoring algorithm that combines various environmental metrics.",
    duration: {
      start: "Aug 2022",
      end: "Dec 2022"
    }
  },
  {
    title: "CryptoWallet",
    description: "Secure cryptocurrency wallet with portfolio tracking, real-time prices, and transaction history.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
    technologies: ["Kotlin", "Coroutines", "Biometric Auth", "Room", "Clean Architecture"],
    downloads: "25K+ downloads",
    features: ["Multi-currency support", "Biometric security", "Price alerts", "Portfolio analytics"],
    category: "Android",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.cryptowallet",
      appstore: null,
      webapp: "https://cryptowallet.com"
    },
    overview: "Secure cryptocurrency wallet focusing on user security and portfolio management with real-time market data integration.",
    developmentProcess: "Implemented with Clean Architecture principles, emphasizing security through biometric authentication and encrypted local storage.",
    challengesAndSolutions: "Security was paramount. Implemented multi-layer encryption and secure key management using Android Keystore system.",
    duration: {
      start: "Mar 2023",
      end: "Aug 2023"
    }
  },
  {
    title: "HealthTracker iOS",
    description: "Comprehensive health monitoring app with HealthKit integration and Apple Watch support.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    technologies: ["Swift", "SwiftUI", "HealthKit", "WatchKit", "Core Data"],
    downloads: "120K+ downloads",
    features: ["HealthKit sync", "Apple Watch", "Heart rate monitoring", "Workout tracking"],
    category: "iOS",
    links: {
      playstore: null,
      appstore: "https://apps.apple.com/app/healthtracker-ios/id123456802",
      webapp: "https://healthtracker-ios.com"
    },
    overview: "Native iOS health tracking application that seamlessly integrates with Apple's health ecosystem.",
    developmentProcess: "Developed using SwiftUI with deep HealthKit integration and Apple Watch companion app for continuous monitoring.",
    challengesAndSolutions: "Ensuring data privacy compliance while providing comprehensive health insights. Implemented on-device processing for sensitive health data.",
    duration: {
      start: "Sep 2022",
      end: "Feb 2023"
    }
  },
  {
    title: "CrossPlatform Banking",
    description: "Secure banking app built with Kotlin Multiplatform sharing business logic across platforms.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&h=300&fit=crop",
    technologies: ["Kotlin Multiplatform", "Ktor", "SQLDelight", "Compose Multiplatform"],
    downloads: "300K+ downloads",
    features: ["Cross-platform", "Secure transactions", "Biometric auth", "Real-time updates"],
    category: "KMP/CMP",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.banking.kmp",
      appstore: "https://apps.apple.com/app/banking-kmp/id123456805",
      webapp: "https://banking-kmp.com"
    },
    overview: "Revolutionary banking application using Kotlin Multiplatform to share business logic across iOS and Android platforms.",
    developmentProcess: "Leveraged Kotlin Multiplatform for shared business logic with platform-specific UI implementations using Compose Multiplatform.",
    challengesAndSolutions: "Balancing shared code with platform-specific requirements. Created modular architecture allowing platform-specific optimizations while maintaining shared core logic.",
    duration: {
      start: "Jun 2023",
      end: "Dec 2023"
    }
  },
  {
    title: "FlutterCommerce",
    description: "E-commerce app with beautiful animations and smooth user experience built with Flutter.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop",
    technologies: ["Flutter", "Dart", "Firebase", "Stripe", "GetX"],
    downloads: "250K+ downloads",
    features: ["Custom animations", "Payment gateway", "Push notifications", "Offline support"],
    category: "Flutter",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.flutter.commerce",
      appstore: "https://apps.apple.com/app/flutter-commerce/id123456807",
      webapp: "https://flutter-commerce.com"
    },
    overview: "Feature-rich e-commerce platform built with Flutter, focusing on smooth animations and user experience.",
    developmentProcess: "Developed using Flutter's widget system with custom animations, Firebase backend integration, and Stripe payment processing.",
    challengesAndSolutions: "Creating smooth animations while maintaining performance. Implemented custom animation controllers and optimized widget rebuilds.",
    duration: {
      start: "Apr 2023",
      end: "Sep 2023"
    }
  },
  {
    title: "RNSocialMedia",
    description: "Social media app with real-time features and cross-platform compatibility.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    technologies: ["React Native", "Redux", "Socket.io", "AsyncStorage", "React Navigation"],
    downloads: "400K+ downloads",
    features: ["Real-time feed", "Stories", "Direct messaging", "Photo filters"],
    category: "React Native",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.rn.social",
      appstore: "https://apps.apple.com/app/rn-social/id123456809",
      webapp: "https://rn-social.com"
    },
    overview: "Full-featured social media platform with real-time capabilities and cross-platform compatibility.",
    developmentProcess: "Built with React Native using Redux for state management and Socket.io for real-time communication features.",
    challengesAndSolutions: "Managing real-time data updates efficiently. Implemented optimistic updates and smart caching strategies to maintain smooth user experience.",
    duration: {
      start: "Jan 2024",
      end: "Jul 2024"
    }
  },
  {
    title: "DashboardPro",
    description: "Modern admin dashboard with advanced analytics and data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Zustand"],
    downloads: "50K+ users",
    features: ["Real-time analytics", "Custom charts", "Dark mode", "Responsive design"],
    category: "Frontend",
    links: {
      playstore: null,
      appstore: null,
      webapp: "https://dashboard-pro.com"
    },
    overview: "Comprehensive dashboard solution for business analytics with real-time data visualization and customizable widgets.",
    developmentProcess: "Developed using React with TypeScript, implementing custom chart components and responsive design patterns.",
    challengesAndSolutions: "Handling large datasets in real-time visualizations. Implemented data virtualization and efficient update mechanisms.",
    duration: {
      start: "Nov 2023",
      end: "Mar 2024"
    }
  },
  {
    title: "SaaS Platform",
    description: "Complete SaaS platform with subscription management, analytics, and multi-tenancy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["Next.js", "Prisma", "Stripe", "Vercel", "PostgreSQL"],
    downloads: "100K+ users",
    features: ["Subscription billing", "Multi-tenancy", "Analytics dashboard", "API management"],
    category: "Fullstack",
    links: {
      playstore: null,
      appstore: null,
      webapp: "https://saas-platform.com"
    },
    overview: "Complete SaaS solution providing subscription management, analytics, and multi-tenant architecture for businesses.",
    developmentProcess: "Built with Next.js and Prisma ORM, implementing secure multi-tenant architecture with Stripe integration for subscription management.",
    challengesAndSolutions: "Implementing secure multi-tenancy while maintaining performance. Created database isolation strategies and optimized query patterns.",
    duration: {
      start: "May 2023",
      end: "Nov 2023"
    }
  }
];

export const categories = ["All", "Android", "iOS", "KMP/CMP", "Flutter", "React Native", "Frontend", "Backend", "Fullstack"];
