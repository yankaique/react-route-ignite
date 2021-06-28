import closeIMG from '../../assets/icons/close.svg';
import incomeIMG from '../../assets/icons/income.svg';
import outcomeIMG from '../../assets/icons/outcome.svg';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    
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
                <button type="button">
                    <img src={incomeIMG} alt="Entrada" />
                    <span>
                        Entrada
                    </span>
                </button>

                <button type="button">
                    <img src={outcomeIMG} alt="Saída" />
                    <span>
                        Saída
                    </span>
                </button>
            </TransactionTypeContainer>

            <input placeholder="Categoria" />

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    );
}