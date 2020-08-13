export interface CvExperience {
  order: number;
  institute: string;
  date: {
    start: string;
    end: string;
  };
  headline: string;
  text?: string;
  location: string;
  locationWebsite?: string;
}
