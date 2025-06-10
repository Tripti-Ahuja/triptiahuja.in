import React from 'react';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Calendar, Building, Award, Users, TrendingUp, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const experiences = [
    {
      company: "deeptune.ai",
      position: "Senior Software Engineer",
      duration: "Jun '25 - Present",
      description: "AI-driven solutions and machine learning applications development",
      tech: ["AI/ML", "Python", "LLMs"],
      tags: ["AI", "$1M+ ARR", "Contract"]
    },
    {
      company: "ScaleXP",
      position: "Senior Software Engineer",
      duration: "Jan '25 - May '25",
      description: "Backend development and system architecture for scaling enterprise solutions",
      tech: ["Python", "Node.js", "AWS", "PostgreSQL"],
      tags: ["Contract"]
    },
    {
      company: "multithread.ai",
      position: "Senior Software Engineer", 
      duration: "May '24 - Dec '24",
      description: "Backend and DevOps for early-stage US music-tech, UK AI productivity, and Series F food-tech startups",
      tech: ["TypeScript", "AWS ECS", "GCP", "Node.js", "PostgreSQL"],
      tags: ["Founding", "Tech Lead", "Contract"]
    },
    {
      company: "tradingtechsolutions",
      position: "Senior Software Engineer",
      duration: "Mar '24 - May '24",
      description: "Developed trading application achieving $1M+ ARR",
      highlight: "$1M+ ARR",
      tech: ["Python", "Trading APIs", "Real-time Systems"],
      tags: ["Founding", "$1M+ ARR", "Contract"]
    },
    {
      company: "nsave",
      position: "Founding Software Engineer",
      duration: "Mar '23 - Mar '24",
      highlight: "YC 2022 | Sequoia Capital",
      description: "First engineer, 0->1 product development. Built core FinTech infrastructure from ground up",
      tech: ["NestJS", "Apache Kafka", "PostgreSQL", "Microservices"],
      tags: ["YC 2022", "Sequoia", "Founding", "Contract"]
    },
    {
      company: "MathWorks",
      position: "Software Engineer",
      duration: "Jul '21 - Mar '23",
      description: "Infrastructure automation, cloud migration, and internal tooling development",
      tech: ["Python", "Docker", "Ansible", "Hashicorp Vault", "AWS"],
      tags: ["BigTech", "Full-time"]
    },
    {
      company: "OffTrade",
      position: "CTO",
      duration: "Jan '20 - Jun '21",
      description: "Built entire backend architecture using microservices. Set up CI/CD and integrated payment systems",
      tech: ["Django", "FastAPI", "AWS", "Redis"],
      tags: ["Founder", "Full-time"]
    }
  ];

  const projects = [
    {
      name: "Research Mentoring Platform",
      description: "Backend for mentorship platform handed over to ACM India. Mentored 6 interns over 1.5 years.",
      tech: ["Django", "DRF"],
      type: "Open Source",
      icon: <Award className="text-blue-500" size={16} />
    },
    {
      name: "Academic Portal IIIT-Delhi",
      description: "Self Growth & Community Work registration system serving the academic department daily.",
      tech: ["Django", "DRF"],
      users: "3K+ users",
      icon: <Users className="text-green-500" size={16} />
    },
    {
      name: "OSRTC Bus Ticketing",
      description: "State government bus ticketing system for Odisha, India.",
      tech: ["Django", "DRF"],
      client: "Government",
      icon: <Building className="text-purple-500" size={16} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Reeshabh Kumar Ranjan
            </h1>
            <p className="text-xl text-slate-600 mb-4">Senior Software Engineer</p>
            <p className="text-base text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Experienced in <span className="font-semibold text-slate-700">AI, AWS, Python, LLMs, and SaaS</span> development. 
              Specialized in <span className="font-semibold text-slate-700">0→1 product development</span> at 
              <span className="font-semibold text-slate-700"> YC and Sequoia-backed startups</span>. 
              Former founding engineer with expertise in early-stage, founding team environments.
            </p>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:reeshabhkumarranjan@gmail.com" 
               className="flex items-center justify-center gap-2 w-32 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
              <Mail size={16} className="text-slate-600" />
              <span className="text-sm text-slate-700">Email</span>
            </a>
            <a href="https://t.me/whadupdog" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-32 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
              <MessageCircle size={16} className="text-slate-600" />
              <span className="text-sm text-slate-700">Telegram</span>
            </a>
            <a href="https://discord.com/users/mrobjectoriented" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-32 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
              <MessageCircle size={16} className="text-slate-600" />
              <span className="text-sm text-slate-700">Discord</span>
            </a>
            <a href="https://github.com/reeshabhranjan" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-32 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
              <Github size={16} className="text-slate-600" />
              <span className="text-sm text-slate-700">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/reeshabh" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-32 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
              <Linkedin size={16} className="text-slate-600" />
              <span className="text-sm text-slate-700">LinkedIn</span>
            </a>
            <div className="flex items-center justify-center gap-2 w-32 px-3 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <MapPin size={16} className="text-slate-600" />
              <span className="text-sm text-slate-700">Remote</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">5+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">7</div>
              <div className="text-sm text-slate-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">4</div>
              <div className="text-sm text-slate-600">Founding Roles</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* Experience & Projects Column */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Experience Section */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Experience</h2>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-slate-200 hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900">{exp.position}</h3>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-base text-slate-700">{exp.company}</span>
                            {exp.tags && exp.tags.map((tag, tagIndex) => {
                              let tagStyle = "px-2 py-1 text-xs rounded-full font-medium";
                              if (tag === "YC 2022") tagStyle += " bg-blue-100 text-blue-700";
                              else if (tag === "Sequoia") tagStyle += " bg-purple-100 text-purple-700";
                              else if (tag.includes("$1M")) tagStyle += " bg-emerald-100 text-emerald-700";
                              else if (tag === "AI") tagStyle += " bg-indigo-100 text-indigo-700";
                              else if (tag === "Founding") tagStyle += " bg-orange-100 text-orange-700";
                              else if (tag === "Founder") tagStyle += " bg-red-100 text-red-700";
                              else if (tag === "Tech Lead") tagStyle += " bg-teal-100 text-teal-700";
                              else if (tag === "BigTech") tagStyle += " bg-teal-100 text-teal-700";
                              else if (tag === "Contract") tagStyle += " bg-blue-100 text-blue-700";
                              else if (tag === "Full-time") tagStyle += " bg-blue-100 text-blue-700";
                              else tagStyle += " bg-slate-100 text-slate-700";
                              
                              return (
                                <span key={tagIndex} className={tagStyle}>
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <span className="text-sm text-slate-500 font-medium whitespace-nowrap ml-4">{exp.duration}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Projects</h2>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-slate-200 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        {project.icon}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-base font-semibold text-slate-900">{project.name}</h3>
                            <div className="flex gap-1.5 ml-4">
                              {project.type && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium whitespace-nowrap">{project.type}</span>
                              )}
                              {project.users && (
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium whitespace-nowrap">{project.users}</span>
                              )}
                              {project.client && (
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium whitespace-nowrap">{project.client}</span>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mb-3 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Startup Experience Highlight */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border border-blue-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Startup Expertise</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">0→1 Product Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">YC & Sequoia Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">Founding Team Member</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">Early Stage Specialist</span>
                  </div>
                </div>
              </div>

              {/* Domain Expertise */}
              <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Domain Expertise</h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">AI/ML & LLM Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">FinTech & Trading Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">Music & Productivity Tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">AWS & Cloud Infrastructure</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Core Technologies</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-sm">AI & Languages</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "LLMs", "AI/ML", "TypeScript", "JavaScript"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-sm">SaaS & Frameworks</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Django", "FastAPI", "NestJS", "Node.js", "SaaS"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-sm">AWS & Cloud</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["AWS", "GCP", "Docker", "Kafka", "PostgreSQL"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Publication */}
              <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Publication</h3>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm leading-tight mb-1">
                    VoIP Vanguard: Defense Against VoIP Attacks in Tor
                  </h4>
                  <p className="text-slate-600 text-xs">NSS-SocialSec 2024</p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Education</h3>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">B.Tech Computer Science</h4>
                  <p className="text-slate-600 text-sm">IIIT Delhi</p>
                  <p className="text-slate-500 text-xs">CGPA: 9.01/10 • 2017-2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;