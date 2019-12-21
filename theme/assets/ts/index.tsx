import React from 'react'
import ReactDOM from 'react-dom'
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: window.location.origin + '/wp-json' });

Promise.all([
    wp.posts().get(),
    wp.pages().get()
]).then((responses) => {
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
    );
    document.querySelector("body").classList.toggle("active");
})
