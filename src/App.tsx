import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('root');

export function App() {
  const [isModalTransactionOpen, setIsModalTransactionOpen] = useState(false);

  function handleOpenNewModalTransaction(){
    setIsModalTransactionOpen(true);
  }

  function handleCloseNewModalTransaction(){
    setIsModalTransactionOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewModalTransaction} />

      <Dashboard />
      
      <Modal 
          isOpen={isModalTransactionOpen}
          onRequestClose={handleCloseNewModalTransaction}
        >
          <h2>New transaction</h2>
        </Modal>

      <GlobalStyle />
    </>
  );
}