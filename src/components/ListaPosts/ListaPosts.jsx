import { useState, useEffect } from "react"; //Hooks do React
import serverApi from "../../api/server-api";
import estilos from "./ListaPosts.module.css";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
const ListaPosts = () => {
  /* Iniciamos o state do componente com um array vazio, para posteriormente "preenchê-lo" com os dados da API. Esta atribuição será feita com auxílio do setPosts. */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      async function getPosts() {
        try {
          const resposta = await fetch(`${serverApi}/posts`);
          const dados = await resposta.json();
          setPosts(dados);
          setLoading(false);
        } catch (error) {
          console.log("Deu ruim! " + error.message);
        }
      }
      getPosts();
    },
    /* Esse segundo parâmetro [] faz a comunicação do getposts, atualiza o estado e para, para que não ocorra um loop infinito. */ []
  );

  if (loading) {
    return <LoadingDesenho />;
  }

  /* Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.
  
  Recebe dois parâmetros:

  1-: função callback com oque será executado
  2-: lista de dependências que indicarão ao useEffect quando ele deverá funcionar

  - Se não passar a lista (ou seja, se deixar sem []), useEffect executará toda vez que o componente for renderizado. portanto, o callback se torna um loop infinito.

  -Se passar a lista vazia (ou seja, deixar o [] vazio), useEffect executará somente no momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback.
  */

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          id={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;
