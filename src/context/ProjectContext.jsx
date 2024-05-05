import { createContext, useCallback, useState } from "react";
import fetchProjects from "../api/fetchProjects";
import fetchAssets from "../api/fetchAssets";
import uploadFile from "../api/uploadAssets";
import createAccount from "../api/createAccount";
import signIn from "../api/signIn";
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

      if (projects.length > 0) setCurrentProjectId(projects[0]._id);

      setLoading((prev) => ({
        ...prev,
        projects: false,
      }));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const fetchAssetsWrapper = useCallback(
    async (userId) => {
      try {
        setLoading((prev) => ({
          ...prev,
          assets: true,
        }));

        const res = await fetchAssets(
          currentProjectId,
          userId,
          assets.current_section
        );

        setAssets((prev) => ({
          ...prev,
          [assets.current_section]: res,
        }));

        setLoading((prev) => ({
          ...prev,
          assets: false,
        }));
      } catch (error) {
        console.log(error.message);
      }
    },
    [currentProjectId, assets.current_section]
  );

  const uploadFileWrapper = useCallback(
    async (file, onProgress) => {
      try {
        console.log(file, currentProjectId, assets.current_section, onProgress);

        await uploadFile(
          file,
          currentProjectId,
          assets.current_section,
          onProgress
        );
      } catch (error) {
        console.log(error.message);
      }
    },
    [currentProjectId, assets.current_section]
  );

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
  const handleCreateAccount = useCallback(async (username, email, password) => {
    try {
      await createAccount(username, email, password); // Call the createAccount function
      console.log("Account created successfully!");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  }, []);
  const signInAccount = useCallback(async (email, password) => {
    try {
      await signIn(email, password); // Call the createAccount function
      console.log("Account Logged In successfully!");
    } catch (error) {
      console.error("Error Logging account:", error);
      throw error;
    }
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
        uploadFileWrapper,
        createAccount: handleCreateAccount,
        signInAccount,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
