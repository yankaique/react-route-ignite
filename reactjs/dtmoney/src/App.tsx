import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import Modal from 'react-modal';

export function App() {
  Modal.setAppElement('#root');

  const [ isNewTransactionModalOpen, setIsNewTranactionModalOpen ] = useState(false);
  
  function handleOpenNewTransactionModal() {
      setIsNewTranactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal() {
      setIsNewTranactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar Transação</h2>
      </Modal>
      <Dashboard />
      <GlobalStyle/>
    </>
  );
};
