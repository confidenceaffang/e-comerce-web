import './App.css';
import Navbar from "../src/components/Navbar";
import Body1 from "./components/Body1.jsx";
import Cards from "./components/Cards";
import Analytics from "./components/Analtytics.jsx";
import Footer from "./components/Footer.jsx";
import Newsletter from "./components/Newsletter.jsx"

function App() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <Navbar />
    </div>
  );
}

export default App;
