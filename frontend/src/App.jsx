
import LoginIn from './components/userLoginpage'
import Signup from './components/signUpPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heroo from './components/Heroo';
import NCC from './components/NCC';
import Datepick from './components/Date';
import Sports from './components/Sportss';
import Noob from './components/Noob';
// import Svgimg from './svg.html';
function App() {
 

  return (
    <>
   <div className="bg-gradient-to-r from-[#141e30] to-[#243b55]"> 

   <BrowserRouter>

<Routes>
  <Route path="/" element={<Heroo />} />
  <Route path="/login" element={<LoginIn />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/Date" element={<Datepick />} />
  <Route path="/Sports" element={<Sports />} /> 
  <Route path="/NCC" element={<NCC />} />
  <Route path="/Noob" element={<Noob />} />
</Routes>
</BrowserRouter>
    </div>
    </>
  )
}

export default App;


