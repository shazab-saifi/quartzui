import { Button } from '@/components/Button';
import Image from 'next/image';

const UseSection = () => {
  return (
    <div className="space-y-32">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-h4 text-center font-semibold">
          We&nbsp;ve Awesome Components for you
        </h3>
        <p className="md:text-para lg:text-para-big max-w-3xl text-center text-sm text-neutral-400">
          There are two simple and flexible ways you can integrate Quartz UI
          into your project, depending on what best fits your workflow.
        </p>
      </div>
      <div className="space-y-32">
        <div className="flex items-center gap-40">
          <div className="space-y-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">Copy & Paste</h3>
              <p className="md:text-para lg:text-para-big max-w-3xl text-sm text-neutral-400">
                Quick and effortless — simply grab the component code from our
                documentation and drop it directly into your project. It’s the
                fastest way to experiment, customize instantly, and see results
                right away without worrying about setup or configuration.
              </p>
            </div>
            <Button
              className="bg-gradient-to-b from-neutral-100 to-neutral-300"
              size="sm"
              variant="secondary"
            >
              Dcumentation
            </Button>
          </div>
          <div className="rounded-3xl bg-gradient-to-t from-neutral-950 to-neutral-900 p-4">
            <Image
              src="copy.png"
              className="rounded-lg"
              alt="copy&paste"
              width={764}
              height={300}
            />
          </div>
        </div>
        <div className="flex items-center gap-40">
          <div className="rounded-3xl bg-gradient-to-t from-neutral-950 to-neutral-900 p-4">
            <Image
              src="cli.png"
              className="rounded-lg"
              alt="copy&paste"
              width={764}
              height={300}
            />
          </div>
          <div className="space-y-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">CLI Installation</h3>
              <p className="md:text-para lg:text-para-big max-w-3xl text-sm text-neutral-400">
                For a faster and more scalable setup — use our CLI to install
                components with a single command. It automatically pulls in the
                right styles, handles dependencies, and keeps everything
                consistent, making it perfect for larger projects or long-term
                development.
              </p>
            </div>
            <Button
              className="bg-gradient-to-b from-neutral-100 to-neutral-300"
              size="sm"
              variant="secondary"
            >
              CLI Installation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseSection;
