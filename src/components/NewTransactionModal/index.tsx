import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './style';

Modal.setAppElement('body');

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}:NewTransactionModalProps){

  const { createTransaction } = useTransactions();
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event:FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return(
    <Modal 
      isOpen={isOpen}
      ariaHideApp={false}
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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>New transaction</h2>

        <input 
          type="text" 
          placeholder='Title' 
          value={title} 
          onChange={event => setTitle(event?.target.value)} 
        />
        <input 
          type="number" 
          placeholder='Value' 
          value={amount} 
          onChange={event => setAmount(Number(event?.target.value))} 
        />

        <TransactionTypeContainer>
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
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder='Category' 
          value={category} 
          onChange={event => setCategory(event?.target.value)} 
        />

        <button type="submit">Save</button>

      </Container>
      
    </Modal>
  )
}