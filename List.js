import React from 'react';
import Card from './Card'
import './List.css';

function List(props) {   
  return (
    <section className='List'>
      <header className="List-header"> 
        <h2 className='List-header'>
          {props.list.header}
        </h2>
      </header> 
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            card={card}
            onDeleteCard={props.onDeleteCard}
          />
        )}
        <button 
          onClick={() => props.onRandomCard(props.id)}
          type="button"
          className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  onClickAdd: () => {},
}

export default List;