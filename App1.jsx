import React from "react";
import Read from "./components/Read";
import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Update from "./components/Update";

function App1() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Create/>} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App1;

//  <Routes>
// <Route path="/" element={<Navigationbar />}>
//   <Route index element={<Home />} />
//   <Route path="/shop/*" element={<Shop />} />
//   <Route path="/auth" element={<Authentication />} />
//   <Route path="/checkout" element={<Checkout />} />
// </Route>
//  </Routes>

//json-server --watch db.json --port 3333
