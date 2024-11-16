import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import livroRecomendado from '../../img/livro2.png'
import styled from "styled-components"


const UltimosLancamentosConteiner = styled.section`
     background-color: #EBECEE;
     padding-bottom: 20px;
     display: flex;
     flex-direction: column;
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
               <Titulo 
                    cor="#EB9B00" 
                    tamanhoFonte="36px" 
               >ÚLTIMOS LANÇAMENTOS</Titulo>

               <NovosLivrosConteiner>
                    {livros.map(livro => (
                         <img src={livro.src}></img>
                    ))}
               </NovosLivrosConteiner>
               <CardRecomenda
                    titulo="Talvez voce se interesse por"
                    subtitulo="Victor e a Doideira"
                    descricao="Embarcando em uma aventura na doideira"
                    img={livroRecomendado}
               />
          </UltimosLancamentosConteiner>
     )
}

export default UltimosLancamentos