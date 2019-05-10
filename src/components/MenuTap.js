import React,{Fragment,Component} from 'react'
import '../styles/postcss/menu.css'
class MenuTap extends Component {
   
/*    constructor(props) {
       super(props)
   }*/

   render(){
       return (<Fragment>
                 <header className="MenuTap">
                     <figure className="MenuTapItem_figure">
                         <img src="https://www.gravatar.com/avatar/2ff51774d8934463b512346777cce77b?s=100" alt="logo  "></img>
                         <figcaption>
                             <p>Fabio Rojas</p>
                             <p className="MenuTap_Tipo">Independiente</p>
                          </figcaption>
                     </figure>
                     <nav classname="MenuTap_Menu">
                         <ul className="MenuTap_Content">
                             <li className="MenuTapItem">
                                 <a href="/">Cursos</a>
                            </li>
                            <li className="MenuTapItem">
                                 <a href="/">blog</a>
                            </li>
                            <li className="MenuTapItem">
                                 <a href="/">Foro</a>
                            </li>
                             
                         </ul>
                     </nav>
                 </header>   
               </Fragment>
              
              )
   }
}

export default MenuTap