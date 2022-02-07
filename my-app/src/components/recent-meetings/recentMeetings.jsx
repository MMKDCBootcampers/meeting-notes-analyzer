import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { useAuth } from '../../contexts/AuthContext.jsx';

//**************************** Dummy Data Code  ***************************************

const dummyMeetings = [{'description': 'meeting1'}, {'description': 'meeting2'}]

const RecentMeetings = () => {
  return (
    <Grid container justifyContent="center" direction="row">
      <Typography variant="h4">Recent Meetings</Typography>
      {
        dummyMeetings.map((elem,i) => {
          return (
            <Grid item xs={12} sx={{padding: '10px'}}>
              <Link to="/insights">
                <Typography variant="h5">
                  {elem.description}
                </Typography>
              </Link>
            </Grid>
          )
        })
      }
    </Grid>
  );
};

export default RecentMeetings;


//*************************** Production Ready Code *******************************

// const RecentMeetings = () => {
//   const { conversationId } = useAuth();
//   const [ conversationIdState, setConversationIdState ] = conversationId;

//   const [recentMeetingsData, setRecentMeetingsData] = useState([]);

//   //TODO: Grab most recent meetings from the database
//   useEffect(() => {
//   var config = {
//     method: 'get',
//     url: 'http://127.0.0.1:8000/transcripts/list?email=cal1296@yahoo.com',
//     headers: {
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjVmM2I0NjQ4YzU4M2NhZWFkMzBmZSIsImVtYWlsIjoiY2FsMTI5NkB5YWhvby5jb20iLCJuYW1lIjoiQ2FsIENsZW1tZXIiLCJpYXQiOjE2NDM3NTIzNDAsImV4cCI6MTY0Mzc1NTk0MH0.FSRP3EVxpfBWZvkYm7budva1sPAFi48epwtYfBWvzXc'
//     }
//   };
//     // axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
//     axios(config).then((response) => {
//       setRecentMeetingsData(response.data.data);
//     });
//   }, []);

//   let rows = []

//   //TODO: Add row data for Meeting Name, Meeting Upload Time
//   for (let i = 0; i < recentMeetingsData.length; i++) {
//     let date = recentMeetingsData[i]['date']
//     rows.push([
//       recentMeetingsData[i]['description'],`Uploaded ${date}`])
//   }

//   const handleClick = () => {
//       setConversationIdState(recentMeetingsData[i]['conversationId']);
//   };

//   return (
//     <Grid container justifyContent="center" direction="row">
//       <Typography variant="h4">Recent Meetings</Typography>
//       {
//         recentMeetingsData.map((elem,i) => {
//           return (
//             <Grid item xs={12} sx={{padding: '10px'}}>
//               <Link to="/insights">
//                   <Typography variant="h5" onClick={handleClick}>
//                     {elem.description}
//                   </Typography>
//               </Link>
//               </Grid>
//           )
//         })
//       }
//     </Grid>
//   );
// };

// export default RecentMeetings;