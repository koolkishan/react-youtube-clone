import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchCard from "../components/SearchCard";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.youtubeApp.videos);
  const searchTerm = useSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos());
    }
  }, []);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div className="py-8 pl-8  flex flex-col gap-5 w-full">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={600}
            >
              {videos.map((item) => {
                return (
                  <div className="my-5">
                    <SearchCard key={item.videoId} data={item} />
                  </div>
                );
              })}
            </InfiniteScroll>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}
