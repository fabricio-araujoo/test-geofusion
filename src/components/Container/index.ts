import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: auto;
  min-height: 100vh;
  padding: 3rem 5rem;

  background-color: ${({ theme }) => theme.background.default};
`;
