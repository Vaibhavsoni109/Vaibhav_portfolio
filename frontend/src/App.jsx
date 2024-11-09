

import './App.scss'
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';



function App() {


  return (
    <>
    <div className="app">
      <Navbar/>
      <Header/>
      <Footer/>
      <About/>
      <Skills/>
      <Testimonials/>
      <Work/>
    </div>
    </>
  )
}

export default App
