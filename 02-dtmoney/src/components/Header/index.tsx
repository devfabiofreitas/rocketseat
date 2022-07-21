
import logoImg from "../../assets/Logo.svg"
import { Container, Content } from './style'

interface HeaderProp {
  onOpenNewTransactionModalOpen: () => void;
}
export function Header({onOpenNewTransactionModalOpen}: HeaderProp){
  return (
    <Container>
      <Content>
        <img src={logoImg} alt = "dt money"/>
        <button type="button" onClick={onOpenNewTransactionModalOpen}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}