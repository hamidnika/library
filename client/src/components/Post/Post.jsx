import React from 'react';

import './Post.css';

const Post = (props) => (
    <div className="post-container">
        <h3 className="heading">{props.post.title}</h3>
        <img className="image" src={props.post.img} alt="post" />
        <p>{props.post.body}</p>
        <div className="">
            <p>Article number: {props.i + 1}</p>
            <p>Written by: {props.post.author}</p>
        </div>
    </div>
);

export default Post;