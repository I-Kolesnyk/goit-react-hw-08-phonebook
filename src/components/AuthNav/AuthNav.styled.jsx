import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignInLink = styled(Link)`
  display: block;
  padding: 12px;
  transform: scale(1.1);
  text-align: center;
  font-size: 24px;
  font-weight: ${({ theme }) => {
    return theme.fontStyles.weight;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  border: 2px solid
    ${({ theme }) => {
      return theme.colors.mainColor;
    }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => {
      return theme.colors.accentColor;
    }};
    border: 2px solid
      ${({ theme }) => {
        return theme.colors.accentColor;
      }};
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
  font-size: ${({ theme }) => {
    return theme.fontStyles.size;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
`;

export const RegisterLink = styled(Link)`
  font-size: ${({ theme }) => {
    return theme.fontStyles.size;
  }};
  font-weight: ${({ theme }) => {
    return theme.fontStyles.weight;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  transition: color 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => {
      return theme.colors.accentColor;
    }};
  }
`;
