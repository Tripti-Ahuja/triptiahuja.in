import React from 'react';
import { Code, Database, Cloud, Settings, Wrench, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-500" size={24} />,
      skills: ["Python", "Javascript", "Typescript", "C"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frameworks",
      icon: <Wrench className="text-green-500" size={24} />,
      skills: ["Django", "Django Rest Framework", "FastAPI", "NestJS", "Express.js"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      icon: <Database className="text-purple-500" size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Redis"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-orange-500" size={24} />,
      skills: ["AWS", "GCP"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "DevOps Tools",
      icon: <Settings className="text-teal-500" size={24} />,
      skills: ["Docker", "Ansible", "Terraform", "Apache Kafka", "Hashicorp Vault", "GitLab Ops"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Other Technologies",
      icon: <Globe className="text-pink-500" size={24} />,
      skills: ["OpenStack", "Cloudflare", "Firebase", "PayU", "Datadog"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across modern backend technologies, cloud platforms, and DevOps practices
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-slate-200"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 rounded-t-xl`}>
                <div className="flex items-center gap-3 text-white">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domain Expertise Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Domain Expertise</h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                domain: "Artificial Intelligence & Machine Learning",
                description: "Current role at deeptune.ai focusing on AI-driven solutions and machine learning applications",
                technologies: ["Python", "AI/ML frameworks", "Data processing"]
              },
              {
                domain: "Financial Technology (FinTech)",
                description: "Founding Software Engineer at nsave (YC 2022 | Sequoia Capital), built core financial services infrastructure",
                technologies: ["NestJS", "PostgreSQL", "Microservices", "Payment APIs"]
              },
              {
                domain: "Music Technology",
                description: "Senior Software Engineer at multithread.ai, developing backend systems for music-tech industry",
                technologies: ["Node.js", "AWS", "GCP", "Real-time processing"]
              },
              {
                domain: "DevOps & Infrastructure",
                description: "Extensive DevOps experience across multiple startups, specializing in cloud infrastructure and deployment automation",
                technologies: ["Docker", "Ansible", "Terraform", "AWS", "GCP", "Hashicorp Vault"]
              }
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4">{expertise.domain}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">{expertise.description}</p>
                <div className="flex flex-wrap gap-2">
                  {expertise.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;