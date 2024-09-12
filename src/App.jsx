import { useEffect, useState } from "react";
import "./App.css";
import CardHolder from "./cardHolder";
//data[] -> name, image(!!! can be null)
const eldenRingAPI = "https://eldenring.fanapis.com/api/bosses?limit=20";
//https://eldenring.fanapis.com/api/bosses?limit=20&page=3

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(card) {
    console.log(card);
    if (clickedCards.includes(card.id)) {
      resetGame();
      return;
    }
    setClickedCards([...clickedCards, card.id]);
    setCurrScore(currScore + 1);

    const cardsCopy = cards.slice().sort(() => 0.5 - Math.random());
    setCards(cardsCopy);
  }

  function resetGame() {
    console.log("END");
    setBestScore(currScore);
    setCurrScore(0);
    setClickedCards([]);

    const cardsCopy = cards.slice().sort(() => 0.5 - Math.random());
    setCards(cardsCopy);
  }

  useEffect(() => {
    getCardData(eldenRingAPI).then((data) => {
      const formattedData = getData(data);
      setCards(formattedData);
      //console.log("data", formattedData);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Memory game</h1>
        <p>Click each card once, if same card is clicked again game ends.</p>
      </div>

      <div>
        <p>Score: {currScore}</p>
        <p>Highscore: {bestScore}</p>
      </div>

      <CardHolder handleCardClick={handleCardClick} data={cards} />
    </>
  );
}

export default App;

function getData(data) {
  let formattedData = [];
  let count = 0;
  for (let entry of data) {
    if (count === 12) break;
    if (entry.image === null) continue;
    if (
      formattedData.find((obj) => {
        return compareWords(obj.name, entry.name) > 2;
      })
    )
      continue;

    formattedData.push({ id: entry.id, name: entry.name, img: entry.image });
    count++;
  }
  return formattedData;
}

async function getCardData(url) {
  const response = await fetch(url, { mode: "cors" });
  return response.json().then(function (response) {
    console.log(response.data);
    return response.data;
  });
}

const compareWords = (str1, str2) => {
  const words1 = str1.split(/\s+/); // Split str1 into an array of words
  const words2 = str2.split(/\s+/); // Split str2 into an array of words

  let matchingWords = 0;

  for (let word of words1) {
    if (words2.includes(word)) {
      matchingWords++;
    }
  }

  return matchingWords;
};
