import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { loadConfig, Config } from './utils/configLoader';

function App() {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConfig()
      .then(config => {
        setConfig(config);
        // Set the document title from config
        document.title = `${config.personal.name} - Senior Data & Cloud Engineer Portfolio`;
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">Error loading configuration: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header config={config} />
    </div>
  );
}

export default App;