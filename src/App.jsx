import { useState } from 'react'
import './App.css'
//data[] -> name, image(!!! can be null)
const eldenRingAPI = "https://eldenring.fanapis.com/api/bosses?limit=100";
//https://eldenring.fanapis.com/api/bosses?limit=20&page=3

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const card = {
    id: 0,
    name: "",
    img: ""
  }

  return (
    <>

    </>
  )
}

export default App
