import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectTheme } from 'redux/theme/selectors';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/Theme.styled';

import Loader from 'components/Loader';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import Switcher from 'components/Switcher';

import {
  Container,
  HeaderContainer,
  Header,
  LogoWrapper,
  LogoText,
  StyledMain,
  LogoIcon,
  Wrapper,
} from './Layout.styled';

function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const themeMode = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Global styles={GlobalStyles} />
      <Header>
        <HeaderContainer>
          <Wrapper>
            <LogoWrapper>
              <LogoIcon size="40" />
              <LogoText size="50">Phonebook</LogoText>
            </LogoWrapper>
            <Switcher />
          </Wrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderContainer>
      </Header>
      <StyledMain>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </StyledMain>
    </ThemeProvider>
  );
}

export default Layout;
