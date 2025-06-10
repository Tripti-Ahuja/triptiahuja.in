import React from 'react';
import { ExternalLink, Users, Building2, Heart, Code2 } from 'lucide-react';

interface Project {
  name: string;
  type?: string;
  description: string;
  techStack: string[];
  isOpenSource?: boolean;
  users?: string;
  client?: string;
  status?: string;
}

const projectsData: Project[] = [
  {
    name: "Research Mentoring Platform",
    type: "Open Source",
    description: "Worked for two semesters to write the backend of a mentorship platform. Later hired, delegated work and mentored 6 interns over a span of 1.5 years. The final product was handed over to ACM India (the Indian branch of the Association for Computing Machinery, focused on advancing computing).",
    techStack: ["Django", "Django Rest Framework"],
    isOpenSource: true
  },
  {
    name: "Academic Portal for IIIT-Delhi",
    description: "Worked for a summer to develop the Self Growth and Community Work registration/logging website backend, actively being used by around 3000 students and the academic department of IIIT-Delhi daily.",
    techStack: ["Django", "Django Rest Framework"],
    users: "~3000 students"
  },
  {
    name: "OSRTC Bus Ticket Management",
    description: "Worked for two months on the backend development of a bus ticketing system used by the state government of Odisha, India.",
    techStack: ["Django", "Django Rest Framework"],
    client: "State Government of Odisha, India"
  },
  {
    name: "Social Media App",
    description: "Worked for two months on the backend development of a social media platform which later went to market.",
    techStack: ["Django", "Django Rest Framework"],
    status: "Launched to market"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Impactful projects ranging from open-source platforms to government systems, serving thousands of users
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                    {project.type && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        <Heart size={14} />
                        {project.type}
                      </span>
                    )}
                  </div>
                  {project.isOpenSource && (
                    <ExternalLink className="text-slate-400 hover:text-teal-500 transition-colors" size={20} />
                  )}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Project Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.users && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <Users size={16} />
                      <span className="text-sm font-medium">{project.users}</span>
                    </div>
                  )}
                  {project.client && (
                    <div className="flex items-center gap-2 text-purple-600">
                      <Building2 size={16} />
                      <span className="text-sm font-medium">{project.client}</span>
                    </div>
                  )}
                  {project.status && (
                    <div className="flex items-center gap-2 text-green-600">
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">{project.status}</span>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="text-orange-500" size={18} />
                    <h4 className="font-semibold text-slate-800">Technologies Used</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;