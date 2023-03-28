import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-grow: 1;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 500px;
  height: 570px;
  padding: 20px;
  background-color: #d7fff1;
  border-radius: 10px;
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
  margin-top: 0;
  text-align: center;
  font-size: 28px;
`;
