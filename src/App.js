import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Common/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Core/Home/Home';
import Login from './Components/Core/Login/Login';
import Signup from './Components/Core/Signup/Signup';
import ContactUs from './Components/Common/Contact/ContactUs';
import FlashCard from './Components/Core/FlashCard/FlashCard';
import FAQ from './Components/Common/Doubts/FAQ';

function App() {
  return (
    <div className='w-screen min-h-screen'>
      <div className='h-20'>
     <NavBar></NavBar>
      </div>
    <Routes>
      <Route path='/' element={<Home></Home>}>
      </Route>
      <Route path='/login' element={<Login></Login>}>
      </Route>
      <Route path='/signup' element={<Signup></Signup>}>
      </Route>
      <Route path='/contact' element={<ContactUs></ContactUs>}>
      </Route>
      <Route path='/flashCard' element={<FlashCard></FlashCard>}>
      </Route>
      <Route path='/doubts' element={<FAQ></FAQ>}>
      </Route>


      
    </Routes>
    </div>
  );
}

export default App;
