import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransictionTable(){

  useEffect(() =>{
    api.get('transactions').then(data => console.log(data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className='deposit'>$50,00</td>
            <td>Desenvolviomento</td>
            <td>20/02/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className='withdraw'>-$150,00</td>
            <td>Desenvolviomento</td>
            <td>20/02/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className='deposit'>$50,00</td>
            <td>Desenvolviomento</td>
            <td>20/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}