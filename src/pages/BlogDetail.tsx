
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/portfolio/Navigation';
import Footer from '@/components/portfolio/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Native Development",
    description: "A comprehensive guide to building your first mobile app with React Native, covering setup, navigation, and best practices.",
    content: `
      React Native has revolutionized mobile app development by allowing developers to build native mobile applications using JavaScript and React. In this comprehensive guide, we'll walk you through everything you need to know to get started with React Native development.

      ## What is React Native?

      React Native is a framework developed by Facebook that enables developers to build mobile applications using React and JavaScript. Unlike hybrid apps that run in a WebView, React Native apps compile to native code, providing near-native performance and user experience.

      ## Setting Up Your Development Environment

      Before you can start building React Native apps, you need to set up your development environment. This involves installing Node.js, the React Native CLI, and setting up either Android Studio for Android development or Xcode for iOS development.

      ### Prerequisites
      - Node.js (version 12 or higher)
      - npm or Yarn package manager
      - React Native CLI
      - Android Studio or Xcode

      ## Your First React Native App

      Once you have your environment set up, creating your first React Native app is straightforward. The React Native CLI provides a simple command to bootstrap a new project with all the necessary files and dependencies.

      ## Key Concepts

      ### Components
      React Native uses the same component-based architecture as React. You'll work with built-in components like View, Text, ScrollView, and many others that map directly to native UI components.

      ### Navigation
      Navigation in React Native apps is typically handled by React Navigation, a powerful library that provides stack, tab, and drawer navigation patterns.

      ### State Management
      Just like in React web applications, you can use local state, Context API, or external libraries like Redux for state management.

      ## Best Practices

      1. **Performance Optimization**: Use FlatList for large datasets, optimize images, and avoid unnecessary re-renders.
      2. **Platform-Specific Code**: Use Platform.OS to write platform-specific code when needed.
      3. **Testing**: Implement unit tests and integration tests to ensure code quality.
      4. **Code Organization**: Follow a consistent folder structure and naming conventions.

      ## Conclusion

      React Native is an excellent choice for building cross-platform mobile applications. With its growing ecosystem and strong community support, it's easier than ever to get started with mobile development using familiar web technologies.
    `,
    category: "Mobile Development",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Sonu Kumar",
    tags: ["React Native", "Mobile", "JavaScript"]
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js",
    description: "Learn how to create performant and scalable web applications using Next.js, including SSR, API routes, and deployment strategies.",
    content: `
      Next.js has become the go-to framework for building production-ready React applications. In this detailed guide, we'll explore how to leverage Next.js to build scalable, performant web applications.

      ## Why Next.js?

      Next.js provides a robust foundation for React applications with built-in features like server-side rendering, static site generation, API routes, and automatic code splitting. These features help you build applications that are fast, SEO-friendly, and scalable.

      ## Key Features

      ### Server-Side Rendering (SSR)
      SSR allows your pages to be rendered on the server before being sent to the client, improving initial load times and SEO performance.

      ### Static Site Generation (SSG)
      SSG pre-renders pages at build time, making them incredibly fast to serve and perfect for content that doesn't change frequently.

      ### API Routes
      Next.js allows you to build API endpoints directly within your application, eliminating the need for a separate backend in many cases.

      ### Automatic Code Splitting
      Next.js automatically splits your code into smaller bundles, loading only what's necessary for each page.

      ## Building Your First Next.js Application

      Getting started with Next.js is straightforward. The framework provides excellent tooling and documentation to help you build your first application quickly.

      ## Performance Optimization

      Next.js provides several built-in optimizations:
      - Image optimization with the Image component
      - Font optimization
      - Bundle analysis tools
      - Automatic static optimization

      ## Deployment Strategies

      Next.js applications can be deployed to various platforms:
      - Vercel (recommended)
      - Netlify
      - AWS
      - Traditional hosting providers

      ## Best Practices

      1. Use getStaticProps for static data
      2. Implement proper error boundaries
      3. Optimize images and fonts
      4. Follow SEO best practices
      5. Monitor performance metrics

      ## Conclusion

      Next.js provides an excellent developer experience while delivering high-performance applications. Its built-in features and optimizations make it an ideal choice for building scalable web applications.
    `,
    category: "Web Development",
    date: "March 10, 2024",
    readTime: "8 min read",
    author: "Sonu Kumar",
    tags: ["Next.js", "React", "SSR"]
  },
  {
    id: 3,
    title: "AI-Powered Development: Tools and Techniques",
    description: "Explore how artificial intelligence is transforming software development and the tools that are making developers more productive.",
    content: `
      Artificial Intelligence is revolutionizing the software development landscape. From code generation to automated testing, AI tools are becoming indispensable for modern developers. Let's explore the current state and future of AI-powered development.

      ## The AI Revolution in Development

      The integration of AI in software development is not just a trend—it's a fundamental shift in how we approach coding, testing, and deployment. AI tools are enhancing developer productivity and changing the way we think about software creation.

      ## Current AI Development Tools

      ### Code Generation
      - GitHub Copilot: AI pair programmer
      - Tabnine: Intelligent code completion
      - Replit Ghostwriter: AI-assisted coding

      ### Code Review and Quality
      - DeepCode: AI-powered code review
      - SonarQube: Code quality analysis
      - CodeGuru: Amazon's AI reviewer

      ### Testing and Debugging
      - Testim: AI-powered test automation
      - Mabl: Intelligent test automation
      - Diffblue: Automated unit test generation

      ## Impact on Developer Productivity

      AI tools are significantly impacting developer productivity:
      - Faster code writing
      - Reduced debugging time
      - Improved code quality
      - Enhanced learning opportunities

      ## Best Practices for AI-Assisted Development

      1. **Understand the Generated Code**: Don't blindly accept AI suggestions
      2. **Maintain Code Quality**: Use AI as a tool, not a replacement for good practices
      3. **Security Considerations**: Review AI-generated code for security vulnerabilities
      4. **Continuous Learning**: Stay updated with AI tool capabilities

      ## The Future of AI in Development

      The future holds exciting possibilities:
      - More sophisticated code generation
      - AI-powered architecture design
      - Automated optimization
      - Enhanced debugging capabilities

      ## Challenges and Considerations

      While AI tools offer many benefits, there are challenges to consider:
      - Code quality and reliability
      - Intellectual property concerns
      - Over-reliance on AI
      - Security implications

      ## Conclusion

      AI-powered development tools are here to stay and will continue to evolve. By understanding and properly utilizing these tools, developers can significantly enhance their productivity while maintaining code quality and security standards.
    `,
    category: "AI & Technology",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Sonu Kumar",
    tags: ["AI", "Development", "Productivity"]
  },
  {
    id: 4,
    title: "Full-Stack Development with MERN Stack",
    description: "Complete tutorial on building full-stack applications using MongoDB, Express.js, React, and Node.js.",
    content: `
      The MERN stack (MongoDB, Express.js, React, Node.js) is one of the most popular technology stacks for building full-stack web applications. This comprehensive guide will walk you through building a complete application using these technologies.

      ## What is the MERN Stack?

      MERN is an acronym for four powerful technologies:
      - **MongoDB**: NoSQL database for data storage
      - **Express.js**: Web framework for Node.js
      - **React**: Frontend library for building user interfaces
      - **Node.js**: JavaScript runtime for server-side development

      ## Why Choose MERN?

      The MERN stack offers several advantages:
      - JavaScript everywhere (frontend and backend)
      - Large community and ecosystem
      - Excellent performance
      - Scalability
      - Rich development tools

      ## Setting Up Your MERN Application

      ### Backend Setup (Node.js + Express.js)
      1. Initialize your Node.js project
      2. Install necessary dependencies
      3. Set up Express.js server
      4. Configure middleware
      5. Create API routes

      ### Database Setup (MongoDB)
      1. Install MongoDB or use MongoDB Atlas
      2. Set up database connection
      3. Create data models with Mongoose
      4. Implement CRUD operations

      ### Frontend Setup (React)
      1. Create React application
      2. Set up routing with React Router
      3. Create components and pages
      4. Implement state management
      5. Connect to backend APIs

      ## Building Key Features

      ### User Authentication
      - JWT-based authentication
      - Password hashing with bcrypt
      - Protected routes
      - User registration and login

      ### Data Management
      - RESTful API design
      - Data validation
      - Error handling
      - Database relationships

      ### Frontend Development
      - Component architecture
      - State management (Context API or Redux)
      - Form handling
      - API integration

      ## Best Practices

      1. **Security**: Implement proper authentication and validation
      2. **Performance**: Optimize database queries and API responses
      3. **Code Organization**: Follow MVC pattern and component structure
      4. **Testing**: Write unit and integration tests
      5. **Deployment**: Use environment variables and proper deployment strategies

      ## Common Challenges and Solutions

      ### CORS Issues
      Configure CORS properly for cross-origin requests.

      ### State Management
      Choose the right state management solution based on application complexity.

      ### Performance Optimization
      Implement caching, pagination, and lazy loading.

      ## Deployment

      Popular deployment options:
      - Frontend: Netlify, Vercel, GitHub Pages
      - Backend: Heroku, DigitalOcean, AWS
      - Database: MongoDB Atlas, AWS DocumentDB

      ## Conclusion

      The MERN stack provides a powerful foundation for building modern web applications. With JavaScript across the entire stack, developers can leverage their existing skills while building scalable, performant applications.
    `,
    category: "Full Stack",
    date: "February 28, 2024",
    readTime: "12 min read",
    author: "Sonu Kumar",
    tags: ["MERN", "Full Stack", "MongoDB"]
  },
  {
    id: 5,
    title: "Flutter vs React Native: A Detailed Comparison",
    description: "An in-depth comparison of Flutter and React Native for cross-platform mobile development in 2024.",
    content: `
      Choosing the right cross-platform mobile development framework is crucial for project success. In this comprehensive comparison, we'll examine Flutter and React Native across various dimensions to help you make an informed decision.

      ## Overview

      ### Flutter
      Developed by Google, Flutter uses Dart programming language and provides a rich set of pre-designed widgets for building natively compiled applications.

      ### React Native
      Created by Facebook, React Native allows developers to build mobile apps using JavaScript and React, sharing code between iOS and Android platforms.

      ## Performance Comparison

      ### Flutter Performance
      - Compiles to native ARM code
      - Smooth animations at 60fps
      - Direct communication with platform
      - Consistent performance across platforms

      ### React Native Performance
      - Bridge-based architecture
      - Good performance for most use cases
      - May require optimization for complex animations
      - Platform-specific optimizations needed

      ## Development Experience

      ### Flutter
      - Hot reload for fast development
      - Rich widget library
      - Comprehensive documentation
      - Strong type system with Dart

      ### React Native
      - Familiar to React developers
      - Large ecosystem and community
      - Fast refresh for development
      - JavaScript familiarity

      ## Learning Curve

      ### Flutter
      - Need to learn Dart language
      - Different paradigms from web development
      - Comprehensive documentation helps
      - Growing community resources

      ### React Native
      - Easier for React/JavaScript developers
      - Familiar concepts and patterns
      - Large community and resources
      - Extensive third-party libraries

      ## Platform-Specific Features

      ### Flutter
      - Platform channels for native functionality
      - Consistent UI across platforms
      - Growing plugin ecosystem
      - Some platform features may require custom implementation

      ### React Native
      - Extensive native module ecosystem
      - Easier platform-specific customization
      - Better integration with existing native apps
      - Platform-specific UI components

      ## Community and Ecosystem

      ### Flutter
      - Growing rapidly
      - Strong Google backing
      - Increasing number of packages
      - Active community development

      ### React Native
      - Mature ecosystem
      - Large community
      - Extensive third-party libraries
      - Strong industry adoption

      ## Use Cases

      ### Choose Flutter When:
      - Building apps from scratch
      - Need consistent UI across platforms
      - Performance is critical
      - Team willing to learn Dart

      ### Choose React Native When:
      - Team has React/JavaScript expertise
      - Need extensive third-party integrations
      - Gradual migration from web to mobile
      - Existing React codebase

      ## Future Outlook

      Both frameworks are actively developed and have strong backing from their respective companies. The choice often comes down to team expertise, project requirements, and long-term strategy.

      ## Conclusion

      Both Flutter and React Native are excellent choices for cross-platform development. Flutter excels in performance and UI consistency, while React Native offers familiarity and a mature ecosystem. Consider your team's skills, project requirements, and long-term goals when making your decision.
    `,
    category: "Mobile Development",
    date: "February 20, 2024",
    readTime: "10 min read",
    author: "Sonu Kumar",
    tags: ["Flutter", "React Native", "Comparison"]
  },
  {
    id: 6,
    title: "Modern State Management in React",
    description: "Understanding different state management solutions in React including Redux, Zustand, and Context API.",
    content: `
      State management is one of the most critical aspects of React application development. As applications grow in complexity, choosing the right state management solution becomes crucial for maintainability and performance.

      ## Understanding State in React

      State represents the data that changes over time in your application. In React, state can be:
      - Local component state
      - Shared state between components
      - Global application state

      ## Built-in State Management

      ### useState Hook
      The simplest form of state management for local component state.

      ### useReducer Hook
      For more complex state logic that involves multiple sub-values or when the next state depends on the previous one.

      ### Context API
      React's built-in solution for sharing state across component trees without prop drilling.

      ## Popular External Solutions

      ### Redux
      The most popular state management library for React applications.

      **Pros:**
      - Predictable state updates
      - Excellent debugging tools
      - Large ecosystem
      - Time-travel debugging

      **Cons:**
      - Boilerplate code
      - Learning curve
      - Complexity for simple applications

      ### Zustand
      A lightweight alternative to Redux with a simpler API.

      **Pros:**
      - Minimal boilerplate
      - TypeScript support
      - Small bundle size
      - Easy to learn

      **Cons:**
      - Smaller ecosystem
      - Less debugging tools

      ### Recoil
      Facebook's experimental state management library for React.

      **Pros:**
      - Atomic state management
      - Built for React
      - Excellent performance
      - Concurrent mode ready

      **Cons:**
      - Still experimental
      - Limited ecosystem

      ## Choosing the Right Solution

      ### Use Local State When:
      - State is only needed in one component
      - Simple state logic
      - No sharing requirements

      ### Use Context API When:
      - Sharing state across multiple components
      - Avoiding prop drilling
      - Theme or user authentication data

      ### Use Redux When:
      - Large, complex applications
      - Predictable state updates required
      - Need for time-travel debugging
      - Multiple developers working on the project

      ### Use Zustand When:
      - Want Redux-like patterns with less boilerplate
      - TypeScript-first approach
      - Smaller application size matters

      ## Best Practices

      1. **Start Simple**: Begin with local state and Context API
      2. **Lift State Up**: Move state to the lowest common ancestor
      3. **Normalize State**: Keep state flat and normalized
      4. **Immutable Updates**: Always create new state objects
      5. **Performance**: Use React.memo and useMemo for optimization

      ## Common Patterns

      ### Compound Components
      Using Context API to create flexible component APIs.

      ### Custom Hooks
      Encapsulating state logic in reusable custom hooks.

      ### State Machines
      Using libraries like XState for complex state logic.

      ## Performance Considerations

      - Avoid unnecessary re-renders
      - Use proper key props for lists
      - Implement proper memoization
      - Consider state collocation

      ## Testing State Management

      - Test state logic in isolation
      - Use testing utilities for context providers
      - Mock external state management libraries
      - Test user interactions and state changes

      ## Conclusion

      Modern React offers multiple approaches to state management. The key is to choose the right tool for your specific use case, starting simple and scaling up as needed. Understanding the trade-offs of each approach will help you make informed decisions for your applications.
    `,
    category: "Web Development",
    date: "February 15, 2024",
    readTime: "7 min read",
    author: "Sonu Kumar",
    tags: ["React", "State Management", "Redux"]
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blog post not found</h1>
            <Button onClick={() => navigate('/blog')}>Go back to blog</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/blog')}
            className="mb-8 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              {/* Article Header */}
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return null;
                  if (paragraph.startsWith('##')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                        {paragraph.replace('##', '').trim()}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                        {paragraph.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('-')) {
                    return (
                      <li key={index} className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                        {paragraph.replace('-', '').trim()}
                      </li>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  );
                })}
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => navigate('/blog')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Posts
            </Button>
            <Link to="/#contact">
              <Button>
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
