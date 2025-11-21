
export interface StrategySections {
  instructional: string[];
  environmental: string[];
  assessment: string[];
}

export interface SlideContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  learningImpact: string[];
  behavioralImpact: string[];
  strategies: StrategySections;
  color: string;
  iconName: 'Brain' | 'MessageSquare' | 'Shapes' | 'Zap' | 'HardDrive' | 'Activity' | 'BookOpen';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum WiscIndex {
  VCI = 'VCI',
  VSI = 'VSI',
  FRI = 'FRI',
  WMI = 'WMI',
  PSI = 'PSI'
}
