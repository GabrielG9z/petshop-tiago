import { Button, TextField } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
import { useState } from "react";
import serverApi from "../../api/servidor-api";
import { useHistory } from "react-router-dom";
const Contato = () => {
  /* Eventos/Funções para captura da digitação nos campos */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  /* Hook necessário para criar uma navegação/redirecionamento manualmente (ou seja, sem depender dos routes) */
  let history = useHistory();

  const enviarContato = async (event) => {
    event.preventDefault();
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=utf8",
      },
    };
    /* Script para envio dos dados para a API */

    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
      history.push("/"); //Redirecionar para a "home/blog"
    } catch (error) {
      console.log("Deu ruim: ".error.message);
    }
  };
  let desabilitado = !nome || !email || !mensagem;
  //let desabilitado = nome ==="" || email === "" ||mensagem === "";

  /* "Toggle" do botão caso qualquer uma das variáveis seja undefined, desabilitado se manterá true e com isso o botão ficará desabilitado. */
  /* Quando todas deixarem de ser undefined, desabilitado se tornará false e com isso o botão será habilitado */

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form
          method="post"
          className={estilos.formulario}
          onSubmit={enviarContato}
        ></form>
        <div>
          <TextField
            onChange={inputNome}
            label="Nome"
            variant="outlined"
            fullWidth
            required
            helperText={!nome ? "Você deve digitar o seu nome" : ""}
          />
        </div>
        <div>
          <TextField
            onChange={
              inputEmail
            } /* Só é preciso o nome da função no onChange sem o parenteses */
            label="Email"
            variant="outlined"
            fullWidth
            required
            helperText={!email ? "Informe seu e-mail para contato" : ""}
          />
        </div>
        <div>
          <TextField
            onChange={inputMensagem}
            type="text"
            label="Mensagem"
            variant="outlined"
            fullWidth
            required
            helperText={!mensagem ? "Digite uma sugestão" : ""}
            multiline
            rows={6}
          />
        </div>

        <div>
          <Button type="submit" variant="contained" disabled={desabilitado}>
            ENVIAR MENSAGEM
          </Button>
        </div>
      </Caixa>
    </section>
  );
};

export default Contato;
