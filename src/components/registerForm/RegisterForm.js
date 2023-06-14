import { register } from 'operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [shortPassword, setShortPassword] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.password.value.length<8) {
      setShortPassword(true)
      return;
    }
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset()
  };

  return (
    <StyledForm  onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel >
        Username
        <StyledInput type="text" name="name" />
      </StyledLabel>
      <StyledLabel >
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel >
        Password
        <StyledInput type="password" name="password" />
        {(shortPassword)&&(<p>Password need contain more than 8 characters</p>)}
      </StyledLabel>
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};
