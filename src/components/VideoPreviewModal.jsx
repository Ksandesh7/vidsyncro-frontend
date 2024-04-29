import React from 'react';

const VideoPreviewModal = ({ video, onClose }) => {
  const { title, description, thumbnailIdeas } = video;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-gray-900 w-3/4 lg:w-2/3 max-w-lg p-8 rounded-lg">
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <div className="col-span-2">
            {/* React Video Player */}
            <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
              {/* Video player component here */}
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
