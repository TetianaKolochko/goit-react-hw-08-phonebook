import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to="/phonebook" /> : children;
}
