import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import WatchCard from "../components/WatchCard";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";

export default function Watch() {
  const [showMoreStatus, setShowMoreStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const currentPlaying = useSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideos = useSelector(
    (state) => state.youtubeApp.recommendedVideos
  );
  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id]);

  useEffect(() => {
    if (currentPlaying) dispatch(getRecommendedVideos({ videoId: id }));
  }, [currentPlaying]);

  return (
    <>
      {currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div style={{ height: "7.5vh" }}>
            <Navbar />
          </div>
          <div className="flex w-full" style={{ height: "92.5vh" }}>
            <div className="flex gap-y-10 gap-x-5 p-7 mx-20 mr-0  w-full overflow-auto">
              <div style={{ maxWidth: "892px" }}>
                <div>
                  <iframe
                    width="892"
                    height="502"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-5">
                  <p className="text-xl">{currentPlaying.videoTitle}</p>
                  <div className="flex justify-between mt-1">
                    <div className="text-sm text-gray-400">
                      <span className="after:content-['•'] after:mx-1">
                        {currentPlaying.videoViews} views
                      </span>
                      <span> {currentPlaying.videoAge} ago</span>
                    </div>
                    <div className="flex items-center gap-4 uppercase">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <BiLike className="text-xl" />
                        <strong>{currentPlaying.videoLikes}</strong>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <BiDislike className="text-xl" />
                        <strong>dislike</strong>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <FaShare className="text-xl" />
                        <strong>share</strong>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <HiScissors className="text-xl" />
                        <strong>clip</strong>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <MdOutlinePlaylistAdd className="text-xl" />
                        <strong>save</strong>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <BsThreeDots className="text-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                    <div className="flex items-center gap-5 mr-5 mt-4">
                      <div>
                        <img
                          src="https://yt3.ggpht.com/wgnEbc2Ec2JYkeyzUbiHzDlAFObI2Btwo2YRCEF1aCMBiRc5E_zWy8-URBQS3EMQ1yzzaGFR=s88-c-k-c0x00ffffff-no-rj"
                          alt=""
                          className="rounded-full h-12 w-12"
                        />
                      </div>
                      <div className="w-5/6">
                        <h5 className="text-sm">
                          <strong>{currentPlaying.channelInfo.name}</strong>
                        </h5>
                        <h6 className="text-gray-400 text-xs">
                          {currentPlaying.channelInfo.subscribers} subscribers
                        </h6>
                      </div>
                      <div>
                        <button className="uppercase bg-red-600 rounded-sm p-2 text-sm tracking-wider">
                          subscribe
                        </button>
                      </div>
                    </div>
                    <div
                      className={`${
                        !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                      } text-sm w-5/6`}
                    >
                      <p>
                        <pre>{currentPlaying.videoDescription}</pre>
                      </p>
                    </div>
                    <div>
                      <button
                        className="uppercase text-sm cursor-pointer"
                        onClick={() => setShowMoreStatus(!showMoreStatus)}
                      >
                        Show {showMoreStatus ? "less" : "more"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-24 flex flex-col gap-3">
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
