import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
};
export default App;
