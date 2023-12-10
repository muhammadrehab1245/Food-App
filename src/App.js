import "./App.css";
import { Navbar } from "./components/Navbar";
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menupage } from "./pages/Menupage";
import { Home } from "./pages/Home";
import { Footers } from "./components/Footers";
import Notestate from "./context/Notestate";
import {  Signuppage } from "./pages/Signuppage";
import { Loginpage } from "./pages/Loginpage";
function App() {
  
  return (
    <>
        <Notestate>
      <Router>
     <Navbar /> 
    
  <Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/menu" element={<Menupage />} />
  <Route exact path="/signup" element={<Signuppage />} />
  <Route exact path="/login" element={<Loginpage />} />
  </Routes>

<Footers/>
  </Router>
  </Notestate>
    </>
  );
}

export default App;
