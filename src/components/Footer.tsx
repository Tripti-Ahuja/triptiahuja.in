import React from 'react';
import { Mail, Phone, Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:reeshabhkumarranjan@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors font-medium"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a
              href="tel:+919015201494"
              className="flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-medium"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
            <a
              href="https://github.com/reeshabhranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-medium"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/reeshabh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-medium"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <span>Built with</span>
              <Heart className="text-red-500" size={16} />
              <span>by Reeshabh Kumar Ranjan</span>
            </div>
            <p className="text-slate-500 mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;