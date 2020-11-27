import React, { Component } from 'react';
export default function MediaCard({ title, body, imageUrl }) {
    return (
        <div style={{ width: 'max-content',margin:' 5px auto',border:'2px solid red'}}>
            <h2>{title}</h2>
            <p >{body}</p>
            <img src={imageUrl} alt='' height='250px' width='150px' ></img>
        </div>
    )
}