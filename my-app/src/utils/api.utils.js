import axios from 'axios';

import {
  dummyMeetingData,
  dummyMeetingsData,
  dummyTranscriptData,
  dummyMembersData,
  dummyAnalyticsData,
  dummyWordbankData,
} from './dummy-data';

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
