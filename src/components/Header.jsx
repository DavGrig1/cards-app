import React from 'react'

const Header = ({cards ,setCards}) => {

  
  function generateNewCard() {
    let newNumber = Math.floor(Math.random() * 1000)
    if (!cards.includes(newNumber)) {
      setCards(prevVal => [...prevVal, newNumber])
    } else generateNewCard()
  }

  function sortCards() {
    const sortedNumbers = [...cards].sort((a,b) => a-b)
    setCards(sortedNumbers)
  }

  return (
  <div className='headerContainer'>
    <button className='headerBtn' onClick={() => generateNewCard()}>Add Card</button>
    <button className='headerBtn' onClick={() => sortCards()}>Sort Cards</button>
  </div>
  )
}

export default Header