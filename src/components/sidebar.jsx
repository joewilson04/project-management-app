export default function Sidebar() {
  return (
    <aside className="w=1/3 px-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200">
          + Add Project
        </button>
      </div>
    </aside>
  );
}
