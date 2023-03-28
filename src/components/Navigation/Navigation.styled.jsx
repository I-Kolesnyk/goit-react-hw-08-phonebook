import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavigationLink = styled(NavLink)`
  transform: scale(1);
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #00506b;
  transition: color 250ms ease-out, transform 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: #ac48cd;
  }
  &.active {
    color: #d67df4;
    &:hover,
    &:focus-visible {
      color: #00506b;
      transform: scale(1.1);
    }
  }
`;
