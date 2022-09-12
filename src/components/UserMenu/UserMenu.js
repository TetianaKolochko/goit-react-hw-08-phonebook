import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';

import lego from './lego.png';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = lego;

  return (
    <div className={css.container}>
      <img src={avatar} alt="" width="32" />
      <span className={css.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())} className={css.button}>
        Log out
      </button>
    </div>
  );
}
