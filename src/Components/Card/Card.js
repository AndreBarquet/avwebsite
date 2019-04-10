import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
    render() {

        return (
            <div>
                <div class="card-container" >
                    <span class="pro">DEV</span>
                    <img class="round" src={this.props.dev.imglink} alt="user" />
                    <h3>{this.props.dev.name}</h3>
                    <h6>{this.props.dev.city}</h6>
                    <p><br /> {this.props.dev.areadev}</p>
                    <div class="buttons">
                        <button class="primary">
                            Message
                        </button>
                        <button class="primary ghost">
                            Following
		                </button>
                    </div>
                    <div class="skills">
                        <h6>Skills</h6>
                        <ul>
                            {
                                this.props.dev.skills.map((name, index) => {
                                    return <li key={index} >{name}</li>
                                })
                            }
                        </ul>
                    </div>
                </div >

            </div >
        );
    }
}

export default Card;