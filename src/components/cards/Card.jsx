import React from 'react'

const Card = ({cards, setCards}) => {
	
	function removeCard(i) {
		const newCards = [...cards].filter(el => cards.indexOf(el) !== i)
		setCards(newCards)
	}

  return (
	<div className='cardContainer'>
		{cards.map((el, i) => ( 
			<div key={i} className='cardBlock'>
				<p className='cardNumber'>{el}</p>
				<button className='cardRemoveBtn' onClick={() => removeCard(i)}>&#10006;</button>
			</div>
		))}
	</div>
  )
}

export default Card