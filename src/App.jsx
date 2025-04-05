import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home'
import Header from './components/Header'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Partner from './pages/Partner'
import Customise from './pages/Customise'
import Track from './pages/Track';
import About from './pages/About';
import CorporateGifting from './pages/CorporateGifting';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/partner' element={<Partner/>}/>
        <Route exact path='/customise' element={<Customise/>}/>
        <Route exact path='/track' element={<Track/>}/>
        <Route exact path='/aboutus' element={<About/>}/>
        <Route exact path='/corporate' element={<CorporateGifting/>}/>
      </Routes>
      <Footer/>
      <ToastContainer
  position="top-right"
  autoClose={3000} // Closes the toast after 3 seconds
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>
    </Router>
    </>
  )
}

export default App
