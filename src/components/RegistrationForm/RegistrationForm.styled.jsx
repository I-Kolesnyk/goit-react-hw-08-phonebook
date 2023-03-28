import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
  padding: 30px;
  border: 2px solid #00506b;
  border-radius: 10px;
  background-color: #d7fff1;
`;

export const StyledLabel = styled.label`
display: flex;
  flex-direction: column;
  gap: 18px;
  color: #00506b;
  div {
    padding: 12px;
    border: 2px solid #00506b;
    border-radius: 8px;
    background-color: rgba(255, 127, 80, 0.8);
    width: calc(100% - 28px);
    font-size: 16px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 15px;
  font-size: 16px;
  border: 2px solid #00506b;
  border-radius: 8px;
  &::placeholder {
    font-size: 16px;
    color: #00506b;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  transform: scale(1);
  background-color: white;
  color: #00506b;
  border-radius: 8px;
  border: 2px solid #00506b;
  font-size: 18px;
  font-weight: 700;
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: #71238a;
    border: 2px solid #71238a;
    transform: scale(1.1);
  }
`;
