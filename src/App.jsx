import React from "react";
import Sidebar from "./layouts/Sidebar";
import Content from "./layouts/Content";
import BottomBar from "./layouts/BottomBar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
        <BottomBar/>
    </>
  )
}

export default App
