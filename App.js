import React from "react"
import './App.css';
import Card from './component/Card';
import Footer from './component/Footer';
import Menubar from './component/Menubar';

function App() {
  return (
    <div>
      <Menubar/>
      <Card/>
      <Card/>
      <Card/>
      <Card/><Card/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
