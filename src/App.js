import styled from "styled-components";
import { Carito } from "./components/compras/Carito";
import { Listado } from "./components/compras/Listado";
//import { BotonCambiarData } from "./components/BotonCambiarData";
import { Contador } from "./components/Contador";
import { ContadorRedux } from "./components/contador/ContadorRedux";
import { Formulario } from "./components/formulario/Formulario";
import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { DataProvider } from "./context/DataContext";
import { ContadorReducer } from "./redux/ContadorReducer";

function App() {

  return (
    <DataProvider>
        <Container>
          <Pagina1 />
          <Pagina2 />
         {/*  <BotonCambiarData /> */}
         <Contador />
         <Carito />
         <Listado />
         <ContadorReducer />
         {/* <ContadorRedux /> */}
         <Formulario />
        </Container>
    </DataProvider>
  );
}

const Container = styled.div`
  padding: 10px;
`;

export default App;
