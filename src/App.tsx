import { useState } from 'react'

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

// Modal.setAppElement('root');

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
      
      <NewTransactionModal 
        isOpen={isModalTransactionOpen} 
        onRequestClose={handleCloseNewModalTransaction} 
      />

      <GlobalStyle />
    </>
  );
}