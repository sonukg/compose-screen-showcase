
import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import Footer from '@/components/portfolio/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Native Development",
    description: "A comprehensive guide to building your first mobile app with React Native, covering setup, navigation, and best practices.",
    category: "Mobile Development",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg",
    tags: ["React Native", "Mobile", "JavaScript"]
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js",
    description: "Learn how to create performant and scalable web applications using Next.js, including SSR, API routes, and deployment strategies.",
    category: "Web Development",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    tags: ["Next.js", "React", "SSR"]
  },
  {
    id: 3,
    title: "AI-Powered Development: Tools and Techniques",
    description: "Explore how artificial intelligence is transforming software development and the tools that are making developers more productive.",
    category: "AI & Technology",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg",
    tags: ["AI", "Development", "Productivity"]
  },
  {
    id: 4,
    title: "Full-Stack Development with MERN Stack",
    description: "Complete tutorial on building full-stack applications using MongoDB, Express.js, React, and Node.js.",
    category: "Full Stack",
    date: "February 28, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg",
    tags: ["MERN", "Full Stack", "MongoDB"]
  },
  {
    id: 5,
    title: "Flutter vs React Native: A Detailed Comparison",
    description: "An in-depth comparison of Flutter and React Native for cross-platform mobile development in 2024.",
    category: "Mobile Development",
    date: "February 20, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg",
    tags: ["Flutter", "React Native", "Comparison"]
  },
  {
    id: 6,
    title: "Modern State Management in React",
    description: "Understanding different state management solutions in React including Redux, Zustand, and Context API.",
    category: "Web Development",
    date: "February 15, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg",
    tags: ["React", "State Management", "Redux"]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on software development, technology trends, and best practices
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full group">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
