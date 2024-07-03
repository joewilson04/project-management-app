import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProjectSelected";
import Sidebar from "./components/sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

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
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);

  let content;

  if (projectState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProject addProjects={handleProjects} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar addProjects={handleProjects} />
      {content}
    </main>
  );
}

export default App;
