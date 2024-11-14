import logo from '../../img/logo.svg';
import styled from 'styled-components';

const LogoConteiner = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`
 

function Logo(){
     return (
        <LogoConteiner>
          <img 
            src={logo} 
            alt='logo' 
            className='logo-img'>
          </img>

          <p><strong>Alura</strong>Books</p>
        </LogoConteiner>
     )
}

export default Logo;