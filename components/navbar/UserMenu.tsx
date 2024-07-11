import { MenuIcon } from 'lucide-react';
import Avatar from '@/components/navbar/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import MenuItem from '@/components/navbar/MenuItem';

const UserMenu = () => {
  return (
    <div className={'relative'}>
      <div className={'flex items-center gap-3'}>
        <div
          onClick={() => {}}
          className={
            'hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer'
          }
        >
          Airbnb your home
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className={'outline-none'}>
            <div
              className={
                'p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
              }
            >
              <MenuIcon size={18} />

              <div className={'hidden md:block'}>
                <Avatar />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <MenuItem onClick={() => {}} label={'Login'} />
            <MenuItem onClick={() => {}} label={'Sign up'} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserMenu;
