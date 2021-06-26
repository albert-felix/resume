import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./styles.css";

export default function App() {
  return (
    <div className='container'>
      <AboutMe />
      {/* <Education /> */}
      <Projects/>
    </div>
  );
}
