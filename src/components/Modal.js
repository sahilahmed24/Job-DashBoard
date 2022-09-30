import React, { useRef } from "react";

import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(14, 17, 17, 0.57);
  z-index: 400;
  cursor: auto;
`;
const ModalWrapper = styled.div`
  margin-left: 50%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 10;
  border-radius: 10px;
`;

const Modal = ({ showModal, setShowModal, childern }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current !== e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>{childern}</ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
