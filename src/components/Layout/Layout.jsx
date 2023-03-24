import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import {GiNotebook} from 'react-icons/gi'

import { Container, HeaderContainer, Header, LogoWrapper, LogoText } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoWrapper>
            < GiNotebook size='40' color="#00506b"/>
            <LogoText size="50">Phonebook</LogoText>
          </LogoWrapper>
          <Navigation />
          {true ? <AuthNav /> : <UserMenu />}
        </HeaderContainer>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}

export default Layout;
