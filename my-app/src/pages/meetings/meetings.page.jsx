import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { PlayArrow, Article, ShowChart, Delete } from '@mui/icons-material';

import axios from 'axios';
import { getMeetingsData } from '../../utils/api.utils';

import { PageHeader } from '../../components/page-header/page-header.component';
import { CustomTable } from '../../components/custom-table/custom-table.component';

const menuItems = ['menu item 1', 'menu item 2', 'menu item 3'];
const headers = [
  'Meeting',
  'Recording',
  'Transcript',
  'Insights',
  'Uploaded',
  'Delete',
];
const icons = {
  recording: <PlayArrow />,
  transcript: <Article />,
  insights: <ShowChart />,
  delete: <Delete />,
};
const cols = 0;

const Meetings = () => {
  // const [wordbankData, setWordbankData] = useState([]);

  // //grab data
  // useEffect(() => {
  //   var config = {
  //     method: 'get',
  //     url: 'http://127.0.0.1:8000/transcripts/list?email=cal1296@yahoo.com',
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjVmM2I0NjQ4YzU4M2NhZWFkMzBmZSIsImVtYWlsIjoiY2FsMTI5NkB5YWhvby5jb20iLCJuYW1lIjoiQ2FsIENsZW1tZXIiLCJpYXQiOjE2NDM3NTIzNDAsImV4cCI6MTY0Mzc1NTk0MH0.FSRP3EVxpfBWZvkYm7budva1sPAFi48epwtYfBWvzXc',
  //     },
  //   };
  //   // axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
  //   axios(config).then(response => {
  //     setWordbank(response.data.data);
  //     console.log('response data', response.data.data);
  //     // console.log("Testing data", response.data.data.wordbanks);
  //     // console.log('wordbankData', wordbankData)
  //   });
  // }, []);

  // let rows = [];

  // for (let i = 0; i < wordbankData.length; i++) {
  //   let date = wordbankData[i]['date'];
  //   rows.push([
  //     wordbankData[i]['description'],
  //     <PlayArrow />,
  //     <DocumentScanner />,
  //     <GraphicEq />,
  //     `Uploaded ${date}`,
  //     <Delete />,
  //   ]);
  // }

  const [meetingsData, setMeetingsData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getMeetingsData();

      setMeetingsData(response);
    })();
  }, []);

  return (
    <Container>
      <PageHeader title="Meetings" buttonLabel='Upload new' menuItems={menuItems} />
      <CustomTable
        headers={headers}
        rows={meetingsData}
        cols={cols}
        icons={icons}
      />
    </Container>
  );
};

export default Meetings;
