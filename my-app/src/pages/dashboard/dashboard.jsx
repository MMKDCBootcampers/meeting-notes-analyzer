import React from 'react';
import { Form } from "usetheform";
import { MaterialuiDropzone } from '../../components/dropzone/dropzone.jsx';
import Grid from '@mui/material/Grid';
import RecentWords from '../../components/recent-words/recentWords.jsx';
import RecentMeetings from '../../components/recent-meetings/recentMeetings.jsx';
import { postAudio, getJobStatus, getSpeechToText } from '../../utils/api.utils';

const handleSubmit = async (state) => {
  // TODO: Write axios request here to the backend to submit audio file

  //TODO: Redirect to Insights page once you're returned conversationId from saved database

  const file = await state.materialuiDropzone[0];
  const { conversationId, jobId } = await postAudio(file);
  console.log('~ conversationId', conversationId);
  console.log('~ jobId', jobId);
  
  const { status: jobStatus } = await getJobStatus(jobId);
  console.log('~ jobStatus', jobStatus);

  const speechResponse = await getSpeechToText(
    'https://symbltestdata.s3.us-east-2.amazonaws.com/sample_video_file.mp4'
  );
  console.log('~ speechResponse', speechResponse);
}

function Dashboard(props) {
  return (
      <Grid container id="dashboardContainer">
        <Grid item id="drop-and-words" xs={9}>
          <Grid item xs={12} sx={{ margin: '35px', padding: '10px'}}>
            <Form
              onChange={(state) => console.log("onChange =>", state)}
              // onSubmit={(state) => console.log("onSubmit =>", state.materialuiDropzone)}
              onSubmit={(state) => handleSubmit(state)}
            >
              <MaterialuiDropzone />
              <br />
              <button type="submit">Submit</button>
            </Form>
          </Grid>

          <Grid item xs={12}
            sx={{ height: '45vh', margin: '45px', padding: '10px', borderRadius: '10px', backgroundColor: '#E1E5F2'}}
          >
            <RecentWords />
          </Grid>
        </Grid>

        <Grid item id="recent-meetings" xs={3}
          sx={{ backgroundColor: '#A1E5F2',borderRadius: "10px"
        }}>
          <RecentMeetings />
        </Grid>

      </Grid>
  )
}

export default Dashboard;
