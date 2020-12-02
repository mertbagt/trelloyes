import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='Card'>
      <button
        onClick={() => props.onDeleteCard(props.id)}
        type="button">
        delete
      </button>  
      <h3 className='Card-title'>
        {props.card.title}
      </h3>
      <p className='Card-content'>
        {props.card.content}
      </p> 
    </div>
  )
}

Card.propTypes = {
  onClickDelete: () => {}
}

export default Card;