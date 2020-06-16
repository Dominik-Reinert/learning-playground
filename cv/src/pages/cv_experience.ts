
export interface CvExperience {
    order: number;
    institute: string;
    date: {
      start: number;
      end: number;
    };
    headline: string;
    text?: string;
    location: string;
    locationWebsite?: string;
  }