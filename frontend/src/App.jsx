import './css/App.css'
import {Route, Routes} from "react-router-dom";

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage.jsx";
import Searchpage from "./pages/Searchpage.jsx";
import Register from './pages/Register.jsx';
import {ThemeProvider} from "./ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/search-trainers' element={<Searchpage/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    </ThemeProvider>

  )
}

export default App
