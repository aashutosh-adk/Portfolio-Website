
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Pricing from './Components/Pricing'
import Navbar from './Components/Navbar'
import Testimonials from './Components/Testimonials.jsx'
import Footer from './Components/Footer'

function App() {
  return (
    <>
     <div className="min-h-screen bg-slate-950 overflow-hidden">
      <Hero/>
      <Feature/>
      <Pricing/>
      <Navbar/>
      <Testimonials/>
      <Footer/>
      </div>   
     </>
  )
}
export default App
