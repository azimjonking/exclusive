import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './routes/home/Home'
import Login from './routes/login/Login'
import SignUp from './routes/signup/SignUp'
import About from './routes/about/About'
import Contact from './routes/contact/Contact'
import Checkout from './routes/checkout/Checkout'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
