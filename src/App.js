import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import Home from "./pages/home";


export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div className="container">
      <nav>
        <ul className="pages" style={{display: 'flex', justifyContent:'space-between',}}>
          <li className="text-page1">
            <Link className="text-page1" to="/">Home</Link>
          </li>
          <li>
            <img className="img-logo" src="https://a.allegroimg.com/original/032661/d88b1b0b4b6191acbb48e07ff8c0"/>
          </li>
          <li className="text-page2">
            <Link to="https://www.instagram.com/geeks_edu/">
              <img className="img-link" src="https://www.logolounge.com/wd/uploads/24529_426059.jpg"/>
            
            </Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
      <Outlet/>
    </div>
  )
}


