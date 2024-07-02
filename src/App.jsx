import NewProject from "./components/NewProject";
import NoProject from "./components/NoProjectSelected";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
      <NoProject />
    </main>
  );
}

export default App;
