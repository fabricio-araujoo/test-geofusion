import styled from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 32.05rem;

  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) =>
    `${theme.shadow.default.size} ${theme.shadow.default.color}`};
`;

export const MapContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
