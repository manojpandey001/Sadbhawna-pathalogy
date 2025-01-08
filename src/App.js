import logo from './logo.svg';
import './App.css';
import Navbar from './CommonComponenets/Navbar/navbar';
import HomeScreen from './Pages/HomeScreen/homeScreen';
import Footer from './CommonComponenets/Footer/footer';
import {Routes,Route } from 'react-router-dom';
import Status from './Pages/HomeScreen/StatusPage/status';

function App() {
  return (
    <div className="App">  
    <Navbar/>
    
      <Routes>
       <Route path= '/' element={<HomeScreen/>}> </Route>
       <Route path= '/status' element={<Status/>}> </Route>

      </Routes>
      

      
      
      
      
    </div>
  );
}

export default App;
