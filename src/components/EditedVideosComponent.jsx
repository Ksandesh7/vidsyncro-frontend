import React, { useState } from 'react';
import VideoPreviewModal from './VideoPreviewModal';

const EditedVideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: 'Video 1',
      transcodingStatus: 'SUCCESS',
      transcriptionStatus: 'SUCCESS',
      description: 'Description for Video 1',
      thumbnailIdeas: 'Thumbnail Ideas for Video 1',
    },
    {
      title: 'Video 2',
      transcodingStatus: 'QUEUED',
      transcriptionStatus: 'SUCCESS',
      description: 'Description for Video 2',
      thumbnailIdeas: 'Thumbnail Ideas for Video 2',
    },
    {
      title: 'Video 3',
      transcodingStatus: 'SUCCESS',
      transcriptionStatus: 'QUEUED',
      description: 'Description for Video 3',
      thumbnailIdeas: 'Thumbnail Ideas for Video 3',
    },
  ];

  const handleAccordionToggle = (index) => {
    const accordionBody = document.getElementById(`accordion-open-body-${index + 1}`);
    accordionBody.classList.toggle('hidden');
  };

  const handlePreview = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <h1>Edited Videos</h1>
      <div id="accordion-open" data-accordion="open">
        {videos.map((video, index) => (
          <div key={index} className="mb-4 border-b border-white"> {/* Add white bottom border */}
            <h2 id={`accordion-open-heading-${index + 1}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-500 hover:text-white dark:hover:bg-gray-800 gap-3"
                onClick={() => handleAccordionToggle(index)}
                aria-expanded="false"
                aria-controls={`accordion-open-body-${index + 1}`}
              >
                <span className="flex items-center">
                  {video.title}
                </span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-open-body-${index + 1}`}
              className="hidden"
              aria-labelledby={`accordion-open-heading-${index + 1}`}
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 grid grid-cols-3 gap-4">
                <div>
                  <h3>Transcoding</h3>
                  <p>Status: {video.transcodingStatus}</p>
                </div>
                <div>
                  <h3>Transcription</h3>
                  <p>Status: {video.transcriptionStatus}</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => handlePreview(video)}
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <VideoPreviewModal video={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EditedVideosPage;
