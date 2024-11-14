import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';


const AppConteiner = styled.div`
      width: 100vw;
      height: 100vh;
`

function App() {
  return (
    <AppConteiner>
      <Header/>
      <Pesquisa />
      <UltimosLancamentos />
    </AppConteiner>
  );
}

export default App;