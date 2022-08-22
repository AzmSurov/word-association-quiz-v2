
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Game from './components/Game';
import Footer from './components/Footer';
function App() {
  return (
    <div className=" bg-gray-800  min-h-screen">
     <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    <Routes>
      <Route path="/game" element={<Game />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    </div>
  );
}

export default App;
