import React from "react";
//Importação de componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListApi from "./hook/listApi";
import ListCeo from "./hook/listCeo";
import ListPrimeirosColocados from "./hook/listPrimeirosColocados";
function App() {
  return (
    <div>
      <Header />
      Anotações
      <br />
      <br />
      <h3>Sistema de Busca de Produtos:</h3>
      <ListApi />
      <br />
      <br />
      <h3>Sistema de Busca de Ceo's:</h3>
      <ListCeo />
      <br />
      <br />
      <h3>Sistema de Busca de Aprovados:</h3>
      <ListPrimeirosColocados />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default App;