import { logOut } from 'operations';
import { useDispatch } from 'react-redux';

import { useAuth } from '../useAuth';
import { UserMenuBtn, UserMenuDiv } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuDiv>
      <p >{user.email}</p>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuDiv>
  );
};