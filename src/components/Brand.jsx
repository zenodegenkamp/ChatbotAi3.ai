import React from 'react'
import google from '../assets/google.png';
import slack from '../assets/slack.png';
import atlassian from '../assets/atlassian.png';
import dropbox from '../assets/dropbox.png';
import shopify from '../assets/shopify.png';


export default function Brand() {

    return (
        <div className='brand__section section__padding'>
            <div>
                <img src={google} />
            </div>
            <div>
                <img src={slack} />
            </div>
            <div>
                <img src={atlassian} />
            </div>
            <div>
                <img src={dropbox} />
            </div>
            <div>
                <img src={shopify} />
            </div>
        </div>

    )
}