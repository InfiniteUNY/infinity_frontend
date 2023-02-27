'use client';

import { NestedMenu, PathMenu, UrlMenu } from '@/domain/entities';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  menus?: (PathMenu | UrlMenu | NestedMenu)[];
};

export function PublicNavbar({ menus }: Props) {
  const path = usePathname();

  return (
    <nav className="md:flex">
      <ul className="hidden mr-3 text-center text-white md:flex">
        {menus &&
          menus.map((menu, i) => {
            if (menu.hasOwnProperty('path')) {
              if ((menu as PathMenu).path === path) {
                menu.active = true;
              } else {
                menu.active = false;
              }

              return (
                <Link key={i} href={(menu as PathMenu).path}>
                  <li className="mx-3">{menu.name}</li>
                </Link>
              );
            } else if (menu.hasOwnProperty('url')) {
              return (
                <Link key={i} href={(menu as UrlMenu).url}>
                  <li className="mx-3">{menu.name}</li>
                </Link>
              );
            }
          })}
      </ul>
    </nav>
  );
}
