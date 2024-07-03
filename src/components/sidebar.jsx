import { useState } from "react";
import Button from "./Button";

export default function Sidebar({ addProjects }) {
  return (
    <aside className="w=1/3 px-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button content="+Add project" onClick={addProjects} />
      </div>
    </aside>
  );
}
