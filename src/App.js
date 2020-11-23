import React from "react";
import './App.css';
import Header from './Header';
import MyLinks from './MyLinks';
import Block from './components/Block';

function App() {
  return (
    <>
    {/* //   <SideBar name='aemon' /> */}
    <Header />
    <Block />
      
      <MyLinks />
      {/* <div>
        <h1>My first App</h1>
        <p>my para</p>
      </div> */}
    </>)
}

export default App;
