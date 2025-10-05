import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import About from './components/About'

function App() {
  const [hamopen, setHamopen] = useState(false)
  if(hamopen===true){
    document.body.style.overflow="hidden"
    
  }
  else{

    document.body.style.overflow=""
  }

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
    <div >
      <Navbar hamopen={hamopen} setHamopen={setHamopen} />
      <Hero />
      <About />
       
      
    </div>
  )
}

export default App
