import { Container } from '@mui/material';
import { PageHeader } from '../../components/page-header/page-header.component';

const menuItems = ['menu item 1', 'menu item 2', 'menu item 3'];

const Insights = () => {
  return (
    <Container>
      <PageHeader menuItems={menuItems} />
    </Container>
  );
};

export default Insights;
