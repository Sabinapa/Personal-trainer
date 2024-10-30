import './css/App.css'
import {Route, Routes} from "react-router-dom";
import { AuthProvider } from './context/AutoContext.jsx';

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage.jsx";
import Searchpage from "./pages/Searchpage.jsx";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import {ThemeProvider} from "./context/ThemeContext.jsx";

function App() {
  return (
      <AuthProvider>
        <ThemeProvider>
          <Navbar/>
            <Routes>
             <Route path='/' element={<Homepage/>} />
             <Route path='/search-trainers' element={<Searchpage/>} />
             <Route path='/register' element={<Register/>} />
             <Route path="/login" element={<Login/>}/>
             </Routes>
        </ThemeProvider>
      </AuthProvider>

  )
}

export default App
