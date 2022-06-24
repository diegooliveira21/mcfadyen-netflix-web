import { useEffect } from 'react';
import { Props } from 'components/guard/guard.type';
import { useSelector } from 'react-redux';
import { tokenSelector } from 'store/user/user.selector';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_URL } from 'screens/login/login.type';

export default function Guard({ children }: Props) {
  const token = useSelector(tokenSelector);
  const navigate = useNavigate();
  const from = useLocation();

  useEffect(
    () => {
      if (!token) {
        navigate(LOGIN_URL, {
          state: { from },
        });
      }
    },
    [token],
  );

  if (!token) return null;

  return children;
}
