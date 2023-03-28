import styled from '@emotion/styled';
import { GiNotebook } from 'react-icons/gi';

export const HeaderContainer = styled.div`
  ${({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '320px',
    margin: '0 auto',
    padding: '0 20px',
    [theme.breakPoints.tablet]: {
      maxWidth: '768px',
      padding: '0 32px',
    },
    [theme.breakPoints.desktop]: {
      maxWidth: '1200px',
    },
  })} 
`;

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Header = styled.header`
  ${({ theme }) => ({
    backgroundColor: theme.colors.secondaryBackgroundColor,
    padding: '20px',
  })}
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LogoText = styled.p`
  ${({ theme }) => ({
    margin: '0',
    color: theme.colors.mainColor,
    fontSize: '50px',
    fontWeight: theme.fontStyles.fontWeight,
  })}
`;

export const StyledMain = styled.main`
  
  ${({ theme }) => ({
    
    backgroundColor: theme.colors.mainBackgroundColor,
    
  })}
`;

export const LogoIcon = styled(GiNotebook)`
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
`;
