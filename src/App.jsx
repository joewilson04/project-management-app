import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProjectSelected";
import Sidebar from "./components/sidebar";
import ShowProject from "./components/ShowProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleProjects() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCloseProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  console.log(projectState);

  const selectedProjectId = projectState.projects.find(
    (projects) => projects.id === projectState.selectedProject
  );

  console.log(selectedProjectId);
  let content = <ShowProject projects={selectedProjectId} />;

  if (projectState.selectedProject === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCloseProject} />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProject addProjects={handleProjects} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        addProjects={handleProjects}
        projectState={projectState}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
