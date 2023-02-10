import Cards from './components/cards/Cards'
import Header from './components/Header'
import Rules from './components/Rules'
import Footer from './components/Footer'
import { useState } from 'react'
import './style.css'

function App() {
   const [cards, setCards] = useState([])

   return (
      <div className='appContainer'>
         <Header cards={cards} setCards={setCards} />
         <Cards cards={cards} setCards={setCards} />
         <Rules />
         <Footer />
      </div>
   )
}

export default App

// {Math.floor(Math.random() * 1000)}
