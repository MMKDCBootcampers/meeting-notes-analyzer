import React from 'react';
import { Form } from "usetheform";
import { MaterialuiDropzone } from '../../components/dropzone/dropzone.jsx';
import Grid from '@mui/material/Grid';
import RecentWords from '../../components/recent-words/recentWords.jsx';
import RecentMeetings from '../../components/recent-meetings/recentMeetings.jsx';

const handleSubmit = (state) => {
  // TODO: Write axios request here to the backend to submit audio file

  //TODO: Redirect to Insights page once you're returned conversationId from saved database
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
