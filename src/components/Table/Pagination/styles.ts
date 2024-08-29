import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
`;

export const PageButton = styled.button<{ $selectedPage?: boolean }>`
  cursor: pointer;

  padding: 0.75rem;
  font-weight: ${({ $selectedPage }) => ($selectedPage ? 'bold' : 'normal')};

  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid #dddddd;
  box-shadow: ${({ theme }) =>
    `${theme.shadow.default.size} ${theme.shadow.default.color}`};

  &:first-child {
    border-top-left-radius: 0.35rem;
    border-bottom-left-radius: 0.35rem;
  }

  &:last-child {
    border-top-right-radius: 0.35rem;
    border-bottom-right-radius: 0.35rem;
  }
`;
