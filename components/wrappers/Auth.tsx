/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

// Services
import { AuthService } from '../../src/services/AuthService';

// Context
import { UserContext } from '../../context';

interface Props {
  children: any
}

export const AuthWrapper: FC<Props> = ({ children }) => {

  const router = useRouter();

  const [checkedAuth, setCheckedAuth] = useState<boolean>(false);
  const [isAuthenticatedLocal, setIsAuthenticatedLocal] = useState<boolean>(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  const checkAuth = async () => {
    setIsAuthenticated(AuthService.isAuthenticated());
    setIsAuthenticatedLocal(AuthService.isAuthenticated());
    setCheckedAuth(true);
  };

  useEffect(() => {
    if (!checkedAuth) {
      checkAuth();
    }

  }, []);

  useEffect(() => {
    if (checkedAuth) {
      if (isAuthenticatedLocal) {
        router.push('/');
        return;
      }
      router.push('/login');
    }
  }, [isAuthenticatedLocal, checkedAuth]);

  return (
    <>
      {children}
    </>
  );
};
