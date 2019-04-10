import React, { Component } from 'react';
import '../CircularNavbar/CircularNavbar.css'

class CircularNavbar extends Component {
    render() {
        return (
            <div className="navbarBackground">
                <label>
                    <input type="checkbox"></input>
                    <span class="menu">
                        <span class="hamburger"></span>
                    </span>
                    <ul>
                        
                            <a href="#">Home</a>
                        
                        
                            <a href="#">About</a>
                        
                        
                            <a href="#">Work</a>
                        
                    </ul>
                </label>
            </div>
        );
    }
}

export default CircularNavbar;
