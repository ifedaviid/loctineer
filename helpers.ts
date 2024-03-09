import { useEffect, useState } from "react";
import { LOCTINEER } from "data/loctineer/index";
import { PHILSVISION } from "data/phils-vision/index";
import { Business } from "types";
import { Logo as PhilsVisionLogo } from 'data/phils-vision/logo';
import { Logo as LoctineerLogo } from 'data/loctineer/logo';
import { PriceType } from "types";

type Props = {
    debounceTime?: number;
};

export function getBusinessById(id: string): Business {
    switch (id) {
        case PHILSVISION.id:
            return PHILSVISION;
        default:
            return LOCTINEER;
    }
}

export function getBusinessLogo(id: string) {
    switch (id) {
        case PHILSVISION.id:
            return PhilsVisionLogo;
        default:
            return LoctineerLogo;
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
        if (!service.services) continue;
        for (const subService of service.services) {
            subServicePaths.push({ params: { "root-service": service.id, "sub-service": subService.id } });
        }
    }
    return subServicePaths;
}

export const getPriceSuffix = (priceType: PriceType) => {
    const { STARTING, HOURLY } = PriceType;
    switch (priceType) {
        case STARTING:
            return '+';
        case HOURLY:
            return ' per hour';
        default:
            return '';
    }
};

export const useScreenSizeDetector = () => {
    const [width, setWidth] = useState(968);
    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return { isMobile: width <= 968, isTablet: width <= 1024, isDesktop: width > 1024 };
};