import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { Container } from './style';

ReactModal.setAppElement("#root")
interface NewTransactionModalProp{
  isOpen: boolean;
  onRequestClose: () => void;

}
export function NewTransactionModal({isOpen, onRequestClose }: NewTransactionModalProp){
  return(
    <ReactModal 
            isOpen = {isOpen}
            onRequestClose={onRequestClose}
            overlayClassName = 'react-modal-overlay'
            className='react-modal-content'
    >
    
    <Container>
      <h1>Cadastrar Transação</h1>
      <input type="text" placeholder='Titúlo' />
      <input type="text" placeholder='Valor' />
      <input type="text" placeholder='Categoria'/>

      <button type='submit'>
        Cadastrar
      </button>
    </Container>
    </ReactModal>
  )
}