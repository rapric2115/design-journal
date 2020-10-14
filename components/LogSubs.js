import React, { Component } from 'react';
import Style from '../styles/LogSubs.module.css';


class LogSubs extends Component{
    render(){
        return(
            <ul className={Style.list}>
            <li className="nav-item">
                <a className={Style.btn} href="#" active='true'>LOGIN</a>
            </li>
            <li className="nav-item">
                <a className={Style.btn} href="#">Subscribe</a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
            </ul>
        )
    }
}

export default LogSubs;