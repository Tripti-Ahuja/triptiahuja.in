export interface Config {
  personal: {
    name: string;
    title: string;
    description: {
      highlights: string[];
      specialization: string;
      experience: string;
      expertise: string;
    };
    location: string;
    stats: {
      yearsExperience: string;
      companies: number;
    };
  };
  contact: {
    email: string;
    telegram: string;
    github: string;
    linkedin: string;
  };
  calendly: {
    url: string;
    title: string;
  };
  experiences: Array<{
    company: string;
    companyUrl?: string;
    companyLogo?: string;
    logoColor: string;
    position: string;
    duration: string;
    description: string;
    highlight?: string;
    tech: string[];
    tags: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    tech: string[];
    type?: string;
    users?: string;
    client?: string;
    icon: string;
  }>;
  startupExpertise: string[];
  domainExpertise: string[];
  skills: {
    aiLanguages: string[];
    saasFrameworks: string[];
    cloud: string[];
  };
  publication: {
    title: string;
    url: string;
    venue: string;
  };
  education: {
    degree: string;
    institution: string;
    institutionUrl: string;
    cgpa: string;
    duration: string;
  };
  tagColors: {
    [key: string]: string | string[];
    locationTags: string[];
    industryTags: string[];
  };
  projectIconColors: {
    [key: string]: string;
  };
}

export async function loadConfig(): Promise<Config> {
  try {
    const response = await fetch('/config.json');
    if (!response.ok) {
      throw new Error(`Failed to load config: ${response.statusText}`);
    }
    const config = await response.json();
    return config;
  } catch (error) {
    console.error('Error loading configuration:', error);
    throw error;
  }
}