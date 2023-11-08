import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Component/Home/Home';
import Navbar from './Component/Home/Navbar/Navbar';

import Form from './Component/Form/Form'
import All from './Component/All/All';
import MediaInfo from './Component/Media/MediaInfo';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/all' element={<All></All>}></Route>
        <Route path='media' element={<MediaInfo></MediaInfo>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
