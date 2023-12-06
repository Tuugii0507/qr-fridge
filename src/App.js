import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fridge01 from "./pages/fridge01";
import Fridge02 from "./pages/fridge02";
import Fridge03 from "./pages/fridge03";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Fridge01 />}></Route>
        <Route path="/2" exact element={<Fridge02 />}></Route>
        <Route path="/3" exact element={<Fridge03 />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
