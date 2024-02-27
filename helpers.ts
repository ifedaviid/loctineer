import { LOCTINEER } from "data/loctineer/index";
import { PHILSVISION } from "data/phils-vision/index";
import { Business, RecognizedBusinessIDs } from "types";

export function getBusinessById(id: string): Business {
    switch (id) {
        case RecognizedBusinessIDs.PHILSVISION:
            return PHILSVISION;
        default:
            return LOCTINEER;
    }
}

export function getServiceById(business: Business, id: string) {
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

export function createRootServicePaths(business: Business) {
    const servicePaths = [];
    for (const service of business.services) {
        servicePaths.push({ params: { "root-service": service.id } });
    }
    return servicePaths;
}

export function createSubServicePaths(business: Business) {
    const subServicePaths = [];
    for (const service of business.services) {
        for (const subService of service.services) {
            subServicePaths.push({ params: { "root-service": service.id, "sub-service": subService.id } });
        }
    }
    return subServicePaths;
}