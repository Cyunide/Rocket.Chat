import React from 'react';
import {getURL } from '../../../app/utils';


function donationPage() {

    console.log("LOOKHERE: ", getURL(`/avatar/TesterAdmin`, { cdn: false, full: true }));



    return (
        <div>
        <center>
        <br/><br/><br/><br/>
        <blockquote>
        Thanks for your support, {Meteor.user().username}!<br/><br/>
        We are thankful your support and here are a few things we can provide you with as a token of our appreciation:
        <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
        </ul>
        
        <br/><br/>
        <h1>Paypal</h1>n
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="8PJGS87BWV5PW" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <br/><br/>
        <h1>CashApp</h1>
        <a href="https://cash.app/$Cyunide" target="_blank">$Cyunide</a>
        </blockquote>
        </center>
        </div>
    )
}

export default donationPage;