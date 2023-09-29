import { useDispatch } from 'react-redux';
import { logOut } from '../../redux-store/auth/operations';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import s from './style.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <div className={s.userMenu__container}>
      <p className={s.title}>{user.nickName}</p>
      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.form__button}
      >
        Logout
      </Button>
    </div>
  );
};
