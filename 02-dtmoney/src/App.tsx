import React from 'react';
import styled from 'styled-components'
import  { GlobalStyle } from './styles/global'

const Title = styled.h1`
  color: #8257e6;
`


export function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Title> OLÀRES </Title>
    </div>
  );
  }