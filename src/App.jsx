import { useState, useTransition } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [myList, setMyList] = useState([])

  const [isPending, startTransition] = useTransition()
  const handleChange = (e) => {
    setInput(e.target.value)
    startTransition(() => {
      const myArray = []
      for (let i = 0; i < 100000; i++) {
        myArray.push(e.target.value)
      }
      setMyList(myArray)
    })
  }
  return (
    <>
      <input type='text' value={input} onChange={handleChange} className='form-control' placeholder='Type anything...' />
      <br />
      {isPending ? <div className='form-label bg-info w-25 m-auto fs-1 rounded-3 text-light'>Loading...</div> : myList.map((item, index) => {
        return <div key={index}>{item}</div>
      })}



    </>
  )
}

export default App
