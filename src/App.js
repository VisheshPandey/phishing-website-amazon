import './App.css';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import Win from './components/Win';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Quiz/>}/>
      <Route path='/win' element={<Win/>}/>
    </Routes>
    
    </>
  );
}

export default App;
