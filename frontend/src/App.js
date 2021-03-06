import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Routes
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import UserAccount from './pages/UserAccount';
import Cart from './pages/Cart';
import Confirm from './pages/Confirm';
import Payment from './pages/Payment';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Verificar se o usuário está logado
const Private = ({ Item }) => {
    const user = localStorage.getItem('token');

    if (user) return <Item/>

    return <Login/>
}

const stylesToast = {
    backgroundColor: '#fbc2eb',
    border: '2px solid #d2bdff',
    borderRadius: '5px',
    color: 'black',
    textAlign: 'center',
}

// Verificar se o usuário é admin
const IsAdmin = ({ Item }) => {
    const user = localStorage.getItem('token');

    if (user) {
        const userInfo = JSON.parse(user);
        if (userInfo.admin) {
            return <Item/>
        }
        return <Home/>
    }

    return <Login/>
}

function App() {
    return (
        <Router>
            <Navbar/>

            <div><ToastContainer toastStyle={stylesToast} pauseOnFocusLoss={false} /></div>
            
            <Routes>
                {/* Rotas */}
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/products' element={<Products/>}></Route>
                <Route exact path='/cart' element={<Cart/>}></Route>
                <Route exact path='/confirm' element={<Confirm/>}></Route>
                <Route exact path='/payment' element={<Payment/>}></Route>

                <Route exact path='/login' element={<Login/>}></Route>
                <Route exact path='/register' element={<Register/>}></Route>
                <Route exact path='/admin' element={<IsAdmin Item={Admin}/>}></Route>
                <Route exact path='/account' element={<Private Item={UserAccount}/>}></Route>

                <Route path='*' element={<Home/>}></Route>
            </Routes>
            
            <Footer/>
        </Router>
    )
}

export default App;
