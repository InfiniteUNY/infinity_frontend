'use client';

import { ArrowDropDownRounded } from '@mui/icons-material';
import { Avatar, Button } from '@material-tailwind/react';
import { NestedMenu, PathMenu, UrlMenu } from '@/domain/entities';
import Link from 'next/link';

type Props = {
  menus?: (PathMenu | UrlMenu | NestedMenu)[];
};

export function InternalNavbar({ menus }: Props) {
  return (
    <div className="flex flex-grow items-center justify-end">
      <ul className="hidden mr-3 text-center text-[#3c7c60] md:flex">
        {menus &&
          menus.map((menu, i) => {
            if (menu.hasOwnProperty('path')) {
              return (
                <li key={i} className="mx-3">
                  <Link href={(menu as PathMenu).path}>{menu.name}</Link>
                </li>
              );
            } else if (menu.hasOwnProperty('url')) {
              return (
                <li key={i} className="mx-3">
                  <Link href={(menu as UrlMenu).url}>{menu.name}</Link>
                </li>
              );
            }
          })}
      </ul>
      <Button variant="text" className="flex flex-row items-center pl-2 pr-1 py-1 !text-[#3c7c60]">
        <Avatar
          src="/assets/images/avatar-placeholder.jpg"
          alt="Avatar"
          variant="circular"
          size="sm"
          className="shrink-0"
        />
        <ArrowDropDownRounded className="ml-1 !text-md" />
      </Button>
    </div>
  );
}
