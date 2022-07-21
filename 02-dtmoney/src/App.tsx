import React, { useState } from 'react';
import styled from 'styled-components'
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import  { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTrasactionModal';
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModalOpen={handleOpenNewTransactionModalOpen}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen = {isNewTransactionModalOpen} 
        onRequestClose = {handleCloseNewTransactionModalOpen}
      />
      <GlobalStyle></GlobalStyle>
    </>
  );
  }