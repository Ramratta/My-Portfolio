import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import TechStack from "./Pages/TechStack/TechStack";
import Project from "./Projects/Project";
import Contact from "./Pages/contact/contact";

function App() {
  return (
    <>
      <Layout />
      <About />
      <TechStack />
      <Project />
      <Education />
      <Contact />
      <div className="Fo">
        <h4>&copy; 2026 All Rights Reserved</h4>
        <h4>&copy; 2026 Designed & Developed by Ram Ratan Pandey</h4>
      </div>
    </>
  );
}

export default App;
