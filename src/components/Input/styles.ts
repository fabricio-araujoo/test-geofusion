import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: ${({ theme }) => `0.2rem solid ${theme.border.default}`};
  box-shadow: ${({ theme }) =>
    `${theme.shadow.default.size} ${theme.shadow.default.color}`};

  font-size: 16px;

  &::placeholder {
    font-family: Lato;
  }
`;

export const Label = styled.label`
  font-size: 18px;
`;
