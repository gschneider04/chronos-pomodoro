//Importando nossos componentes e estilos
import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

//Criando o componente App, que é o componente principal da nossa aplicação
//Ele retorna o componente Heading que criamos, e agora passaremos o texto que queremos exibir como filho dentro do componente Heading
//O componente Heading foi criado como parametro para receber as props, permitindo que possamos usar em diversos lugares com textos diferentes
export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              id="meuInput"
              type="text"
              labelText="Task:"
              placeholderOptional="Digite algo..."
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 00 </p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
