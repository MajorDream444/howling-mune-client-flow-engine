export interface Pathway {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  coreFocus: string;
  somaticFocus: string;
  photographyFocus: string;
  description: string;
  suitableFor: string[];
  ritualProcess: string[];
}

export interface ReflectionQuestion {
  id: string;
  text: string;
  choices: {
    text: string;
    description: string;
    pathwayId: string; // which pathway this points to
    iconName: string; // Lucide icon lookup
  }[];
}

export interface ClientLetter {
  id: string;
  author: string;
  location: string;
  context: string;
  text: string;
  date: string;
}
