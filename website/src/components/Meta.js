import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

function Meta ({pageTitle = '', url = 'https://sbuttons.github.io/sbuttons/'}) {

    ReactGA.initialize('UA-149400351-4');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <Helmet>
            <title>{pageTitle ? pageTitle + ' - ' : ''}sButtons</title>
            <meta name="description" content="Simple buttons you can use easily for your next project." />
            <meta name="keywords" content="css, less, buttons, simple, project, github, open source, contribute, first timers, animation, hover, basic, social, login" />
            <meta name="og:url" content={url} />
            <meta name="og:type" content="website" />
        </Helmet>
    )
}

export default Meta