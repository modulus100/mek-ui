import { ContentLayout } from '@/components/admin-panel/content-layout';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '@/app/(demo)/account/components/sidebar-nav';

interface AccountLayoutProps {
  children: React.ReactNode
}

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/account',
  },
  {
    title: 'Account',
    href: '/account/account'
  },
];

export default function AccountLayout({ children }:  AccountLayoutProps) {
  return (
    <ContentLayout title="Account">
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      {/*<div className="hidden space-y-6 p-10 pb-16 md:block">*/}
      <div className="hidden md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          {children}
        </div>
      </div>

    </ContentLayout>
  );
}
