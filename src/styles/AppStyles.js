import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
`;

export const Section = styled.section`
  /* width: 100vw;  */
  scroll-snap-align: start; /* Garante que cada seção seja "encaixada" ao ser rolada */
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;