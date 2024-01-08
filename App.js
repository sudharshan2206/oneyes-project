import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from './components/home/home';
import { Addimage } from './components/adddetails/adddetails';
import { Update } from './components/updatedetails/updatedetails';
import { Singleimage } from './components/imagedetails/imagedetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addimage' element={<Addimage />} />
          <Route path='/updateimage/:id' element={<Update />} />
          <Route path='/singleimage/:id' element={<Singleimage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
