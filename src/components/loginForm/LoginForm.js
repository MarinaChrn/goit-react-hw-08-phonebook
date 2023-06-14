import { logIn } from 'operations';
import { useDispatch } from 'react-redux';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel >
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel >
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <StyledButton type="submit">Log In</StyledButton>
    </StyledForm>
  );
};