import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

// Routes
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Cart from './pages/Cart';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
    return (
        <Router>

            <Navbar/>

            <Routes>

                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/login' element={<Login/>}></Route>
                <Route exact path='/register' element={<Register/>}></Route>
                
                <Route exact path='/products' element={<Products/>}></Route>
                <Route exact path='/services' element={<Services/>}></Route>
                
                <Route exact path='/account' element={<Account/>}></Route>
                <Route exact path='/cart' element={<Cart/>}></Route>

                <Route path='*' element={<Home/>}></Route>

            </Routes>

            <Footer/>

        </Router>

    )
}

export default App;
