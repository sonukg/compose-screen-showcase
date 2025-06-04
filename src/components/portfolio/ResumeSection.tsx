
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  const resumeUrl = '/sample-resume.pdf'; // You'll need to add your actual resume PDF to the public folder

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sonu_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Resume Preview */}
          <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sonu Kumar - Resume
              </h3>
              <Button 
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
            
            {/* PDF Viewer */}
            <div className="h-96 md:h-[600px] w-full">
              <iframe
                src={resumeUrl}
                className="w-full h-full border-0"
                title="Resume PDF"
              />
            </div>
          </div>

          {/* Download Button for Mobile */}
          <div className="md:hidden">
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Alternative Text for PDF not supported */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>If the PDF doesn't display properly, please use the download button above.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
