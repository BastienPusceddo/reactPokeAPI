import React, {useState} from 'react';
import Home from "./pages/home/Home";
import Pokemons from "./pages/pokemons/Pokemons";
import Types from "./pages/types/Types";
import logo from './logo.svg';
import './App.css';

enum EPage{
  HOME =0,
  POKEMONS =1,
  TYPES=2,

}

function App() {
  const [page, setPage]= useState<EPage>();

  const renderPage =()=> {
    switch(page){
      default:
      case EPage.HOME:
        return <Home />
      case EPage.POKEMONS :
        return <Pokemons />
      case EPage.TYPES:
        return <Types />
    }
  }

  return (
    <>
      <div className={'navigation'}>
        <div onClick={()=> setPage(EPage.HOME)} className={page===EPage.HOME ? 'selected' : ''}>
            <span>HOME</span>
        </div>
        <div onClick={()=> setPage(EPage.POKEMONS)} className={page===EPage.POKEMONS ? 'selected' : ''}>
          <span>POKEMONS</span>
        </div>
        <div onClick={()=> setPage(EPage.TYPES)} className={page===EPage.TYPES ? 'selected' : ''}>
          <span>TYPES</span>
        </div>


      </div>
      {
        renderPage()
      }
    </>
  );
}

export default App;
