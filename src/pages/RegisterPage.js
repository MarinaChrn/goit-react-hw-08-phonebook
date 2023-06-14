import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/registerForm/RegisterForm';

export const RegisterPage=()=> {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}