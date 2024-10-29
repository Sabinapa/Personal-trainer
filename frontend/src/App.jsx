import './css/App.css'
import {Route, Routes} from "react-router-dom";

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage.jsx";
import Searchpage from "./pages/Searchpage.jsx";
import Register from './pages/Register.jsx';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/search-trainers' element={<Searchpage/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    </>
  )
}

export default App
