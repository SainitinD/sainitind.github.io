import { inject } from "vue";
import { Lazy } from "./utils/lazy";
import { ProjectService } from "./project-service";
import { ServiceNames } from "./utils/service-names";
import { AboutService } from "./about-service";
import { WorkService } from "./work-service";

export interface ServiceProvider {
  projectService: ProjectService;
  aboutService: AboutService;
  workService: WorkService;
}

const serviceProvider: Partial<ServiceProvider> = {};

function registerService<T extends keyof ServiceProvider>(
  key: T,
  factory: (sp: ServiceProvider) => ServiceProvider[T]
) {
  const lazyService = new Lazy<ServiceProvider[T]>(() =>
    factory(serviceProvider as ServiceProvider)
  );

  Object.defineProperty(serviceProvider, key, {
    get: () => lazyService.value,
  });
}

registerService(ServiceNames.ProjectService, () => new ProjectService());
registerService(ServiceNames.AboutService, () => new AboutService());
registerService(ServiceNames.WorkService, () => new WorkService());

export const services = serviceProvider as ServiceProvider;

export function injectService<T extends keyof ServiceProvider>(
  key: T
): ServiceProvider[T] {
  return inject(key, () => services[key], true);
}
