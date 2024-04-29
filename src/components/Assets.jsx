import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../context/ProjectContext";

const Assets = () => {
  const { assets, fetchAssetsWrapper, loading, currentProjectId } =
    useContext(ProjectContext);

  useEffect(() => {
    fetchAssetsWrapper(currentProjectId, "1", "assets");
  }, [currentProjectId]);

  return (
    <div className="container mx-auto mt-8">
      {loading.assets ? (
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse p-20 rounded-lg overflow-hidden"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {assets?.assets.map((asset) => (
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

export default Assets;
