import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userSignIn } from 'redux/auth/operations';
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './LoginForm.styled';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup.object().shape({
  email: yup.string().trim().required('Email is required').matches(emailRegex, {
    message: 'Invalid email.',
  }),
  password: yup.string().trim().required('Password is required').min(6),
});

function LoginForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
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

  const loginUser = data => {
    dispatch(userSignIn(data));
  };

  return (
    <StyledForm onSubmit={handleSubmit(loginUser)}>
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

      <StyledButton type="submit">Log in</StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
