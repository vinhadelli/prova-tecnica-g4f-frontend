import React from "react";
import logo from "../logo.png";
import { Outlet, Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="d-flex">
      <div className="d-flex">
      <header className="sidebar">
        <img src={logo} className="App-logo" alt="logo" />
        Selecione uma opção abaixo:
        <div className="menuInicial">
          <Link to={"cep"}>Buscar Cep </Link><br/>
          <Link to={"noticia"}> Administrar Notícias</Link>
        </div>
        </header>
        <div className="divider"></div>
        </div>
        <Outlet />
    </div>
  );
}
