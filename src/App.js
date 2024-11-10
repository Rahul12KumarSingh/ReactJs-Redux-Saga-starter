import logo from './logo.svg';
import './App.css';

import Main from './component/Main';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';

function App()
 {
  
  return (
    <div className="App">
     <Header />
     <Main/>

      <Routes>
         <Route path='/login' element={<div>Welcome to the login page</div>} />
      </Routes>
    </div>
  );
 }

export default App;
