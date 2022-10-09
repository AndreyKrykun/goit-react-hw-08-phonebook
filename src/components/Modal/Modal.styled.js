import styled from 'styled-components';

export const Overlay = styled.div`
  position: ${p => p.theme.position.fixed};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.modalBg};
  z-index: 999;
`;

export const ModalWindow = styled.div`
  position: ${p => p.theme.position.relative};
  background-color: ${p => p.theme.colors.modalColor};
  border-radius: ${p => p.theme.radii.lg};
  width: 500px;
  height: 300px;
`;
