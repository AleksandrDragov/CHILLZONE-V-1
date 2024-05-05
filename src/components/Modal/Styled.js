import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  position: absolute;
  font-size: 32px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;
