import React, { useState, useEffect } from "react";
import axios from "axios";

const FilesGrid = ({ activePage }) => {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState([]);
  const [editedVideos, setEditedVideos] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log(activePage);
    // Fetch assets based on activePage
    setAssets([]);
    if (activePage === "Uploaded Files") {
      axios
        .get(
          "https://dzwh46h2zf.execute-api.us-east-2.amazonaws.com/Prod/assets/v1/get-assets?project_id=662cb6594b91590bdd3b1b4e&segment=assets&user_id=1"
        )
        .then((response) => {
          // Filter only .mp4 files and separate names from "_"
          const filteredAssets = response.data.data
            .filter((asset) => asset.Key.endsWith(".mp4"))
            .map((asset) => ({
              ...asset,
              name: asset.Key.split("-").pop(),
            }));
          setAssets(filteredAssets);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching assets:", error);
          setLoading(false);
        });
      setLoading(false);
    } else if (activePage === "Edited Videos") {
      axios
        .get(
          "https://dzwh46h2zf.execute-api.us-east-2.amazonaws.com/Prod/assets/v1/get-assets?project_id=662cb6594b91590bdd3b1b4e&segment=edited_videos&user_id=1"
        )
        .then((response) => {
          const data = response.data.data;
          // Check if the status is SUCCESS
          for (const dataIn of data) {
            if (
              dataIn.events.transcoding.status === "SUCCESS" &&
              dataIn.events.transcription.status === "SUCCESS"
            ) {
              console.log("YOOOOOO");
            } else {
              console.error("API request failed:", data.error);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching edited videos:", error);
        });
    }
  }, [activePage]);

  return (
    <div className="container mx-auto mt-8">
      {loading && activePage === "Uplaoding Page" ? (
        <div className="grid grid-cols-3 gap-4">
          {/* Shimmer effect while loading */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse p-20 rounded-lg overflow-hidden"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {assets.map((asset) => (
            <div key={asset.Key} className="bg-gray-200 p-4">
              {/* Video thumbnail (replace with actual thumbnail image) */}
              <video
                controls
                src={`https://d9acgijza706g.cloudfront.net/${asset.Key}`}
                className="w-full h-auto "
                content={asset.name}
                playsInline
              />
              <p className="text-sm text-black font-medium text-wrap">
                {asset.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilesGrid;

/*

{
    "data": [
        {
            "task": "publish_to_edited_videos",
            "resource_path": [
                "662cb6594b91590bdd3b1b4e/assets/motivational_speech (1).mp4"
            ],
            "events": {
                "transcoding": {
                    "status": "SUCCESS",
                    "output": {
                        "output_path": "662cb6594b91590bdd3b1b4e/dash/motivational_speech (1).mp4",
                        "bucket": "vidsyncro-videos-bucket"
                    }
                },
                "transcription": {
                    "status": "SUCCESS",
                    "output": {
                        "bucket": "vidsyncro-videos-bucket",
                        "vtt": "662cb6594b91590bdd3b1b4e/video_assets/motivational_speech (1).mp4/subtitle.vtt",
                        "title": "Unlocking Your Hidden Genius: Breaking the Boundaries of Self-Perception",
                        "description": "This video explores the brilliant Einstein quote about judging a fish by its ability to climb a tree. It emphasizes that everyone has genius-level talent within them but that it's crucial to find the right setting where your passions align with your contributions to society. The video encourages viewers to seek out their true potential and uncover the genius within them. It poses the question: Will you sculpt out your marble and discover your hidden talent?",
                        "thumbnail": "**Thumbnail Idea 1:**\n\n* **Image:** Einstein's face superimposed on an image of a fish climbing a tree.\n* **Text:** \"The Einstein Quote That Will Change Your Life\"\n\n**Thumbnail Idea 2:**\n\n* **Image:** A person looking puzzled while holding a fish.\n* **Text:** \"Are You Judged by Your Ability to Climb a Tree?\"\n\n**Thumbnail Idea 3:**\n\n* **Image:** Michelangelo's sculpture of David with a caption that reads, \"The Genius Within.\"\n\n**Thumbnail Idea 4:**\n\n* **Image:** A person holding a book with the Einstein quote, \"Everyone is a genius, but if you judge a fish by its ability to climb a tree...\"\n* **Text:** \"Unlock Your Hidden Potential\""
                    }
                }
            },
            "_id": "662ec3878f1c49fd10b776fb"
        }
    ]
}


*/
