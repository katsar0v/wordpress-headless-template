import React from 'react'
import ReactDOM from 'react-dom'
import {WP_API} from './api';
import {WP_Post, WP_Page} from './types'

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

WP_API.get_posts().then((posts: WP_Post[]) => {
    console.log("Posts: ", posts);
})
WP_API.get_pages().then((pages: WP_Page[]) => {
    console.log("Pages: ", pages);
})
