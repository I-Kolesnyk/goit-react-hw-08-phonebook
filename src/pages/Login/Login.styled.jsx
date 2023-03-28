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
    color: theme.colors.mainColor,
    
  })}
`

export const NewUserText = styled.p`
  color: #00506b;
  font-size: 18px;
`;

export const RegisterLink = styled(Link)`
  display: block;
  width: 280px;
  padding: 12px;
  transform: scale(1);
  text-decoration: none;
  color: #00506b;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #00506b;
  border: 2px solid #00506b;
  border-radius: 8px;
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: #71238a;
    border: 2px solid #71238a;
    transform: scale(1.1);
  }
`;
