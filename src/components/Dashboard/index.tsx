import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './style';

export const Dashboard = () => (
  <Container>
    <Summary />
    <TransactionsTable />
  </Container>
);