import { Summary } from '../Summary';
import { TransictionTable } from '../TrasictionTable';
import { Container } from './style';

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransictionTable/>
    </Container>
  )
}