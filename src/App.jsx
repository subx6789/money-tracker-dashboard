import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full flex">
      {/* Navbar */}
      <Navbar />
      {/* Main Component */}
      <main className="grow">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
