import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const formTitleDynamicStyle = ({ theme }) => css`
  margin: 20px 0 0 0;
  color: ${theme.colors.mainColor};
`;

// export const FormTitle = styled.h1`
//   margin: 20px 0 0 0;
//   color: ${({ theme }) => {
//     return theme.colors.mainColor;
//   }};
// `;

const userTextDynamicStyle = ({ theme }) => css`
  margin-top: 20px;
  color: ${theme.colors.mainColor};
  font-size: ${theme.fontStyles.size};
`;

// export const UserText = styled.p`
//   margin-top: 20px;
//   color: ${({ theme }) => {
//     return theme.colors.mainColor;
//   }};

//   font-size: ${({ theme }) => {
//     return theme.fontStyles.size;
//   }};
// `;

const loginLinkDynamicStyle = ({ theme }) => css`
  display: block;
  width: 280px;
  padding: 12px;
  transform: scale(1);
  color: ${theme.colors.mainColor};
  font-size: ${theme.fontStyles.size};
  font-weight: ${theme.fontStyles.weight};
  text-align: center;
  color: ${theme.colors.mainColor};
  border: 2px solid ${theme.colors.mainColor};
  border-radius: 8px;
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${theme.colors.accentColor};
    border: 2px solid ${theme.colors.accentColor};
    transform: scale(1.1);
  }
`;

// export const LoginLink = styled(Link)`
//   display: block;
//   width: 280px;
//   padding: 12px;
//   transform: scale(1);
//   color: ${({ theme }) => {
//     return theme.colors.mainColor;
//   }};
//   font-size: ${({ theme }) => {
//     return theme.fontStyles.size;
//   }};
//   font-weight: ${({ theme }) => {
//     return theme.fontStyles.weight;
//   }};
//   text-align: center;
//   color: ${({ theme }) => {
//     return theme.colors.mainColor;
//   }};
//   border: 2px solid
//     ${({ theme }) => {
//       return theme.colors.mainColor;
//     }};
//   border-radius: 8px;
//   transition: transform 250ms ease-out, color 250ms ease-out,
//     border 250ms ease-out;
//   &:hover,
//   &:focus-visible {
//     color: ${({ theme }) => {
//       return theme.colors.accentColor;
//     }};
//     border: 2px solid
//       ${({ theme }) => {
//         return theme.colors.accentColor;
//       }};
//     transform: scale(1.1);
//   }
// `;

export const FormTitle = styled.h1`
  ${formTitleDynamicStyle}
`;

export const UserText = styled.p`
  ${userTextDynamicStyle}
`;

export const LoginLink = styled(Link)`
  ${loginLinkDynamicStyle}
`;
