import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function TransactionsTable(){
  const {transactions} = useTransactions();

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
          {transactions.map( transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-PT', {
                  style: 'currency',
                  currency: 'EUR'
                }).format(transaction.amount)}
              </td>

              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-PT').format(
                new Date(transaction.createdAt)
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}