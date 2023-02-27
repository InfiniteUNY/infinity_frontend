'use client';

import { Config } from '@/config';
import { InternalSidebar } from '@/presentation/components/internal/shared/Sidebar';
import { internalStore, useStore } from '@/presentation/hooks';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ToolsLayout({ children }: Props) {
  const sidebarExtended = useStore(internalStore, (s) => s.sidebarExtended);

  return (
    <div className="mt-[74px]">
      <InternalSidebar
        title={Config.internal.tools.sidebar.title}
        menus={Config.internal.tools.sidebar.menus}
        backButton={Config.internal.tools.sidebar.backButton}
      />
      <main
        className={`min-h-[calc(100vh-74px-3rem)] ${
          sidebarExtended ? 'lg:ml-[260px]' : 'lg:ml-14'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
