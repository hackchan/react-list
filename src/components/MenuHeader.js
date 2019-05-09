import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MenuHeader extends Component {

    render(){
          return(<div className="Menuheader">
          <figure>
              <img src="" alt="logo"></img>
          </figure>
          
           <label>
             <FontAwesomeIcon
                 icon="bars"
                 color="#444"
                 size="lg"
              />
               <p>lol</p>
           </label>
         
      </div>)
    }
    
}

export  default MenuHeader

