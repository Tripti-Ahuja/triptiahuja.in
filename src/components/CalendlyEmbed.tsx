import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface CalendlyConfig {
  url: string;
  title: string;
}

interface CalendlyEmbedProps {
  config: CalendlyConfig;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ config }) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-3">
        <Calendar size={16} className="text-slate-600" />
        <h3 className="text-base md:text-lg font-semibold text-slate-900">{config.title}</h3>
      </div>
      
      {/* Calendly inline widget */}
      <div 
        className="calendly-inline-widget" 
        data-url={config.url}
        style={{ minWidth: '280px', height: '790px' }}
      />
      
      {/* Alternative: Calendly button */}
      {/* 
      <button
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-xs md:text-sm font-medium rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
        onClick={() => {
          // @ts-ignore
          if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initPopupWidget({
              url: config.url
            });
          }
        }}
      >
        <Calendar size={14} className="md:w-4 md:h-4" />
        Book a Meeting
      </button>
      */}
      
      <p className="text-xs text-slate-500 mt-3 text-center">
        Pick a time that works for you
      </p>
    </div>
  );
};

export default CalendlyEmbed;