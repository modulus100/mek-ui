import { Separator } from '@/components/ui/separator';
import { ChangePasswordForm } from '@/app/(demo)/account/password/change-password-form';

export default function PasswordAccountPage() {
  return (
    <div className="space-y-6 w-[300px]">
      <div>
        <h3 className="text-lg font-medium">Password</h3>
        <p className="text-sm text-muted-foreground">
          Update your account password.
        </p>
      </div>
      <Separator />
      <ChangePasswordForm />
    </div>
  )
}
