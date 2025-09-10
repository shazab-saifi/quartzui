import ComponentsBar from '@/ui/componentsPage/ComponentsBar';
import ButtonMdx from '@/docs/button.mdx';
import DocsLayout from '@/docs/layout';

const page = () => {
  return (
    <div className="flex w-full justify-between">
      <ComponentsBar />
      <div className="flex-1 p-6">
        <DocsLayout>
          <ButtonMdx />
        </DocsLayout>
      </div>
      <div></div>
    </div>
  );
};

export default page;
