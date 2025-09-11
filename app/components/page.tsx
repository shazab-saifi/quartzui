import ComponentsBar from '@/ui/componentsPage/ComponentsBar';
// import ButtonMdx from '@/docs/button.mdx';
import AnimatedButtonMdx from '@/docs/animated-button.mdx';
import DocsLayout from '@/docs/layout';
import { Button } from '@/components/Button';

const page = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-54 flex-shrink-0">
        <ComponentsBar />
      </div>
      <div className="ml-4 p-6">
        <DocsLayout>
          {/* <ButtonMdx /> */}
          {/* <hr className="my-8" /> */}
          <AnimatedButtonMdx />
        </DocsLayout>
      </div>
      <div className="space-y-sm sticky top-30 h-fit max-w-54 rounded-lg bg-conic-180 [background-image:conic-gradient(from_180deg_at_0%_0%,theme(colors.indigo.600),theme(colors.neutral.700),theme(colors.neutral.900))] from-neutral-800 to-neutral-900 [background-position:top_left] [background-origin:padding-box] p-4">
        <p className="text-para font-semibold text-neutral-200">
          Hii, I&apos;m Shazab. I&apos;m the creater of Quartz UI.
        </p>
        <div className="space-y-md">
          <p className="text-small text-neutral-600 dark:text-neutral-400">
            Quartz UI is a modern React component library focused on simplicity,
            accessibility, and beautiful design.
          </p>
          <Button
            size="sm"
            variant="secondary"
            className="rounded-xl bg-neutral-200 font-normal text-black hover:bg-neutral-300"
          >
            Follor on 𝕏
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
