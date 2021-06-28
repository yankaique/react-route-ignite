import { useState } from 'react';
import closeIMG from '../../assets/icons/close.svg';
import incomeIMG from '../../assets/icons/income.svg';
import outcomeIMG from '../../assets/icons/outcome.svg';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    
    const [ type, setType ] = useState('deposit');

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
        <Container>
            <h2>Cadastrar Transação</h2>

            <input placeholder="Titulo" />
            <input type="number" placeholder="Valor" />

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

            <input placeholder="Categoria" />

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    );
}