import { ProjectCategory } from "./enums/project-category";

export interface Project {
    title: string;
    category?: string | null;
    categoryNumber?: ProjectCategory | null;
    imgSrc?: string | null;
}