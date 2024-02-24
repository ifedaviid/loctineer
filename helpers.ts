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