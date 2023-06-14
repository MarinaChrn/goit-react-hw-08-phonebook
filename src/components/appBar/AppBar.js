import { Navigation } from '../navigation/Navigation';
import { UserMenu } from '../userMenu/UserMenu';
import { AuthNav } from '../authNav/AuthNav';
import { useAuth } from '../useAuth';
import { StyledHeader } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};
