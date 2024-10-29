import './css/App.css'
import {Route, Routes} from "react-router-dom";

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage.jsx";
import Searchpage from "./pages/Searchpage.jsx";

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/search-trainers' element={<Searchpage/>} />
        </Routes>
    </>
  )
}

export default App
