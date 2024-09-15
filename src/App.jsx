import "./index.css";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <TopBar />
      <Homepage />
      <Contact />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
