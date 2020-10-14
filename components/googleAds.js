import React from 'react';
import GoogleAds from 'react-google-ads';

function GAds() {
    // const client = 'ca-pub-5494364037093537';
    // const slot = '1209873222'
    return (
        <GoogleAds
            client={client}
            slot={slot}
            style={{display: 'inline-block', width: '100%'}}
            format="rectangle"
        />
    )
}

export default GAds;

