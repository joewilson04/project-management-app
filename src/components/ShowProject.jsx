import App from "../App";

export default function ShowProject({
  projects,
  setProjectState,
  projectState,
}) {
  const formattedDate = new Date(projects?.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  function handleDeleteProject(projects, selectedProject) {
    const alteredProject = [projectState.projects?.slice(0, 1)];
    setProjectState({ selectedProject: undefined, projects: alteredProject });
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projects?.title}
          </h1>

          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => handleDeleteProject(projects)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projects?.description}
        </p>
      </header>
    </div>
  );
}
