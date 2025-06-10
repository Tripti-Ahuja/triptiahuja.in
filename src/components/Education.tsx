import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const courses = [
    "Software Development using Open Source",
    "Native Android App Development in Java",
    "Security Engineering",
    "Foundations of Computer Security",
    "Operating Systems",
    "Computer Networks",
    "Databases"
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education & Publications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science with focus on security and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="bg-white rounded-xl shadow-lg mb-12 border border-slate-200">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Bachelor of Computer Science Engineering
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    Indraprastha Institute of Information Technology Delhi
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Award size={16} />
                      <span className="font-medium">CGPA: 9.01/10</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      <span>2017 - 2021</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={16} />
                      <span>Delhi, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-green-500" size={20} />
                  <h4 className="font-semibold text-slate-800">Relevant Coursework</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200">
            <div className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BookOpen className="text-purple-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Publications</h3>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-25 rounded-lg p-6 border border-purple-200">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      VoIP Vanguard: A Practical FrontLine Defense Against VoIP Identification Attacks in Tor
                    </h4>
                    <div className="flex items-center gap-2 text-purple-600">
                      <Award size={16} />
                      <span className="font-medium">NSS-SocialSec 2024</span>
                    </div>
                    <p className="text-slate-600 mt-3">
                      Research publication focusing on cybersecurity and privacy protection in VoIP communications within the Tor network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;