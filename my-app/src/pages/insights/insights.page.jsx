import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Transcript from '../../components/transcript/transcript.jsx';
import Analytics from '../../components/analytics/analytics.jsx';
import Attendees from '../../components/attendees/attendees.jsx';

import { useAuth } from '../../contexts/AuthContext.jsx';

import {
  dummyMeetingData,
  dummyTranscriptData,
  dummyMembersData,
  dummyAnalyticsData,
} from '../../utils/dummy-data.js';

const Insights = () => {
  const { conversationId } = useAuth();

  const [meetingDataState, setMeetingDataState] = useState(dummyMeetingData);
  const [transcriptDataState, setTranscriptDataState] =
    useState(dummyTranscriptData);
  const [attendeesDataState, setAttendeesDataState] =
    useState(dummyMembersData);
  const [analyticsDataState, setAnalyticsDataState] =
    useState(dummyAnalyticsData);

  //TODO: Pass in conversationId from AuthContext to API request
  useEffect(() => {
    // Meeting Info - CONVERSATION DATA API
    // Transcript Info - MESSAGES (TRANSCRIPT) API
    // Attendee Info - Might be able to grab from CONVERSATION DATA API, but if not use MEMBERS (PARTICIPANTS/ATTENDEES) API
    // Analytics Info - ANALYTICS API
  }, []);

  return (
    <Grid
      container
      id="insightsContainer"
      xs={12}
      justifyContent="center"
      sx={{ padding: '20px' }}
      spacing={2}
    >
      <Grid item id="insights-title-section" xs={12}>
        <Typography variant="h2">Insights and Analytics</Typography>
        <Typography variant="h4">
          {meetingDataState.name}
          {', '}
          {meetingDataState.startTime.substring(0, 10)}
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={8}
        id="transcript-section"
        justifyContent="flex-start"
      >
        <Grid item xs={12}>
          <Typography variant="h4">Transcript</Typography>
          <Transcript data={transcriptDataState} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={4}
        id="analytics-attendees-section"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography variant="h4">Attendee List</Typography>
          <Attendees data={attendeesDataState} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Analytics</Typography>
          <Analytics data={analyticsDataState} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Insights;
