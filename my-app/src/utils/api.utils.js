import axios from 'axios';

import {
  dummyMeetingData,
  dummyMeetingsData,
  dummyTranscriptData,
  dummyMembersData,
  dummyAnalyticsData,
  dummyWordbankData,
} from './dummy-data';

const SYMBL_APP_ID = process.env.REACT_APP_SYMBL_APP_ID;
const SYMBL_APP_SECRET = process.env.REACT_APP_SYMBL_APP_SECRET;
const SYMBL_BEARER_TOKEN = process.env.REACT_APP_SYMBL_BEARER_TOKEN;
// let SYMBL_BEARER_TOKEN = null;

export const getMeetingData = async () => {
  return dummyMeetingData;
};

export const getMeetingsData = async () => {
  return dummyMeetingsData;
};

export const getTranscriptData = async () => {
  return dummyTranscriptData;
};

export const getMembersData = async () => {
  return dummyMembersData;
};

export const getAnalyticsData = async () => {
  return dummyAnalyticsData;
};

export const getWordbankData = async () => {
  return dummyWordbankData;
};

/**
* api calls - wip
**/
const getSecret = async () => {
  const config = {
    method: 'post',
    url: 'https://api.symbl.ai/oauth2/token:generate',
    data: {
      type: 'application',
      appId: SYMBL_APP_ID,
      appSecret: SYMBL_APP_SECRET,
    },
  };

  try {
    const response = await axios(config);
    const data = await response.data;

    if (data) {
      SYMBL_BEARER_TOKEN = data.accessToken;
      console.log('~ data', data.accessToken);
    }
  } catch (error) {
    console.log('~ error', error);
  }
};

export const postAudio = async file => {
  const config = {
    method: 'post',
    url: 'https://api.symbl.ai/v1/process/audio',
    headers: {
      Authorization: `Bearer ${SYMBL_BEARER_TOKEN}`,
      'Content-Type': 'audio/mpeg',
      // 'Content-Type': 'audio',
    },
    data: file,
  };

  try {
    const response = await axios(config);
    const data = await response.data;
    
    return data;
  } catch (error) {
    console.log('~ error', error);
  }
};

const postVideoURL = async videoURL => {
  await getSecret();

  const payload = {
    url: videoURL,
    name: 'BusinessMeeting',
    confidenceThreshold: 0.6,
  };

  const config = {
    method: 'post',
    url: 'https://api.symbl.ai/v1/process/video/url',
    headers: {
      Authorization: `Bearer ${SYMBL_BEARER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: payload,
    // data: JSON.stringify(payload),
  };

  try {
    const response = await axios(config);
    const { data } = await response;

    return data;
  } catch (error) {
    console.log('~ ERROR', error);
  }
};

export const getSpeechToText = async videoURL => {
  // const { conversationId } = await processAudio(
  //   '/Users/dav/CODING/hackathons/developer-week-2022'
  // );
  const { conversationId } = await postVideoURL(videoURL);
  // console.log('~ conversationId', conversationId);
  const config = {
    headers: {
      Authorization: `Bearer ${SYMBL_BEARER_TOKEN}`,
    },
  };
  const response = await axios.get(
    // `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
    `https://api.symbl.ai/v1/conversations/6277964883820544/messages`,
    config
  );
  const { data } = await response;

  return data;
};
