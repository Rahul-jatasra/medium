import "./App.css";
import Direction from "./components/Direction";
import Hero from "./components/Hero";
import Member from "./components/Member";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Member />
      <Direction />
      <Footer />
    </>
  );
}

export default App;
