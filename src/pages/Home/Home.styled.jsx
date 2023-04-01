import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
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

export const WelcomeMessage = styled.p`
  margin: 20 0;
  padding-top: 10px;
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
  text-align: center;
`;

export const Image = styled.img`
  width: 300px;
`;
