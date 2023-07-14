import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Add from './Add';
import Home from './Home';
function App() {
  return (
    <div>
      <NavBar></NavBar>
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path='/Add' element={<Add/>}></Route>
    </Routes>
    </div>

   
  );
}

export default App;
