import React from 'react'
import Card from './Card'

const Cards = ({cards, setCards}) => {

  return (
    <div className='cardsContainer'>
      <Card cards={cards} setCards={setCards}/>
    </div>
  )
}

export default Cards