import TOC from '@/ui/componentsPage/TOC';
import Docs from '@/ui/componentsPage/Docs';
import ComponentsBar from '@/ui/componentsPage/ComponentsBar';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mt-16 flex w-full justify-between transition-colors">
      <div className="w-54 flex-shrink-0 transition-colors">
        <ComponentsBar slug={slug} />
      </div>
      <div className="w-2xl transition-colors">
        <Docs slug={slug} />
      </div>
      <div className="w-54 flex-shrink-0 transition-colors">
        <div className="sticky top-24">
          <TOC />
        </div>
      </div>
    </div>
  );
}
