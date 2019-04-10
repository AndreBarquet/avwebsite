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
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Work</a>
                        </li>
                    </ul>
                </label>
            </div>
        );
    }
}

export default CircularNavbar;
