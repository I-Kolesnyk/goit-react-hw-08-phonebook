import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignInLink = styled(Link)`
  display: block;
  padding: 12px;
  transform: scale(1);
  text-align: center;
  font-size: 24px;
  font-weight: ${({ theme }) => {
    return theme.fontStyles.fontWeight;
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
    ${({ theme }) => ({
      color: theme.colors.accentColor,
      border: `2px solid ${theme.colors.accentColor}`,
      transform: 'scale(1.1)'
    })}    
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
  ${({ theme }) => ({
    margin: 0,
    fontSize: theme.fontStyles.size,
    color: theme.colors.mainColor,
  })}
`;

export const RegisterLink = styled(Link)`
  ${({ theme }) => ({
    fontSize: theme.fontStyles.size,
    fontWeight: theme.fontStyles.fontWeight,
    color: theme.colors.mainColor,
    transition: 'color 250ms ease-out',
  })}
  &:hover,
  &:focus-visible {
    ${({ theme }) => ({
      color: theme.colors.accentColor,
    })}
  }
`;
