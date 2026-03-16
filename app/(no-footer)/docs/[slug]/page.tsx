import TOC from '@/ui/componentsPage/TOC';
import Docs from '@/ui/componentsPage/Docs';
import ComponentsBar from '@/ui/componentsPage/componentsbar';
import type { Metadata } from 'next';
import { slugFormatter } from '@/lib/slug-formater';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slugFormatter(slug);

  return {
    title: `${title} - Quartz UI`,
    description: `Documentation and usage details for the ${title} component in Quartz UI.`,
    openGraph: {
      images:
        'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760620351/ogimage_s4dmmb.png',
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex w-full justify-between gap-12 px-4 sm:px-6 md:px-8">
      <div className="hidden w-54 shrink-0 lg:inline">
        <ComponentsBar slug={slug} />
      </div>
      <div className="py-16 xl:w-3xl">
        <Docs slug={slug} />
      </div>
      <div className="mt-16 hidden w-54 shrink-0 xl:inline">
        <div className="sticky top-24">
          <TOC />
        </div>
      </div>
    </div>
  );
}
