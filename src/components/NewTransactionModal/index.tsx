import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TansactionTypeContainer, RadioBox } from './style';
import { useState } from 'react';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}:NewTransactionModalProps){
  
  const [type, setType] = useState('deposit');

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type='button' 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Close new transaction" />
      </button>

      <Container>
        <h2>New transaction</h2>

        <input type="text" placeholder='Description' />
        <input type="number" placeholder='Value' />

        <TansactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {setType('deposit'); }}
            isActive = {type === 'deposit'}
            activeColor = 'green'
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {setType('withdraw'); }}
            isActive = {type === 'withdraw'}
            activeColor = 'red'
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TansactionTypeContainer>

        <input type="text" placeholder='Category' />

        <button type="submit">Save</button>

      </Container>
      
    </Modal>
  )
}