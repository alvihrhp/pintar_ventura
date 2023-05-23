import React from "react";
/** React Router */
import { Routes, Route } from "react-router-dom";
/** Screens */
import { Home, Photos } from "screens";
const App: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/photos/:keyword" element={<Photos />}></Route>
      </Routes>
    </div>
  );
};

export default App;
