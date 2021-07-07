import { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeIMG from '../../assets/icons/close.svg';
import incomeIMG from '../../assets/icons/income.svg';
import outcomeIMG from '../../assets/icons/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [type, setType] = useState('deposit');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const handleCreateNewTransaction = async (event: FormEvent ) => {
        event.preventDefault();
        await createTransaction({
            title,
            category,
            amount,
            type
        });

        setTitle('');
        setType('');
        setAmount(0);
        setCategory('deposit');

        onRequestClose();
    }

    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      > 
        <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close">
            <img src={closeIMG} alt="Fechar modal" />
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input 
                placeholder="Titulo" 
                value={title}
                onChange={e => setTitle(e.target.value)}    
            />
            <input 
                type="number" 
                placeholder="Valor" 
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox 
                    type="button" 
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeIMG} alt="Entrada" />
                    <span>
                        Entrada
                    </span>
                </RadioBox>

                <RadioBox 
                    type="button" 
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeIMG} alt="Saída" />
                    <span>
                        Saída
                    </span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
                placeholder="Categoria" 
                value={category}
                onChange={e => setCategory(e.target.value)}    
            />

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    );
}