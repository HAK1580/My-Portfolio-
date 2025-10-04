import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useEffect } from 'react'

function App() {
  const [hamopen, setHamopen] = useState(false)

  useEffect(() => {


    function outsideClick(e) {
      if (!e.target.closest(".ham-img")) {
        setHamopen(false);
      }

    }
    document.addEventListener("click", outsideClick);

    return (() => {
      document.removeEventListener("click", outsideClick);

    })



  }, [])


  return (
    <>
      <Navbar hamopen={hamopen} setHamopen={setHamopen} />
      <Hero />
      
    </>
  )
}

export default App
