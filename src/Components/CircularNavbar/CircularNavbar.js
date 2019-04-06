import React, { Component } from 'react';
import '../CircularNavbar/CircularNavbar.css'

class CircularNavbar extends Component {
    render() {
        return (


            <div class="pos-f-t">
                <div class="collapse flex-container" id="navbarToggleExternalContent">
                    <div class="row bg-dark">
                        <div class="bg-dark p-4 col ">
                            <a class="nav-link" href="#" target="_blank">
                                <div class="borda"><span class="text-muted"><i class="fas fa-question"></i></span></div>
                                <h4 class="text-white">QUEM SOMOS</h4>
                            </a>
                        </div>

                        <div class="bg-dark p-4 col ">
                            <div class="row">
                                <a class="nav-link" href="#" target="_blank">
                                    <div class="borda"><span class="text-muted "><i class="fas fa-users"></i></span></div>
                                    <h4 class="text-white">INTEGRANTES</h4>
                                </a>
                            </div>
                        </div>
                        <div class="bg-dark p-4 col ">
                            <a class="nav-link" href="#" target="_blank">
                                <div class="borda"><span class="text-muted "><i class="fas fa-tasks"></i></span></div>
                                <h4 class="text-white">PROJETOS</h4>
                            </a>
                        </div>
                        <div class="bg-dark p-4 col ">
                            <a class="nav-link" href="#" target="_blank">
                                <div class="borda"><span class="text-muted"><i class="fas fa-mobile-alt"></i></span></div>
                                <h4 class="text-white">CONTATOS</h4>
                            </a>
                        </div>
                    </div>

                </div>
                <nav class="navbar navbar-dark bg-dark col-sm">
                    <h4 class="logo">VAWEBSITE</h4>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        );
    }
}

export default CircularNavbar;
