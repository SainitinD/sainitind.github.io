export interface WorkExperience {
  role: string;
  company: string;
  startYear: number;
  startMonthNumber: number;
  jobDescription: string;
  skills: string[];
  isCurrentJob: boolean;
  endYear?: number | null;
  endMonth?: number | null;
}
