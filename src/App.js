
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Donate from './pages/Donate.js';
import ADonate from './pages/ADonate.js';
import Membership from "./pages/Membership.js";
import Contact from './pages/Contact.js';
import AContact from './pages/AContact.js';
import Auth from './pages/Auth.js';
import Requests from './pages/Requests.js';
import AdoptForm from './pages/AdoptForm.js';
import AfterLogin from './pages/AfterLogin.js';
import Help from './pages/Help.js';
import AHelp from './pages/AHelp.js';
import ShowRequests from './pages/ShowRequests.js';
import Accessories from './pages/Accessories.js';
import AAccessories from './pages/AAccesories.js';
import About from './pages/About.js';
import AAbout from './pages/AAbout.js';
import AddProduct from './pages/AddProduct.js';
import AdminHome from './pages/AdminHome.js';

function App() {
  return (
    
    <body>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/adonate" element={<ADonate/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/acontact" element={<AContact/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/request" element={<Requests/>}/>
        <Route path="/adopt" element={<AdoptForm/>}/>
        <Route path="/ahome" element={<AfterLogin/>}/>
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/ahelp" element={<AHelp/>}/>
        <Route path="/requests" element={<ShowRequests/>}/>
        <Route path="/accesories" element={<Accessories/>}/>
        <Route path="/aaccesories" element={<AAccessories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/aabout" element={<AAbout/>}/>
        <Route path="/add" element={<AddProduct/>}/>
      </Routes>
      </BrowserRouter>
    </body>
  );
}



export default App;
