import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseData } from "../../utils/";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomePageMovies = createAsyncThunk(
  "yotubeApp/homePageMovies",
  async (isNext = false, thunkAPI) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = thunkAPI.getState();
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    const parsedData = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
