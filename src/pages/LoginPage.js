import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/loginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}