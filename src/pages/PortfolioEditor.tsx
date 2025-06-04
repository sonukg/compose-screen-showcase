
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/portfolio/Navigation';
import Footer from '@/components/portfolio/Footer';
import { useToast } from '@/hooks/use-toast';

const PortfolioEditor = () => {
  const { toast } = useToast();
  
  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Sonu Kumar',
    title: 'Full Stack Developer',
    bio: 'Passionate full-stack developer with expertise in modern web technologies.',
    email: 'sonu.kumar@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    linkedin: 'https://linkedin.com/in/sonukumar',
    github: 'https://github.com/sonukumar',
    website: 'https://sonukumar.dev'
  });

  // About Section
  const [aboutInfo, setAboutInfo] = useState({
    description: 'I am a passionate full-stack developer with over 5 years of experience in building web applications.',
    yearsOfExperience: '5+',
    projectsCompleted: '50+',
    happyClients: '30+'
  });

  // Skills
  const [skills, setSkills] = useState({
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Figma']
  });

  const handleSave = () => {
    // In a real application, this would save to a database
    localStorage.setItem('portfolioData', JSON.stringify({
      personalInfo,
      aboutInfo,
      skills
    }));
    
    toast({
      title: "Portfolio Updated",
      description: "Your portfolio changes have been saved successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Portfolio Editor
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Edit your portfolio information and see changes reflected on your main page.
              </p>
            </div>
            <Button onClick={handleSave} size="lg" className="bg-green-600 hover:bg-green-700">
              <Save className="w-5 h-5 mr-2" />
              Save Changes
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    value={personalInfo.name}
                    onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Title</label>
                  <Input
                    value={personalInfo.title}
                    onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <Textarea
                    value={personalInfo.bio}
                    onChange={(e) => setPersonalInfo({...personalInfo, bio: e.target.value})}
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input
                    value={personalInfo.location}
                    onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn</label>
                  <Input
                    value={personalInfo.linkedin}
                    onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GitHub</label>
                  <Input
                    value={personalInfo.github}
                    onChange={(e) => setPersonalInfo({...personalInfo, github: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Website</label>
                  <Input
                    value={personalInfo.website}
                    onChange={(e) => setPersonalInfo({...personalInfo, website: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* About Information */}
            <Card>
              <CardHeader>
                <CardTitle>About Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={aboutInfo.description}
                    onChange={(e) => setAboutInfo({...aboutInfo, description: e.target.value})}
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience</label>
                  <Input
                    value={aboutInfo.yearsOfExperience}
                    onChange={(e) => setAboutInfo({...aboutInfo, yearsOfExperience: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Projects Completed</label>
                  <Input
                    value={aboutInfo.projectsCompleted}
                    onChange={(e) => setAboutInfo({...aboutInfo, projectsCompleted: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Happy Clients</label>
                  <Input
                    value={aboutInfo.happyClients}
                    onChange={(e) => setAboutInfo({...aboutInfo, happyClients: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Frontend Skills</label>
                  <Textarea
                    value={skills.frontend.join(', ')}
                    onChange={(e) => setSkills({...skills, frontend: e.target.value.split(', ')})}
                    placeholder="React, TypeScript, Next.js"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Backend Skills</label>
                  <Textarea
                    value={skills.backend.join(', ')}
                    onChange={(e) => setSkills({...skills, backend: e.target.value.split(', ')})}
                    placeholder="Node.js, Python, PostgreSQL"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tools & Technologies</label>
                  <Textarea
                    value={skills.tools.join(', ')}
                    onChange={(e) => setSkills({...skills, tools: e.target.value.split(', ')})}
                    placeholder="Git, Docker, AWS"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Save Button */}
          <div className="text-center mt-12">
            <Button onClick={handleSave} size="lg" className="bg-green-600 hover:bg-green-700">
              <Save className="w-5 h-5 mr-2" />
              Save All Changes
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioEditor;
