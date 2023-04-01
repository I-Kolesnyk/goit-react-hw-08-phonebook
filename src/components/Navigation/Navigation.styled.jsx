import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  ${({ theme }) => {
    return theme.breakPoints.mobile;
  }} {
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  ${({ theme }) => {
    return theme.breakPoints.tablet;
  }} {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

export const NavigationLink = styled(NavLink)`
  transform: scale(1);
  text-decoration: none;
  font-size: 24px;
  font-weight: ${({ theme }) => {
    return theme.fontStyles.fontWeight;
  }};
  color: ${({ theme }) => {
    return theme.colors.mainColor;
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
      color: ${({ theme }) => {
        return theme.colors.mainColor;
      }};
      transform: scale(1.1);
    }
  }
  ${({ theme }) => {
    return theme.breakPoints.tablet;
  }} {
    font-size: 18px;
  }
  ${({ theme }) => {
    return theme.breakPoints.desktop;
  }} {
    font-size: 24px;
  }
`;
