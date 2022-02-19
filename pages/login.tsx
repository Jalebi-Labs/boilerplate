import PlaceholderPage from '@/client/components/ui/PlaceholderPage';
import FullPageLayout from '@/client/components/layouts/FullPageLayout';
import LoginForm from '@/client/modules/Auth/LoginForm';

export default function LoginPage() {
  return (
    <FullPageLayout>
      <PlaceholderPage title="Login" />
      <LoginForm />
    </FullPageLayout>
  );
}
