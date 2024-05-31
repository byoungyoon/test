import { Square } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

interface ListItemProps {
  title: string;
  label: string;
  className?: string;
}

const ListItem = ({ title, label, className }: ListItemProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-x-2 text-xs leading-none',
        className
      )}
    >
      <span>
        <Square size={5} color='black' className='bg-black' />
      </span>
      <span className='text-[13px] leading-none'>
        {title} : {label}
      </span>
    </div>
  );
};

export default ListItem;
