import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/registerForm/RegisterForm';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}