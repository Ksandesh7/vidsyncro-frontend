import React from "react";
import ReactPlayer from "react-player";
import { useRef } from "react";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import shaka from "shaka-player";

const VideoPreviewModal = ({ title, description, thumbnailIdeas, mpd, onClose }) => {
  const playerRef = useRef();

  console.log(title, description, thumbnailIdeas, mpd);
  // console.log(video)

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-gray-900 w-3/4 lg:w-2/3 max-w-lg p-8 rounded-lg">
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <div className="col-span-2">
            {/* React Video Player */}
            <div
              style={{
                width: "100%",
                paddingBottom: "9.25%",
                position: "relative",
              }}
            >
              {/* Video player component here */}
              {/* <ReactPlayer
                url="https://d9acgijza706g.cloudfront.net/6628ecabe432f93b54679a5b/dash/627957f23095-4e1b-a964-ef36f27b4b9d_vidsyncro.mp4/dash.mpd"
                autoPlay={true}
                controls={true}
                width="1200"
                height="auto"
                ref={playerRef}
              /> */}
              <ShakaPlayer autoPlay src={`https://d9acgijza706g.cloudfront.net/${mpd}`} />
              {/* const videoSource = new shaka.media.DashVideoSource('https://d9acgijza706g.cloudfront.net/6628ecabe432f93b54679a5b/dash/627957f23095-4e1b-a964-ef36f27b4b9d_vidsyncro.mp4/dash.mpd'); 
              const player = new shaka.Player(); 
              player.load(videoSource);
              const textTrack = new shaka.text.TextTrack();
              textTrack.addTextTrack(subtitleFile, 'en');
              player.addTextTrack(textTrack);
              const videoElement = document.querySelector('#my-video');
              player.attach(videoElement); */}
            </div>
          </div>
          <div className="col-span-1">
            {/* Title */}
            <div className="mb-4">
              <h3 className="font-semibold">Title:</h3>
              <p>{title}</p>
            </div>
            {/* Description */}
            <div className="mb-4">
              <h3 className="font-semibold">Description:</h3>
              <p>{description}</p>
            </div>
            {/* Thumbnail Ideas */}
            <div>
              <h3 className="font-semibold">Thumbnail Ideas:</h3>
              <p>{thumbnailIdeas}</p>
            </div>
          </div>
          <div className="col-span-2 flex justify-end">
            {/* Close Button */}
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
  );
};

export default VideoPreviewModal;
