import React from 'react'
import ReactDOM from 'react-dom'
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: window.location.origin + '/wp-json' });

// Load all pages and posts from the api, afterwards add .active class to the body
Promise.all([
    wp.posts().get(),
    wp.pages().get(),
    wp.users().get()
]).then((responses) => {
    console.log("Posts, pages and users: ", responses);
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
    );
    document.querySelector("body").classList.toggle("active");
}).catch((error) => {
    alert('There was problem loading posts, pages and users. Please see the console.');
    console.log("Promise.all() failed: ", error);
})
