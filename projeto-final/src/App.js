import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

// Routes
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Account from './components/pages/Account';

// Components
import Navbar from './components/layout/Navbar';
// import Button from './components/Button';

function App() {
    return (
        <Router>

            <Navbar/>

            <Routes>

                <Route exact path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                
                <Route path='/account' element={<Account/>}></Route>
                <Route path='/cart' element={<Home/>}></Route>
                
            </Routes>

        </Router>


        // **** TRAZER FOOTER ****
    )
}

export default App;
