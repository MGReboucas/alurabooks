import { livros } from './dadosUltimosLancamentos'
import styled from "styled-components"


const UltimosLancamentosConteiner = styled.section`
     background-color: #EBECEE;
     padding-bottom: 20px;
     display: flex;
     flex-direction: column;
`

const TituloLancamentos = styled.h2`
     width: 100%;
     padding: 30px 0;
     background-color: #FFF;
     color: #EB9B00;
     font-size: 36px;
     text-align: center;
     margin: 0;
`

const NovosLivrosConteiner = styled.div`
     margin-top: 30px;
     display: flex;
     width: 100%;
     justify-content: center;
     cursor: pointer;
`




function UltimosLancamentos(){
     return (
          <UltimosLancamentosConteiner>
               <TituloLancamentos>Ulimos Lançamentos</TituloLancamentos>
               <NovosLivrosConteiner>
                    {livros.map(livro => (
                         <img src={livro.src}></img>
                    ))}
               </NovosLivrosConteiner>
          </UltimosLancamentosConteiner>
     )
}

export default UltimosLancamentos