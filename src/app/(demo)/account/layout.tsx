import { ContentLayout } from '@/components/admin-panel/content-layout';

interface AccountLayoutProps {
  children: React.ReactNode
}

export default function AccountLayout({ children }:  AccountLayoutProps) {
  return (
    <ContentLayout title="Account">
      {children}
    </ContentLayout>
  );
}
