'use client';

import { TRIGGER_E_TRACK } from '@/consts';
import {
    saveToLocalStorage,
} from '@/helper/localStorage';
import { initializeVisitorTracking } from '@/lib/tracking';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function VisitorLayer() {
    const pathname = usePathname();
    const previousPath = useRef(null);
    
    saveToLocalStorage(TRIGGER_E_TRACK, false);

    useEffect(() => {
        // Initialize tracking on mount
        // initializeVisitorTracking(analyticsData);

        // Track page changes
        if (previousPath.current !== pathname) {
            initializeVisitorTracking();
            previousPath.current = pathname;
        }

        // Cleanup
        // return () => {
        // clearTimeout(numberParser(getFromLocalStorage('trackingTimer')));
        // };
    }, [pathname]);

    return null;
}
