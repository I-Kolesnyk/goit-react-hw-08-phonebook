import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

export const FormTitle = styled.h1`
  ${({ theme }) => ({
    margin: 0,
    marginTop: '20px', 
    color: theme.colors.mainColor,
  })}
`;

export const NewUserText = styled.p`
  ${({ theme }) => ({
    marginTop: '20px',
    color: theme.colors.mainColor,
    fontSize: theme.fontStyles.size,
  })}
`;

export const RegisterLink = styled(Link)`
  display: block;
  width: 280px;
  padding: 12px;
  transform: scale(1);  
  color: ${({theme}) => {return theme.colors.mainColor}};
  font-size: ${({theme}) => {return theme.fontStyles.size}};
  font-weight: ${({theme}) => {return theme.fontStyles.fontWeight}};
  text-align: center;
  color: ${({theme}) => {return theme.colors.mainColor}};  
  border: 2px solid ${({theme}) => {return theme.colors.mainColor}};
  border-radius: ${({theme}) => {return theme.borderRadius}};
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${({theme}) => {return theme.colors.accentColor}};
    border: 2px solid ${({theme}) => {return theme.colors.accentColor}};
    transform: scale(1.1);
  }
`;
