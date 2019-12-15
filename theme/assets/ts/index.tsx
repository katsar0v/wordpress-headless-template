import React from 'react'
import ReactDOM from 'react-dom'
import {WP_API} from './api';


Promise.all([
    WP_API.get_posts(),
    WP_API.get_pages()
]).then((responses) => {
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
    );
    document.querySelector("body").classList.toggle("active");
})
