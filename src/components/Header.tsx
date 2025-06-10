import React from 'react';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Calendar, Building, Award, Users, TrendingUp, MessageCircle, FileText } from 'lucide-react';

const Header: React.FC = () => {
  const experiences = [
    {
      company: "Deeptune",
      companyUrl: "https://deeptune.ai",
      companyLogo: "/logos/deeptune.jpg",
      logoColor: "bg-white",
      position: "Senior Software Engineer",
      duration: "Jun '25 - Present",
      description: "AI-driven solutions and machine learning applications development",
      tech: ["AI/ML", "Python", "LLMs"],
      tags: ["AI", "Contract", "New York", "Remote"]
    },
    {
      company: "ScaleXP",
      companyUrl: "https://scalexp.com",
      companyLogo: "/logos/scalexp.jpg",
      logoColor: "bg-white",
      position: "Senior Software Engineer",
      duration: "Jan '25 - May '25",
      description: "Backend development and system architecture for scaling enterprise solutions",
      tech: ["Python", "Node.js", "AWS", "PostgreSQL"],
      tags: ["Contract", "London", "FinTech", "Remote"]
    },
    {
      company: "Multithread",
      companyUrl: "https://multithread.ai",
      companyLogo: "/logos/multithread.jpg",
      logoColor: "bg-white",
      position: "Senior Software Engineer", 
      duration: "May '24 - Dec '24",
      description: "Backend and DevOps for early-stage US music-tech, UK AI productivity, and Series F food-tech startups",
      tech: ["TypeScript", "AWS ECS", "GCP", "Node.js", "PostgreSQL"],
      tags: ["Founding", "Tech Lead", "Contract", "San Francisco", "MusicTech", "Remote"]
    },
    {
      company: "TradeTechSolutions",
      companyUrl: "https://tradetechsolutions.io",
      companyLogo: "/logos/tradetechsolutions.jpg",
      logoColor: "bg-white",
      position: "Senior Software Engineer",
      duration: "Mar '24 - May '24",
      description: "Developed trading application achieving $1M+ ARR",
      highlight: "$1M+ ARR",
      tech: ["Python", "Trading APIs", "Real-time Systems"],
      tags: ["Founding", "Contract", "UAE", "FinTech", "Remote"]
    },
    {
      company: "nsave",
      companyUrl: "https://nsave.com",
      companyLogo: "/logos/nsave.jpg",
      logoColor: "bg-white",
      position: "Founding Software Engineer",
      duration: "Mar '23 - Mar '24",
      highlight: "YC 2022 | Sequoia Capital",
      description: "First engineer, 0->1 product development. Built core FinTech infrastructure from ground up",
      tech: ["NestJS", "Apache Kafka", "PostgreSQL", "Microservices"],
      tags: ["YC 2022", "Sequoia", "Founding", "Contract", "London", "FinTech", "Remote"]
    },
    {
      company: "MathWorks",
      companyUrl: "https://mathworks.com",
      companyLogo: "/logos/mathworks.jpg",
      logoColor: "bg-white",
      position: "Software Engineer",
      duration: "Jul '21 - Mar '23",
      description: "Infrastructure automation, cloud migration, and internal tooling development",
      tech: ["Python", "Docker", "Ansible", "Hashicorp Vault", "AWS"],
      tags: ["BigTech", "Full-time", "Bangalore", "Scientific", "Remote"]
    },
    {
      company: "OffTrade",
      companyLogo: "/logos/offtrade.jpg",
      logoColor: "bg-white",
      position: "CTO",
      duration: "Jan '20 - Jun '21",
      description: "Built entire backend architecture using microservices. Set up CI/CD and integrated payment systems",
      tech: ["Django", "FastAPI", "AWS", "Redis"],
      tags: ["Founder", "Full-time", "Bangalore", "FinTech", "Remote"]
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
      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Reeshabh Kumar Ranjan
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-4">Senior Software Engineer</p>
            <p className="text-sm sm:text-base text-slate-500 max-w-3xl mx-auto leading-relaxed px-4">
              Experienced in <span className="font-semibold text-slate-700">AI, AWS, Python, LLMs, and SaaS</span> development. 
              Specialized in <span className="font-semibold text-slate-700">0→1 product development</span> at 
              <span className="font-semibold text-slate-700"> YC and Sequoia-backed startups</span>. 
              Former founding engineer with expertise in early-stage, founding team environments.
            </p>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-col items-center gap-3 md:gap-4 mb-8 md:mb-10 px-2">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-full">
              <a href="mailto:reeshabhkumarranjan@gmail.com" 
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <Mail size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">Email</span>
              </a>
              <a href="https://t.me/whadupdog" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <MessageCircle size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">Telegram</span>
              </a>
              <a href="https://discord.com/users/mrobjectoriented" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <MessageCircle size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">Discord</span>
              </a>
              <a href="https://github.com/reeshabhranjan" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <Github size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/reeshabh" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <Linkedin size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">LinkedIn</span>
              </a>
              <div className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                <MapPin size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">Remote</span>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <FileText size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">Resume</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12 px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">5+</div>
              <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">7</div>
              <div className="text-xs sm:text-sm text-slate-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">4</div>
              <div className="text-xs sm:text-sm text-slate-600">Founding Roles</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
            
            {/* Experience & Projects Column */}
            <div className="lg:col-span-3 space-y-6 md:space-y-8">
              
              {/* Experience Section */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Experience</h2>
                <div className="space-y-3 md:space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200 hover:shadow-md transition-all">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-semibold text-slate-900">{exp.position}</h3>
                          <div className="flex items-center gap-3 mt-1 flex-wrap">
                            {/* Company Logo */}
                            <div className={`w-8 h-8 rounded-lg ${exp.logoColor} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                              {exp.companyLogo && (exp.companyLogo.startsWith('http') || exp.companyLogo.startsWith('/')) ? (
                                <img 
                                  src={exp.companyLogo} 
                                  alt={`${exp.company} logo`}
                                  className="w-6 h-6 object-contain"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = `<span class="text-white font-semibold text-xs">${exp.company.charAt(0)}</span>`;
                                  }}
                                />
                              ) : (
                                <span className="text-white font-semibold text-xs">{exp.companyLogo}</span>
                              )}
                            </div>
                            {exp.companyUrl ? (
                              <a 
                                href={exp.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm md:text-base bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent hover:from-teal-700 hover:to-blue-700 hover:underline font-medium transition-all duration-200"
                              >
                                {exp.company}
                              </a>
                            ) : (
                              <span className="text-sm md:text-base bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-medium">{exp.company}</span>
                            )}
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
                              else if (tag === "Remote") tagStyle += " bg-gray-100 text-gray-700";
                              else if (["New York", "London", "San Francisco", "UAE", "Boston", "Bangalore"].includes(tag)) tagStyle += " bg-yellow-100 text-yellow-700";
                              else if (["FinTech", "MusicTech", "Scientific"].includes(tag)) tagStyle += " bg-green-100 text-green-700";
                              else tagStyle += " bg-slate-100 text-slate-700";
                              
                              return (
                                <span key={tagIndex} className={tagStyle}>
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <span className="text-xs md:text-sm text-slate-500 font-medium whitespace-nowrap">{exp.duration}</span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 mb-3 leading-relaxed">{exp.description}</p>
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
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Key Projects</h2>
                <div className="space-y-3 md:space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200 hover:shadow-md transition-all">
                      <div className="flex items-start gap-2 md:gap-3">
                        {project.icon}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                            <h3 className="text-sm md:text-base font-semibold text-slate-900">{project.name}</h3>
                            <div className="flex gap-1.5 flex-wrap">
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
                          <p className="text-xs md:text-sm text-slate-600 mb-3 leading-relaxed">{project.description}</p>
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
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              
              {/* Startup Experience Highlight */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 md:p-5 border border-blue-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Startup Expertise</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">0→1 Product Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">YC & Sequoia Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">Founding Team Member</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">Early Stage Specialist</span>
                  </div>
                </div>
              </div>

              {/* Domain Expertise */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4">Domain Expertise</h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">AI/ML & LLM Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">FinTech & Trading Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">Music & Productivity Tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-xs md:text-sm">AWS & Cloud Infrastructure</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4">Core Technologies</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-xs md:text-sm">AI & Languages</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "LLMs", "AI/ML", "TypeScript", "JavaScript"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-xs md:text-sm">SaaS & Frameworks</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Django", "FastAPI", "NestJS", "Node.js", "SaaS"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-xs md:text-sm">AWS & Cloud</h4>
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
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Publication</h3>
                <div>
                  <h4 className="font-medium text-slate-900 text-xs md:text-sm leading-tight mb-1">
                    VoIP Vanguard: Defense Against VoIP Attacks in Tor
                  </h4>
                  <p className="text-slate-600 text-xs">NSS-SocialSec 2024</p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Education</h3>
                <div>
                  <h4 className="font-medium text-slate-900 text-xs md:text-sm">B.Tech Computer Science</h4>
                  <p className="text-slate-600 text-xs md:text-sm">IIIT Delhi</p>
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