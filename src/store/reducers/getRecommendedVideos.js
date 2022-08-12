import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "yotubeApp/getRecommendedVideos",
  async ({ videoId, isNext = false }, thunkAPI) => {
    const {
      youtubeApp: {
        recommendedVideos,
        nextPageToken: nextPageTokenFromState,
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = thunkAPI.getState();

    console.log({ channelId });
    // const {
    //   data: { items, nextPageToken },
    // } = await axios.get(
    //   `${YOUTUBE_API_URL}/activitiespart?key=${API_KEY}&part=snippet&type=video&videoId=${}&${
    //     isNext ? `pageToken=${nextPageTokenFromState}` : ""
    //   }`
    // );

    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet&maxResults=15&type=video&videoId=${videoId}&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    console.log(items, nextPageToken);

    const parsedData = await parseData(items);
    console.log({ parsedData });
    return { parsedData: [...recommendedVideos, ...parsedData], nextPageToken };
  }
);
