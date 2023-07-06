
import LoginIn from './components/userLoginpage'
import Signup from './components/signUpPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heroo from './components/Heroo';
import NCC from './components/NCC';
import Datepick from './components/Date';
import Sports from './components/Sportss';
import Addevent from './components/Addevent';
import ShowEvent from './components/ShowEvent'

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
  <Route path="/Addevent" element={<Addevent />} />  
  <Route path="/ShowEvent" element={<ShowEvent />} />  
</Routes>
</BrowserRouter>
    </div>
    </>
  )
}

export default App;


