import styled from 'styled-components';

interface CellProps {
  $highlight: boolean;
}

export const Cell = styled.td<CellProps>`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.75rem;
  color: ${({ theme, $highlight }) =>
    !$highlight ? theme.text.default : theme.text.custom};
  background-color: ${({ theme }) => theme.background.secondary};
`;
