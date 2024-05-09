import React from "react";
import logo from "../logo.png";
import { Outlet } from "react-router-dom";

export default function Menu() {
  return (
    <div className="d-flex">
      <div className="d-flex">
      <header className="sidebar">
        <img src={logo} className="App-logo" alt="logo" />
        Selecione uma opção abaixo:
        <div className="menuInicial">
          <a href="cep">Buscar Cep </a><br/>
          <a href="noticias"> Administrar Notícias</a>
        </div>
        </header>
        <div className="divider"></div>
        </div>
      <div id="tela">
        <Outlet />
      </div>
    </div>
  );
}
