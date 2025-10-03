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
    <div className="mt-16 flex w-full justify-between">
      <div className="hidden w-54 flex-shrink-0 md:inline">
        <ComponentsBar slug={slug} />
      </div>
      <div className="w-2xl">
        <Docs slug={slug} />
      </div>
      <div className="hidden w-54 flex-shrink-0 lg:inline">
        <div className="sticky top-24">
          <TOC />
        </div>
      </div>
    </div>
  );
}
