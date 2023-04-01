import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userSignUp } from 'redux/auth/operations';

import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './RegistrationForm.styled';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup.object().shape({
  name: yup.string().trim().required('Name is required'),
  email: yup.string().trim().required('Email is required').matches(emailRegex, {
    message: 'Invalid email.',
  }),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8),
});

function RegistrationForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const registerUser = data => {
    dispatch(userSignUp(data));
  };

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          placeholder="Enter your name"
          autoComplete="off"
          {...register('name')}
        />
        {errors.name && <div>{errors.name?.message}</div>}
      </StyledLabel>

      <StyledLabel>
        Email
        <StyledInput
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && <div>{errors.email?.message}</div>}
      </StyledLabel>

      <StyledLabel>
        Password
        <StyledInput
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          {...register('password')}
        />
        {errors.password && <div>{errors.password?.message}</div>}
      </StyledLabel>

      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
}

export default RegistrationForm;
