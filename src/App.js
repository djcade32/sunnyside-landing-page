import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import GridArt from "./components/GridArt/GridArt";
import TestimonialsContainer from "./components/TestimonialsContainer/TestimonialsContainer";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <GridArt />
      <TestimonialsContainer />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
