import { inject } from "vue";
import { Lazy } from "./lazy";
import { ProjectService } from "./project-service";
import { ServiceNames } from "./service-names";

export interface ServiceProvider {
    projectService: ProjectService;
}

const serviceProvider : Partial<ServiceProvider> = {};

// const registerService = <T extends keyof ServiceProvider>(key: T, factory: (sp: ServiceProvider) => ServiceProvider[T]) => {

// }

function registerService<T extends keyof ServiceProvider>(key: T, factory: (sp: ServiceProvider) => ServiceProvider[T]) {
    const lazyService = new Lazy<ServiceProvider[T]>(() => factory(serviceProvider as ServiceProvider));

    Object.defineProperty(serviceProvider, key, {
        get: () => lazyService.value,
    });
}

registerService(ServiceNames.ProjectService, () => new ProjectService());

export const services = serviceProvider as ServiceProvider;

export function injectService<T extends keyof ServiceProvider>(key: T): ServiceProvider[T] {
    return inject(key, () => services[key], true);
}