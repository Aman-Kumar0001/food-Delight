import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import Search from './components/Search.jsx'
import SignIn from './components/SignIn.jsx'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Payment from './components/Payment.jsx'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/help' element={<Help />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App