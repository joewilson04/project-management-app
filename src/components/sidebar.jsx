import { useState } from "react";
import Button from "./Button";
import App from "../App";

export default function Sidebar({
  addProjects,
  projectState,
  onSelectProject,
  selectedProject,
}) {
  return (
    <aside className="w=1/3 px-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button content="+Add project" onClick={addProjects} />
      </div>
      <table className="mt-8">
        <tbody>
          {projectState.projects.map((projects) => {
            let cssClass =
              "w-full text-left px-2 py-1 rounded0sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

            if (projects.id === selectedProject) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClass += " text-stone-400";
            }

            return (
              <tr key={projects.id}>
                <td>
                  <button
                    className={cssClass}
                    onClick={() => onSelectProject(projects.id)}
                  >
                    {projects.title}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </aside>
  );
}
