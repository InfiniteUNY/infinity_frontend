import { NestedMenu, PathMenu, UrlMenu } from '@/domain/entities';

export const Config: {
  public: {
    nav: {
      menus: (PathMenu | UrlMenu | NestedMenu)[];
    };
    footer: {
      menus: (PathMenu | UrlMenu)[];
    };
  };
  internal: {
    nav: {
      menus: (PathMenu | UrlMenu | NestedMenu)[];
    };
    dashboard: {
      sidebar: {
        title: string;
        menus: (PathMenu | NestedMenu<PathMenu[]>)[];
      };
    };
    tools: {
      sidebar: {
        title: string;
        backButton: PathMenu;
        menus: (PathMenu | NestedMenu<PathMenu[]>)[];
      };
    };
  };
} = {
  public: {
    nav: {
      menus: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'About',
          path: '/#about',
        },
        {
          name: 'Team',
          path: '/#team',
        },
        {
          name: 'Events',
          path: '/#events',
        },
      ],
    },
    footer: {
      menus: [
        {
          name: 'Home',
          path: '/',
        },
      ],
    },
  },
  internal: {
    nav: {
      menus: [
        {
          name: 'Home',
          path: '/',
        },
      ],
    },
    dashboard: {
      sidebar: {
        title: 'Dashboard',
        menus: [
          {
            name: 'Overview',
            icon: 'home',
            path: '/dashboard',
          },
          {
            name: 'Achivements',
            icon: 'emoji-events',
            path: '/dashboard/achievements',
          },
          {
            name: 'Fundraisings',
            icon: 'monetization-on',
            path: '/dashboard/fundraisings',
          },
          {
            name: 'Inventories',
            icon: 'inventory-2',
            path: '/dashboard/inventories',
          },
          {
            name: 'Members',
            icon: 'people-alt',
            path: '/dashboard/members',
          },
          {
            name: 'Tools',
            icon: 'handyman',
            path: '/tools',
          },
        ],
      },
    },
    tools: {
      sidebar: {
        title: 'Tools',
        backButton: {
          name: 'Dashboard',
          path: '/dashboard',
        },
        menus: [
          {
            name: 'Freepik',
            icon: 'image',
            items: [
              {
                name: 'Download',
                path: '/tools/freepik',
              },
              {
                name: 'Assets',
                path: '/tools/freepik/assets',
              },
            ],
          },
          {
            name: 'Inventory',
            icon: 'inventory-2',
            items: [
              {
                name: 'Borrow',
                icon: 'download',
                path: '/tools/inventory',
              },
            ],
          },
        ],
      },
    },
  },
};
