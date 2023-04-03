import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
  transform: scale(1);
  font-size: 24px;
  font-weight: ${({ theme }) => {
    return theme.fontStyles.weight;
  }};
  transition: color 250ms ease-out, transform 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => {
      return theme.colors.accentColor;
    }};
  }
  &.active {
    color: ${({ theme }) => {
      return theme.colors.accentColor;
    }};
    &:hover,
    &:focus-visible {
      transform: scale(1.1);
      color: ${({ theme }) => {
        return theme.colors.mainColor;
      }};
      @media screen and (min-width: 768px) {
        font-size: ${({ theme }) => {
          return theme.fontStyles.size;
        }};
      }
      @media screen and (min-width: 1200px) {
        font-size: 24px;
      }
    }
  }
`;
