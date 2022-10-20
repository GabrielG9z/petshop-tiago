import React from "react";
import estilos from "./Produtos.module.css";
export const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça nossos Produtos</h2>

      <div className={estilos.produtos}>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            voluptate ex, blanditiis eligendi a debitis maiores architecto earum
            minima illum! Ea error provident non maiores deleniti? Repudiandae
            sed repellendus reiciendis?
          </p>
        </article>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            voluptate ex, blanditiis eligendi a debitis maiores architecto earum
            minima illum! Ea error provident non maiores deleniti? Repudiandae
            sed repellendus reiciendis?
          </p>
        </article>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            voluptate ex, blanditiis eligendi a debitis maiores architecto earum
            minima illum! Ea error provident non maiores deleniti? Repudiandae
            sed repellendus reiciendis?
          </p>
        </article>
      </div>
    </section>
  );
};

export default Produtos;
