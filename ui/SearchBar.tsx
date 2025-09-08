import { IconSearch } from '@tabler/icons-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="gap-sm flex cursor-pointer items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-900">
      <span>Search Commponents...</span>
      <IconSearch size={14} />
    </div>
  );
};

export default SearchBar;
