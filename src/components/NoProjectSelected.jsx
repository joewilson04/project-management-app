import image from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProject() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={image} classname="w-16 h-16 object-contain mx-auto" />
      <h2 classname="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p classname="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200">
          <Button content="Create new project" />
        </button>
      </p>
    </div>
  );
}
