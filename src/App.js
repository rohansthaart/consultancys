import College from "./components/College";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import StudentCarousel from "./components/StudentCarousel";
import NewsLetter from "./components/NewsLetter";
import Offers from "./components/Offers";
import Inquery from "./components/Inquery";
function App() {
  return (
    <div className="App">
    <Header/>
    <Services/>
    <Countries/>
    <College/>
    <Offers/>
    <StudentCarousel/>
 <Inquery/>
    <NewsLetter/>
    <Footer/>
    </div>
  );
}

export default App;
