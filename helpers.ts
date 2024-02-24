import { business } from "data/loctineer/index";

export function getServiceById(id: string) {
    for (const service of business.services) {
        if (service.id === id) return { service: service, parent: null };
        if (service.services) {
            const subServices = service.services;
            for (const subservice of subServices) {
                if (subservice.id === id) return { service: subservice, parent: service };
            }
        }
    }
    return undefined;
}

export function createRootServicePaths() {
    const servicePaths = [];
    for (const service of business.services) {
        servicePaths.push({ params: { "root-service": service.id } });
    }
    return servicePaths;
}

export function createSubServicePaths() {
    const subServicePaths = [];
    for (const service of business.services) {
        for (const subService of service.services) {
            subServicePaths.push({ params: { "root-service": service.id, "sub-service": subService.id } });
        }
    }
    return subServicePaths;
}