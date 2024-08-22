import { ref } from "vue";
import { NamedService } from "./abstract/named-service";
import { Project } from "../models/Project";
import projectsData from '@data/projects.json';
import { ProjectCategory } from "../models/ProjectCategory";

export class ProjectService implements NamedService{
    public static serviceName = 'ProjectService';
    public serviceName = ProjectService.serviceName;

    private _projects = ref<Project[]>([]);
    private _categories = ref<ProjectCategory[]>([]);
    private _selectedCategory = ref<ProjectCategory>({
        id: 0,
        title: "All"
    });

    // default constructor
    constructor() {
        this.getProjects();
        this.getCategories();
    }

    public get projects() : Project[] {
        return this._projects.value;
    }

    public set projects(projects : Project[]) {
        this._projects.value = projects;
    }

    public get categories() : ProjectCategory[] {
        return this._categories.value;
    }

    public set categories(categories : ProjectCategory[]) {
        this._categories.value = categories;
    }

    public get selectedCategory(): ProjectCategory {
        return this._selectedCategory.value;
    }

    public set selectedCategory(selectedCategory : ProjectCategory) {
        this._selectedCategory.value = selectedCategory;
    } 

    public getProjects() : void {
        this.projects = projectsData as Project[];
    }

    public getCategories() : void {
        const allCategories : ProjectCategory = {
            id: 0,
            title: "All"
        };
        this.categories.push(allCategories);
        this.categories = this.categories.concat(this.projects.map(project => project.category) as ProjectCategory[] ?? []);
    }

    public getUniqueCategories() : ProjectCategory[] {
        const uniqueCategories = [...new Map(this.categories.map(category => [category['id'], category])).values()];
        return uniqueCategories;
    }

    public getCategoryCount(categoryId : number) : number {
        if (this.projects.length == 0) {
            console.log("Error: No project info fetched");
            return 0;
        }
        if (categoryId == 0) {
            return this.projects.length;
        }
        return this.projects.filter(p => p.category.id == categoryId).length;
    }

    public filteredProjects() : Project[] {
        if (this.selectedCategory.id == 0) {
            return this.projects;
        }
        return this.projects.filter(p => p.category.id == this.selectedCategory.id);
    }
}