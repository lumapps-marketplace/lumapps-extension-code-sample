/* eslint-disable react/require-default-props */
import React, { useEffect, useRef } from 'react';

type EventCallback = (evt?: Event) => void;

export interface InfiniteScrollProps {
    callback: EventCallback;
    options?: IntersectionObserverInit;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ callback, options }) => {
    const elementRef = useRef(null);
    const observer = new IntersectionObserver((entries = []) => {
        const hasIntersection = entries.some((entry) => entry.isIntersecting);

        // Make sure at least one target element has intersected with the root element.
        if (!hasIntersection) {
            return;
        }

        callback();
    }, options);

    useEffect(() => {
        const currentRef = elementRef.current;
        if (elementRef && elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef.current]);

    return <div ref={elementRef} />;
};
