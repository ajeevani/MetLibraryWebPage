import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../lib/authenticate';

const PUBLIC_PATHS = ['/', '/login', '/register', '/artwork/[id]', '/search'];

export const RouteGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const authCheck = () => {
      const isAuth = isAuthenticated();
      const path = router.pathname;

      if (!isAuth && !PUBLIC_PATHS.includes(path)) {
        router.push('/login');
      }
    };

    authCheck();
  }, []);

  return <>{children}</>;
};