/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  const toggleProjectsMenu = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch(
        "https://dzwh46h2zf.execute-api.us-east-2.amazonaws.com/Prod/project/v1/get-projects?user_id=1"
      );
      const responseData = await response.json();
      console.log("Get Projects Response data: ", responseData);
      return responseData.data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    try {
      const response = await fetch(
        "https://dzwh46h2zf.execute-api.us-east-2.amazonaws.com/Prod/project/v1/create-project",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...newProject,
            user_id: "1",
          }),
        }
      );

      console.log("POST response : ", response);

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      setIsModalOpen(false);

      const responseData = await response.json();
      console.log("Response data:", responseData);
      refetchProjects();
    } catch (error) {
      console.error("Error creating project:", error.message);
    }
  };

  const refetchProjects = async () => {
    try {
      const response = await fetch(
        "https://dzwh46h2zf.execute-api.us-east-2.amazonaws.com/Prod/project/v1/get-projects?user_id=1"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const responseData = await response.json();
      console.log("Get Projects Response data:", responseData);
    } catch (error) {
      console.error("Error fetching projects:", error.message);
    }
  };

  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
        style={{ overflowX: "hidden" }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#100c14] dark:bg-blue-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Sandesh's Account</span>
              </a>
            </li>
            <li>
              <div
                type="button"
                onClick={toggleProjectsMenu}
                className="flex items-center justify-between w-[94%] p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Projects</span>
                <div>
                  <button
                    type="button"
                    className="relative p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={openModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-600 dark:text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <ul
                className={`space-y-1 font-medium ${
                  isProjectsOpen ? "" : "hidden"
                }`}
              >
                {isLoading ? (
                  <li>Loading...</li>
                ) : (
                  projects.map((project) => (
                    <li key={project.id}>
                      <a
                        href="#"
                        className="flex items-center p-2 pl-10 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
                      >
                        <span className="ms-3">{project.title}</span>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </li>
          </ul>
        </div>
      </aside>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Add a Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-1">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-1">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                type="button"
                className="ml-2 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label
      htmlFor="my-drawer"
      aria-label="close sidebar"
      className="drawer-overlay"
    ></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li>
        <a>Sidebar Item 1</a>
      </li>
      <li>
        <a>Sidebar Item 2</a>
      </li>
    </ul>
  </div>
</div>;


const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <h1>Click here to create new project</h1>
      <button
        className="openModalbtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Create Project
      </button>
      {openModal && <Modal closeModalProp={setOpenModal} />}
    </>
  );
