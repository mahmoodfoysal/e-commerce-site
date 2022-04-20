import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navigation from './components/pages/Shared/Navigation/Navigation';
import DashBoard from './components/pages/AdminDashBoard/DashBoard/DashBoard';
import Products from './components/pages/Products/Products';
import DashBoardHome from './components/pages/AdminDashBoard/DashBoardHome/DashBoardHome';
import AddCategory from './components/pages/AdminDashBoard/AddCategory/AddCategory';
import Registration from './components/pages/Login/Registration/Registration';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="dashBoard" element={<DashBoard></DashBoard>}>
          <Route path="dashBoardHome" element={<DashBoardHome></DashBoardHome>}></Route>
          <Route path="addCategory" element={<AddCategory></AddCategory>}></Route>
        </Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
