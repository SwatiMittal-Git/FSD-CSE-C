import React from 'react'
import "./Fashion.css";

function Fashion({props}) {
  return (
    <div id="card">
      <img src={props.image} alt="" width={100} height={100}></img>
      <b><h4>{props.title}</h4></b>
      <h5>Price : {props.price}</h5>
      <h5>Category: {props.category}</h5>
      <p>{props.description}</p>
    </div>
  )
}

export default Fashion
