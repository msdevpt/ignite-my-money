import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './style';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}:NewTransactionModalProps){
  
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
        <input type="text" placeholder='Category' />

        <button type="submit">Save</button>

      </Container>
      
    </Modal>
  )
}