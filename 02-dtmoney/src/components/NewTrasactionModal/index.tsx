import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeSVG from './../../assets/Vector.svg'
import incomeImg from './../../assets/Entradas.svg'
import outcomeImg from './../../assets/Saídas.svg'

ReactModal.setAppElement("#root")
interface NewTransactionModalProp{
  isOpen: boolean;
  onRequestClose: () => void;

}
export function NewTransactionModal({isOpen, onRequestClose }: NewTransactionModalProp){
  const [type, setType] = useState("deposit")
  return(
    <ReactModal 
            isOpen = {isOpen}
            onRequestClose={onRequestClose}
            overlayClassName = 'react-modal-overlay'
            className='react-modal-content'
    >
    <button 
      type='button' 
      onClick={onRequestClose}
      className="react-modal-close-button"
    >
        <img src={closeSVG} alt="close modal" />
    </button>
    <Container>
      <h1>Cadastrar Transação</h1>
      <input type="text" placeholder='Titúlo' />
      <input type="text" placeholder='Valor' />

      <TransactionTypeContainer>
        <RadioBox type="button"
          onClick={() => setType('deposit')}
          isActive = {type === "deposit"}
          activeColor="green"
        >
          <img src={incomeImg} alt="entradas" />
          <span>Entradas</span>
        </RadioBox>

        <RadioBox type="button"
          onClick={() => setType('withdraw')}
          isActive = {type === "withdraw"}
          activeColor="red"
        >
         <img src={outcomeImg} alt="saídas" />
         <span>Saídas</span>
        </RadioBox>

      </TransactionTypeContainer>

      <input type="text" placeholder='Categoria'/>

      <button type='submit'>
        Cadastrar
      </button>
    </Container>
    </ReactModal>
  )
}