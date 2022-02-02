import { Container } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import { PageHeader } from '../../components/page-header/page-header.component';
import { CustomTable } from '../../components/custom-table/custom-table.component';

const menuItems = ['menu item 1', 'menu item 2', 'menu item 3'];

const createData = (term, meaning, pronunciation, added, actions) => {
  return { term, meaning, pronunciation, added, actions };
};

const headers = ['Term', 'Meaning', 'Pronunciation', 'Added', 'Actions'];

const rows = new Array(10).fill(
  createData('/term', 'meaning', '/pronunciation', '/added', '/actions')
);

const cols = [
  'Word, ABC',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lo-rim eep-som',
  Date().split(' ').slice(0, 5).join(' '),
  [<Edit />, <Delete />],
];

const Wordbank = () => {
  return (
    <Container>
      <PageHeader menuItems={menuItems} />
      <CustomTable headers={headers} rows={rows} cols={cols} />
    </Container>
  );
};

export default Wordbank;
