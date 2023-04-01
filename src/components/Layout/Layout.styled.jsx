import styled from '@emotion/styled';
import { GiNotebook } from 'react-icons/gi';

export const HeaderContainer = styled.div`
  ${({ theme }) => ({
    [theme.breakPoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: '15px',
      maxWidth: '480px',
      margin: '0 auto',
      padding: '0 20px',
    },
    [theme.breakPoints.tablet]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '768px',
      padding: '0 32px',
    },
    [theme.breakPoints.desktop]: {
      maxWidth: '1200px',
    },
  })}
`;

export const Wrapper = styled.div`
  ${({ theme }) => ({
    [theme.breakPoints.mobile]: {
      display: 'flex',
      alignItems: 'center',
      gap: '50px',
    },
  })}
`;

export const Container = styled.div`
  ${({ theme }) => ({
    maxWidth: '480px',
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
    fontSize: '20px',
    fontWeight: theme.fontStyles.fontWeight,
    [theme.breakPoints.tablet]: { fontSize: '30px' },
    [theme.breakPoints.desktop]: {
      fontSize: '50px',
    },
  })}
`;

export const StyledMain = styled.main`
  ${({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.colors.mainBackgroundColor,
  })}
`;

export const LogoIcon = styled(GiNotebook)`
  ${({ theme }) => ({
    color: theme.colors.mainColor,
  })}
`;
