export interface WorkExperience {
  id: number;
  role: string;
  company: string;
  startYear: number;
  startMonthNumber: number;
  jobDescription: string;
  skills: string[];
  isCurrentJob: boolean;
  endYear?: number | null;
  endMonthNumber?: number | null;
}
