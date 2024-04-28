import Home from './Pages/Home';
import Home2 from "./Pages/Home2";
import Store from "./Pages/Store";
import Live from './Pages/Live';
import Contact from "./Pages/Contact";
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/untitled" element={<Home />} exact />
        <Route path="/home" element={<Home2 />} exact />
        <Route path='/store' element={<Store />} exact />
        <Route path="/live" element={<Live />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </div>
  );
}

export default App;

