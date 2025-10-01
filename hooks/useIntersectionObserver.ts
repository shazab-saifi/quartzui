import { useEffect, useRef } from 'react';

const useIntersectionObserver = (
  setActiveId: (id: string) => void,
  activeId: string
) => {
  const headingsRef = useRef<Record<string, IntersectionObserverEntry>>({});

  useEffect(() => {
    const headingsElements: HTMLElement[] = Array.from(
      document.querySelectorAll('h1, h2')
    );

    const callback = (headings: IntersectionObserverEntry[]) => {
      headingsRef.current = headings.reduce<
        Record<string, IntersectionObserverEntry>
      >(
        (map, headingsElement) => {
          const id = (headingsElement.target as HTMLElement).id;
          if (id) {
            map[id] = headingsElement;
          }
          return map;
        },
        { ...headingsRef.current }
      );

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingsRef.current).forEach((key) => {
        const headingsElement = headingsRef.current[key];
        if (headingsElement.isIntersecting)
          visibleHeadings.push(headingsElement);
      });

      const getIndexFromId = (id: string) =>
        headingsElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId((visibleHeadings[0].target as HTMLElement).id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) =>
            getIndexFromId((a.target as HTMLElement).id) -
            getIndexFromId((b.target as HTMLElement).id)
        );
        setActiveId((sortedVisibleHeadings[0].target as HTMLElement).id);
      }

      if (visibleHeadings.length === 0) {
        const activeElement = headingsElements.find((el) => el.id === activeId);
        const activeIndex = headingsElements.findIndex(
          (el) => el.id === activeId
        );

        const activeIdYcoord = activeElement?.getBoundingClientRect().y;
        if (activeIdYcoord && activeIdYcoord > 150 && activeIndex !== 0) {
          setActiveId(headingsElements[activeIndex - 1].id);
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-96px 0px -40px 0px',
    });

    headingsElements.forEach((ele) => observer.observe(ele));

    return () => observer.disconnect();
  }, [setActiveId, activeId]);
};

export default useIntersectionObserver;
