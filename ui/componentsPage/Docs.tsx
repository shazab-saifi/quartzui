'use client';

import DocsLayout from '@/docs/layout';
import React from 'react';

const Docs = ({ slug }: { slug: string }) => {
  const key = slug ? slug.toLowerCase() : 'button';

  const ComponentToRender = React.useMemo(() => {
    try {
      const doc = React.lazy(() => import(`@/docs/${key}.mdx`));
      return doc;
    } catch {
      return React.lazy(() => import(`@/docs/button.mdx`));
    }
  }, [key]);

  return (
    <div>
      <DocsLayout>{ComponentToRender && <ComponentToRender />}</DocsLayout>
    </div>
  );
};

export default Docs;
