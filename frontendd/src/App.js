
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SingUp from './components/Singup';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
  
   


<BrowserRouter>
      
      <Routes>
      <Route path='/' element={<SingUp/>}/>
      
        </Routes>
     
     </BrowserRouter>
     </div>

  );
}

export default App;
