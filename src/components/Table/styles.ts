import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const TableContent = styled.table`
  width: 100%;
  box-shadow: ${({ theme }) =>
    `${theme.shadow.default.size} ${theme.shadow.default.color}`};
`;

export const TableHeaderCell = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.75rem;

  width: 50%;

  font-weight: bold;
  background-color: ${({ theme }) => theme.background.secondary};
`;
