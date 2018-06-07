import React from 'react';
import './Footer.css';
import Moment from 'moment';
import { getLastUpdate } from '../../services/userService';


const Footer = (props) => {
    const lastUpdate = getLastUpdate();
    const timeFromLastUpdate = Moment(lastUpdate).fromNow(); 
    return (

        <footer class="page-footer">
            <div class="footer-copyright">
                <div class="container">
                    © 2014 Copyright Text
                    <span class="grey-text text-lighten-4 right" >Last update:{timeFromLastUpdate}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;