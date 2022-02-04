import { Container } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import React, {useState, useEffect} from "react"

import { PageHeader } from '../../components/page-header/page-header.component';
import { CustomTable } from '../../components/custom-table/custom-table.component';
import axios from 'axios';

const menuItems = ['menu item 1', 'menu item 2', 'menu item 3'];

const createData = (term, meaning, pronunciation, added, actions) => {
  return { term, meaning, pronunciation, added, actions };
};

const headers = ['Term', 'Meaning', 'Pronunciation', 'Added', 'Actions'];

// let rows = new Array(5).fill(
//   createData('/term', 'fmeaning', '/pronunciation', '/added', '/actions')
// );


const cols = [
  'Word, ABC',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lo-rim eep-som',
  Date().split(' ').slice(0, 5).join(' '),
  [<Edit />, <Delete />],
];

const Wordbank = () => {
  const [wordbankData, setWordbank] = useState([]);
  
  
  //grab data
  useEffect(() => {
  var config = {
    method: 'get',
    url: 'http://127.0.0.1:8000/wordbanks/list?email=cal1296@yahoo.com',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjVmM2I0NjQ4YzU4M2NhZWFkMzBmZSIsImVtYWlsIjoiY2FsMTI5NkB5YWhvby5jb20iLCJuYW1lIjoiQ2FsIENsZW1tZXIiLCJpYXQiOjE2NDM3NTIzNDAsImV4cCI6MTY0Mzc1NTk0MH0.FSRP3EVxpfBWZvkYm7budva1sPAFi48epwtYfBWvzXc'
    }
  };
    // axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
    axios(config).then((response) => {
      setWordbank(response.data.data.wordbanks);
        // console.log("Testing data", response.data.data.wordbanks);
        // console.log('wordbankData', wordbankData)
    });
  }, []);

  let rows = []
  for (let i = 0; i < wordbankData.length; i++) {
    rows.push([wordbankData[i], 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lo-rim eep-som', Date().split(' ').slice(0, 5).join(' '),
    [<Edit />, <Delete />]])
  }
//   rows = [
//     ['/term', 'meaning', '/pronunciation', '/added', '/actions'],
//     [1,2,3,4,5]
// ];
  console.log('wordbankData', wordbankData)

  return (
    <Container>
      <PageHeader menuItems={menuItems} />
      <CustomTable headers={headers} rows={rows} cols={cols} />
    </Container>
  );
};

export default Wordbank;
