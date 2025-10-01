import { useEffect, useState } from 'react';

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<Element[] | []>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1, h2'));

    setNestedHeadings(headingElements);
  }, []);

  return { nestedHeadings };
};

export default useHeadingsData;
