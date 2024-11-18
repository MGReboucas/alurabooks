import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components';


const AppConteiner = styled.div`
      width: 100vw;
      height: 100vh;
`

function Favorito() {
  return (
    <AppConteiner>
      <Pesquisa />
    </AppConteiner>
  );
}

export default Favorito;