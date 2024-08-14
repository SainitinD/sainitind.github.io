import { PersonalSkill } from "./PersonalSkill";

export interface About {
  firstname: string;
  lastname: string;
  description: string;
  imgSrc: string;
  jobTitleFull: string;
  jobTitleEmphasis: string;
  jobTitleNonEmphasis: string;
  skills: PersonalSkill[],
}
