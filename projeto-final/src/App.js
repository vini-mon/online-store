import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/auth'

import './App.css';

// Routes
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import UserAccount from './pages/UserAccount';
import Cart from './pages/Cart';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Hooks
import useAuth from './hooks/useAuth';

// const checkAccount = () => {
//     const isAdmin = false;

//     return isAdmin ? <userAccount/> : <adminDashboard/>;
// }

const Private = ({ Item }) => {
    const signed = useAuth();

    console.log(signed.signed)

    return signed.signed ? <Item/> : <Login/>;
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route exact path='/about' element={<About/>}></Route>
                    <Route exact path='/products' element={<Products/>}></Route>
                    <Route exact path='/services' element={<Services/>}></Route>
                    <Route exact path='/cart' element={<Cart/>}></Route>

                    <Route exact path='/login' element={<Login/>}></Route>
                    <Route exact path='/register' element={<Register/>}></Route>
                    <Route exact path='/account' element={<Private Item={UserAccount}/>}></Route>

                    <Route path='*' element={<Home/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </AuthProvider>
    )
}

export default App;
