import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  ${({ theme }) => {
    return theme.breakPoints.mobile;
  }} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-size: 14px;
  }

  ${({ theme }) => {
    return theme.breakPoints.tablet;
  }} {
    font-size: 14px;
    gap: 10px;
  }
  ${({ theme }) => {
    return theme.breakPoints.desktop;
  }} {
    font-size: 20px;
    gap: 20px;
  }
`;

export const UserName = styled.p`
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
  ${({ theme }) => {
    return theme.breakPoints.tablet;
  }} {
    font-size: 14px;
  }
  ${({ theme }) => {
    return theme.breakPoints.desktop;
  }} {
    font-size: ${({ theme }) => {
      return theme.fontStyles.size;
    }};
  }
`;

export const LogOutButton = styled.button`
  display: block;
  padding: 12px;
  transform: scale(1);
  text-decoration: none;
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
    color: ${({ theme }) => {
      return theme.colors.accentColor;
    }};
    border: 2px solid
      ${({ theme }) => {
        return theme.colors.accentColor;
      }};
    transform: scale(1.1);
  }
  ${({ theme }) => {
    return theme.breakPoints.tablet;
  }} {
    font-size: 14px;
  }
  ${({ theme }) => {
    return theme.breakPoints.desktop;
  }} {
    font-size: 24px;
  }
`;
