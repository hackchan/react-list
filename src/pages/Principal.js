import React,{Component,Fragment} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/postcss/principal.css'
import MenuHeader from '../components/MenuHeader'
import MenuTap from '../components/MenuTap'
import Content from '../components/Content';
import Footer from '../components/Footer'
console.log('Envelope:',faEnvelope)
console.log('key',faKey)
library.add(faEnvelope, faKey,faHeart,faBars);

class Principal extends Component { 
  
    
 
    render() {
        return(
            <Fragment>
                <MenuHeader />
                <MenuTap />
                <Content />
                <Footer />
            </Fragment>
        )
    }
}

export default Principal