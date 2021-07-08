import React from 'react';

import "./styles.css";

//criar componentes apenas com objetos, statelesComponent, nao precisa usar class
/* mesma coisa que 

class Header extends Component {
     render(){
          return ...
     }
}
*/

const Header = () => <header id="main-header">JSHunt</header>

export default Header;