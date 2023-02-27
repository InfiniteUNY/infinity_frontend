'use client';

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Icon } from '@/presentation/components/shared';
import { IconButton } from '@material-tailwind/react';
import { internalStore, useStore } from '@/presentation/hooks';
import { MouseEvent, useEffect, useState } from 'react';
import { NestedMenu, PathMenu } from '@/domain/entities';
import { SidebarDropdownMenuItem } from '.';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  menu: NestedMenu<PathMenu[]>;
};

export function SidebarDropdownMenu({ menu }: Props) {
  const path = usePathname();
  const [active, setActive] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [sidebarOpened, sidebarExtended, sidebarHovered] = useStore(internalStore, (s) => [
    s.sidebarOpened,
    s.sidebarExtended,
    s.sidebarHovered,
  ]);

  const handleExpandButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.nativeEvent.preventDefault();
    setExpanded(!expanded);
  };

  useEffect(() => {
    let status = false;

    menu.items.map((item) => {
      if ((item as PathMenu).path === path) {
        status = true;
      }
    });

    setActive(status);
    setExpanded(status);
  }, [menu.items, path]);

  return (
    <li className="flex flex-col">
      <Link
        href={menu.items[0].path}
        className={`mr-2 rounded-r-full ${
          sidebarExtended || sidebarHovered ? '' : 'lg:mr-0 lg:pr-0 lg:rounded-r-none'
        }`}
      >
        <div
          className={`flex flex-row items-center pr-2 py-2 text-base text-[#3c7c60] rounded-r-full
          transition-all ${
            !(sidebarExtended || sidebarHovered) && active
              ? 'lg:text-white lg:bg-[#3c7c60]'
              : 'hover:bg-[#3c7c60] hover:bg-opacity-10'
          } ${sidebarExtended || sidebarHovered ? '' : 'lg:pr-0 lg:rounded-r-none'}`}
        >
          {menu.icon ? (
            <div className="shrink-0 w-14 text-center">
              <Icon name={menu.icon} className="align-text-bottom" />
            </div>
          ) : null}
          <span className="mr-2 overflow-hidden text-ellipsis">{menu.name}</span>
          {sidebarOpened || sidebarExtended || sidebarHovered ? (
            <IconButton
              onClick={handleExpandButton}
              disabled={active}
              className="shrink-0 group !w-6 !h-6 ml-auto !bg-transparent !rounded-full !shadow-none
            hover:!bg-[#3c7c60]"
            >
              {expanded ? (
                <ArrowDropUp className="align-text-bottom fill-[#3c7c60] group-hover:fill-white" />
              ) : (
                <ArrowDropDown className="align-text-bottom fill-[#3c7c60] group-hover:fill-white" />
              )}
            </IconButton>
          ) : null}
        </div>
      </Link>
      <ul className={expanded ? (sidebarExtended || sidebarHovered ? '' : 'lg:hidden') : 'hidden'}>
        {menu.items.map((item, j) => (
          <SidebarDropdownMenuItem key={j} menu={item} />
        ))}
      </ul>
    </li>
  );
}
