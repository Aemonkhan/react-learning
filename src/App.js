import React from "react";
import './App.css';
// import Header from './Header';
// import MyLinks from './MyLinks';
// import Block from './components/Block';
import List from './component/List';
import Switch from './component/Switch';
import AddSub from './component/AddSub';
import Hi from "./component/Hi";
import { Bye } from "./component/Bye";
import MediaCard from "./component/MediaCard";
import Isopen from "./component/Isopen";
import image from "./images/hi.jpg";
import Api from "./component/Api";
import ThemeContextProvider from "./Context/ThemesContextA";
import BookList from "./component/BookList";


// import AddList from './components/AddList';

function App() {
  return (
    <>
  
      {/* //   <SideBar name='aemon' /> */}
      {/* <Header /> */}
      {/* <AddList /> */}
      {/* <MediaCard title='My MediaCard' body={(<p>My MediaCard working</p>)} imageUrl={(image)} />
      <Isopen />
      <List />
      <Switch />
      <AddSub />
      <Hi name=' aemon ' msg=' hello ' />
      <Bye name=' aemon ' msg=' nice to meet you' /> */}
<Api />
<ThemeContextProvider>
  <BookList />
</ThemeContextProvider>
      {/* <Block />
      <MyLinks /> */}
      {/* <div>
        <h1>My first App</h1>
        <p>my para</p>
      </div> */}
    </>)
}


export default App;
