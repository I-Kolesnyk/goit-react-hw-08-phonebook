import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 12px;
  font-size: 16px;
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

export const ContactInfo = styled.p`
  margin: 0;
`;

export const StyledButton = styled.button`
  width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};
  border: 2px solid
    ${({ theme }) => {
      return theme.colors.mainColor;
    }};
  color: ${({ theme }) => {
    return theme.colors.mainBackgroundColor;
  }};
  font-size: ${({ theme }) => {
    return theme.fontStyles.size;
  }};
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
