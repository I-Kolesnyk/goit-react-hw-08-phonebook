import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const WelcomeMessage = styled.p`
  margin: 20px 0;
  padding-top: 10px;
  font-size: ${({ theme }) => {
    return theme.fontStyles.size;
  }};
  font-weight: ${({ theme }) => {
    return theme.fontStyles.weight;
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