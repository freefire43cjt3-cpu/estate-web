import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Properties from "./components/Pages/Properties";
import Agents from "./components/Agents";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Properties />
      <Agents />
      <About />
      <Contact />
      <Stats />
      <Testimonials />
      <FAQ />
      <Footer />


      

      <main style={{ paddingTop: "100px" }}>
        {/* Hero Section goes here */}
      </main>
    </>
  );
}

export default App;