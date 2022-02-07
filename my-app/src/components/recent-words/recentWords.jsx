import { Container, Typography } from '@mui/material';
import { CustomTable } from '../../components/custom-table/custom-table.component';

import React, { useState, useEffect } from "react";
import axios from 'axios';

//************************* Dummy Data Code  ******************************

const createData = (term, meaning) => {
  return { term, meaning };
};

const headers = ['Term', 'Meaning'];

const rows = [['Word1','Meaning1'],['Word2','Meaning2'],['Word3','Meaning3'],['Word4','Meaning4']];

const cols = 0;

const RecentWords = () => {
  return (
    <Container>
      <Typography variant="h4">Recent Words</Typography>
      <CustomTable headers={headers} rows={rows} cols={cols} />
    </Container>
  );
};

export default RecentWords;


//*************************** Production Ready Code *******************************
// const headers = ['Term', 'Meaning'];

// const cols = [
//   'WordABC',
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// ];

// const RecentWords = () => {
//   const [recentWordbankData, setRecentWordbank] = useState([]);

//   //TODO: Grab most recent words from the database
//   useEffect(() => {
//     var config = {
//       method: 'get',
//       url: 'http://127.0.0.1:8000/wordbanks/list?email=cal1296@yahoo.com',
//       headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjVmM2I0NjQ4YzU4M2NhZWFkMzBmZSIsImVtYWlsIjoiY2FsMTI5NkB5YWhvby5jb20iLCJuYW1lIjoiQ2FsIENsZW1tZXIiLCJpYXQiOjE2NDM3NTIzNDAsImV4cCI6MTY0Mzc1NTk0MH0.FSRP3EVxpfBWZvkYm7budva1sPAFi48epwtYfBWvzXc'
//       }
//     };
//       // axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
//       axios(config).then((response) => {
//         setRecentWordbank(response.data.data.wordbanks);
//           // console.log("Testing data", response.data.data.wordbanks);
//           // console.log('wordbankData', wordbankData)
//       });
//     }, []);

//     let rows = []

//     //TODO: Add row data for Word, and Meaning.
//     for (let i = 0; i < recentWordbankData.length; i++) {
//     rows.push([recentWordbankData[i][0], recentWordbankData[i][1]]) //need to check this
//   }

//   return (
//     <Container>
//       <Typography variant="h4">Recent Words</Typography>
//       <CustomTable headers={headers} rows={rows} cols={cols} />
//     </Container>
//   );
// };

// export default RecentWords;

