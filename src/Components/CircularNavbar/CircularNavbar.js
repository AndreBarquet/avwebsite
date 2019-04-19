import React, { Component } from 'react';
import '../CircularNavbar/CircularNavbar.css'

class CircularNavbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { 
            isSwitchOn: false
        }
      }

      // pode fazer o state dessa maneira, ou colocar no construtor, como definido acima
      /*
      state = {
          isSwitchOn: false
      }
      */

      handleClick() {
        console.log('Clicouuu');
        this.setState({
          // funciona como um toggle, usando o "!" ele pega o oposto do que está no state definido
          isSwitchOn: !this.state.isSwitchOn  
        })
        
      }
    render() {
        return (
            <div className={/* Verifica se isSwitchOn é igual a true*/ this.state.isSwitchOn ? "shazam" : "page"}>
                <span className="menu_toggle" onClick={this.handleClick}>
                    <i className="menu_open fa fa-bars fa-lg"></i>
                    <i className="menu_close fa fa-times fa-lg"></i>
                </span>
                <ul className="menu_items">
                    <li><a href="#"><i className="icon fa fa-home fa-2x"></i> Moar</a></li>
                    <li><a href="#"><i className="icon fa fa-phone fa-2x"></i> Coffee</a></li>
                    <li><a href="#"><i className="icon fa fa-heart fa-2x"></i> Please</a></li>
                </ul>
            </div>
        );
    }
}

export default CircularNavbar;
