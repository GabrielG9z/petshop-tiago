import React from "react";
import estilos from "./ListaPosts.module.css";

const ListaPosts = () => {
  return (
    <div className={estilos.lista_posts}>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus enim
          molestiae deleniti, provident accusamus dolores nulla quisquam
          repudiandae, tempora omnis, assumenda totam eveniet quod reiciendis
          voluptatum ipsam at repellendus consequatur.
        </p>
      </article>

      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus enim
          molestiae deleniti, provident accusamus dolores nulla quisquam
          repudiandae, tempora omnis, assumenda totam eveniet quod reiciendis
          voluptatum ipsam at repellendus consequatur.
        </p>
      </article>

      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus enim
          molestiae deleniti, provident accusamus dolores nulla quisquam
          repudiandae, tempora omnis, assumenda totam eveniet quod reiciendis
          voluptatum ipsam at repellendus consequatur.
        </p>
      </article>

      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus enim
          molestiae deleniti, provident accusamus dolores nulla quisquam
          repudiandae, tempora omnis, assumenda totam eveniet quod reiciendis
          voluptatum ipsam at repellendus consequatur.
        </p>
      </article>
    </div>
  );
};

export default ListaPosts;
