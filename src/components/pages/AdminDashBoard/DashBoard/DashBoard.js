import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";
import AddCategory from '../AddCategory/AddCategory';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
const DashBoard = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/dashBoard/dashBoardHome">Dashboard Home</Link>
        </li>
        <li>
          <Link to="/dashBoard/addCategory">Add Category</Link>
        </li>

      </ul>
                </div>
                <div className="col-md-9">
                       
    {/* <Routes>
      <Route path="/" element={<DashBoardHome></DashBoardHome>}>
        <Route path={`/dashBoard/dashBoardHome`} element={<DashBoardHome></DashBoardHome>} />
        <Route path={`/dashBoard/addCategory`} element={<AddCategory></AddCategory>} />
      </Route>
    </Routes> */}
    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;