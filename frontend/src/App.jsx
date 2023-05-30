
import LoginIn from './components/userLoginpage'
import Signup from './components/signUpPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heroo from './components/Heroo';
import OurNav from './components/Navbar';
// import Svgimg from './svg.html';
function App() {
 

  return (
    <>
   <div className="bg-gradient-to-r from-[#141e30] to-[#243b55]">
      <BrowserRouter>
        <OurNav />
        <Routes>
          <Route path="/" element={<Heroo />} />
          <Route path="/login" element={<LoginIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;