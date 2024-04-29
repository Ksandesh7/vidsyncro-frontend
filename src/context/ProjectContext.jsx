import { createContext, useCallback, useState } from "react";
import fetchProjects from "../api/fetchProjects";
import fetchAssets from "../api/fetchAssets";

export const ProjectContext = createContext({});

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [currentProjectId, setCurrentProjectId] = useState();
  const [assets, setAssets] = useState({
    assets: [],
    edited_videos: [],
    timeline_videos: [],
    current_section: "assets",
  });

  const [loading, setLoading] = useState({
    projects: false,
    assets: false,
  });

  const fetchProjectsWrapper = useCallback(async (userId) => {
    try {
      setLoading((prev) => ({
        ...prev,
        projects: true,
      }));

      const projects = await fetchProjects(userId);
      setProjects(projects);

      setLoading((prev) => ({
        ...prev,
        projects: false,
      }));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const fetchAssetsWrapper = useCallback(async (projectId, userId) => {
    try {
      setLoading((prev) => ({
        ...prev,
        assets: true,
      }));

      const assets = await fetchAssets(projectId, userId, "assets");

      setAssets((prev) => ({
        ...prev,
        assets,
      }));

      setLoading((prev) => ({
        ...prev,
        assets: false,
      }));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const setSection = useCallback((section) => {
    setAssets((prev) => ({ ...prev, current_section: section }));
  }, []);

  const setProject = useCallback((projectId) => {
    setAssets({
      assets: [],
      edited_videos: [],
      timeline_videos: [],
      current_section: "assets",
    });

    setCurrentProjectId(projectId);
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        currentProjectId,
        assets,
        setAssets,
        fetchProjectsWrapper,
        loading,
        fetchAssetsWrapper,
        setSection,
        setProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
