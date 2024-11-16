

import './App.scss'
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import Pricing from './container/Pricing/Pricing';



function App() {


  return (
    <>
    <div className="app">
      <Navbar/>
      <Header/>
  
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Pricing/>
      <Footer/>
    </div>
    </>
  )
}

export default App
