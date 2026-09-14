import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import TechStack from "./Pages/TechStack/TechStack";
import Project from "./Projects/Project";

function App() {
  return (
    <>
      <Layout />
      <About />
      <TechStack />
      <Project />
    </>
  );
}

export default App;
