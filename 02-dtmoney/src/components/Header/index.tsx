import { useEffect, useState } from 'react'
import logoImg from "../../assets/Logo.svg"
import ReactModal from 'react-modal'
import { Container, Content } from './style'
export function Header(){
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt = "dt money"/>
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}