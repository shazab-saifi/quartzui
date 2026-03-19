import Link from 'next/link';
import { Heading } from './heading';
import { SearchBarSkeleton } from './search-skeleton';

const SearchSection = () => {
  return (
    <div className="border-t border-neutral-200 px-4 pt-28 sm:px-8 md:mt-16 md:pt-36 lg:px-20 2xl:px-60 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex w-fit flex-col items-center">
        <Heading>Search Components & Docs</Heading>
        <p className="mt-2 max-w-md text-center text-neutral-600 sm:mt-4 md:text-lg dark:text-neutral-400">
          Search all components and documentation in{' '}
          <Link href="/" className="text-black dark:text-white">
            Quartz UI
          </Link>{' '}
          from a single, unified command. You can open the search dialog with{' '}
          <span className="text-black dark:text-white">ctrl+k</span>
        </p>
      </div>
      <div className="relative z-10 mx-auto w-fit overflow-visible perspective-[4000px]">
        <SearchBarSkeleton />
        <div
          aria-hidden="true"
          className="absolute -inset-12 bottom-[14%] bg-linear-to-t from-white from-15% to-transparent to-60% dark:from-neutral-950"
        />
      </div>
    </div>
  );
};

export default SearchSection;
