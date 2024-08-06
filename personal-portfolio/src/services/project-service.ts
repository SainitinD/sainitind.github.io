import { ref } from "vue";
import { NamedService } from "./abstract/named-service";
import { Project } from "../models/Project";
import { ProjectCategory } from "../models/enums/project-category";
import projectsData from '@data/projects.json';

export class ProjectService implements NamedService{
    public static serviceName = 'ProjectService';
    public serviceName = ProjectService.serviceName;

    private _projects = ref<Project[]>([]);

    // default constructor
    constructor() {}

    public get projects() : Project[] {
        return this._projects.value;
    }

    public set projects(projects : Project[]) {
        this._projects.value = projects;
    }

    public getProjects() : void {
        this.projects = projectsData as Project[];
        console.log(this.projects.length);
    }

    public getCategoryCount(category: ProjectCategory | null | undefined) : number {
        if (this.projects.length == 0) {
            console.log("Error: No project info fetched");
            return 0;
        }
        return this.projects.filter(p => p.categoryNumber == category).length;
    }
}