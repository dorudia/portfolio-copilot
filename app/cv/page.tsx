"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          .page-break {
            page-break-after: always;
          }
        }
      `}</style>

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
        {/* Print Button - Hidden on print */}
        <div className="no-print max-w-4xl mx-auto px-4 mb-6 flex justify-end">
          <Button onClick={handlePrint} className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* CV Container */}
        <div className="print-container max-w-4xl mx-auto bg-white shadow-lg">
          {/* Header Section */}
          <header className="bg-gradient-to-r from-green-700 to-green-600 text-white p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                <Image
                  src="/my_photo.jpeg"
                  alt="Diaconu Doru"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">Diaconu Doru</h1>
                <h2 className="text-xl text-green-100 mb-4">Frontend Developer</h2>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <a href="mailto:dorudia@gmail.com" className="flex items-center gap-2 hover:text-green-200">
                    <Mail className="w-4 h-4" />
                    dorudia@gmail.com
                  </a>
                  <a href="tel:+40757418580" className="flex items-center gap-2 hover:text-green-200">
                    <Phone className="w-4 h-4" />
                    +40 757 418 580
                  </a>
                  <a href="https://github.com/dorudia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-200">
                    <Github className="w-4 h-4" />
                    github.com/dorudia
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="p-8">
            {/* About Section */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-green-600 pb-2 mb-4">
                Professional Summary
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Frontend developer with 4+ years of experience focused on building performant and
                accessible user interfaces. Proficient in React, Next.js, and modern web technologies.
                Experience with backend technologies (Node.js, Express, MongoDB) and enjoy working
                end-to-end on projects. Available for freelance opportunities.
              </p>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-green-600 pb-2 mb-4">
                Work Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Frontend Developer</h4>
                      <p className="text-green-700 font-medium">MACH Development & Consulting</p>
                    </div>
                    <span className="text-sm text-slate-600 whitespace-nowrap">Sep 2024 - Present</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Iaşi, Romania · Remote · Full-time</p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Frontend Developer</h4>
                      <p className="text-green-700 font-medium">Tremend Software Consulting</p>
                    </div>
                    <span className="text-sm text-slate-600 whitespace-nowrap">Feb 2022 - Feb 2024</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Bucureşti, România · Full-time</p>
                  <p className="text-sm text-slate-700">Skills: Jira · Git · Responsive Web Design</p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Junior Frontend Developer</h4>
                      <p className="text-green-700 font-medium">Mocha Global</p>
                    </div>
                    <span className="text-sm text-slate-600 whitespace-nowrap">Jun 2021 - Dec 2021</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Bucharest, Romania · Full-time</p>
                  <p className="text-sm text-slate-700">Skills: Jira · Git · Responsive Web Design</p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-green-600 pb-2 mb-4">
                Education
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Geography of Tourism</h4>
                  <p className="text-green-700 font-medium">Babes-Bolyai University (UBB Cluj)</p>
                </div>
                <span className="text-sm text-slate-600 whitespace-nowrap">Sep 2021 - Jun 2024</span>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-green-600 pb-2 mb-4">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "React Native",
                  "Node.js",
                  "Express",
                  "MongoDB",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 bg-green-50 text-green-800 rounded-md text-sm font-medium text-center border border-green-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Info */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-green-600 pb-2 mb-4">
                Additional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Nationality:</span> Romanian
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Languages:</span> Romanian, English
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Freelance:</span> Available
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">GitHub:</span> github.com/dorudia
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="bg-slate-100 p-6 text-center text-sm text-slate-600">
            <p>This CV was generated from my portfolio website</p>
            <p className="mt-1">For more projects and information, visit my portfolio</p>
          </footer>
        </div>
      </main>
    </>
  );
}
