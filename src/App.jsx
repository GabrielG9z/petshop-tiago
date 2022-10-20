import Cabecalho from "./components/Cabecalho/Cabecalho";
import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Produtos from "./pages/produtos/Produtos";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/contato/Contato";

const App = () => {
  return (
    <>
      <Cabecalho />
      <main className="limitador">
        <Home />
        <Produtos />
        <Sobre />
        <Contato />
      </main>
    </>
  );
};

export default App;
