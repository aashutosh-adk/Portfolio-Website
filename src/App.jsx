
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
     <div className="min-h-screen bg-slate-950 overflow-hidden">
      <Hero/>
      <Feature/>
      <Navbar/>
      <Footer/>
      </div>   
     </>
  )
}
export default App
