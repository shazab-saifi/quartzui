import ComponentsBar from '@/ui/componentsPage/ComponentsBar';
// import ButtonMdx from '@/docs/button.mdx';
import AnimatedButtonMdx from '@/docs/animated-button.mdx';
import DocsLayout from '@/docs/layout';

const page = () => {
  return (
    <div className="flex w-full">
      <div className="w-64 flex-shrink-0">
        <ComponentsBar />
      </div>
      <div className="ml-4 flex-1 p-6">
        <DocsLayout>
          {/* <ButtonMdx /> */}
          <hr className="my-8" />
          <AnimatedButtonMdx />
        </DocsLayout>
      </div>
    </div>
  );
};

export default page;
