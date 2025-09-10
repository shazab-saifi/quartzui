import ComponentsBar from '@/ui/componentsPage/ComponentsBar';
import ButtonMdx from '@/docs/button.mdx';

const page = () => {
  return (
    <div className="flex w-full justify-between">
      <ComponentsBar />
      <div>
        <ButtonMdx />
      </div>
      <div></div>
    </div>
  );
};

export default page;
