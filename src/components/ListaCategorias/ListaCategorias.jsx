import { useEffect, useState } from "react";
import serverApi from "../../api/server-api";
import { Link } from "react-router-dom";
import estilos from "./ListaCategorias.module.css";
/* Exercício ListaCategorias.jsx

1)Montar o componente (rafce)

2)Programar a comunicação com a API para ler os dados do endpoint "categorias"

3)Manipular os states do componente

4)Fazer o componente ListaCategorias retornar uma lista com os nomes das categorias (<ul> <li>)  */

const ListaCategorias = () => {
  /* Atribuição do useState para manipular os dados do componente
    1- parâmetro: variável que terá os dados
    2- parâmetro: função responsável por atualizar (setter)
    OBS.: oque colocamos no useState representa o valor inicial */
  const [categorias, setCategorias] = useState();
  useEffect(() => {
    async function getCategorias() {
      try {
        /* Aqui declaramos a api e o seu endpoint para que ele traga os resultados que queremos  */
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();
        /* Precisamos passar os dados capturados da API para o state do componente via Setter (Obrigatório) */
        setCategorias(dados);
        /* console log após o  set, boa prática para testes  */
      } catch (error) {
        console.log("Deu ruim" + error.message);
      }
    }
    getCategorias();
  }, []);
  return (
    <div className={estilos.Lista_categorias}>
      {" "}
      <ul>
        {categorias.map((id, nome) => {
          return (
            <li key={id}>
              <Link to=""> {nome} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
