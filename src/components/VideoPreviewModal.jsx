import React from "react";
import VideoPlayer from "./VideoPlayer";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import shaka from "shaka-player";
import ThumbnailIdeasParser from "./ThumnailParser";
const VideoPreviewModal = ({
  title,
  description,
  thumbnailIdeas,
  mpd,
  vtt,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-gray-900 w-3/4 h-5/6 max-w-screen-2xl p-8 rounded-2xl">

        <button
          onClick={onClose}
          className="px-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mb-2"
        >
          X
        </button>
        <div className="flex flex-col lg:flex-row h-full ">
          {/* Video Player */}
          <div className="w-full lg:w-full lg:mr-4 h-full">
            {/* <VideoPlayer
              src={`https://d9acgijza706g.cloudfront.net/${mpd}/dash.mpd`}
              subtitles={[
                {
                  lang: "en",
                  label: "English",
                  url: `https://d9acgijza706g.cloudfront.net/${vtt}`,
                },
              ]}x     
            /> */}
            <ShakaPlayer
              autoPlay
              src={`https://d9acgijza706g.cloudfront.net/${mpd}/dash.mpd`}
            />
          </div>
          {/* Information */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 overflow-y-auto">
            {/* Title */}
            <div className="mb-4">
              <h3 className="font-bold underline ">Title:</h3>
              <p>{title}</p>
            </div>
            {/* Description */}
            <div className="mb-4 overflow-y-auto">
              <h3 className="font-bold underline">Description:</h3>
              <p>{description}</p>
            </div>
            {/* Thumbnail Ideas */}
            <div className="overflow-y-auto">
              {/* <h3 className="font-bold underline">Thumbnail Ideas:</h3> */}
              <ThumbnailIdeasParser thumbnailIdeas={thumbnailIdeas} />
            </div>
            {/* Close Button */}
            <div className="mt-3 mb-6 mr-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewModal;

// import React from "react";
// import ReactPlayer from "react-player";
// import { useRef } from "react";
// import ShakaPlayer from "shaka-player-react";
// import "shaka-player/dist/controls.css";
// import shaka from "shaka-player";

// const VideoPreviewModal = ({ title, description, thumbnailIdeas, mpd, onClose }) => {
//   const playerRef = useRef();

//   console.log(title, description, thumbnailIdeas, mpd);
//   // console.log(video)

//   return (
//     <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
//       <div className="relative bg-gray-900 w-3/4 h-3/4 max-w-screen-lg p-8 rounded-lg">
//         <div className="flex flex-col lg:flex-row h-full">
//            {/* Video player component here */}
// {/* Video Player */}
// <div className="w-full lg:w-1/2 lg:mr-4 h-full">
// <ShakaPlayer autoPlay src={`https://d9acgijza706g.cloudfront.net/${mpd}`} />
// </div>
//
{
  /* <ReactPlayer
                url="https://d9acgijza706g.cloudfront.net/6628ecabe432f93b54679a5b/dash/627957f23095-4e1b-a964-ef36f27b4b9d_vidsyncro.mp4/dash.mpd"
                autoPlay={true}
                controls={true}
                width="1200"
                height="auto"
                ref={playerRef}
              /> */
}
// <ShakaPlayer autoPlay src={`https://d9acgijza706g.cloudfront.net/${mpd}`} />
{
  /* const videoSource = new shaka.media.DashVideoSource('https://d9acgijza706g.cloudfront.net/6628ecabe432f93b54679a5b/dash/627957f23095-4e1b-a964-ef36f27b4b9d_vidsyncro.mp4/dash.mpd'); 
              const player = new shaka.Player(); 
              player.load(videoSource);
              const textTrack = new shaka.text.TextTrack();
              textTrack.addTextTrack(subtitleFile, 'en');
              player.addTextTrack(textTrack);
              const videoElement = document.querySelector('#my-video');
              player.attach(videoElement); */
}
//           {/* Video Player */}
//           <div className="w-full lg:w-1/2 lg:mr-4 h-full">
//             <ShakaPlayer autoPlay src={`https://d9acgijza706g.cloudfront.net/6628ecabe432f93b54679a5b/dash/627957f23095-4e1b-a964-ef36f27b4b9d_vidsyncro.mp4/dash.mpd`} />
//           </div>
//           {/* Information */}
//           <div className="w-full lg:w-1/2 mt-4 lg:mt-0 overflow-y-auto">
//             {/* Title */}
//             <div className="mb-4">
//               <h3 className="font-semibold">Title:</h3>
//               <p>{title}</p>
//             </div>
//             {/* Description */}
//             <div className="mb-4 overflow-y-auto">
//               <h3 className="font-semibold">Description:</h3>
//               <p>{description}</p>
//             </div>
//             {/* Thumbnail Ideas */}
//             <div className="overflow-y-auto">
//               <h3 className="font-semibold">Thumbnail Ideas:</h3>
//               <p>{thumbnailIdeas}</p>
//             </div>
//             {/* Close Button */}
//             <div className="mt-8 flex justify-end">
//               <button
//                 onClick={onClose}
//                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPreviewModal;
