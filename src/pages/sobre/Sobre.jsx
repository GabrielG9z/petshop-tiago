import estilos from "./Sobre.module.css";
const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>

      <div>
        <h3>Missão</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          vero quod similique animi quasi et voluptas. Magnam quia velit,
          perferendis saepe delectus blanditiis eum nemo libero veniam odit
          reiciendis? Consequuntur!
        </p>
      </div>
    </section>
  );
};

export default Sobre;
