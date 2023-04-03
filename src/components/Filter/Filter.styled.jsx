import styled from '@emotion/styled';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
`;

export const StyledInput = styled.input`
  width: 300px;
  padding: 12px 12px 12px 15px;
  font-size: 16px;
  border: 2px solid
    ${({ theme }) => {
      return theme.colors.mainColor;
    }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};
  background-color: ${({ theme }) => {
    return theme.colors.mainBackgroundColor;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
`;
