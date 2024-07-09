import { useState } from "react";
import Button from "./Button";
import App from "../App";

export default function Sidebar({ addProjects, projectState }) {
  return (
    <aside className="w=1/3 px-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button content="+Add project" onClick={addProjects} />
      </div>
      <table>
        <tbody>
          {projectState.projects.map((id) => {
            return (
              <tr key={id.id}>
                <button>{id.title}</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </aside>
  );
}
