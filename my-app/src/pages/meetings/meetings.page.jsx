import { Container } from '@mui/material';
import {
  PlayArrow,
  DocumentScanner,
  GraphicEq,
  Delete,
} from '@mui/icons-material';

import { PageHeader } from '../../components/page-header/page-header.component';
import { CustomTable } from '../../components/custom-table/custom-table.component';

const menuItems = ['menu item 1', 'menu item 2', 'menu item 3'];

const createData = (
  meeting,
  recording,
  transcript,
  insights,
  uploaded,
  del
) => {
  return { meeting, recording, transcript, insights, uploaded, del };
};

const headers = [
  'Meeting',
  'Recording',
  'Transcript',
  'Insights',
  'Uploaded',
  'Delete',
];
const cols = 0

const rows = [[
  'Meeting Name',
  <PlayArrow />,
  <DocumentScanner />,
  <GraphicEq />,
  `Uploaded ${Math.floor(Math.random() * 60)} seconds ago`,
  <Delete />,
]];

const Meetings = () => {
  
  return (
    <Container>
      <PageHeader menuItems={menuItems} />
      <CustomTable headers={headers} rows={rows} cols={cols} />
    </Container>
  );
};

export default Meetings;
