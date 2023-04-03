import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  flex-grow: 1;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  min-height: 570px;
  padding: 20px;
  background-color: ${({ theme }) => {
    return theme.colors.secondaryBackgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};
  box-shadow: ${({ theme }) => {
    return theme.boxShadow;
  }};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 28px;
  color: ${({ theme }) => {
    return theme.colors.mainColor;
  }};
`;
