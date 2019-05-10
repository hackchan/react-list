import React, { Component,Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/postcss/MenuHeader.css'

class MenuHeader extends Component {

    render(){
          return(
          <Fragment> 
              <div className="Menuheader_Container">      
                <div className="Menuheader">
                    <figure className="Menuheader_figure">
                      <img className="Menuheader_Logo" src="https://www.gravatar.com/avatar/2ff51774d8934463b512346777cce77b?s=100" alt="logo  "></img>
                    </figure>

                    <label className="MenuHeader_Icon_bars">
                        <FontAwesomeIcon
                        icon="bars"
                        color="#95ca3e"
                        size="lg"/>
                    </label>
                    
                    
                </div>
              </div>
        </Fragment>)
    }
    
}

export  default MenuHeader

