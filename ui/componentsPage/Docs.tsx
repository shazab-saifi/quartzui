'use client';

import DocsLayout from '@/docs/layout';
import { docsMap } from '@/lib/registry';

const Docs = ({ slug }: { slug: string }) => {
  const key = slug ? slug.toLowerCase() : 'button';

  console.log(key);
  const Doc = docsMap[key] ?? docsMap.button;

  return (
    <div>
      <DocsLayout>
        <Doc />
      </DocsLayout>
    </div>
  );
};

export default Docs;
