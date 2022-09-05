import React from 'react';
import axios from 'axios';

//function Home() {
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }




    componentDidMount() {
    }

    render() {
       
        return (
            <React.Fragment>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <a class="nav-link" href="/">Search Companies </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="/companies">Companies List </a>
                    </li>
                    </ul>
                    </div>
                    
                </nav>
            </React.Fragment>

        )
    }

}