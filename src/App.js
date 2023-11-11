import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Component/Home/Home';
import Navbar from './Component/Home/Navbar/Navbar';

import Form from './Component/Form/Form'
import All from './Component/All/All';
import MediaInfo from './Component/Media/MediaInfo';
import Footer from './Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="max-w-8xl mx-auto px-15 bg-[#0B0C10]">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/all' element={<All></All>}></Route>
        <Route path='media' element={<MediaInfo></MediaInfo>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
