import { Button, TextField } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  /* Eventos/Funções para captura da digitação nos campos */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form method="post" className={estilos.formulario}></form>
        <div>
          <TextField
            onChange={inputNome}
            label="Nome"
            variant="filled"
            fullWidth
            required
            helperText="Você deve digitar o seu nome"
          />
        </div>
        <div>
          <TextField
            onChange={
              inputEmail
            } /* Só é preciso o nome da função no onChange sem o parenteses */
            label="Email"
            variant="filled"
            fullWidth
            required
            helperText="Informe seu e-mail para contato"
          />
        </div>
        <div>
          <TextField
            onChange={inputEmail}
            type="text"
            label="Mensagem"
            variant="outlined"
            fullWidth
            required
            helperText="Digite uma sugestão"
            multiline
            rows={6}
          />
        </div>

        <div>
          <Button type="submit" variant="contained" onChange={inputMensagem}>
            ENVIAR MENSAGEM
          </Button>
        </div>
      </Caixa>
    </section>
  );
};

export default Contato;
