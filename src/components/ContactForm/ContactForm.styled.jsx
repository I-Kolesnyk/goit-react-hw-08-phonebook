import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 65%;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  div {
    padding: 12px;
    border: 2px solid
      ${({ theme }) => {
        return theme.colors.mainColor;
      }};
    border-radius: ${({ theme }) => {
      return theme.borderRadius;
    }};
    background-color: ${({ theme }) => {
      return theme.colors.accentColor;
    }};
    width: 100%;
    font-size: 16px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledInput = styled.input`
  width: 300px;
  padding: 12px 12px 12px 15px;
  font-size: 16px;
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};
  border: 2px solid
    ${({ theme }) => {
      return theme.colors.mainColor;
    }};
  background-color: ${({ theme }) => {
    return theme.colors.mainBackgroundColor;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  &::placeholder {
    color: ${({ theme }) => {
      return theme.colors.mainColor;
    }};
    font-size: 16px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  transform: scale(1);
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
  font-size: ${({ theme }) => {
    return theme.fontStyles.size;
  }};
  font-weight: ${({ theme }) => {
    return theme.fontStyles.weight;
  }};
  background-color: ${({ theme }) => {
    return theme.colors.mainBackgroundColor;
  }};
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => {
      return theme.colors.accentColor;
    }};
    border: 2px solid
      ${({ theme }) => {
        return theme.colors.accentColor;
      }};
    transform: scale(1.1);
  }
`;
