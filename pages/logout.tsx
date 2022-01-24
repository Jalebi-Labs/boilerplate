import useLogout from '../hooks/useLogout';

export default function LogoutPage() {
  useLogout();

  return <p>Logging you out...</p>;
}
