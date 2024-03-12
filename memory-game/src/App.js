import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  {'src':'img/helmet-1.png', matched: false},
  {'src':'img/potion-1.png', matched: false},
  {'src':'img/ring-1.png', matched: false},
  {'src':'img/scroll-1.png', matched: false},
  {'src':'img/shield-1.png', matched: false},
  {'src':'img/sword-1.png', matched: false},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    // ...cardImages 는 배열의 내용을 값 복사 하는 것이다.
    // 이 것을 2개 적은 것은 배열의 내용을 2번 추가 하는 것이다.
    // 그러면 총 12개의 아이템이 배열에 들어 간다.
    .sort(()=> Math.random() - 0.5)
    // 배열의 요소를 섞는 방법
    // 양수(0보다 큰) 값이 나오면 현재의 값이 크다고 간주되어 순서를 변경한다.
    // sort는 인접한 2 요소를 비교하여 math.random의 값이 양수이면 앞,뒤의 값을 변경한다.
    .map((card)=>({ ...card,id:Math.random()}))
    // ...card를 전부 순회 하면서 id라는 새로운 값을 추가한다.
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  // console.log(cards,turns);
  // handle a choice
  const handleChoice = (card) => {
    if(!choiceTwo) {choiceOne ? setChoiceTwo(card) : setChoiceOne(card)}
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // compare 2 selected cards
  useEffect(()=>{
    
    if(choiceOne && choiceTwo){
      setDisabled(true);

      if(choiceOne.src === choiceTwo.src)
      {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            }
            else {
              return card
            }
          })
        })
        // console.log("match");
        resetTurn();
      }
      else
      {
        // console.log("not match");
        setTimeout(() =>  resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards);

  // reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    // setTimeout(()=>setDisabled(false),20);
    setDisabled(false);
  }

  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id} card={card} 
          handleChoice = {handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disable={disabled}>            
          </SingleCard>
          
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
