import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/auth'

import './App.css';

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

// Hooks
import useAuth from './hooks/useAuth';

// Verificar se o usuário está logado
const Private = ({ Item }) => {
    const signed = useAuth();
    const email = useAuth();
    const {isAdmin} = useAuth();

 
    if (signed.signed) {
        if (isAdmin(email.email)) {
            return <Admin/>
        }
        return <Item/>
    }

    return <Login/>
}

function App() {

    return (
        
        <AuthProvider>

            {/* Conjunto de rotas dos componentes relacionados com a Navbar */}

            <Router>

                {/* Importação na Navbar */}

                <Navbar/>

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
                    <Route exact path='/admin' element={<Admin/>}></Route>
                    <Route exact path='/account' element={<Private Item={UserAccount}/>}></Route>

                    <Route path='*' element={<Home/>}></Route>

                </Routes>

                {/* Importação do rodapé */}

                <Footer/>

            </Router>

        </AuthProvider>

    )
}

export default App;
