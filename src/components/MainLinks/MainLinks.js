import React,{useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {GiElectric} from 'react-icons/gi'
import {FaGasPump} from 'react-icons/fa'
import {GoArrowBoth} from 'react-icons/go'
import { Link } from 'react-router-dom';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  InfoLabel,

} from './MainLinksElements';
import { Modal } from '../Modal';
import {GasModel} from '../GasModel';
import {HybridModal} from '../HybridModal';
function MainLinks() {
    const [formData, setFormData] = useState({electric: [], gas: [], hybrid: []})
    const [showModal,setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };
    const [showGModal,setShowGModal] = useState(false);
    const openGModal = () => {
        setShowGModal(prev => !prev);
    };
    const [showHModal,setShowHModal] = useState(false);
    const openHModal = () => {
        setShowHModal(prev => !prev);
    };

  const saveClickHandler = (data, type) => {
    const updatedForm = {...formData}
    updatedForm[type] = formData[type].concat(data)
    setFormData(updatedForm)
  }

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Choose your option!</PricingHeading>
          <PricingContainer>
          <PricingCard onClick={openModal}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiElectric/>
                </PricingCardIcon>
                <PricingCardPlan>Electric</PricingCardPlan>
               
              </PricingCardInfo>
            </PricingCard>
            <Modal showModal={showModal} setShowModal={setShowModal} onSave={saveClickHandler}/>
            
            <PricingCard onClick={openGModal}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaGasPump/>
                </PricingCardIcon>
                <PricingCardPlan>Gas</PricingCardPlan>
               
              </PricingCardInfo>
            </PricingCard>
            <GasModel showGModal={showGModal} setShowGModal={setShowGModal} onSave={saveClickHandler}/>
            <PricingCard onClick={openHModal}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GoArrowBoth/>
                </PricingCardIcon>
                <PricingCardPlan>Hybrid</PricingCardPlan>
                </PricingCardInfo>
            </PricingCard>
            <HybridModal showHModal={showHModal} setShowHModal={setShowHModal} onSave={saveClickHandler}/>
          </PricingContainer>
        </PricingWrapper>

      <PricingWrapper>
        <PricingHeading>Information Label</PricingHeading>
        <PricingContainer>
        
          <PricingCard>
          
          {formData.electric.map(({year}) => {
            return (
              
            <div>
              <h1>Electric data</h1>
              <h4>Year: {year}</h4>
            </div>
            )
          })}
           {formData.electric.map(({make}) => {
            return (
            <div>
              <h4>Make: {make}</h4>
            </div>
            )
          })}
           {formData.electric.map(({model}) => {
            return (
            <div>
              <h4>Model: {model}</h4>
            </div>
            )
          })}
          {formData.electric.map(({trim}) => {
            return (
            <div>
              <h4>Trim: {trim}</h4>
            </div>
            )
          })}
           {formData.electric.map(({charge_time}) => {
            return (
            <div>
              <h4>Charge Time: {charge_time}</h4>
            </div>
            )
          })}
           {formData.electric.map(({max_km}) => {
            return (
            <div>
              <h4>Max km per charge: {max_km}</h4>
            </div>
            )
          })}
        
           </PricingCard>
         <PricingCard>
          {formData.gas.map(({year}) => {
            return (
            <div>
              <h1>Gas Data</h1>
              <h4>Year: {year}</h4>
            </div>
            )
          })}
            {formData.gas.map(({make}) => {
            return (
            <div>
              <h4>Make: {make}</h4>
            </div>
            )
          })}
            {formData.gas.map(({model}) => {
            return (
            <div>
              <h4>Model: {model}</h4>
            </div>
            )
          })}
            {formData.gas.map(({trim}) => {
            return (
            <div>
              <h4>Trim: {trim}</h4>
            </div>
            )
          })}
            {formData.gas.map(({fuel_consumption}) => {
            return (
            <div>
              <h4>Fuel consumption: {fuel_consumption}</h4>
            </div>
            )
          })}
          </PricingCard>
          <PricingCard>
          {formData.hybrid.map(({year}) => {
            return (
             
            <div>
               <h1>Hybrid Data</h1>
              <h4>Year: {year}</h4>
            </div>
            )
          })}
          {formData.hybrid.map(({make}) => {
            return (
            <div>
              <h4>Make: {make}</h4>
            </div>
            )
          })}
          {formData.hybrid.map(({model}) => {
            return (
            <div>
              <h4>Model: {model}</h4>
            </div>
            )
          })}
          {formData.hybrid.map(({trim}) => {
            return (
            <div>
              <h4>Trim: {trim}</h4>
            </div>
            )
          })}
          {formData.hybrid.map(({fuel_consumption}) => {
            return (
            <div>
              <h4>Fuel consumption: {fuel_consumption}</h4>
            </div>
            )
          })}
          {formData.hybrid.map(({warranty}) => {
            return (
            <div>
              <h4>Has hybrid components warranty? {warranty}</h4>
            </div>
            )
          })}
        </PricingCard>
         </PricingContainer>
         </PricingWrapper>
         </PricingSection>
    </IconContext.Provider>
  );
}
export default MainLinks;
