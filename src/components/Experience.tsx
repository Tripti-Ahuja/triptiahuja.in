import React from 'react';
import { Calendar, MapPin, Building, Code2 } from 'lucide-react';

interface ExperienceItem {
  company: string;
  companyUrl?: string;
  companyDetails?: string;
  position: string;
  duration: string;
  location: string;
  techStack: string[];
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "deeptune.ai",
    companyUrl: "https://deeptune.ai",
    position: "Software Engineer",
    duration: "Jun '25 - Present",
    location: "Remote",
    techStack: [],
    responsibilities: [
      "Currently working at deeptune.ai"
    ]
  },
  {
    company: "multithread.ai",
    companyUrl: "https://multithread.ai",
    position: "Senior Software Engineer",
    duration: "May '24 - Present",
    location: "Remote",
    techStack: [
      "Typescript",
      "Javascript",
      "AWS (ECS)",
      "GCP (Cloud Build, Cloud Run)",
      "Node.js",
      "PostgreSQL",
      "MongoDB"
    ],
    responsibilities: [
      "Backend and devops engineer for an early-stage US-based startup in the music-tech industry.",
      "Devops engineer for an early-stage UK-based AI startup in the productivity-tech industry.",
      "Backend engineer for a series F US-based startup in the food-tech industry."
    ]
  },
  {
    company: "scalexp.com",
    companyUrl: "https://scalexp.com",
    position: "Senior Software Engineer", 
    duration: "May '24 - Present",
    location: "Remote",
    techStack: ["Typescript", "Javascript", "AWS", "Node.js"],
    responsibilities: [
      "Backend and devops engineer for an early-stage US-based startup in the music-tech industry."
    ]
  },
  {
    company: "tradingtechsolutions.com",
    companyUrl: "https://tradingtechsolutions.com",
    position: "Senior Software Engineer",
    duration: "May '24 - Present", 
    location: "Remote",
    techStack: ["Typescript", "Javascript", "Node.js", "PostgreSQL"],
    responsibilities: [
      "Backend engineer for a series F US-based startup in the food-tech industry."
    ]
  },
  {
    company: "nsave",
    companyUrl: "https://nsave.com",
    companyDetails: "YC 2022 | Sequoia Capital | FinTech | London",
    position: "Founding Software Engineer",
    duration: "Mar '23 - Mar '24 (1 yr)",
    location: "Remote",
    techStack: [
      "NestJS",
      "Apache Kafka",
      "Docker",
      "AWS",
      "PostgreSQL"
    ],
    responsibilities: [
      "Hired as the first engineer working closely with the CTO until the team reached 5 engineers.",
      "Revamped the onboarding flow so that micoservices had clear ownership, and future changes can be made easily.",
      "Optimised the users' cases management for the back office enabling the operations team to communicate with the users directly in-app.",
      "Set up the unit testing framework for codebases using jest and automock (for database mocking).",
      "Documented the APIs and set up easy-to-use Postman collections and flows for the engineering team.",
      "Daily tasks include adding new features, fixing bugs and making design decisions."
    ]
  },
  {
    company: "MathWorks",
    companyUrl: "https://mathworks.com",
    position: "Software Engineer",
    duration: "Jul '21 - Mar '23 (1 yr 8 mos)",
    location: "Remote",
    techStack: [
      "Python",
      "Docker",
      "Ansible",
      "Hashicorp Vault",
      "Javascript",
      "MongoDB",
      "C",
      "GitLab Ops",
      "OpenStack"
    ],
    responsibilities: [
      "Migrated internal applications from HTTP to HTTPS.",
      "Set up Hashicorp Vault using Terraform for secrets management for apps to be deployed on AWS.",
      "Developed an internal tool in Python to configure the internal cloud hosted using OpenStack.",
      "Developed an Express.js + MongoDB backend for an internal dashboard application.",
      "Did an exploratory and hands-on study on writing a C driver for a temperature sensor for Raspberry Pi."
    ]
  },
  {
    company: "OffTrade",
    position: "CTO",
    duration: "Jan '20 - Jun '21 (1 yr 6 mos)",
    location: "Delhi, India",
    techStack: [
      "Django",
      "FastAPI",
      "SQLAlchemy",
      "AWS",
      "Hashicorp Vault",
      "Redis"
    ],
    responsibilities: [
      "Wrote the entire backend using Django and FastAPI (two microservices)",
      "Set up CI/CD to test and deploy on AWS.",
      "Integrated with the following third-party APIs: PayU (payments backend), Firebase (notifications backend), Hashicorp Vault (app secrets backend), Google Sign In and Datadog (site monitoring backend).",
      "Configured DNS and DDoS protection using Cloudflare."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building scalable backend systems and leading engineering initiatives across startups and enterprises
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {experienceData.map((job, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < experienceData.length - 1 && (
                <div className="absolute left-4 top-24 w-0.5 h-full bg-gradient-to-b from-teal-500 to-slate-300 z-0"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-8 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className="ml-12 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.position}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="text-teal-600" size={18} />
                        {job.companyUrl ? (
                          <a 
                            href={job.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-colors duration-200 cursor-pointer"
                          >
                            {job.company}
                          </a>
                        ) : (
                          <span className="text-lg font-semibold text-slate-800">{job.company}</span>
                        )}
                      </div>
                      {job.companyDetails && (
                        <p className="text-sm text-teal-600 font-medium mb-2">{job.companyDetails}</p>
                      )}
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-white">
                        <Calendar size={16} />
                        <span className="font-medium">{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {job.techStack.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="text-orange-500" size={18} />
                        <h4 className="font-semibold text-slate-800">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;