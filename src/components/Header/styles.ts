import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;

  width: auto;
  height: 3.75rem;
  padding: 0 5rem;

  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.light};

  box-shadow: 0 0.3rem 0.5rem #bfbfbf;
`;

export const HeaderContent = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
`;
