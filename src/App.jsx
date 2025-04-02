import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Partner from './pages/Partner'

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
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
