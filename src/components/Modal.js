import React,{useRef} from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import FormElectric from './Forms/FormElectric';
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;
const ModalContent = styled.div`
padding-top: 0.25em;

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 60px;
  right: 100px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal =({showModal, setShowModal, onSave})=>{
  const modalRef = useRef();
  const closeModal = e => {
    if(modalRef.current === e.target){
      setShowModal(false);
    }
  };
    return (
        <>
        {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>          
          <FormElectric showModal={showModal} toggleModal={setShowModal} onSave={onSave}/>               
          <CloseModalButton aria-label='Close modal' onClick={()=> setShowModal(prev=> !prev)}/>
        </Background>
        ) : null }        
        </>
    );
};
