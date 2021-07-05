import { useContext } from 'react';
import incomeIMG from '../../assets/icons/income.svg';
import outcomeIMG from '../../assets/icons/outcome.svg';
import totalIMG from '../../assets/icons/total.svg';
import { TransactionContext } from '../../TransactionsContext';
import { Container } from './styles';

export function Summary() {
    const data = useContext(TransactionContext);

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIMG} alt="Entradas"/>
                </header>
                <strong>
                    R$1000
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIMG} alt="Saídas"/>
                </header>
                <strong>
                    - R$500
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIMG} alt="Total"/>
                </header>
                <strong>
                    R$500
                </strong>
            </div>
        </Container>
    );
}