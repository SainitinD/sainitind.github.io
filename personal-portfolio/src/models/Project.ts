import { ProjectCategory } from "./ProjectCategory";

export interface Project {
    title: string;
    category: ProjectCategory;
    imgSrc?: string | null;
    description: string;
    techStack: string[];
}