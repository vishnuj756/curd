import React from 'react'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Delete from './Component/Delete';
import './App.css'
import Create from './Component/Create';
import Update from './Component/Update';
function App() {
  return(<div>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/delete/:id" element={<Delete/>}/>
<Route path='/create' element={<Create/>}/>
<Route path='/update/:id' element={<Update/>}/>
    </Routes>
  </div>)

}
export default App;
