import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form action="" method="post"></form>
        <div>
          <label htmlFor="">Nome: </label>
          <input type="text" id="nome" name="nome " required />
        </div>
      </Caixa>
    </section>
  );
};

export default Contato;
