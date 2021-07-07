import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';
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
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle/>
    </TransactionProvider>
  );
};
