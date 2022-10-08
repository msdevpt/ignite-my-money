import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

  useEffect(() => {
    api.get('transactions')
    .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web site</td>
            <td className="deposit">$500.00</td>
            <td>Developer</td>
            <td>2022/10/01</td>
          </tr>
          
          <tr>
            <td>Rent</td>
            <td className="withdraw">-$400.00</td>
            <td>House</td>
            <td>2022/10/02</td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}