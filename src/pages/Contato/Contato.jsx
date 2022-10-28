import { Button, TextField } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form method="post" className={estilos.formulario}></form>
        <div>
          <TextField
            label="Nome"
            variant="filled"
            fullWidth
            required
            helperText="Você deve digitar o seu nome"
          />
        </div>
        <div>
          <TextField
            label="Email"
            variant="filled"
            fullWidth
            required
            helperText="Informe seu e-mail para contato"
          />
        </div>
        <div>
          <TextField
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
          <Button type="submit" variant="contained">
            ENVIAR MENSAGEM
          </Button>
        </div>
      </Caixa>
    </section>
  );
};

export default Contato;
