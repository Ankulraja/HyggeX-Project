import { VideoLink } from "../../../../Data/VideoLink";
import { MdReplay } from "react-icons/md";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { RiFullscreenFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { IoVolumeMuteSharp } from "react-icons/io5";
const Study = () => {
  const [page, setPage] = useState(0);
  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  const incrementor = () => {
    if (page + 1 < VideoLink?.length) {
      setPage(page + 1);
    }
  };

  const decrementor = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const replayHandler = () => {
    if (videoRef.current) {
      videoRef.current.seekTo(0);
    }
  };

  const muteHandler = () => {
    setMute((prevMute) => !prevMute);
  };
  
  const fullScreenHandler = () => {
    if (videoRef.current) {
      videoRef.current.wrapper?.requestFullscreen();
    }
  };
  useEffect(() => {}, [mute]);
  return (
    <div className="w-full  mx-auto py-5 flex flex-col justify-center items-center">
      <div className="w-6/12 auto">
        <div className="w-full relative mx-auto flex justify-center items-center group">
          <ReactPlayer
            ref={videoRef}
            url={VideoLink[page].url}
            width="500px"
            height="300px"
            playing={true}
            muted={mute} // Use the mute state here
            loop={true}
            style={{ borderRadius: "40px" }}
          />
          <button
            onClick={muteHandler}
            className={` invisible group-hover:visible text-3xl absolute text-slate-200 top-[3%] right-[2%]`}
          >
            {!mute ? (
              <HiMiniSpeakerWave></HiMiniSpeakerWave>
            ) : (
              <IoVolumeMuteSharp></IoVolumeMuteSharp>
            )}
          </button>
        </div>
        <div className="w-10/12  mx-auto flex items-center justify-between py-5 ">
          <div className="text-3xl w-1/4 font-extrabold text-blue-900 flex item-center">
            <button onClick={replayHandler}>
              <MdReplay />
            </button>
          </div>
          <div className="w-2/4 text-3xl flex justify-between items-center text-blue-900">
            <button onClick={decrementor}>
              <FaCircleChevronLeft />
            </button>
            <p className="text-lg">
              {page + 1} / {VideoLink?.length}
            </p>
            <button onClick={incrementor}>
              <FaCircleChevronRight />
            </button>
          </div>

          <div className="text-3xl flex justify-end items-center w-1/4 font-extrabold text-blue-900">
            <button onClick={fullScreenHandler}>
              <RiFullscreenFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
