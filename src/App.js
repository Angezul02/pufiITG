
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Form/ContactForm';
import Nap from './components/Nap/Nap';
import Puff from './components/Puff/Puff';
// import Navbar from './components/Navbar/Navbar';
import Rain from "./components/Rain/Rain";
import Social from './components/Social/Social';

function App() {
  return (
    <>
     <Carousel/>
     <Rain/>
     <Puff/>
     <Cart/>
     <Nap/>
     <Social/>
     <ContactForm/>
     <Footer/>
    </>
  );
}

export default App;
