'use client';

import { componentsData } from '@/lib/components-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '../componentsPage/componentsbar';

const ComponentsNav = () => {
  const path = usePathname();
  const slug = path.split('/').pop();

  const currentDoc = componentsData.find((item) => item.identifier === slug);
  if (!currentDoc) return null;

  const currentDocCategory = currentDoc.category;
  const currentCategoryItems = componentsData.filter(
    (item) => item.category === currentDocCategory
  );
  const currentDocIndex = currentCategoryItems.findIndex(
    (item) => item.identifier === slug
  );
  const currentCategoryIndex = categories.findIndex(
    (category) => category.title === currentDocCategory
  );

  const getCategoryItems = (categoryTitle: string | undefined) => {
    if (!categoryTitle) return [];
    return componentsData.filter((item) => item.category === categoryTitle);
  };

  let prevDoc =
    currentDocIndex > 0 ? currentCategoryItems[currentDocIndex - 1] : undefined;

  if (!prevDoc && currentCategoryIndex > 0) {
    const prevCategory = categories[currentCategoryIndex - 1];
    const prevCategoryItems = getCategoryItems(prevCategory?.title);
    prevDoc = prevCategoryItems[prevCategoryItems.length - 1];
  }

  let nextDoc =
    currentDocIndex < currentCategoryItems.length - 1
      ? currentCategoryItems[currentDocIndex + 1]
      : undefined;

  if (!nextDoc && currentCategoryIndex < categories.length - 1) {
    const nextCategory = categories[currentCategoryIndex + 1];
    const nextCategoryItems = getCategoryItems(nextCategory?.title);
    nextDoc = nextCategoryItems[0];
  }

  const justifyClass =
    prevDoc && nextDoc
      ? 'justify-between'
      : prevDoc
        ? 'justify-start'
        : nextDoc
          ? 'justify-end'
          : 'justify-between';

  return (
    <nav className={`not-prose mt-4 flex items-center ${justifyClass}`}>
      {prevDoc && (
        <Link href={prevDoc.link} className="flex flex-col items-start gap-2">
          <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Previous
          </span>
          <p className="cursor-pointer text-sm font-semibold text-black transition-colors dark:text-white">
            {prevDoc.title}
          </p>
        </Link>
      )}

      {nextDoc && (
        <Link href={nextDoc.link} className="flex flex-col items-end gap-2">
          <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Next
          </span>
          <p className="cursor-pointer text-sm font-semibold text-black transition-colors dark:text-white">
            {nextDoc.title}
          </p>
        </Link>
      )}
    </nav>
  );
};

export default ComponentsNav;
