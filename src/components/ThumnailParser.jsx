import React from "react";

const ThumbnailIdeasParser = ({ thumbnailIdeas }) => {
  // Split the thumbnailIdeas string into individual ideas
  const ideasArray = thumbnailIdeas.split("**Thumbnail Idea");

  // Remove the empty string at the beginning
  ideasArray.shift();

  return (
    <div className="mb-4">
      <h3 className="font-bold underline">Thumbnail Ideas:</h3>
      <ul className="list-disc pl-6">
        {ideasArray.map((idea, index) => {
          // Split each idea into image and text
          const parts = idea.split("* Image:");
          const image = parts[1]?.split("* Text:")[0]?.trim();
          const text = parts[1]?.split("* Text:")[1]?.trim();

          return (
            <li key={index} className="mb-4">
              <h4 className="font-semibold">Thumbnail Idea {index + 1}:</h4>
              <div className="ml-4">
                <p>
                  <span className="font-semibold">Image:</span> {image}
                </p>
                <p>
                  <span className="font-semibold">Text:</span> {text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThumbnailIdeasParser;
