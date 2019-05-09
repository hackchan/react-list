import React,{Component,Fragment} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/postcss/principal.css'
import MenuHeader from '../components/MenuHeader'
console.log('Envelope:',faEnvelope)
console.log('key',faKey)
library.add(faEnvelope, faKey,faHeart,faBars);

class Principal extends Component { 
  
    
 
    render() {
        return(
            <Fragment>
                <h1>Pagina principal</h1> 
                <MenuHeader />
            </Fragment>
        )
    }
}

export default Principal