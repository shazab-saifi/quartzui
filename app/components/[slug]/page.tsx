// import { Button } from '@/components/Button';
import TOC from '@/ui/componentsPage/TOC';
import Docs from '@/ui/componentsPage/Docs';
import ComponentsBar from '@/ui/componentsPage/ComponentsBar';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="mt-16 flex w-full justify-between transition-colors">
      <div className="w-54 flex-shrink-0 transition-colors">
        <ComponentsBar slug={slug} />
      </div>
      {/* <div className="min-w-0 flex-1 transition-colors"> */}
      <Docs slug={slug} />
      {/* </div> */}
      <div className="w-54 flex-shrink-0 transition-colors">
        <div className="sticky top-24">
          {/* <div className="dark:from-neutral-850 mb-8 h-fit max-w-54 space-y-2 rounded-lg border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 transition-colors dark:border-neutral-800 dark:bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900">
            <p className="text-para font-semibold text-neutral-900 transition-colors dark:text-neutral-200">
              Hi, I&apos;m Shazab. I&apos;m the creator of Quartz UI.
            </p>
            <div className="space-y-4">
              <p className="text-small text-neutral-700 transition-colors dark:text-neutral-400">
                Quartz UI is a modern React component library focused on
                simplicity, accessibility, and beautiful design.
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="rounded-xl bg-neutral-200 font-normal text-neutral-900 transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
                // onClick={() =>
                //   window.open('https://x.com/shazabsaifi_s9', '_blank')
                // }
              >
                Follow on 𝕏
              </Button>
            </div>
          </div> */}
          <TOC />
        </div>
      </div>
    </div>
  );
}
