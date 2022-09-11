import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { useAuth } from 'hooks';
import  css  from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <span className={css.name}>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
