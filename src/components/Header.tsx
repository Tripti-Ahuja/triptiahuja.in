import React from 'react';
import { Mail, Github, Linkedin, MapPin, MessageCircle, Award, Users, Building } from 'lucide-react';
import CalendlyEmbed from './CalendlyEmbed';
import { Config } from '../utils/configLoader';

interface HeaderProps {
  config: Config;
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const getTagStyle = (tag: string): string => {
    if (config.tagColors[tag]) return config.tagColors[tag];
    if (config.tagColors.locationTags?.includes(tag)) return "bg-yellow-100 text-yellow-700";
    if (config.tagColors.industryTags?.includes(tag)) return "bg-green-100 text-green-700";
    if (tag.includes("$1M")) return "bg-emerald-100 text-emerald-700";
    return "bg-slate-100 text-slate-700";
  };

  const getProjectIcon = (iconType: string) => {
    const iconClass = config.projectIconColors[iconType] || "text-gray-500";
    switch(iconType) {
      case 'award':
        return <Award className={iconClass} size={16} />;
      case 'users':
        return <Users className={iconClass} size={16} />;
      case 'building':
        return <Building className={iconClass} size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              {config.personal.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-4">{config.personal.title}</p>
            <p className="text-sm sm:text-base text-slate-500 max-w-3xl mx-auto leading-relaxed px-4">
              Experienced in <span className="font-semibold text-slate-700">Data Analytics, Python, and Cloud Engineering (AWS & Azure)</span>. 
              Specialized in <span className="font-semibold text-slate-700">building scalable data pipelines, analytics platforms, and cloud-native solutions</span>. 
              Certified AWS Cloud Practitioner and Microsoft Azure Fundamentals (AZ-900), with hands-on experience across analytics, data engineering, and cloud infrastructure.
            </p>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-col items-center gap-3 md:gap-4 mb-8 md:mb-10 px-2">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-full">
              <a href={`mailto:${config.contact.email}`} 
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <Mail size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">Email</span>
              </a>
              <a href={config.contact.telegram} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <MessageCircle size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">Telegram</span>
              </a>
              <a href={config.contact.github} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <Github size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">GitHub</span>
              </a>
              <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200">
                <Linkedin size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">LinkedIn</span>
              </a>
              <div className="flex items-center justify-center gap-2 w-28 md:w-32 px-2 md:px-3 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                <MapPin size={14} className="text-slate-600 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-slate-700">{config.personal.location}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">{config.personal.stats.yearsExperience}</div>
              <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">{config.personal.stats.companies}</div>
              <div className="text-xs sm:text-sm text-slate-600">Companies</div>
            </div>
          </div>

          {/* Featured Certifications - Card Style with Images */}
          <div className="mb-8 md:mb-12 px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a href={config.featuredCertifications[0]?.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 shadow-lg border-2 border-orange-500 hover:shadow-xl hover:scale-105 transition-all duration-200 w-64">
                <div className="flex items-center gap-3">
                  <img src="/logos/AWS.jpg" alt="AWS" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm">AWS Certified</p>
                    <p className="text-xs text-slate-600">Cloud Practitioner</p>
                  </div>
                </div>
              </a>
              <a href={config.featuredCertifications[1]?.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 shadow-lg border-2 border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-200 w-64">
                <div className="flex items-center gap-3">
                  <img src="/logos/microsoft.jpg" alt="Microsoft" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm">Microsoft Azure</p>
                    <p className="text-xs text-slate-600">Fundamentals (AZ-900)</p>
                  </div>
                </div>
              </a>
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
                  {config.experiences.map((exp, index) => (
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
                                <span className="text-white font-semibold text-xs">{exp.companyLogo || exp.company.charAt(0)}</span>
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
                            {exp.tags && exp.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className={`px-2 py-1 text-xs rounded-full font-medium ${getTagStyle(tag)}`}>
                                {tag}
                              </span>
                            ))}
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
                  {config.projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200 hover:shadow-md transition-all">
                      <div className="flex items-start gap-2 md:gap-3">
                        {getProjectIcon(project.icon)}
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
            <div className="lg:col-span-2 space-y-4 md:space-y-6 lg:mt-12 xl:mt-14">
              
              {/* Certifications */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Certifications</h3>
                <div className="space-y-2">
                  {config.certifications.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'][index % 4]} rounded-full flex-shrink-0`}></div>
                      <span className="text-slate-700 text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Expertise */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4">Domain Expertise</h3>
                <div className="space-y-2.5">
                  {config.domainExpertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'][index % 5]} rounded-full flex-shrink-0`}></div>
                      <span className="text-slate-700 text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4">Core Technologies</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-xs md:text-sm">Data Engineering & Analytics</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {config.skills.aiLanguages.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-xs md:text-sm">Databases & Storage</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {config.skills.saasFrameworks.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2 text-xs md:text-sm">Cloud</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {config.skills.cloud.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Education</h3>
                <div className="space-y-3">
                  {config.education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-slate-900 text-xs md:text-sm">{edu.degree}</h4>
                      <p className="text-slate-600 text-xs md:text-sm">
                        <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {edu.institution}
                        </a>
                      </p>
                      <p className="text-slate-500 text-xs">{edu.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendly Embed */}
              <CalendlyEmbed config={config.calendly} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;