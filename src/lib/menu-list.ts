import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon, Drill, Truck, Building2, ReceiptText
} from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Company",
      menus: [
        // {
        //   href: "",
        //   label: "Posts",
        //   active: pathname.includes("/posts"),
        //   icon: SquarePen,
        //   submenus: [
        //     {
        //       href: "/posts",
        //       label: "All Posts",
        //       active: pathname === "/posts"
        //     },
        //     {
        //       href: "/posts/new",
        //       label: "New Post",
        //       active: pathname === "/posts/new"
        //     }
        //   ]
        // },
        {
          href: "/tags",
          label: "Projects",
          active: pathname.includes("/tags"),
          icon: Building2,
          submenus: []
        },        {
          href: "/tags",
          label: "Employees",
          active: pathname.includes("/tags"),
          icon: Users,
          submenus: []
        },
        {
          href: "/categories",
          label: "Tools",
          active: pathname.includes("/categories"),
          icon: Drill,
          submenus: []
        },
        {
          href: "/tags",
          label: "Transport",
          active: pathname.includes("/tags"),
          icon: Truck,
          submenus: []
        },
        {
          href: "/tags",
          label: "Bills",
          active: pathname.includes("/tags"),
          icon: ReceiptText,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: []
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
