import * as React from 'react';
import { AuthProps } from './auth.props';
import * as styles from './auth.scss';
import { Button, hoc, useTranslation } from '@core';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@store';
import { login } from './store';

/**
 * Use auth
 */
const useAuth = ({}: AuthProps) => {
  const dispatch = useDispatch();
  // const { t } = useTranslation('auth', () => import('./auth.lang.json'));
  const { t } = useTranslation();
  const { pathname } = useSelector((state: State) => state.router.location);

  useEffect(() => {
    dispatch(login());
  }, []);

  return {
    t,
    pathname,
    example: 'example prop provided by "hoc"'
  };
};

/**
 * <Auth />
 */
const Auth = hoc(useAuth, ({ example, pathname, t }) => (
  <div className={styles.auth}>
    <div>{t('ahshit')}</div>
    <div>{pathname}</div>
    <div>{example}</div>
    <Link to='/profile'>To profile</Link>
    <Button>Cheburek</Button>
  </div>
));

export { Auth };