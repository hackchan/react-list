import React,{Fragment,Component} from 'react'
import '../styles/postcss/menu.css'
class Prueba extends Component {
   constructor(props) {
       super(props)
   }

   render(){
       return (<Fragment>
                 <header className="Header">
                     <figure>
                         <img src="https://www.gravatar.com/avatar/2ff51774d8934463b512346777cce77b?s=100" alt="logo  "></img>
                         <figcaption>
                             <p>Fabio Rojas</p>
                             <p className="Header_Tipo">Independiente</p>
                          </figcaption>
                     </figure>
                     <nav classname="Header_Menu">
                         <ul className="Header_Content">
                             <li className="HeaderItem">
                                 <a href="#">Opcion 1</a>
                            </li>
                            <li className="HeaderItem">
                                 <a href="#">Opcion 2</a>
                            </li>
                            <li className="HeaderItem">
                                 <a href="#">Opcion 3</a>
                            </li>
                             
                         </ul>
                     </nav>
                 </header>   
               </Fragment>
              
              )
   }
}

export default Prueba