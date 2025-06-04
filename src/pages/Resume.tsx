
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Upload, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/portfolio/Navigation';
import Footer from '@/components/portfolio/Footer';

const Resume = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string>('/sample-resume.pdf');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      const url = URL.createObjectURL(file);
      setResumeUrl(url);
    } else {
      alert('Please upload a PDF file only.');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeFile ? resumeFile.name : 'Sonu_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const triggerFileUpload = () => {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Resume
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Upload, view, and download my resume. Keep your resume updated and easily accessible.
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Upload className="w-6 h-6 mr-2" />
              Upload Resume
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="flex-1"
              />
              <Button 
                onClick={triggerFileUpload}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose PDF File
              </Button>
            </div>
            {resumeFile && (
              <p className="text-green-600 dark:text-green-400 mt-2">
                ✓ File uploaded: {resumeFile.name}
              </p>
            )}
          </div>

          {/* Resume Viewer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                {resumeFile ? resumeFile.name : 'Sonu Kumar - Resume'}
              </h2>
              <Button 
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
            
            {/* PDF Viewer */}
            <div className="h-96 md:h-[700px] w-full">
              <iframe
                src={resumeUrl}
                className="w-full h-full border-0"
                title="Resume PDF"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Link to="/#contact">
              <Button 
                variant="outline"
                size="lg"
                className="w-full"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Help Text */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            <p>Supported format: PDF files only. Maximum file size: 10MB</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
