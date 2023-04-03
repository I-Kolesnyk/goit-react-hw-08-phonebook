import styled from '@emotion/styled';

export const MessageText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 24px;
  width: 90%;
  background-color: ${({ theme }) => {
    return theme.colors.mainBackgroundColor;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};
  border: 2px solid
    ${({ theme }) => {
      return theme.colors.mainColor;
    }};
  text-align: center;
`;
