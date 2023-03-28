import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignInLink = styled(Link)`
  display: block;
  padding: 12px;
  transform: scale(1);
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #00506b;
  border: 2px solid #00506b;
  border-radius: 8px;
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: coral;
    border: 2px solid coral;
    transform: scale(1.1);
  }
`;

export const RegisterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const RegisterLinkMessage = styled.p`
  margin: 0;
  font-size: 18px;
  color: #00506b;
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  color: #00506b;
  transition: color 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: coral;
  }
`;
