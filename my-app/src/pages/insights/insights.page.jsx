import React, { useState, useEffect } from "react";
import {Grid, Typography} from '@mui/material';
import Transcript from '../../components/transcript/transcript.jsx';
import Analytics from '../../components/analytics/analytics.jsx';
import Attendees from '../../components/attendees/attendees.jsx';

import { useAuth } from '../../contexts/AuthContext.jsx';

const dummyMeetingData = {
    "id": "6300209257644032",
    "type": "meeting",
    "name": "6300209257644032",
    "startTime": "2022-02-05T05:38:25.509Z",
    "endTime": "2022-02-05T05:39:16.537Z",
    "members": [],
    "metadata": {}
}

const dummyTranscriptData = {
  "messages": [
      {
          "id": "5537726498603008",
          "text": "But what?",
          "from": {},
          "startTime": "2022-02-05T05:38:25.509Z",
          "endTime": "2022-02-05T05:38:25.909Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "6505926447071232",
          "text": "If somebody decides to break it, be careful that you keep adequate coverage, but look for places to save money.",
          "from": {},
          "startTime": "2022-02-05T05:38:25.909Z",
          "endTime": "2022-02-05T05:38:31.709Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "5202415616786432",
          "text": "Maybe it's taking longer to get things squared away.",
          "from": {},
          "startTime": "2022-02-05T05:38:31.709Z",
          "endTime": "2022-02-05T05:38:35.009Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "6163852635930624",
          "text": "Then the bankers expected hiring the wife or one's company, may win her tax, ated retirement, and come to boost is helpful.",
          "from": {},
          "startTime": "2022-02-05T05:38:35.009Z",
          "endTime": "2022-02-05T05:38:42.209Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "6432350234738688",
          "text": "But inadequate, new self-deceiving Rags or hers Lee tossed on the two naked bones.",
          "from": {},
          "startTime": "2022-02-05T05:38:42.209Z",
          "endTime": "2022-02-05T05:38:47.309Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "6570147281108992",
          "text": "What a discussion can ensue when the title of this type of song is in question.",
          "from": {},
          "startTime": "2022-02-05T05:38:47.309Z",
          "endTime": "2022-02-05T05:38:51.509Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "4721791126732800",
          "text": "There is no dying or waxing or gassing needed paperweight Maybe.",
          "from": {},
          "startTime": "2022-02-05T05:38:51.509Z",
          "endTime": "2022-02-05T05:38:55.409Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "6094214438846464",
          "text": "Analyzed on back while Clay is leather hard place work on a flat surface and smooth out.",
          "from": {},
          "startTime": "2022-02-05T05:38:55.509Z",
          "endTime": "2022-02-05T05:39:00.509Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "5806910050664448",
          "text": "The simplest kind of separate system uses a single self-contained unit.",
          "from": {},
          "startTime": "2022-02-05T05:39:00.509Z",
          "endTime": "2022-02-05T05:39:05.609Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "4614916083286016",
          "text": "The old shop adage still holds a good mechanic is usually a bad boss.",
          "from": {},
          "startTime": "2022-02-05T05:39:05.609Z",
          "endTime": "2022-02-05T05:39:09.809Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "5200514422669312",
          "text": "Both figures would go higher in later years.",
          "from": {},
          "startTime": "2022-02-05T05:39:09.809Z",
          "endTime": "2022-02-05T05:39:12.209Z",
          "conversationId": "6300209257644032",
          "phrases": []
      },
      {
          "id": "4591872795213824",
          "text": "Some make beautiful chairs cabinets, chest doll houses, Etc.",
          "from": {},
          "startTime": "2022-02-05T05:39:12.209Z",
          "endTime": "2022-02-05T05:39:16.209Z",
          "conversationId": "6300209257644032",
          "phrases": []
      }
  ]
}

const dummyMembersData =  {
  "members": [
      {
          "id": "fc9b35cd-361f-41c6-9029-0944d21c7150",
          "name": "John",
          "email": "John@example.com"
      },
      {
          "id": "382362a2-eeec-46a3-8891-d50508293851",
          "name": "Mary",
          "email": "Mary@example.com"
      },
      {
          "id": "b7de3a33-a16c-4926-9d4d-a904c88271c2",
          "name": "Roger",
          "email": "Roger@example.com"
      }
  ]
}

const dummyAnalyticsData = {
  "metrics": [
      {
          "type": "total_silence",
          "percent": 0.839,
          "seconds": 0.428
      },
      {
          "type": "total_talk_time",
          "percent": 99.161,
          "seconds": 50.6
      },
      {
          "type": "total_overlap",
          "percent": 0,
          "seconds": 0
      }
  ],
  "members": [
      {
          "name": "unknown_speaker",
          "pace": {
              "wpm": 181
          },
          "talkTime": {
              "percentage": 100,
              "seconds": 50.6
          },
          "listenTime": {
              "percentage": 0,
              "seconds": 0
          },
          "overlap": {}
      },
      {
        "name": "president",
        "pace": {
            "wpm": 181
        },
        "talkTime": {
            "percentage": 100,
            "seconds": 50.6
        },
        "listenTime": {
            "percentage": 0,
            "seconds": 0
        },
        "overlap": {}
    },
  ]
}

const Insights = () => {
  const { conversationId } = useAuth();

  const [ meetingDataState, setMeetingDataState ] = useState(dummyMeetingData);
  const [ transcriptDataState, setTranscriptDataState ] = useState(dummyTranscriptData);
  const [ attendeesDataState, setAttendeesDataState ] = useState(dummyMembersData);
  const [ analyticsDataState, setAnalyticsDataState ] = useState(dummyAnalyticsData);

  //TODO: Pass in conversationId from AuthContext to API request
  useEffect(() => {
      // Meeting Info
      // Transcript Info
      // Attendee Info
      // Analytics Info
  }, []);

  return (
      <Grid container id="insightsContainer" xs={12}
        justifyContent="center"
        sx={{padding:'20px'}}
        spacing={2}
      >
        <Grid item id="insights-title-section" xs={12}>
          <Typography variant="h2">Insights and Analytics</Typography>
          <Typography variant="h4">{meetingDataState.name}{', '}{meetingDataState.startTime.substring(0,10)}</Typography>
        </Grid>
        <Grid item container xs={8} id="transcript-section"
        justifyContent="flex-start"
        >
          <Grid item xs={12}>
            <Typography variant="h4">Transcript</Typography>
            <Transcript data={transcriptDataState} />
          </Grid>

        </Grid>

        <Grid item container xs={4} id="analytics-attendees-section"
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
