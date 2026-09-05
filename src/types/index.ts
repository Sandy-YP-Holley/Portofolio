export interface Screenshot {
  url: string;
  title: string;
  description: string;
  category?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  detail?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  tag?: string;
}

export interface EngineeringHighlight {
  title: string;
  detail: string;
  threatOrImpact?: string;
}

export interface ProjectRole {
  role: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface ResearchModelMetric {
  model: string;
  dataset: string;
  precision: string;
  recall: string;
  map50: string;
  inference: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  positioning: string;
  category: 'Flagship Full-Stack' | 'MERN Workspace' | 'Core JS Architecture' | 'Computer Vision Research';
  isFlagship?: boolean;
  summary: string;
  keyTech: string[];
  allTech: { category: string; items: string[] }[];
  liveUrl?: string;
  repositoryUrl: string;
  deploymentStatus: {
    type: 'live' | 'frontend_only' | 'research_repo';
    badge: string;
    note?: string;
  };
  metrics?: MetricItem[];
  features: FeatureItem[];
  engineeringHighlights: EngineeringHighlight[];
  screenshots: Screenshot[];
  roles?: ProjectRole[];
  qaArtifacts?: { name: string; description: string }[];
  researchData?: {
    datasetDescription: string;
    metrics: ResearchModelMetric[];
    keyFindings: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  impactKeywords: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  items: {
    name: string;
    context: string;
    highlight?: boolean;
  }[];
}
