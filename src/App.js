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
      <Navbar />
      <Body1 />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
