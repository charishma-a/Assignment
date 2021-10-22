import React,{useRef} from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import FormGas from './Forms/FormGas';

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
const CancelButton = styled.button`
    width: 80%;
    height: 50px;
    margin-top: 450px; 
    border-radius: 2px;
    z-index: 100;
    background: linear-gradient(
      90deg,
      rgb(39, 176, 255) 0%,
      rgb(0, 232, 236) 100%
    );
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;  
`
const ButtonWrapper=styled.div`
    width: 10%;
    height: 500px;
    margin-top: 100px;
    z-index: 100;
    top: 80%;
    left: 50%;
    transform: translate(-200%, 16%);
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

export const GasModel =({showGModal, setShowGModal, onSave})=>{
  const modalRef = useRef();
  const closeModal = e => {
    if(modalRef.current === e.target){
      setShowGModal(false);
    }
  };
    return (
        <>
        {showGModal ? (
         <Background ref={modalRef} onClick={closeModal}>
            
                <FormGas showGModal={showGModal} toggleModal={setShowGModal} onSave={onSave}>
               </FormGas> 
               <CloseModalButton aria-label='Close modal' onClick={()=> setShowGModal
                (prev=> !prev)}/>
                <ButtonWrapper>
                  <CancelButton type='button' onClick={()=> setShowGModal(prev=> !prev)}>Cancel</CancelButton>
                </ButtonWrapper>
        </Background>
        ):null}
        
        </>
    );
};
