import './css/App.css'
import {Route, Routes} from "react-router-dom";
import {AuthProvider} from './context/AutoContext.jsx';

import Navbar from './components/Navbar.jsx';
import Homepage from "./pages/Homepage.jsx";
import Searchpage from "./pages/Searchpage.jsx";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import {ThemeProvider} from "./context/ThemeContext.jsx";
import Trainer from './pages/Trainer.jsx';
import TrainerSearch from './components/TrainerSearch.jsx';

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/search-trainers' element={<Searchpage/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/trainer/:trainerId" element={<Trainer />} />
                    <Route path="/trainer-search" element={<TrainerSearch/>}/>
                </Routes>
            </ThemeProvider>
        </AuthProvider>

    )
}

export default App
