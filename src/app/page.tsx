import { Metadata } from 'next';
import UserLoginForm from '@/components/user-login-form';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 lg:p-8">
        <UserLoginForm />
      </div>
    </div>
  );
}
