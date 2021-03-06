import React from 'react';
import './custom.css';

function Cards(props) {
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{width:'100%'}} />
            <div className="container">
              <h4><b>{props.name}</b></h4> 
              <p>{props.title}</p> 
              <p>{props.children}</p>
            </div>
          </div>
    );
}

export default Cards;