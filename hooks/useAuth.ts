

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { RootState } from '@/types/store';

export const useAuth = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && router) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);
};
