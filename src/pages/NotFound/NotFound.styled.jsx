import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 480px;
  margin: 30px auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Main = styled.main `
  flex-grow: 1;
`

export const HomeLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 12px;  
  transform: scale(1);
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  border: 2px solid ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }}; 
  font-size: 24px;
  font-weight: ${({ theme }) => {
    return theme.fontStyles.fontWeight;
  }}; 
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => {
    return theme.colors.accentColor;
  }};
    border: 2px solid ${({ theme }) => {
    return theme.colors.accentColor;
  }};
  transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 600px;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  font-size: ${({ theme }) => {
    return theme.fontStyles.size;
  }};
  font-weight: ${({ theme }) => {
    return theme.fontStyles.fontWeight;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  text-transform: uppercase;
`