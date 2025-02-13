'use client';

import { SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div
      className={
        'border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
      }
    >
      <div className={'flex items-center justify-between'}>
        <div className={'text-sm font-semibold px-6'}>Anywhere</div>

        <div
          className={
            'hidden sm:block text-sm font-semibold px-6 border-x flex-1 text-center'
          }
        >
          Any week
        </div>

        <div
          className={'text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3'}
        >
          <div className={'hidden sm:block'}>Add Guests</div>
          <div className={'p-2 bg-rose-500 rounded-full text-white'}>
            <SearchIcon size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
