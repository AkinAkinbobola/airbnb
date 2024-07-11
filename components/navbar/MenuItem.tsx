'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <DropdownMenuItem
      className={
        'px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
      }
      onClick={onClick}
    >
      {label}
    </DropdownMenuItem>
  );
};

export default MenuItem;
