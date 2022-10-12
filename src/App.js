import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

// parent component
function App() {
  return (
    // this will contain children component
    <>
      <Nav />
      <Main />
    </>
  );
}

export default App;
